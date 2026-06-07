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
                            backgroundColor: "#000000",
                            paddingTop: "20px"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "title"
                            ]
                        ],
                        {
                            fontSize: "18px",
                            color: "#ff00ff",
                            fontWeight: "bold",
                            marginBottom: "20px"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "setting-list"
                            ]
                        ],
                        {
                            flexDirection: "column",
                            width: "170px"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "setting-item"
                            ]
                        ],
                        {
                            flexDirection: "row",
                            justifyContent: "space-between",
                            alignItems: "center",
                            width: "170px",
                            height: "50px",
                            marginBottom: "10px",
                            paddingLeft: "10px",
                            paddingRight: "10px",
                            borderTopColor: "#333333",
                            borderRightColor: "#333333",
                            borderBottomColor: "#333333",
                            borderLeftColor: "#333333",
                            borderStyle: "solid",
                            borderTopWidth: "1px",
                            borderRightWidth: "1px",
                            borderBottomWidth: "1px",
                            borderLeftWidth: "1px",
                            borderRadius: "6px",
                            backgroundColor: "rgba(255, 255, 255, 0.03)"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "setting-label"
                            ]
                        ],
                        {
                            fontSize: "14px",
                            color: "#00ffff"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "toggle"
                            ]
                        ],
                        {
                            width: "45px",
                            height: "24px",
                            borderRadius: "12px",
                            justifyContent: "center",
                            alignItems: "center"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "toggle-on"
                            ]
                        ],
                        {
                            backgroundColor: "#00ffff"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "toggle-off"
                            ]
                        ],
                        {
                            backgroundColor: "#333333"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "toggle-text"
                            ]
                        ],
                        {
                            fontSize: "12px",
                            color: "#000000",
                            fontWeight: "bold"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "difficulty-btns"
                            ]
                        ],
                        {
                            flexDirection: "row"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "diff-btn"
                            ]
                        ],
                        {
                            width: "32px",
                            height: "24px",
                            marginLeft: "2px",
                            borderTopColor: "#666666",
                            borderRightColor: "#666666",
                            borderBottomColor: "#666666",
                            borderLeftColor: "#666666",
                            borderStyle: "solid",
                            borderTopWidth: "1px",
                            borderRightWidth: "1px",
                            borderBottomWidth: "1px",
                            borderLeftWidth: "1px",
                            borderRadius: "4px",
                            justifyContent: "center",
                            alignItems: "center",
                            backgroundColor: "rgba(255, 255, 255, 0.05)"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "diff-active"
                            ]
                        ],
                        {
                            borderTopColor: "#ff00ff",
                            borderRightColor: "#ff00ff",
                            borderBottomColor: "#ff00ff",
                            borderLeftColor: "#ff00ff",
                            backgroundColor: "rgba(255, 0, 255, 0.2)"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "diff-text"
                            ]
                        ],
                        {
                            fontSize: "10px",
                            color: "#ffffff"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "info"
                            ]
                        ],
                        {
                            flexDirection: "column",
                            alignItems: "center",
                            marginTop: "20px"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "info-text"
                            ]
                        ],
                        {
                            fontSize: "11px",
                            color: "#555555",
                            marginBottom: "4px"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "reset-area"
                            ]
                        ],
                        {
                            flexDirection: "column",
                            alignItems: "center",
                            marginTop: "20px"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "reset-btn"
                            ]
                        ],
                        {
                            width: "170px",
                            height: "40px",
                            borderTopColor: "#ff4444",
                            borderRightColor: "#ff4444",
                            borderBottomColor: "#ff4444",
                            borderLeftColor: "#ff4444",
                            borderStyle: "solid",
                            borderTopWidth: "1px",
                            borderRightWidth: "1px",
                            borderBottomWidth: "1px",
                            borderLeftWidth: "1px",
                            borderRadius: "6px",
                            backgroundColor: "rgba(255, 68, 68, 0.1)",
                            justifyContent: "center",
                            alignItems: "center"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "reset-text"
                            ]
                        ],
                        {
                            fontSize: "13px",
                            color: "#ff4444"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "reset-confirm"
                            ]
                        ],
                        {
                            flexDirection: "column",
                            alignItems: "center",
                            width: "170px",
                            paddingTop: "10px",
                            paddingRight: "10px",
                            paddingBottom: "10px",
                            paddingLeft: "10px",
                            borderTopColor: "#ff4444",
                            borderRightColor: "#ff4444",
                            borderBottomColor: "#ff4444",
                            borderLeftColor: "#ff4444",
                            borderStyle: "solid",
                            borderTopWidth: "1px",
                            borderRightWidth: "1px",
                            borderBottomWidth: "1px",
                            borderLeftWidth: "1px",
                            borderRadius: "6px",
                            backgroundColor: "rgba(255, 68, 68, 0.1)"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "reset-warn"
                            ]
                        ],
                        {
                            fontSize: "13px",
                            color: "#ff4444",
                            marginBottom: "10px"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "reset-btns-row"
                            ]
                        ],
                        {
                            flexDirection: "row",
                            justifyContent: "center"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "reset-yes"
                            ]
                        ],
                        {
                            width: "60px",
                            height: "30px",
                            borderTopColor: "#ff4444",
                            borderRightColor: "#ff4444",
                            borderBottomColor: "#ff4444",
                            borderLeftColor: "#ff4444",
                            borderStyle: "solid",
                            borderTopWidth: "1px",
                            borderRightWidth: "1px",
                            borderBottomWidth: "1px",
                            borderLeftWidth: "1px",
                            borderRadius: "4px",
                            backgroundColor: "rgba(255, 68, 68, 0.3)",
                            justifyContent: "center",
                            alignItems: "center",
                            marginRight: "10px"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "reset-yes-text"
                            ]
                        ],
                        {
                            fontSize: "12px",
                            color: "#ff4444"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "reset-no"
                            ]
                        ],
                        {
                            width: "60px",
                            height: "30px",
                            borderTopColor: "#666666",
                            borderRightColor: "#666666",
                            borderBottomColor: "#666666",
                            borderLeftColor: "#666666",
                            borderStyle: "solid",
                            borderTopWidth: "1px",
                            borderRightWidth: "1px",
                            borderBottomWidth: "1px",
                            borderLeftWidth: "1px",
                            borderRadius: "4px",
                            backgroundColor: "rgba(255, 255, 255, 0.05)",
                            justifyContent: "center",
                            alignItems: "center"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "reset-no-text"
                            ]
                        ],
                        {
                            fontSize: "12px",
                            color: "#999999"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "toast"
                            ]
                        ],
                        {
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            transform: "{\"translateX\":\"-50%\",\"translateY\":\"-50%\"}",
                            paddingTop: "10px",
                            paddingRight: "20px",
                            paddingBottom: "10px",
                            paddingLeft: "20px",
                            backgroundColor: "rgba(0, 0, 0, 0.9)",
                            borderTopColor: "#00ffff",
                            borderRightColor: "#00ffff",
                            borderBottomColor: "#00ffff",
                            borderLeftColor: "#00ffff",
                            borderStyle: "solid",
                            borderTopWidth: "1px",
                            borderRightWidth: "1px",
                            borderBottomWidth: "1px",
                            borderLeftWidth: "1px",
                            borderRadius: "4px",
                            zIndex: 100
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "toast-text"
                            ]
                        ],
                        {
                            fontSize: "14px",
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
                    var _system = _interopRequireDefault($app_require$1("@app-module/system.vibrator"));
                    var _system2 = _interopRequireDefault($app_require$1("@app-module/system.storage"));
                    function _interopRequireDefault(e) {
                        return e && e.__esModule ? e : {
                            default: e
                        };
                    }
                    var _default = exports.default = {
                        data: {
                            vibrateOn: true,
                            difficulty: 1,
                            particlesOn: true,
                            confirmReset: false,
                            showToast: false,
                            toastText: ''
                        },
                        onInit () {
                            var self = this;
                            var app = this.$app;
                            if (app && app.onDataReady) app.onDataReady(function() {
                                self.loadSettings();
                            });
                        },
                        onShow () {
                            this.loadSettings();
                        },
                        loadSettings () {
                            var self = this;
                            _system2.default.get({
                                key: 'appSettings',
                                success: function(data) {
                                    try {
                                        var saved = JSON.parse(data);
                                        self.vibrateOn = false !== saved.vibrateOn;
                                        self.difficulty = saved.difficulty || 1;
                                        self.particlesOn = false !== saved.particlesOn;
                                    } catch (e) {
                                        self._loadFromApp();
                                    }
                                },
                                fail: function() {
                                    self._loadFromApp();
                                }
                            });
                        },
                        _loadFromApp () {
                            var app = this.$app;
                            if (app && app.settings) {
                                this.vibrateOn = false !== app.settings.vibrateOn;
                                this.difficulty = app.settings.difficulty || 1;
                                this.particlesOn = false !== app.settings.particlesOn;
                            }
                        },
                        saveSettings () {
                            var data = JSON.stringify({
                                vibrateOn: this.vibrateOn,
                                difficulty: this.difficulty,
                                particlesOn: this.particlesOn
                            });
                            _system2.default.set({
                                key: 'appSettings',
                                value: data
                            });
                            try {
                                var a = this.$app;
                                if (a && a.settings) {
                                    a.settings.vibrateOn = this.vibrateOn;
                                    a.settings.difficulty = this.difficulty;
                                    a.settings.particlesOn = this.particlesOn;
                                }
                            } catch (e) {}
                        },
                        toggleVibrate () {
                            this.vibrateOn = !this.vibrateOn;
                            this.saveSettings();
                            if (this.vibrateOn) this.vibrateShort();
                        },
                        setDifficulty (level) {
                            this.difficulty = level;
                            this.saveSettings();
                            this.vibrateShort();
                        },
                        toggleParticles () {
                            this.particlesOn = !this.particlesOn;
                            this.saveSettings();
                            this.vibrateShort();
                        },
                        askReset () {
                            this.confirmReset = true;
                            this.vibrateShort();
                        },
                        cancelReset () {
                            this.confirmReset = false;
                        },
                        doReset () {
                            this.confirmReset = false;
                            _system2.default.set({
                                key: 'gameData',
                                value: JSON.stringify({
                                    highScore: 0,
                                    energy: 0,
                                    upgrades: {
                                        speed: 0,
                                        range: 0,
                                        efficiency: 0,
                                        cooldown: 0
                                    }
                                })
                            });
                            try {
                                var a = this.$app;
                                if (a && a.gameState) {
                                    a.gameState.energy = 0;
                                    a.gameState.highScore = 0;
                                    a.gameState.upgrades = {
                                        speed: 0,
                                        range: 0,
                                        efficiency: 0,
                                        cooldown: 0
                                    };
                                }
                            } catch (e) {}
                            this.showToastMsg('数据已重置');
                            this.vibrateShort();
                        },
                        showToastMsg (text) {
                            this.toastText = text;
                            this.showToast = true;
                            var self = this;
                            setTimeout(function() {
                                self.showToast = false;
                            }, 1500);
                        },
                        vibrateShort () {
                            try {
                                _system.default.vibrate({
                                    mode: 'short'
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
                        aiot.__ce__("text", {
                            __vm__: _vm_,
                            __opts__: {
                                classList: [
                                    "title"
                                ],
                                value: "游戏设置"
                            }
                        }, []),
                        aiot.__ce__("div", {
                            __vm__: _vm_,
                            __opts__: {
                                classList: [
                                    "setting-list"
                                ]
                            }
                        }, [
                            aiot.__ce__("div", {
                                __vm__: _vm_,
                                __opts__: {
                                    classList: [
                                        "setting-item"
                                    ]
                                }
                            }, [
                                aiot.__ce__("text", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        classList: [
                                            "setting-label"
                                        ],
                                        value: "振动反馈"
                                    }
                                }, []),
                                aiot.__ce__("div", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        classList: function() {
                                            const $classValue$ = "toggle " + (_vm_.vibrateOn ? "toggle-on" : "toggle-off");
                                            if ('string' == typeof $classValue$) return $classValue$.split(' ').map((item)=>item.trim()).filter(Boolean);
                                            return $classValue$;
                                        },
                                        events: {
                                            click: function(evt) {
                                                return _vm_.toggleVibrate(evt);
                                            }
                                        }
                                    }
                                }, [
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "toggle-text"
                                            ],
                                            value: function() {
                                                return _vm_.vibrateOn ? "\u5F00" : "\u5173";
                                            }
                                        }
                                    }, [])
                                ])
                            ]),
                            aiot.__ce__("div", {
                                __vm__: _vm_,
                                __opts__: {
                                    classList: [
                                        "setting-item"
                                    ]
                                }
                            }, [
                                aiot.__ce__("text", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        classList: [
                                            "setting-label"
                                        ],
                                        value: "游戏难度"
                                    }
                                }, []),
                                aiot.__ce__("div", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        classList: [
                                            "difficulty-btns"
                                        ]
                                    }
                                }, [
                                    aiot.__ce__("div", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: function() {
                                                const $classValue$ = "diff-btn " + (0 === _vm_.difficulty ? "diff-active" : "");
                                                if ('string' == typeof $classValue$) return $classValue$.split(' ').map((item)=>item.trim()).filter(Boolean);
                                                return $classValue$;
                                            },
                                            events: {
                                                click: function(evt) {
                                                    return _vm_.setDifficulty(0, evt);
                                                }
                                            }
                                        }
                                    }, [
                                        aiot.__ce__("text", {
                                            __vm__: _vm_,
                                            __opts__: {
                                                classList: [
                                                    "diff-text"
                                                ],
                                                value: "简单"
                                            }
                                        }, [])
                                    ]),
                                    aiot.__ce__("div", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: function() {
                                                const $classValue$ = "diff-btn " + (1 === _vm_.difficulty ? "diff-active" : "");
                                                if ('string' == typeof $classValue$) return $classValue$.split(' ').map((item)=>item.trim()).filter(Boolean);
                                                return $classValue$;
                                            },
                                            events: {
                                                click: function(evt) {
                                                    return _vm_.setDifficulty(1, evt);
                                                }
                                            }
                                        }
                                    }, [
                                        aiot.__ce__("text", {
                                            __vm__: _vm_,
                                            __opts__: {
                                                classList: [
                                                    "diff-text"
                                                ],
                                                value: "困难"
                                            }
                                        }, [])
                                    ]),
                                    aiot.__ce__("div", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: function() {
                                                const $classValue$ = "diff-btn " + (2 === _vm_.difficulty ? "diff-active" : "");
                                                if ('string' == typeof $classValue$) return $classValue$.split(' ').map((item)=>item.trim()).filter(Boolean);
                                                return $classValue$;
                                            },
                                            events: {
                                                click: function(evt) {
                                                    return _vm_.setDifficulty(2, evt);
                                                }
                                            }
                                        }
                                    }, [
                                        aiot.__ce__("text", {
                                            __vm__: _vm_,
                                            __opts__: {
                                                classList: [
                                                    "diff-text"
                                                ],
                                                value: "地狱"
                                            }
                                        }, [])
                                    ])
                                ])
                            ]),
                            aiot.__ce__("div", {
                                __vm__: _vm_,
                                __opts__: {
                                    classList: [
                                        "setting-item"
                                    ]
                                }
                            }, [
                                aiot.__ce__("text", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        classList: [
                                            "setting-label"
                                        ],
                                        value: "粒子效果"
                                    }
                                }, []),
                                aiot.__ce__("div", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        classList: function() {
                                            const $classValue$ = "toggle " + (_vm_.particlesOn ? "toggle-on" : "toggle-off");
                                            if ('string' == typeof $classValue$) return $classValue$.split(' ').map((item)=>item.trim()).filter(Boolean);
                                            return $classValue$;
                                        },
                                        events: {
                                            click: function(evt) {
                                                return _vm_.toggleParticles(evt);
                                            }
                                        }
                                    }
                                }, [
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "toggle-text"
                                            ],
                                            value: function() {
                                                return _vm_.particlesOn ? "\u5F00" : "\u5173";
                                            }
                                        }
                                    }, [])
                                ])
                            ])
                        ]),
                        aiot.__ce__("div", {
                            __vm__: _vm_,
                            __opts__: {
                                classList: [
                                    "reset-area"
                                ]
                            }
                        }, [
                            aiot.__ci__({
                                __vm__: _vm_,
                                __opts__: {
                                    shown: function() {
                                        return !_vm_.confirmReset;
                                    }
                                }
                            }, function() {
                                return [
                                    aiot.__ce__("div", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "reset-btn"
                                            ],
                                            events: {
                                                click: function(evt) {
                                                    return _vm_.askReset(evt);
                                                }
                                            }
                                        }
                                    }, [
                                        aiot.__ce__("text", {
                                            __vm__: _vm_,
                                            __opts__: {
                                                classList: [
                                                    "reset-text"
                                                ],
                                                value: "重置用户数据"
                                            }
                                        }, [])
                                    ])
                                ];
                            }),
                            aiot.__ci__({
                                __vm__: _vm_,
                                __opts__: {
                                    shown: function() {
                                        return _vm_.confirmReset;
                                    }
                                }
                            }, function() {
                                return [
                                    aiot.__ce__("div", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "reset-confirm"
                                            ]
                                        }
                                    }, [
                                        aiot.__ce__("text", {
                                            __vm__: _vm_,
                                            __opts__: {
                                                classList: [
                                                    "reset-warn"
                                                ],
                                                value: "确认清除所有数据?"
                                            }
                                        }, []),
                                        aiot.__ce__("div", {
                                            __vm__: _vm_,
                                            __opts__: {
                                                classList: [
                                                    "reset-btns-row"
                                                ]
                                            }
                                        }, [
                                            aiot.__ce__("div", {
                                                __vm__: _vm_,
                                                __opts__: {
                                                    classList: [
                                                        "reset-yes"
                                                    ],
                                                    events: {
                                                        click: function(evt) {
                                                            return _vm_.doReset(evt);
                                                        }
                                                    }
                                                }
                                            }, [
                                                aiot.__ce__("text", {
                                                    __vm__: _vm_,
                                                    __opts__: {
                                                        classList: [
                                                            "reset-yes-text"
                                                        ],
                                                        value: "确认"
                                                    }
                                                }, [])
                                            ]),
                                            aiot.__ce__("div", {
                                                __vm__: _vm_,
                                                __opts__: {
                                                    classList: [
                                                        "reset-no"
                                                    ],
                                                    events: {
                                                        click: function(evt) {
                                                            return _vm_.cancelReset(evt);
                                                        }
                                                    }
                                                }
                                            }, [
                                                aiot.__ce__("text", {
                                                    __vm__: _vm_,
                                                    __opts__: {
                                                        classList: [
                                                            "reset-no-text"
                                                        ],
                                                        value: "取消"
                                                    }
                                                }, [])
                                            ])
                                        ])
                                    ])
                                ];
                            })
                        ]),
                        aiot.__ce__("div", {
                            __vm__: _vm_,
                            __opts__: {
                                classList: [
                                    "info"
                                ]
                            }
                        }, [
                            aiot.__ce__("text", {
                                __vm__: _vm_,
                                __opts__: {
                                    classList: [
                                        "info-text"
                                    ],
                                    value: "能量收集者 v1.0.6"
                                }
                            }, []),
                            aiot.__ce__("text", {
                                __vm__: _vm_,
                                __opts__: {
                                    classList: [
                                        "info-text"
                                    ],
                                    value: "小米手环10 Pro"
                                }
                            }, [])
                        ]),
                        aiot.__ci__({
                            __vm__: _vm_,
                            __opts__: {
                                shown: function() {
                                    return _vm_.showToast;
                                }
                            }
                        }, function() {
                            return [
                                aiot.__ce__("div", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        classList: [
                                            "toast"
                                        ]
                                    }
                                }, [
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "toast-text"
                                            ],
                                            value: function() {
                                                return _vm_.toastText;
                                            }
                                        }
                                    }, [])
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
