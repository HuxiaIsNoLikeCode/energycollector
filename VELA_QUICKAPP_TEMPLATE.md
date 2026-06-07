# Xiaomi Band Vela JS Quick App 开发模板

> 基于小米手环 10 Pro 实战验证的开发架构，适用于 Vela OS 可穿戴设备。

---

## 一、项目结构

```
miniGame/
├── package.json
├── jsconfig.json
├── sign/                          # 签名证书
├── src/
│   ├── manifest.json              # 应用配置
│   ├── app.ux                     # 全局应用（数据管理 + 存储）
│   ├── common/
│   │   └── images/
│   │       └── icon.png           # 应用图标（192x192 PNG RGB格式）
│   └── pages/
│       ├── index/index.ux         # 首页
│       ├── game/game.ux           # 游戏页
│       ├── upgrade/upgrade.ux     # 升级页
│       └── settings/settings.ux   # 设置页
```

---

## 二、manifest.json 配置

```json
{
  "package": "com.example.myapp",
  "name": "应用名称",
  "versionName": "1.0.0",
  "versionCode": 1,
  "minPlatformVersion": 1000,
  "icon": "/common/images/icon.png",
  "deviceTypeList": ["watch"],
  "features": [
    { "name": "system.sensor" },
    { "name": "system.vibrator" },
    { "name": "system.router" },
    { "name": "system.brightness" },
    { "name": "system.storage" }
  ],
  "permissions": [
    { "origin": "*" }
  ],
  "config": {
    "logLevel": "debug",
    "designWidth": 192
  },
  "router": {
    "entry": "pages/index",
    "pages": {
      "pages/index": { "component": "index" },
      "pages/game": { "component": "game" }
    }
  },
  "display": {
    "titleBar": false,
    "menu": false,
    "fullScreen": true
  }
}
```

**要点：**
- `designWidth: 192` — 手环屏幕宽度基准
- `deviceTypeList: ["watch"]` — 声明为手表设备
- `titleBar: false, fullScreen: true` — 全屏无标题栏

---

## 三、数据持久化（核心模式）

### 验证结论
- `@system.storage` 可用，`storage.set({ key, value })` 和 `storage.get({ key, success, fail })` 均正常工作
- `@system.file` 的 `file.writeText` 在部分设备上不可靠
- **不要依赖 `onDestroy` 保存数据** — 应用销毁时 storage 功能可能已被系统回收

### app.ux — 全局数据管理

```html
<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
import storage from '@system.storage'

export default {
  data: {
    gameState: {
      score: 0,
      energy: 0,
      highScore: 0,
      upgrades: { speed: 0, range: 0 }
    },
    settings: {
      vibrateOn: true,
      difficulty: 'normal'
    },
    dataReady: false,
    _listeners: []
  },

  onCreate() {
    this._listeners = []
    this.loadFromStorage()
  },

  onDestroy() {
    // 不在这里保存数据！应用销毁时 storage 可能已被回收
  },

  // === 数据就绪回调机制 ===
  // 解决 storage.get 异步导致页面读取到默认值的问题
  onDataReady(fn) {
    if (this.dataReady) {
      fn()
    } else {
      this._listeners.push(fn)
    }
  },

  _notifyReady() {
    this.dataReady = true
    for (var i = 0; i < this._listeners.length; i++) {
      try {
        this._listeners[i]()
      } catch (e) {}
    }
    this._listeners = []
  },

  // === 存储加载 ===
  loadFromStorage() {
    var self = this
    var loaded = { state: false, settings: false }

    function checkDone() {
      if (loaded.state && loaded.settings) {
        self._notifyReady()
      }
    }

    storage.get({
      key: 'gameData',
      success: function(data) {
        try {
          var saved = JSON.parse(data)
          self.gameState.highScore = saved.highScore || 0
          self.gameState.energy = saved.energy || 0
          if (saved.upgrades) {
            self.gameState.upgrades.speed = saved.upgrades.speed || 0
            self.gameState.upgrades.range = saved.upgrades.range || 0
          }
        } catch (e) {}
        loaded.state = true
        checkDone()
      },
      fail: function() {
        loaded.state = true
        checkDone()
      }
    })

    storage.get({
      key: 'appSettings',
      success: function(data) {
        try {
          var saved = JSON.parse(data)
          self.settings.vibrateOn = saved.vibrateOn !== undefined ? saved.vibrateOn : true
          self.settings.difficulty = saved.difficulty || 'normal'
        } catch (e) {}
        loaded.settings = true
        checkDone()
      },
      fail: function() {
        loaded.settings = true
        checkDone()
      }
    })
  },

  // === 存储保存 ===
  saveGameState() {
    var data = JSON.stringify({
      highScore: this.gameState.highScore,
      energy: this.gameState.energy,
      upgrades: this.gameState.upgrades
    })
    storage.set({ key: 'gameData', value: data })
  },

  saveSettings() {
    var data = JSON.stringify(this.settings)
    storage.set({ key: 'appSettings', value: data })
  }
}
</script>
```

### 页面读写模式（关键！）

**写入** — 在业务逻辑中直接调用 `storage.set`，不依赖 `$app`：

```javascript
// game.ux - hitObstacle 中直接保存
hitObstacle() {
  this.gameOver = true
  var finalScore = this.score
  var finalEnergy = this.earnedEnergy

  // 更新内存
  var app = this.$app
  if (app && app.gameState) {
    app.gameState.energy = (app.gameState.energy || 0) + finalEnergy
    if (finalScore > (app.gameState.highScore || 0)) {
      app.gameState.highScore = finalScore
    }
  }

  // 直接写 storage（不依赖 $app）
  var data = JSON.stringify({
    highScore: finalScore,
    energy: finalEnergy,
    upgrades: (app && app.gameState) ? app.gameState.upgrades : {}
  })
  storage.set({ key: 'gameData', value: data })
}
```

**读取** — `onShow` 时同时从内存和 storage 读取，取较大值：

```javascript
// index.ux
onInit() {
  var self = this
  var app = this.$app
  if (app && app.onDataReady) {
    app.onDataReady(function() {
      self.loadData()
    })
  }
},

onShow() {
  this.loadData()        // 从内存读（即时）
  this.loadFromStorage() // 从 storage 读（异步，覆盖更新）
},

loadData() {
  var app = this.$app
  if (app && app.gameState) {
    this.highScore = app.gameState.highScore || 0
    this.energy = app.gameState.energy || 0
  }
},

loadFromStorage() {
  var self = this
  storage.get({
    key: 'gameData',
    success: function(data) {
      try {
        var saved = JSON.parse(data)
        if (saved.highScore > self.highScore) {
          self.highScore = saved.highScore
        }
        if (saved.energy > self.energy) {
          self.energy = saved.energy
        }
        // 同步回内存
        var app = self.$app
        if (app && app.gameState) {
          if (saved.energy > app.gameState.energy) {
            app.gameState.energy = saved.energy
          }
        }
      } catch (e) {}
    },
    fail: function() {}
  })
}
```

### 存储 Key 规范

| Key | 内容 | 写入时机 |
|-----|------|----------|
| `gameData` | `{ highScore, energy, upgrades }` | 游戏结束、升级购买 |
| `appSettings` | `{ vibrateOn, difficulty, particlesOn }` | 设置变更 |

---

## 四、传感器（陀螺仪/加速度计）

```javascript
import sensor from '@system.sensor'

// 订阅 — 必须用普通函数，不能用箭头函数！
startSensors() {
  var self = this
  sensor.subscribeAccelerometer({
    callback: function(data) {
      // data.x: 左右倾斜（正=右倾）
      // data.y: 前后倾斜（正=向前倾）
      self.tiltX = self.clamp(data.x * 3, -3, 3)
      self.tiltY = self.clamp(data.y * 3, -3, 3)
    }
  })
},

// 取消订阅
stopSensors() {
  sensor.unsubscribeAccelerometer()
},

clamp(value, min, max) {
  if (value < min) return min
  if (value > max) return max
  return value
}
```

**要点：**
- 回调必须用 `function(data) {}` 普通函数
- 倾斜值建议限制在 [-3, 3] 范围内
- `data.x` 正值 = 右倾，`data.y` 正值 = 前倾

---

## 五、振动反馈

```javascript
import vibrator from '@system.vibrator'

// 短振动（收集能量）
vibrator.vibrate({ mode: 'short' })

// 长振动（游戏结束）
vibrator.vibrate({ mode: 'long' })
```

**注意：** 日志中可能出现 `receive predefined ret = -138`，这是正常的系统级振动回调，不影响功能。

---

## 六、屏幕常亮

```javascript
import brightness from '@system.brightness'

// 游戏开始时保持屏幕常亮
brightness.setKeepScreenOn({ keepScreenOn: true })

// 游戏结束时恢复正常
brightness.setKeepScreenOn({ keepScreenOn: false })
```

**注意：** `system.brightness` 在新版 feature manager 中可能找不到，但会回退到旧版 manager 工作。在 `onReady` 中开启，`onDestroy` 中关闭。

---

## 七、游戏循环（时间基准）

```javascript
data: {
  loop: null,
  lastTime: 0
},

startLoop() {
  var self = this
  this.lastTime = Date.now()
  this.loop = setInterval(function() {
    if (!self.gameOver) {
      self.update()
    }
  }, 80) // 80ms 间隔，平衡流畅度和 CPU 负载
},

stopGame() {
  if (this.loop) {
    clearInterval(this.loop)
    this.loop = null
  }
},

update() {
  var now = Date.now()
  var dt = (now - this.lastTime) / 1000 // 转为秒
  this.lastTime = now
  if (dt > 0.2) dt = 0.2 // 防止跳帧

  var speedMul = dt * 60 // 标准化到 60fps

  // 所有移动都乘以 speedMul，确保不同帧率下行为一致
  // particle.x += speed * speedMul
  // particle.y += speed * speedMul
}
```

**要点：**
- 用 `Date.now()` 做时间基准，不依赖 tick 计数
- 间隔 80ms（比 50ms 更省 CPU）
- `dt` 限制最大 0.2s 防止跳帧
- 所有移动乘以 `speedMul` 实现帧率无关

---

## 八、页面路由

```javascript
import router from '@system.router'

// 跳转
router.push({ uri: '/pages/game' })

// 返回
router.back()
```

**生命周期顺序：**
```
app.onCreate → index.onInit → index.onReady → index.onShow
  → (点击开始) → game.onInit → game.onReady → game.onShow
  → (返回) → index.onShow（注意：onInit 不会再次调用）
```

---

## 九、ES5 兼容性规范

Vela QuickJS 引擎（32-bit, 2021-03-27）对 ES6 支持有限：

| 语法 | 是否可用 | 替代方案 |
|------|----------|----------|
| `var` | ✅ | — |
| `const` / `let` | ❌ | 用 `var` |
| 箭头函数 `() => {}` | ❌ | 用 `function() {}` |
| 模板字符串 `` `${x}` `` | ❌ | 用 `'text:' + x` |
| `const obj = {...}` | ❌ | 用 `var obj = {...}` |
| `...` 展开运算符 | ❌ | 手动复制 |
| `JSON.stringify/parse` | ✅ | — |
| `Math.*` | ✅ | — |
| `Date.now()` | ✅ | — |
| `setTimeout/setInterval` | ✅ | — |

---

## 十、图标要求

- 格式：**PNG**（必须是真正的 PNG，不是重命名的 JPEG）
- 尺寸：**192x192** 像素
- 色彩：**RGB 24-bit**（不支持 RGBA alpha 通道）
- 验证：文件头必须是 `89 50 4E 47`

```python
# Python 转换脚本
from PIL import Image
img = Image.open('icon.png')
bg = Image.new('RGB', img.size, (0, 0, 0))
if img.mode == 'RGBA':
    bg.paste(img, mask=img.split()[3])
else:
    bg.paste(img)
bg.save('icon.png', 'PNG')
```

---

## 十一、构建与调试

### 清理构建
```bash
# 删除缓存
rm -rf build/ dist/ ../.temp_miniGame/

# 重新构建
npm run build
```

### 日志查看
在 AIoT-IDE 中连接设备后查看控制台日志。关键日志前缀：
- `[quickapp]` — 应用层 console.log
- `[FEATURE]` — 系统功能调用
- `[AIOTJS]` — JS 引擎事件

### 常见问题排查

| 现象 | 原因 | 解决 |
|------|------|------|
| 黑屏 | JS 语法错误 | 检查是否有 ES6 语法 |
| 数据不保存 | storage.set 未执行 | 确保直接调用，不依赖 onDestroy |
| 数据读取为 0 | 异步时序问题 | 用 onDataReady 回调 + onShow 双重读取 |
| 图标不显示 | 图片格式错误 | 转换为真正 PNG RGB 格式 |
| 陀螺仪只单向 | 箭头函数回调 | 改用普通 function |
| 游戏卡顿 | 循环间隔太短 | 用 80ms + 时间基准 |

---

## 十二、manifest.json features 可用性

| Feature | 状态 | 备注 |
|---------|------|------|
| `system.router` | ✅ 完全可用 | — |
| `system.sensor` | ✅ 完全可用 | 回调必须用普通函数 |
| `system.vibrator` | ✅ 可用 | 日志有 -138 但功能正常 |
| `system.brightness` | ⚠️ 部分可用 | 新 manager 找不到，旧 manager 回退 |
| `system.storage` | ✅ 完全可用 | 必须直接调用，不依赖 onDestroy |
| `system.file` | ❌ 不可靠 | file.writeText 部分设备无响应 |
