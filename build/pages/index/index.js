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
                            paddingTop: "50px"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "title-area"
                            ]
                        ],
                        {
                            flexDirection: "column",
                            alignItems: "center",
                            marginBottom: "30px"
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
                            fontSize: "22px",
                            color: "#00ffff",
                            fontWeight: "bold"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "subtitle"
                            ]
                        ],
                        {
                            fontSize: "10px",
                            color: "#ff00ff",
                            marginTop: "5px"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "menu"
                            ]
                        ],
                        {
                            flexDirection: "column",
                            alignItems: "center"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "btn"
                            ]
                        ],
                        {
                            width: "130px",
                            height: "40px",
                            marginBottom: "12px",
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
                            backgroundColor: "rgba(0, 255, 255, 0.1)",
                            justifyContent: "center",
                            alignItems: "center"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "btn-text"
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
                                "stats"
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
                                "stat"
                            ]
                        ],
                        {
                            fontSize: "12px",
                            color: "#888888",
                            marginBottom: "4px"
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
                    var _system2 = _interopRequireDefault($app_require$1("@app-module/system.storage"));
                    function _interopRequireDefault(e) {
                        return e && e.__esModule ? e : {
                            default: e
                        };
                    }
                    var _default = exports.default = {
                        data: {
                            highScore: 0,
                            energy: 0
                        },
                        onInit () {
                            var self = this;
                            var app = this.$app;
                            if (app && app.onDataReady) app.onDataReady(function() {
                                self.loadData();
                            });
                        },
                        onShow () {
                            this.loadData();
                        },
                        loadData () {
                            var self = this;
                            _system2.default.get({
                                key: 'gameData',
                                success: function(data) {
                                    try {
                                        var saved = JSON.parse(data);
                                        self.highScore = saved.highScore || 0;
                                        self.energy = saved.energy || 0;
                                        try {
                                            var app = self.$app;
                                            if (app && app.gameState) {
                                                app.gameState.highScore = self.highScore;
                                                app.gameState.energy = self.energy;
                                            }
                                        } catch (e) {}
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
                            if (app && app.gameState) {
                                this.highScore = app.gameState.highScore || 0;
                                this.energy = app.gameState.energy || 0;
                            }
                        },
                        startGame () {
                            _system.default.push({
                                uri: '/pages/game'
                            });
                        },
                        goUpgrade () {
                            _system.default.push({
                                uri: '/pages/upgrade'
                            });
                        },
                        goSettings () {
                            _system.default.push({
                                uri: '/pages/settings'
                            });
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
                                    "title-area"
                                ]
                            }
                        }, [
                            aiot.__ce__("text", {
                                __vm__: _vm_,
                                __opts__: {
                                    classList: [
                                        "title"
                                    ],
                                    value: "能量收集者"
                                }
                            }, []),
                            aiot.__ce__("text", {
                                __vm__: _vm_,
                                __opts__: {
                                    classList: [
                                        "subtitle"
                                    ],
                                    value: "ENERGY COLLECTOR"
                                }
                            }, [])
                        ]),
                        aiot.__ce__("div", {
                            __vm__: _vm_,
                            __opts__: {
                                classList: [
                                    "menu"
                                ]
                            }
                        }, [
                            aiot.__ce__("div", {
                                __vm__: _vm_,
                                __opts__: {
                                    classList: [
                                        "btn"
                                    ],
                                    events: {
                                        click: function(evt) {
                                            return _vm_.startGame(evt);
                                        }
                                    }
                                }
                            }, [
                                aiot.__ce__("text", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        classList: [
                                            "btn-text"
                                        ],
                                        value: "开始游戏"
                                    }
                                }, [])
                            ]),
                            aiot.__ce__("div", {
                                __vm__: _vm_,
                                __opts__: {
                                    classList: [
                                        "btn"
                                    ],
                                    events: {
                                        click: function(evt) {
                                            return _vm_.goUpgrade(evt);
                                        }
                                    }
                                }
                            }, [
                                aiot.__ce__("text", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        classList: [
                                            "btn-text"
                                        ],
                                        value: "能力升级"
                                    }
                                }, [])
                            ]),
                            aiot.__ce__("div", {
                                __vm__: _vm_,
                                __opts__: {
                                    classList: [
                                        "btn"
                                    ],
                                    events: {
                                        click: function(evt) {
                                            return _vm_.goSettings(evt);
                                        }
                                    }
                                }
                            }, [
                                aiot.__ce__("text", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        classList: [
                                            "btn-text"
                                        ],
                                        value: "设置"
                                    }
                                }, [])
                            ])
                        ]),
                        aiot.__ce__("div", {
                            __vm__: _vm_,
                            __opts__: {
                                classList: [
                                    "stats"
                                ]
                            }
                        }, [
                            aiot.__ce__("text", {
                                __vm__: _vm_,
                                __opts__: {
                                    classList: [
                                        "stat"
                                    ],
                                    value: function() {
                                        return "最高分: " + _vm_.highScore;
                                    }
                                }
                            }, []),
                            aiot.__ce__("text", {
                                __vm__: _vm_,
                                __opts__: {
                                    classList: [
                                        "stat"
                                    ],
                                    value: function() {
                                        return "能量: " + _vm_.energy;
                                    }
                                }
                            }, [])
                        ])
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
