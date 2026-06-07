# 小米手环10 Pro 迷你游戏 - 能量收集者

赛博朋克风格的能量收集游戏，支持手环传感器控制。

## 开发环境配置

### 1. 下载并安装 AIoT-IDE

**Windows版本下载链接：**
```
https://vela-ide.cnbj3-fusion.mi-fds.com/vela-ide/ide/v1.7.0/AIoT_IDE_windows.exe
```

直接下载安装，一路点击"下一步"即可。

### 2. 安装必要依赖

#### Node.js
- 下载地址：https://nodejs.cn/download/
- 安装后重启电脑

#### JDK
- 下载地址：https://www.oracle.com/cn/java/technologies/downloads/#jdk24-windows
- 安装后重启电脑

#### Platform Tools (ADB调试工具)
- 下载地址：https://developer.android.google.cn/tools/releases/platform-tools
- 解压后将 `platform-tools` 文件夹移动到 `C:\Program Files\`
- 添加环境变量：
  - 变量名：`ANDROID_HOME`
  - 变量值：`C:\Program Files\platform-tools`
- 在Path变量中添加：`%ANDROID_HOME%`

#### OpenSSL
- 下载地址：https://slproweb.com/products/Win32OpenSSL.html
- 安装后在Path变量中添加：`C:\Program Files\OpenSSL-Win64\bin`

### 3. 配置 PowerShell 执行策略

以管理员身份运行 PowerShell，执行：
```powershell
set-ExecutionPolicy RemoteSigned
```
选择 "A（全是）" 即可。

## 开发流程

### 方式一：使用 AIoT-IDE（推荐）

1. **启动 AIoT-IDE**

2. **打开项目**
   - 点击 "文件" → "打开文件夹"
   - 选择 `miniGame` 文件夹

3. **安装项目依赖**
   - 在IDE右侧的开发向导中，点击"安装项目依赖"
   - 等待 npm install 完成

4. **初始化模拟器环境**
   - 点击"初始化模拟器环境"
   - 点击"创建所有设备模拟器"
   - 等待模拟器资源下载完成（约5分钟）

5. **运行项目**
   - 点击顶部工具栏的"选择设备"，选择一个模拟器
   - 点击"调试"按钮运行项目

6. **打包发布**
   - 点击"打包"按钮生成 rpk 文件
   - 使用 AstroBox 工具安装到手环

### 方式二：使用命令行

1. **安装全局工具**
   ```bash
   npm install -g aiot-toolkit
   ```

2. **安装项目依赖**
   ```bash
   cd miniGame
   npm install
   ```

3. **启动开发服务器**
   ```bash
   npm start
   ```

4. **构建项目**
   ```bash
   npm run build
   ```

5. **发布版本**
   ```bash
   npm run release
   ```

## 项目结构

```
miniGame/
├── package.json              # 项目配置
├── src/
│   ├── app.ux               # 应用入口
│   ├── manifest.json        # 应用配置
│   ├── common/
│   │   └── scripts/
│   │       └── utils.js     # 工具函数
│   └── pages/
│       ├── index/           # 主菜单
│       │   └── index.ux
│       ├── game/            # 游戏界面
│       │   └── game.ux
│       └── upgrade/         # 升级界面
│           └── upgrade.ux
└── README.md
```

## 游戏功能

### 核心玩法
- 倾斜手环控制角色移动
- 收集能量粒子获得分数和能量
- 躲避红色障碍物
- 每30秒难度递增

### 传感器控制
- **加速度计**：控制角色移动方向
- **触摸屏**：点击释放技能（扩大收集范围）
- **振动反馈**：收集能量短振动，碰撞长振动

### 升级系统
- 移动速度：100能量/级
- 收集范围：150能量/级
- 吸收效率：200能量/级
- 技能冷却：250能量/级

## 安装到手环

### 方法一：使用 AstroBox
1. 下载 AstroBox：https://github.com/nicofork/AstroBox
2. 连接手环到电脑
3. 在 AstroBox 中安装生成的 rpk 文件

### 方法二：使用 ADB
1. 启用手环的开发者模式
2. 通过 ADB 连接手环
3. 使用 `adb install` 命令安装 rpk

## 常见问题

### npm install 失败
- 确保已安装 Node.js
- 以管理员身份运行 PowerShell
- 执行 `set-ExecutionPolicy RemoteSigned`

### 模拟器无法启动
- 确保已安装 JDK
- 确保已安装 Platform Tools 并配置环境变量
- 重启 AIoT-IDE 后重试

### 打包失败
- 确保已安装 OpenSSL
- 确保已配置 OpenSSL 环境变量
- 重启电脑后重试

## 技术支持

- 小米 Vela 开发文档：https://iot.mi.com/vela/quickapp/
- Vela 快应用接口文档：https://iot.mi.com/vela/quickapp/zh/features/
