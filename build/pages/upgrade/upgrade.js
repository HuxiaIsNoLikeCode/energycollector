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
                            paddingTop: "15px"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "header"
                            ]
                        ],
                        {
                            flexDirection: "row",
                            justifyContent: "space-between",
                            alignItems: "center",
                            width: "170px",
                            marginBottom: "15px"
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
                            fontWeight: "bold"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "energy"
                            ]
                        ],
                        {
                            fontSize: "14px",
                            color: "#ffff00"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "upgrade-list"
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
                                "upgrade-item"
                            ]
                        ],
                        {
                            flexDirection: "row",
                            justifyContent: "space-between",
                            alignItems: "center",
                            width: "170px",
                            height: "50px",
                            marginBottom: "8px",
                            paddingLeft: "10px",
                            paddingRight: "10px",
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
                            backgroundColor: "rgba(0, 255, 255, 0.05)"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "item-info"
                            ]
                        ],
                        {
                            flexDirection: "column"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "item-name"
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
                                "item-level"
                            ]
                        ],
                        {
                            fontSize: "11px",
                            color: "#ff00ff",
                            marginTop: "2px"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "item-cost"
                            ]
                        ],
                        {
                            fontSize: "13px",
                            color: "#ffff00"
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
                            width: "170px",
                            marginTop: "10px",
                            paddingTop: "10px",
                            paddingRight: "10px",
                            paddingBottom: "10px",
                            paddingLeft: "10px",
                            borderTopColor: "#ff00ff",
                            borderRightColor: "#ff00ff",
                            borderBottomColor: "#ff00ff",
                            borderLeftColor: "#ff00ff",
                            borderStyle: "solid",
                            borderTopWidth: "1px",
                            borderRightWidth: "1px",
                            borderBottomWidth: "1px",
                            borderLeftWidth: "1px",
                            borderRadius: "4px",
                            backgroundColor: "rgba(255, 0, 255, 0.05)"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "stats-title"
                            ]
                        ],
                        {
                            fontSize: "14px",
                            color: "#ff00ff",
                            fontWeight: "bold",
                            marginBottom: "8px"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "stats-item"
                            ]
                        ],
                        {
                            fontSize: "12px",
                            color: "#00ffff",
                            marginBottom: "4px"
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
                            energy: 0,
                            upgrades: {
                                speed: 0,
                                range: 0,
                                efficiency: 0,
                                cooldown: 0
                            },
                            showToast: false,
                            toastText: ''
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
                                        self.energy = saved.energy || 0;
                                        self.upgrades = {
                                            speed: saved.upgrades ? saved.upgrades.speed || 0 : 0,
                                            range: saved.upgrades ? saved.upgrades.range || 0 : 0,
                                            efficiency: saved.upgrades ? saved.upgrades.efficiency || 0 : 0,
                                            cooldown: saved.upgrades ? saved.upgrades.cooldown || 0 : 0
                                        };
                                        self._syncToApp();
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
                                this.energy = app.gameState.energy || 0;
                                this.upgrades = {
                                    speed: app.gameState.upgrades.speed || 0,
                                    range: app.gameState.upgrades.range || 0,
                                    efficiency: app.gameState.upgrades.efficiency || 0,
                                    cooldown: app.gameState.upgrades.cooldown || 0
                                };
                            }
                        },
                        _syncToApp () {
                            try {
                                var app = this.$app;
                                if (app && app.gameState) {
                                    app.gameState.energy = this.energy;
                                    app.gameState.upgrades = this.upgrades;
                                }
                            } catch (e) {}
                        },
                        upgrade (type) {
                            var costs = {
                                speed: 100,
                                range: 150,
                                efficiency: 200,
                                cooldown: 250
                            };
                            var cost = costs[type];
                            if (this.energy >= cost) {
                                this.energy -= cost;
                                this.upgrades[type]++;
                                var saveData = JSON.stringify({
                                    highScore: 0,
                                    energy: this.energy,
                                    upgrades: this.upgrades
                                });
                                var self = this;
                                _system2.default.get({
                                    key: 'gameData',
                                    success: function(data) {
                                        try {
                                            var existing = JSON.parse(data);
                                            saveData = JSON.stringify({
                                                highScore: existing.highScore || 0,
                                                energy: self.energy,
                                                upgrades: self.upgrades
                                            });
                                        } catch (e) {}
                                        _system2.default.set({
                                            key: 'gameData',
                                            value: saveData
                                        });
                                        self._syncToApp();
                                    },
                                    fail: function() {
                                        _system2.default.set({
                                            key: 'gameData',
                                            value: saveData
                                        });
                                        self._syncToApp();
                                    }
                                });
                                this.showToastMsg('升级成功!');
                                this.vibrateShort();
                            } else {
                                this.showToastMsg('能量不足');
                                this.vibrateLong();
                            }
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
                        },
                        vibrateLong () {
                            try {
                                _system.default.vibrate({
                                    mode: 'long'
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
                                    "header"
                                ]
                            }
                        }, [
                            aiot.__ce__("text", {
                                __vm__: _vm_,
                                __opts__: {
                                    classList: [
                                        "title"
                                    ],
                                    value: "能力升级"
                                }
                            }, []),
                            aiot.__ce__("text", {
                                __vm__: _vm_,
                                __opts__: {
                                    classList: [
                                        "energy"
                                    ],
                                    value: function() {
                                        return "能量: " + _vm_.energy;
                                    }
                                }
                            }, [])
                        ]),
                        aiot.__ce__("div", {
                            __vm__: _vm_,
                            __opts__: {
                                classList: [
                                    "upgrade-list"
                                ]
                            }
                        }, [
                            aiot.__ce__("div", {
                                __vm__: _vm_,
                                __opts__: {
                                    classList: [
                                        "upgrade-item"
                                    ],
                                    events: {
                                        click: function(evt) {
                                            return _vm_.upgrade("speed", evt);
                                        }
                                    }
                                }
                            }, [
                                aiot.__ce__("div", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        classList: [
                                            "item-info"
                                        ]
                                    }
                                }, [
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "item-name"
                                            ],
                                            value: "移动速度"
                                        }
                                    }, []),
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "item-level"
                                            ],
                                            value: function() {
                                                return "Lv." + _vm_.upgrades.speed;
                                            }
                                        }
                                    }, [])
                                ]),
                                aiot.__ce__("text", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        classList: [
                                            "item-cost"
                                        ],
                                        value: "100 ⚡"
                                    }
                                }, [])
                            ]),
                            aiot.__ce__("div", {
                                __vm__: _vm_,
                                __opts__: {
                                    classList: [
                                        "upgrade-item"
                                    ],
                                    events: {
                                        click: function(evt) {
                                            return _vm_.upgrade("range", evt);
                                        }
                                    }
                                }
                            }, [
                                aiot.__ce__("div", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        classList: [
                                            "item-info"
                                        ]
                                    }
                                }, [
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "item-name"
                                            ],
                                            value: "收集范围"
                                        }
                                    }, []),
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "item-level"
                                            ],
                                            value: function() {
                                                return "Lv." + _vm_.upgrades.range;
                                            }
                                        }
                                    }, [])
                                ]),
                                aiot.__ce__("text", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        classList: [
                                            "item-cost"
                                        ],
                                        value: "150 ⚡"
                                    }
                                }, [])
                            ]),
                            aiot.__ce__("div", {
                                __vm__: _vm_,
                                __opts__: {
                                    classList: [
                                        "upgrade-item"
                                    ],
                                    events: {
                                        click: function(evt) {
                                            return _vm_.upgrade("efficiency", evt);
                                        }
                                    }
                                }
                            }, [
                                aiot.__ce__("div", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        classList: [
                                            "item-info"
                                        ]
                                    }
                                }, [
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "item-name"
                                            ],
                                            value: "吸收效率"
                                        }
                                    }, []),
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "item-level"
                                            ],
                                            value: function() {
                                                return "Lv." + _vm_.upgrades.efficiency;
                                            }
                                        }
                                    }, [])
                                ]),
                                aiot.__ce__("text", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        classList: [
                                            "item-cost"
                                        ],
                                        value: "200 ⚡"
                                    }
                                }, [])
                            ]),
                            aiot.__ce__("div", {
                                __vm__: _vm_,
                                __opts__: {
                                    classList: [
                                        "upgrade-item"
                                    ],
                                    events: {
                                        click: function(evt) {
                                            return _vm_.upgrade("cooldown", evt);
                                        }
                                    }
                                }
                            }, [
                                aiot.__ce__("div", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        classList: [
                                            "item-info"
                                        ]
                                    }
                                }, [
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "item-name"
                                            ],
                                            value: "技能冷却"
                                        }
                                    }, []),
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "item-level"
                                            ],
                                            value: function() {
                                                return "Lv." + _vm_.upgrades.cooldown;
                                            }
                                        }
                                    }, [])
                                ]),
                                aiot.__ce__("text", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        classList: [
                                            "item-cost"
                                        ],
                                        value: "250 ⚡"
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
                                        "stats-title"
                                    ],
                                    value: "当前属性"
                                }
                            }, []),
                            aiot.__ce__("text", {
                                __vm__: _vm_,
                                __opts__: {
                                    classList: [
                                        "stats-item"
                                    ],
                                    value: function() {
                                        return "操控: +" + 0.5 * _vm_.upgrades.speed + " 倾斜范围";
                                    }
                                }
                            }, []),
                            aiot.__ce__("text", {
                                __vm__: _vm_,
                                __opts__: {
                                    classList: [
                                        "stats-item"
                                    ],
                                    value: function() {
                                        return "范围: +" + 8 * _vm_.upgrades.range + "px 收集";
                                    }
                                }
                            }, []),
                            aiot.__ce__("text", {
                                __vm__: _vm_,
                                __opts__: {
                                    classList: [
                                        "stats-item"
                                    ],
                                    value: function() {
                                        return "效率: +" + 30 * _vm_.upgrades.efficiency + "% 能量";
                                    }
                                }
                            }, []),
                            aiot.__ce__("text", {
                                __vm__: _vm_,
                                __opts__: {
                                    classList: [
                                        "stats-item"
                                    ],
                                    value: function() {
                                        return "冷却: -" + _vm_.upgrades.cooldown + "s 技能CD";
                                    }
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
