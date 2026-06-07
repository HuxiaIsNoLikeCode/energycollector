export default function(global, globalThis, window, $app_exports$, $app_evaluate$) {
    var org_app_require = $app_require$;
    (function(global, globalThis, window, $app_exports$, $app_evaluate$) {
        var setTimeout = global.setTimeout;
        var setInterval = global.setInterval;
        var clearTimeout = global.clearTimeout;
        var clearInterval = global.clearInterval;
        var $app_require$1 = global.$app_require$ || org_app_require;
        var createAppHandler = function() {
            return (()=>{
                var __webpack_modules__ = {
                    "./src/manifest.json" (module) {
                        "use strict";
                        module.exports = JSON.parse('{"package":"com.xiaomi.band.energycollector","name":"能量收集者","versionName":"1.1.2","versionCode":8,"minPlatformVersion":1000,"icon":"/common/images/icon.png","deviceTypeList":["watch"],"features":[{"name":"system.sensor"},{"name":"system.vibrator"},{"name":"system.router"},{"name":"system.brightness"},{"name":"system.storage"}],"permissions":[],"config":{"logLevel":"debug","designWidth":192},"router":{"entry":"pages/index","pages":{"pages/index":{"component":"index","name":"index"},"pages/game":{"component":"game","name":"game"},"pages/upgrade":{"component":"upgrade","name":"upgrade"},"pages/settings":{"component":"settings","name":"settings"}}},"display":{"titleBar":false,"menu":false,"fullScreen":true}}');
                    }
                };
                var __webpack_module_cache__ = {};
                function __webpack_require__(moduleId) {
                    var cachedModule = __webpack_module_cache__[moduleId];
                    if (void 0 !== cachedModule) return cachedModule.exports;
                    var module = __webpack_module_cache__[moduleId] = {
                        exports: {}
                    };
                    __webpack_modules__[moduleId](module, module.exports, __webpack_require__);
                    return module.exports;
                }
                (()=>{
                    __webpack_require__.g = (()=>{
                        if ('object' == typeof globalThis) return globalThis;
                        try {
                            return this || new Function('return this')();
                        } catch (e) {
                            if ('object' == typeof window) return window;
                        }
                    })();
                })();
                (()=>{
                    __webpack_require__.rv = ()=>"1.7.11";
                })();
                (()=>{
                    __webpack_require__.ruid = "bundler=rspack@1.7.11";
                })();
                (()=>{
                    var $app_style$ = [];
                    var $app_script$ = function __scriptModule__(module, exports, $app_require$1) {
                        "use strict";
                        Object.defineProperty(exports, "__esModule", {
                            value: true
                        });
                        exports.default = void 0;
                        var _system = _interopRequireDefault($app_require$1("@app-module/system.storage"));
                        function _interopRequireDefault(e) {
                            return e && e.__esModule ? e : {
                                default: e
                            };
                        }
                        var _default = exports.default = {
                            data: {
                                gameState: {
                                    score: 0,
                                    energy: 0,
                                    level: 1,
                                    upgrades: {
                                        speed: 0,
                                        range: 0,
                                        efficiency: 0,
                                        cooldown: 0
                                    },
                                    highScore: 0
                                },
                                settings: {
                                    vibrateOn: true,
                                    difficulty: 1,
                                    particlesOn: true
                                },
                                dataReady: false,
                                _listeners: []
                            },
                            onCreate () {
                                this._listeners = [];
                                this.loadFromStorage();
                            },
                            onDestroy () {},
                            onDataReady (fn) {
                                if (this.dataReady) fn();
                                else this._listeners.push(fn);
                            },
                            _notifyReady () {
                                this.dataReady = true;
                                for(var i = 0; i < this._listeners.length; i++){
                                    try {
                                        this._listeners[i]();
                                    } catch (e) {}
                                }
                                this._listeners = [];
                            },
                            loadFromStorage () {
                                var self = this;
                                var loaded = {
                                    state: false,
                                    settings: false
                                };
                                function checkDone() {
                                    if (loaded.state && loaded.settings) self._notifyReady();
                                }
                                _system.default.get({
                                    key: 'gameData',
                                    success: function(data) {
                                        try {
                                            var saved = JSON.parse(data);
                                            self.gameState.highScore = saved.highScore || 0;
                                            self.gameState.energy = saved.energy || 0;
                                            if (saved.upgrades) {
                                                self.gameState.upgrades.speed = saved.upgrades.speed || 0;
                                                self.gameState.upgrades.range = saved.upgrades.range || 0;
                                                self.gameState.upgrades.efficiency = saved.upgrades.efficiency || 0;
                                                self.gameState.upgrades.cooldown = saved.upgrades.cooldown || 0;
                                            }
                                        } catch (e) {}
                                        loaded.state = true;
                                        checkDone();
                                    },
                                    fail: function() {
                                        loaded.state = true;
                                        checkDone();
                                    }
                                });
                                _system.default.get({
                                    key: 'appSettings',
                                    success: function(data) {
                                        try {
                                            var saved = JSON.parse(data);
                                            self.settings.vibrateOn = void 0 !== saved.vibrateOn ? saved.vibrateOn : true;
                                            self.settings.difficulty = saved.difficulty || 1;
                                            self.settings.particlesOn = void 0 !== saved.particlesOn ? saved.particlesOn : true;
                                        } catch (e) {}
                                        loaded.settings = true;
                                        checkDone();
                                    },
                                    fail: function() {
                                        loaded.settings = true;
                                        checkDone();
                                    }
                                });
                            },
                            saveGameState () {
                                var data = JSON.stringify({
                                    highScore: this.gameState.highScore,
                                    energy: this.gameState.energy,
                                    upgrades: this.gameState.upgrades
                                });
                                _system.default.set({
                                    key: 'gameData',
                                    value: data
                                });
                            },
                            saveSettings () {
                                var data = JSON.stringify(this.settings);
                                _system.default.set({
                                    key: 'appSettings',
                                    value: data
                                });
                            },
                            resetGame () {
                                this.gameState.score = 0;
                                this.gameState.level = 1;
                            },
                            addScore (points) {
                                this.gameState.score += points;
                                if (this.gameState.score > this.gameState.highScore) this.gameState.highScore = this.gameState.score;
                            },
                            addEnergy (amount) {
                                this.gameState.energy += amount;
                            },
                            saveGameData () {
                                this.saveGameState();
                            }
                        };
                    };
                    $app_script$({}, $app_exports$, $app_require$1);
                    $app_exports$.default.style = $app_style$;
                    $app_exports$.default.manifest = __webpack_require__("./src/manifest.json");
                    var $translateStyle$ = function(value) {
                        if ('string' == typeof value) return Object.fromEntries(value.split(';').filter((item)=>Boolean(item && item.trim())).map((item)=>{
                            const matchs = item.match(/([^:]+):(.*)/);
                            if (matchs && matchs.length > 2) return [
                                matchs[1].trim().replace(/-([a-z])/g, (_, match)=>match.toUpperCase()),
                                matchs[2].trim()
                            ];
                            return [];
                        }));
                        return value;
                    };
                    __webpack_require__.g.$translateStyle$ = $translateStyle$;
                })();
            })();
        };
        return createAppHandler();
    })(global, globalThis, window, $app_exports$, $app_evaluate$);
}
