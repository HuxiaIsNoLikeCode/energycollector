export default function(global, globalThis, window, $app_exports$, $app_evaluate$) {
    var org_app_require = $app_require$;
    (function(global, globalThis, window, $app_exports$, $app_evaluate$) {
        var setTimeout = global.setTimeout;
        var setInterval = global.setInterval;
        var clearTimeout = global.clearTimeout;
        var clearInterval = global.clearInterval;
        var $app_require$1 = global.$app_require$ || org_app_require;
        var createPageHandler = function() {
            return (()=>{
                var __webpack_modules__ = {};
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
                var $app_style$ = [
                    [
                        [
                            [
                                0,
                                "container"
                            ]
                        ],
                        {
                            flexDirection: "column",
                            alignItems: "center",
                            width: "192px",
                            height: "490px",
                            backgroundColor: "#000000"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "hud"
                            ]
                        ],
                        {
                            flexDirection: "column",
                            width: "170px",
                            marginTop: "10px"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "hud-row"
                            ]
                        ],
                        {
                            flexDirection: "row",
                            justifyContent: "space-between"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "score"
                            ]
                        ],
                        {
                            fontSize: "14px",
                            color: "#00ffff",
                            fontWeight: "bold"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "level"
                            ]
                        ],
                        {
                            fontSize: "14px",
                            color: "#ff00ff",
                            fontWeight: "bold"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "energy-hud"
                            ]
                        ],
                        {
                            fontSize: "12px",
                            color: "#ffff00"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "game-area"
                            ]
                        ],
                        {
                            width: "192px",
                            height: "380px",
                            position: "relative",
                            overflow: "hidden"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "player"
                            ]
                        ],
                        {
                            position: "absolute",
                            left: "84px",
                            top: "183px",
                            width: "24px",
                            height: "24px",
                            borderRadius: "12px",
                            backgroundColor: "#00ffff",
                            borderTopColor: "#ffffff",
                            borderRightColor: "#ffffff",
                            borderBottomColor: "#ffffff",
                            borderLeftColor: "#ffffff",
                            borderStyle: "solid",
                            borderTopWidth: "2px",
                            borderRightWidth: "2px",
                            borderBottomWidth: "2px",
                            borderLeftWidth: "2px",
                            boxShadow: "0 0 15px #00ffff",
                            zIndex: 5
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "invincible-ring"
                            ]
                        ],
                        {
                            position: "absolute",
                            width: "70px",
                            height: "70px",
                            borderTopColor: "#ffff00",
                            borderRightColor: "#ffff00",
                            borderBottomColor: "#ffff00",
                            borderLeftColor: "#ffff00",
                            borderStyle: "solid",
                            borderTopWidth: "3px",
                            borderRightWidth: "3px",
                            borderBottomWidth: "3px",
                            borderLeftWidth: "3px",
                            borderRadius: "35px",
                            boxShadow: "0 0 25px #ffff00",
                            zIndex: 4
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "skill-ring"
                            ]
                        ],
                        {
                            position: "absolute",
                            borderTopColor: "rgba(255, 255, 0, 0.6)",
                            borderRightColor: "rgba(255, 255, 0, 0.6)",
                            borderBottomColor: "rgba(255, 255, 0, 0.6)",
                            borderLeftColor: "rgba(255, 255, 0, 0.6)",
                            borderStyle: "solid",
                            borderTopWidth: "2px",
                            borderRightWidth: "2px",
                            borderBottomWidth: "2px",
                            borderLeftWidth: "2px",
                            backgroundColor: "rgba(255, 255, 0, 0.08)",
                            boxShadow: "0 0 15px rgba(255, 255, 0, 0.3)",
                            zIndex: 4
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "particle"
                            ]
                        ],
                        {
                            position: "absolute",
                            boxShadow: "0 0 8px currentColor"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "obstacle"
                            ]
                        ],
                        {
                            position: "absolute",
                            width: "18px",
                            height: "18px",
                            borderTopColor: "#ff6666",
                            borderRightColor: "#ff6666",
                            borderBottomColor: "#ff6666",
                            borderLeftColor: "#ff6666",
                            borderStyle: "solid",
                            borderTopWidth: "2px",
                            borderRightWidth: "2px",
                            borderBottomWidth: "2px",
                            borderLeftWidth: "2px",
                            boxShadow: "0 0 10px currentColor",
                            transform: "{\"rotate\":\"45deg\"}"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "score-popup"
                            ]
                        ],
                        {
                            position: "absolute",
                            zIndex: 20
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "popup-text"
                            ]
                        ],
                        {
                            fontSize: "14px",
                            fontWeight: "bold"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "skill-btn"
                            ]
                        ],
                        {
                            position: "absolute",
                            bottom: "15px",
                            right: "15px",
                            width: "50px",
                            height: "50px",
                            borderTopColor: "#ff00ff",
                            borderRightColor: "#ff00ff",
                            borderBottomColor: "#ff00ff",
                            borderLeftColor: "#ff00ff",
                            borderStyle: "solid",
                            borderTopWidth: "2px",
                            borderRightWidth: "2px",
                            borderBottomWidth: "2px",
                            borderLeftWidth: "2px",
                            borderRadius: "25px",
                            backgroundColor: "rgba(255, 0, 255, 0.2)",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                            zIndex: 10
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "skill-text"
                            ]
                        ],
                        {
                            fontSize: "12px",
                            color: "#ff00ff"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "cooldown-text"
                            ]
                        ],
                        {
                            fontSize: "10px",
                            color: "#888888",
                            marginTop: "2px"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "over"
                            ]
                        ],
                        {
                            position: "absolute",
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                            backgroundColor: "rgba(0, 0, 0, 0.95)",
                            zIndex: 100
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "over-title"
                            ]
                        ],
                        {
                            fontSize: "28px",
                            color: "#ff0000",
                            fontWeight: "bold",
                            marginBottom: "15px"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "over-score"
                            ]
                        ],
                        {
                            fontSize: "20px",
                            color: "#00ffff",
                            marginBottom: "5px"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "over-energy"
                            ]
                        ],
                        {
                            fontSize: "16px",
                            color: "#ffff00",
                            marginBottom: "5px"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "over-total"
                            ]
                        ],
                        {
                            fontSize: "14px",
                            color: "#aaaaaa",
                            marginBottom: "20px"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "over-btn"
                            ]
                        ],
                        {
                            width: "120px",
                            height: "40px",
                            borderTopColor: "#00ffff",
                            borderRightColor: "#00ffff",
                            borderBottomColor: "#00ffff",
                            borderLeftColor: "#00ffff",
                            borderStyle: "solid",
                            borderTopWidth: "2px",
                            borderRightWidth: "2px",
                            borderBottomWidth: "2px",
                            borderLeftWidth: "2px",
                            borderRadius: "6px",
                            backgroundColor: "rgba(0, 255, 255, 0.15)",
                            justifyContent: "center",
                            alignItems: "center",
                            marginBottom: "12px"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "over-btn-text"
                            ]
                        ],
                        {
                            fontSize: "15px",
                            color: "#00ffff"
                        }
                    ]
                ];
                var $app_script$ = function __scriptModule__(module, exports, $app_require$1) {
                    "use strict";
                    Object.defineProperty(exports, "__esModule", {
                        value: true
                    });
                    exports.default = void 0;
                    var _system = _interopRequireDefault($app_require$1("@app-module/system.router"));
                    var _system2 = _interopRequireDefault($app_require$1("@app-module/system.sensor"));
                    var _system3 = _interopRequireDefault($app_require$1("@app-module/system.vibrator"));
                    var _system4 = _interopRequireDefault($app_require$1("@app-module/system.brightness"));
                    var _system5 = _interopRequireDefault($app_require$1("@app-module/system.storage"));
                    function _interopRequireDefault(e) {
                        return e && e.__esModule ? e : {
                            default: e
                        };
                    }
                    var _default = exports.default = {
                        data: {
                            score: 0,
                            level: 1,
                            earnedEnergy: 0,
                            totalEnergy: 0,
                            gameOver: false,
                            particles: [],
                            obstacles: [],
                            scorePopups: [],
                            skillCooldown: 0,
                            skillCooldownText: '',
                            skillActive: false,
                            invincible: false,
                            tiltX: 0,
                            maxTilt: 3,
                            loop: null,
                            lastTime: 0,
                            scoreAccum: 0,
                            _baseEnergy: 0,
                            _baseHighScore: 0,
                            _gameStarted: false,
                            _saved: false,
                            upgrades: {
                                speed: 0,
                                range: 0,
                                efficiency: 0,
                                cooldown: 0
                            },
                            settings: {
                                vibrateOn: true,
                                difficulty: 1,
                                particlesOn: true
                            },
                            collectRange: 30,
                            energyMul: 1,
                            skillCooldownMax: 6,
                            obstacleSpeedMul: 1,
                            obstacleSpawnRate: 1,
                            particleSpawnRate: 1,
                            particleSizeMul: 1,
                            particleValueMul: 1,
                            collisionRange: 0,
                            skillRingStyle: ''
                        },
                        onInit () {
                            var self = this;
                            var app = this.$app;
                            self.loadSettings();
                            if (app && app.onDataReady) app.onDataReady(function() {
                                self._initFromApp();
                            });
                            else self._initFromApp();
                        },
                        _initFromApp () {
                            var app = this.$app;
                            if (app && app.gameState) {
                                this._baseEnergy = app.gameState.energy || 0;
                                this._baseHighScore = app.gameState.highScore || 0;
                                this.upgrades = {
                                    speed: app.gameState.upgrades.speed || 0,
                                    range: app.gameState.upgrades.range || 0,
                                    efficiency: app.gameState.upgrades.efficiency || 0,
                                    cooldown: app.gameState.upgrades.cooldown || 0
                                };
                                this.applyUpgrades();
                            }
                            if (!this._gameStarted) this.startGame();
                        },
                        onReady () {
                            this.keepScreenOn(true);
                        },
                        onDestroy () {
                            this.stopGame();
                            this.stopSensors();
                            this.keepScreenOn(false);
                            this.saveProgress();
                        },
                        loadSettings () {
                            var self = this;
                            _system5.default.get({
                                key: 'appSettings',
                                success: function(data) {
                                    try {
                                        var saved = JSON.parse(data);
                                        self.settings.vibrateOn = false !== saved.vibrateOn;
                                        self.settings.difficulty = saved.difficulty || 1;
                                        self.settings.particlesOn = false !== saved.particlesOn;
                                        self.applyDifficulty();
                                    } catch (e) {
                                        self._loadSettingsFromApp();
                                    }
                                },
                                fail: function() {
                                    self._loadSettingsFromApp();
                                }
                            });
                        },
                        _loadSettingsFromApp () {
                            var app = this.$app;
                            if (app && app.settings) {
                                this.settings.vibrateOn = false !== app.settings.vibrateOn;
                                this.settings.difficulty = app.settings.difficulty || 1;
                                this.settings.particlesOn = false !== app.settings.particlesOn;
                                this.applyDifficulty();
                            }
                        },
                        applyDifficulty () {
                            var diff = this.settings.difficulty;
                            if (0 === diff || 'easy' === diff) {
                                this.obstacleSpeedMul = 0.6;
                                this.obstacleSpawnRate = 0.6;
                                this.particleSpawnRate = 1.3;
                                this.particleSizeMul = 1.2;
                                this.particleValueMul = 0.8;
                                this.collisionRange = 5;
                            } else if (1 === diff || 'hard' === diff) {
                                this.obstacleSpeedMul = 1.4;
                                this.obstacleSpawnRate = 1.3;
                                this.particleSpawnRate = 0.7;
                                this.particleSizeMul = 0.85;
                                this.particleValueMul = 1.5;
                                this.collisionRange = -3;
                            } else if (2 === diff || 'hell' === diff) {
                                this.obstacleSpeedMul = 1.8;
                                this.obstacleSpawnRate = 1.6;
                                this.particleSpawnRate = 0.45;
                                this.particleSizeMul = 0.65;
                                this.particleValueMul = 2.5;
                                this.collisionRange = -6;
                            } else {
                                this.obstacleSpeedMul = 1;
                                this.obstacleSpawnRate = 1;
                                this.particleSpawnRate = 1;
                                this.particleSizeMul = 1;
                                this.particleValueMul = 1;
                                this.collisionRange = 0;
                            }
                        },
                        applyUpgrades () {
                            this.collectRange = 30 + 8 * this.upgrades.range;
                            this.energyMul = 1 + 0.3 * this.upgrades.efficiency;
                            this.skillCooldownMax = Math.max(3, 6 - this.upgrades.cooldown);
                            this.maxTilt = 3 + 0.5 * this.upgrades.speed;
                        },
                        startGame () {
                            this._gameStarted = true;
                            this._saved = false;
                            this.score = 0;
                            this.level = 1;
                            this.earnedEnergy = 0;
                            this.totalEnergy = this._baseEnergy;
                            this.gameOver = false;
                            this.particles = [];
                            this.obstacles = [];
                            this.scorePopups = [];
                            this.skillCooldown = 0;
                            this.skillActive = false;
                            this.invincible = false;
                            this.scoreAccum = 0;
                            this._lastSpawn = 0;
                            this._lastObs = 0;
                            this.lastTime = Date.now();
                            this.applyUpgrades();
                            this.applyDifficulty();
                            this.startSensors();
                            this.startLoop();
                        },
                        stopGame () {
                            if (this.loop) {
                                clearInterval(this.loop);
                                this.loop = null;
                            }
                        },
                        startLoop () {
                            var self = this;
                            this.loop = setInterval(function() {
                                if (!self.gameOver) self.update();
                            }, 50);
                        },
                        startSensors () {
                            var self = this;
                            self._rawTiltX = 0;
                            try {
                                _system2.default.subscribeAccelerometer({
                                    callback: function(data) {
                                        self._rawTiltX = self.clamp(5 * data.x, -self.maxTilt, self.maxTilt);
                                    }
                                });
                            } catch (e) {}
                        },
                        stopSensors () {
                            try {
                                _system2.default.unsubscribeAccelerometer();
                            } catch (e) {}
                        },
                        clamp (value, min, max) {
                            if (value < min) return min;
                            if (value > max) return max;
                            return value;
                        },
                        update () {
                            var now = Date.now();
                            var dt = (now - this.lastTime) / 1000;
                            this.lastTime = now;
                            if (dt > 0.2) dt = 0.2;
                            this.tiltX = this.tiltX + (this._rawTiltX - this.tiltX) * 0.5;
                            var speedMul = 60 * dt;
                            var spawnRate = Math.max(800, (2200 - 80 * this.level) / this.particleSpawnRate);
                            var obstacleRate = Math.max(600, (2500 - 100 * this.level) / this.obstacleSpawnRate);
                            this.scoreAccum += dt;
                            if (this.scoreAccum >= 1) {
                                this.score += 5;
                                this.scoreAccum -= 1;
                            }
                            this.level = Math.floor(this.score / 300) + 1;
                            var ticks = Math.floor(now / spawnRate);
                            if (ticks > this._lastSpawn) {
                                this._lastSpawn = ticks;
                                if (this.settings.particlesOn) this.spawnParticle();
                                else if (Math.random() < 0.3) this.spawnSimpleParticle();
                            }
                            var oTicks = Math.floor(now / obstacleRate);
                            if (oTicks > this._lastObs) {
                                this._lastObs = oTicks;
                                this.spawnObstacle();
                            }
                            this.updateParticles(speedMul);
                            this.updateObstacles(speedMul);
                            this.updatePopups(speedMul);
                            this.checkCollisions();
                            if (this.skillCooldown > 0) {
                                this.skillCooldown -= dt;
                                if (this.skillCooldown > 0) this.skillCooldownText = Math.ceil(this.skillCooldown) + 's';
                                else {
                                    this.skillCooldown = 0;
                                    this.skillCooldownText = '';
                                }
                            }
                        },
                        spawnParticle () {
                            var types = [
                                {
                                    color: '#00ffff',
                                    value: 10,
                                    size: 12,
                                    weight: 50
                                },
                                {
                                    color: '#ff00ff',
                                    value: 20,
                                    size: 14,
                                    weight: 30
                                },
                                {
                                    color: '#ffff00',
                                    value: 50,
                                    size: 16,
                                    weight: 15
                                },
                                {
                                    color: '#00ff88',
                                    value: 30,
                                    size: 13,
                                    weight: 5
                                }
                            ];
                            var roll = 100 * Math.random();
                            var acc = 0;
                            var type = types[0];
                            for(var i = 0; i < types.length; i++){
                                acc += types[i].weight;
                                if (roll < acc) {
                                    type = types[i];
                                    break;
                                }
                            }
                            this.particles.push({
                                x: 160 * Math.random() + 10,
                                y: -20,
                                color: type.color,
                                value: Math.round(type.value * this.particleValueMul),
                                size: Math.max(4, Math.round(type.size * this.particleSizeMul)),
                                speed: 0.8 + 0.6 * Math.random()
                            });
                        },
                        spawnSimpleParticle () {
                            this.particles.push({
                                x: 160 * Math.random() + 10,
                                y: -20,
                                color: '#006666',
                                value: Math.round(10 * this.particleValueMul),
                                size: Math.max(3, Math.round(6 * this.particleSizeMul)),
                                speed: 0.8 + 0.6 * Math.random()
                            });
                        },
                        spawnObstacle () {
                            var types = [
                                {
                                    color: '#ff0000',
                                    speed: 1.5
                                },
                                {
                                    color: '#ff4400',
                                    speed: 1.8
                                },
                                {
                                    color: '#ff0044',
                                    speed: 2.2
                                }
                            ];
                            var type = types[Math.floor(Math.random() * types.length)];
                            this.obstacles.push({
                                x: 150 * Math.random() + 15,
                                y: -20,
                                speed: type.speed * this.obstacleSpeedMul,
                                color: type.color
                            });
                        },
                        updateParticles (speedMul) {
                            var tiltX = this.tiltX;
                            var kept = [];
                            for(var i = 0; i < this.particles.length; i++){
                                var p = this.particles[i];
                                p.x += tiltX * speedMul * 1.0;
                                p.y += p.speed * speedMul;
                                if (p.x < -20) p.x = 212;
                                if (p.x > 212) p.x = -20;
                                if (p.y < 420) kept.push(p);
                            }
                            this.particles = kept;
                        },
                        updateObstacles (speedMul) {
                            var tiltX = this.tiltX;
                            var kept = [];
                            for(var i = 0; i < this.obstacles.length; i++){
                                var o = this.obstacles[i];
                                o.x += tiltX * speedMul * 0.8;
                                o.y += o.speed * speedMul;
                                if (o.x < -20) o.x = 212;
                                if (o.x > 212) o.x = -20;
                                if (o.y < 420) kept.push(o);
                            }
                            this.obstacles = kept;
                        },
                        updatePopups (speedMul) {
                            var kept = [];
                            for(var i = 0; i < this.scorePopups.length; i++){
                                var p = this.scorePopups[i];
                                p.y -= 0.8 * speedMul;
                                p.opacity -= 0.025 * speedMul;
                                if (p.opacity > 0) kept.push(p);
                            }
                            this.scorePopups = kept;
                        },
                        checkCollisions () {
                            var playerX = 96;
                            var playerY = 195;
                            var range = this.skillActive ? 2 * this.collectRange : this.collectRange;
                            var kept = [];
                            for(var i = 0; i < this.particles.length; i++){
                                var p = this.particles[i];
                                var dx = Math.abs(p.x - playerX);
                                var dy = Math.abs(p.y - playerY);
                                if (dx < range && dy < range) this.collectParticle(p);
                                else kept.push(p);
                            }
                            this.particles = kept;
                            if (this.invincible) return;
                            var obsHitDist = 22 + this.collisionRange;
                            for(var j = 0; j < this.obstacles.length; j++){
                                var o = this.obstacles[j];
                                var odx = Math.abs(o.x + 9 - playerX);
                                var ody = Math.abs(o.y + 9 - playerY);
                                if (odx < obsHitDist && ody < obsHitDist) return void this.hitObstacle();
                            }
                        },
                        collectParticle (p) {
                            var gained = Math.round(p.value * this.energyMul);
                            this.score += gained;
                            this.earnedEnergy += gained;
                            this.scorePopups.push({
                                x: p.x,
                                y: p.y,
                                value: gained,
                                opacity: 1,
                                color: p.color
                            });
                            if (this.settings.vibrateOn) this.vibrateShort();
                        },
                        _writeResultToApp () {
                            if (this._saved) return;
                            this._saved = true;
                            var self = this;
                            var earned = this.earnedEnergy || 0;
                            var curScore = this.score || 0;
                            _system5.default.get({
                                key: 'gameData',
                                success: function(data) {
                                    try {
                                        var existing = JSON.parse(data);
                                        var oldEnergy = existing.energy || 0;
                                        var oldHigh = existing.highScore || 0;
                                        var newTotal = oldEnergy + earned;
                                        var newHigh = Math.max(oldHigh, curScore);
                                        self.totalEnergy = newTotal;
                                        self._baseEnergy = newTotal;
                                        self._baseHighScore = newHigh;
                                        var saveData = JSON.stringify({
                                            highScore: newHigh,
                                            energy: newTotal,
                                            upgrades: existing.upgrades || self.upgrades
                                        });
                                        _system5.default.set({
                                            key: 'gameData',
                                            value: saveData
                                        });
                                        try {
                                            var a = self.$app;
                                            if (a && a.gameState) {
                                                a.gameState.energy = newTotal;
                                                a.gameState.highScore = newHigh;
                                            }
                                        } catch (e) {}
                                    } catch (e) {
                                        self._writeFallback();
                                    }
                                },
                                fail: function() {
                                    self._writeFallback();
                                }
                            });
                        },
                        _writeFallback () {
                            var baseE = this._baseEnergy || 0;
                            var earned = this.earnedEnergy || 0;
                            var baseH = this._baseHighScore || 0;
                            var curScore = this.score || 0;
                            var newTotal = baseE + earned;
                            var newHigh = Math.max(baseH, curScore);
                            this.totalEnergy = newTotal;
                            this._baseEnergy = newTotal;
                            this._baseHighScore = newHigh;
                            _system5.default.set({
                                key: 'gameData',
                                value: JSON.stringify({
                                    highScore: newHigh,
                                    energy: newTotal,
                                    upgrades: this.upgrades
                                })
                            });
                        },
                        hitObstacle () {
                            this.gameOver = true;
                            this.stopGame();
                            if (this.settings.vibrateOn) this.vibrateLong();
                            this._writeResultToApp();
                        },
                        saveProgress () {
                            this._writeResultToApp();
                        },
                        useSkill () {
                            if (this.skillCooldown > 0 || this.skillActive || this.gameOver) return;
                            this.skillActive = true;
                            this.skillCooldown = this.skillCooldownMax;
                            if (this.settings.vibrateOn) this.vibrateShort();
                            var effectiveRange = 2 * this.collectRange;
                            var ringSize = Math.min(2 * effectiveRange, 160);
                            var ringRadius = Math.floor(ringSize / 2);
                            var ringLeft = 96 - ringRadius;
                            var ringTop = 195 - ringRadius;
                            this.skillRingStyle = 'width:' + ringSize + 'px;height:' + ringSize + 'px;top:' + ringTop + 'px;left:' + ringLeft + 'px;border-radius:' + ringRadius + 'px;';
                            var self = this;
                            setTimeout(function() {
                                self.skillActive = false;
                            }, 3000);
                        },
                        restart () {
                            this._baseEnergy = this._baseEnergy + this.earnedEnergy;
                            this._baseHighScore = Math.max(this._baseHighScore, this.score);
                            this._saved = false;
                            this.startGame();
                        },
                        goBack () {
                            this.saveProgress();
                            _system.default.back();
                        },
                        vibrateShort () {
                            try {
                                _system3.default.vibrate({
                                    mode: 'short'
                                });
                            } catch (e) {}
                        },
                        vibrateLong () {
                            try {
                                _system3.default.vibrate({
                                    mode: 'long'
                                });
                            } catch (e) {}
                        },
                        keepScreenOn (on) {
                            try {
                                _system4.default.setKeepScreenOn({
                                    keepScreenOn: on
                                });
                            } catch (e) {}
                        }
                    };
                    const moduleOwn = exports.default || module.exports;
                    const accessors = [
                        'public',
                        'protected',
                        'private'
                    ];
                    if (moduleOwn.data && accessors.some(function(acc) {
                        return moduleOwn[acc];
                    })) throw new Error('页面VM对象中的属性data不可与"' + accessors.join(',') + '"同时存在，请使用private替换data名称');
                    if (!moduleOwn.data) {
                        moduleOwn.data = {};
                        moduleOwn._descriptor = {};
                        accessors.forEach(function(acc) {
                            const accType = typeof moduleOwn[acc];
                            if ('object' === accType) {
                                moduleOwn.data = Object.assign(moduleOwn.data, moduleOwn[acc]);
                                for(const name in moduleOwn[acc])moduleOwn._descriptor[name] = {
                                    access: acc
                                };
                            } else if ('function' === accType) console.warn('页面VM对象中的属性' + acc + '的值不能是函数，请使用对象');
                        });
                    }
                };
                var $app_template$ = function(vm) {
                    const _vm_ = vm || this;
                    return aiot.__ce__("div", {
                        __vm__: _vm_,
                        __opts__: {
                            classList: [
                                "container"
                            ]
                        }
                    }, [
                        aiot.__ce__("div", {
                            __vm__: _vm_,
                            __opts__: {
                                classList: [
                                    "hud"
                                ]
                            }
                        }, [
                            aiot.__ce__("div", {
                                __vm__: _vm_,
                                __opts__: {
                                    classList: [
                                        "hud-row"
                                    ]
                                }
                            }, [
                                aiot.__ce__("text", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        classList: [
                                            "score"
                                        ],
                                        value: function() {
                                            return "分数: " + _vm_.score;
                                        }
                                    }
                                }, []),
                                aiot.__ce__("text", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        classList: [
                                            "level"
                                        ],
                                        value: function() {
                                            return "Lv." + _vm_.level;
                                        }
                                    }
                                }, [])
                            ]),
                            aiot.__ce__("div", {
                                __vm__: _vm_,
                                __opts__: {
                                    classList: [
                                        "hud-row"
                                    ]
                                }
                            }, [
                                aiot.__ce__("text", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        classList: [
                                            "energy-hud"
                                        ],
                                        value: function() {
                                            return "E:" + _vm_.earnedEnergy;
                                        }
                                    }
                                }, [])
                            ])
                        ]),
                        aiot.__ce__("div", {
                            __vm__: _vm_,
                            __opts__: {
                                classList: [
                                    "game-area"
                                ]
                            }
                        }, [
                            aiot.__ce__("div", {
                                __vm__: _vm_,
                                __opts__: {
                                    classList: [
                                        "player"
                                    ]
                                }
                            }, []),
                            aiot.__ci__({
                                __vm__: _vm_,
                                __opts__: {
                                    shown: function() {
                                        return _vm_.invincible;
                                    }
                                }
                            }, function() {
                                return [
                                    aiot.__ce__("div", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "invincible-ring"
                                            ],
                                            style: {
                                                left: "59px",
                                                top: "158px"
                                            }
                                        }
                                    }, [])
                                ];
                            }),
                            aiot.__ci__({
                                __vm__: _vm_,
                                __opts__: {
                                    shown: function() {
                                        return _vm_.skillActive;
                                    }
                                }
                            }, function() {
                                return [
                                    aiot.__ce__("div", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "skill-ring"
                                            ],
                                            style: function() {
                                                return __webpack_require__.g.$translateStyle$(_vm_.skillRingStyle);
                                            }
                                        }
                                    }, [])
                                ];
                            }),
                            aiot.__cf__({
                                __vm__: _vm_,
                                __opts__: {
                                    exp: function() {
                                        return _vm_.particles;
                                    },
                                    key: "$idx",
                                    value: "$item"
                                }
                            }, function($idx, $item) {
                                return [
                                    aiot.__ce__("div", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "particle"
                                            ],
                                            style: function() {
                                                return __webpack_require__.g.$translateStyle$("left: " + $item.x + "px; top: " + $item.y + "px; background-color: " + $item.color + "; width: " + $item.size + "px; height: " + $item.size + "px; border-radius: " + $item.size / 2 + "px;");
                                            }
                                        }
                                    }, [])
                                ];
                            }),
                            aiot.__cf__({
                                __vm__: _vm_,
                                __opts__: {
                                    exp: function() {
                                        return _vm_.obstacles;
                                    },
                                    key: "$idx",
                                    value: "$item"
                                }
                            }, function($idx, $item) {
                                return [
                                    aiot.__ce__("div", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "obstacle"
                                            ],
                                            style: function() {
                                                return __webpack_require__.g.$translateStyle$("left: " + $item.x + "px; top: " + $item.y + "px; background-color: " + $item.color + ";");
                                            }
                                        }
                                    }, [])
                                ];
                            }),
                            aiot.__cf__({
                                __vm__: _vm_,
                                __opts__: {
                                    exp: function() {
                                        return _vm_.scorePopups;
                                    },
                                    key: "$idx",
                                    value: "$item"
                                }
                            }, function($idx, $item) {
                                return [
                                    aiot.__ce__("div", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "score-popup"
                                            ],
                                            style: function() {
                                                return __webpack_require__.g.$translateStyle$("left: " + $item.x + "px; top: " + $item.y + "px; opacity: " + $item.opacity + ";");
                                            }
                                        }
                                    }, [
                                        aiot.__ce__("text", {
                                            __vm__: _vm_,
                                            __opts__: {
                                                classList: [
                                                    "popup-text"
                                                ],
                                                style: function() {
                                                    return __webpack_require__.g.$translateStyle$("color: " + $item.color + ";");
                                                },
                                                value: function() {
                                                    return "+" + $item.value;
                                                }
                                            }
                                        }, [])
                                    ])
                                ];
                            })
                        ]),
                        aiot.__ce__("div", {
                            __vm__: _vm_,
                            __opts__: {
                                classList: [
                                    "skill-btn"
                                ],
                                events: {
                                    click: function(evt) {
                                        return _vm_.useSkill(evt);
                                    }
                                }
                            }
                        }, [
                            aiot.__ce__("text", {
                                __vm__: _vm_,
                                __opts__: {
                                    classList: [
                                        "skill-text"
                                    ],
                                    value: "技能"
                                }
                            }, []),
                            aiot.__ci__({
                                __vm__: _vm_,
                                __opts__: {
                                    shown: function() {
                                        return _vm_.skillCooldown > 0;
                                    }
                                }
                            }, function() {
                                return [
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "cooldown-text"
                                            ],
                                            value: function() {
                                                return _vm_.skillCooldownText;
                                            }
                                        }
                                    }, [])
                                ];
                            })
                        ]),
                        aiot.__ci__({
                            __vm__: _vm_,
                            __opts__: {
                                shown: function() {
                                    return _vm_.gameOver;
                                }
                            }
                        }, function() {
                            return [
                                aiot.__ce__("div", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        classList: [
                                            "over"
                                        ]
                                    }
                                }, [
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "over-title"
                                            ],
                                            value: "游戏结束"
                                        }
                                    }, []),
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "over-score"
                                            ],
                                            value: function() {
                                                return "分数: " + _vm_.score;
                                            }
                                        }
                                    }, []),
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "over-energy"
                                            ],
                                            value: function() {
                                                return "获得能量: " + _vm_.earnedEnergy;
                                            }
                                        }
                                    }, []),
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "over-total"
                                            ],
                                            value: function() {
                                                return "累计能量: " + _vm_.totalEnergy;
                                            }
                                        }
                                    }, []),
                                    aiot.__ce__("div", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "over-btn"
                                            ],
                                            events: {
                                                click: function(evt) {
                                                    return _vm_.restart(evt);
                                                }
                                            }
                                        }
                                    }, [
                                        aiot.__ce__("text", {
                                            __vm__: _vm_,
                                            __opts__: {
                                                classList: [
                                                    "over-btn-text"
                                                ],
                                                value: "重新开始"
                                            }
                                        }, [])
                                    ]),
                                    aiot.__ce__("div", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "over-btn"
                                            ],
                                            events: {
                                                click: function(evt) {
                                                    return _vm_.goBack(evt);
                                                }
                                            }
                                        }
                                    }, [
                                        aiot.__ce__("text", {
                                            __vm__: _vm_,
                                            __opts__: {
                                                classList: [
                                                    "over-btn-text"
                                                ],
                                                value: "返回菜单"
                                            }
                                        }, [])
                                    ])
                                ])
                            ];
                        })
                    ]);
                };
                $app_exports$['entry'] = function($app_exports$) {
                    $app_script$({}, $app_exports$, $app_require$1);
                    $app_exports$.default.template = $app_template$;
                    $app_exports$.default.style = $app_style$;
                };
            })();
        };
        return createPageHandler();
    })(global, globalThis, window, $app_exports$, $app_evaluate$);
}
