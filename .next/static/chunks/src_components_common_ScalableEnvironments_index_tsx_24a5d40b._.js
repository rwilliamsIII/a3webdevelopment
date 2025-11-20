(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/components/common/ScalableEnvironments/index.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "ScalableEnvironments": (()=>ScalableEnvironments)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/shared/lib/app-dynamic.js [app-client] (ecmascript)");
// Only import motion component - no animation utilities
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
;
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
// Dynamically import the chart component with no SSR
const Chart = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.r("[project]/src/components/common/ScalableEnvironments/ChartComponent.tsx [app-client] (ecmascript, next/dynamic entry, async loader)")(__turbopack_context__.i).then((mod)=>mod.ChartComponent), {
    loadableGenerated: {
        modules: [
            "[project]/src/components/common/ScalableEnvironments/ChartComponent.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false,
    loading: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "h-full w-full flex items-center justify-center text-xs text-neutral-400",
            children: "Loading chart..."
        }, void 0, false, {
            fileName: "[project]/src/components/common/ScalableEnvironments/index.tsx",
            lineNumber: 15,
            columnNumber: 7
        }, this)
});
_c = Chart;
// Sample data with traffic spikes
const generateInitialData = ()=>[
        {
            name: "00:00",
            cpu: 15,
            memory: 20,
            servers: 1
        },
        {
            name: "04:00",
            cpu: 20,
            memory: 30,
            servers: 1
        },
        {
            name: "08:00",
            cpu: 30,
            memory: 35,
            servers: 1
        },
        {
            name: "12:00",
            cpu: 40,
            memory: 45,
            servers: 2
        },
        {
            name: "16:00",
            cpu: 35,
            memory: 40,
            servers: 2
        },
        {
            name: "20:00",
            cpu: 25,
            memory: 30,
            servers: 1
        },
        {
            name: "24:00",
            cpu: 15,
            memory: 25,
            servers: 1
        }
    ];
// Traffic spike scenarios
const scenarios = [
    {
        name: "Normal Traffic",
        data: generateInitialData(),
        message: "Systems Normal",
        serverCount: 2
    },
    {
        name: "Traffic Spike",
        data: [
            {
                name: "00:00",
                cpu: 15,
                memory: 20,
                servers: 1
            },
            {
                name: "04:00",
                cpu: 20,
                memory: 30,
                servers: 1
            },
            {
                name: "08:00",
                cpu: 45,
                memory: 50,
                servers: 2
            },
            {
                name: "12:00",
                cpu: 75,
                memory: 80,
                servers: 4
            },
            {
                name: "16:00",
                cpu: 90,
                memory: 85,
                servers: 5
            },
            {
                name: "20:00",
                cpu: 60,
                memory: 70,
                servers: 3
            },
            {
                name: "24:00",
                cpu: 30,
                memory: 40,
                servers: 2
            }
        ],
        message: "Auto-scaling Activated",
        serverCount: 5
    },
    {
        name: "Scheduled Scale",
        data: [
            {
                name: "00:00",
                cpu: 20,
                memory: 25,
                servers: 1
            },
            {
                name: "04:00",
                cpu: 25,
                memory: 30,
                servers: 1
            },
            {
                name: "08:00",
                cpu: 60,
                memory: 55,
                servers: 3
            },
            {
                name: "12:00",
                cpu: 65,
                memory: 60,
                servers: 3
            },
            {
                name: "16:00",
                cpu: 70,
                memory: 65,
                servers: 3
            },
            {
                name: "20:00",
                cpu: 40,
                memory: 45,
                servers: 2
            },
            {
                name: "24:00",
                cpu: 20,
                memory: 30,
                servers: 1
            }
        ],
        message: "Scheduled Scaling Active",
        serverCount: 3
    }
];
function ScalableEnvironments() {
    _s();
    const [currentScenario, setCurrentScenario] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [data, setData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(scenarios[0].data);
    const [serverCount, setServerCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(scenarios[0].serverCount);
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [isVisible, setIsVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [cycleCount, setCycleCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    // Detect when component is in view
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ScalableEnvironments.useEffect": ()=>{
            const observer = new IntersectionObserver({
                "ScalableEnvironments.useEffect": (entries)=>{
                    if (entries[0].isIntersecting) {
                        setIsVisible(true);
                        observer.disconnect();
                    }
                }
            }["ScalableEnvironments.useEffect"], {
                threshold: 0.2
            });
            if (containerRef.current) {
                observer.observe(containerRef.current);
            }
            return ({
                "ScalableEnvironments.useEffect": ()=>observer.disconnect()
            })["ScalableEnvironments.useEffect"];
        }
    }["ScalableEnvironments.useEffect"], []);
    // Cycle through scenarios when visible
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ScalableEnvironments.useEffect": ()=>{
            if (!isVisible) return;
            const interval = setInterval({
                "ScalableEnvironments.useEffect.interval": ()=>{
                    const nextScenario = (currentScenario + 1) % scenarios.length;
                    setCurrentScenario(nextScenario);
                    // Animate the server count change
                    animateServerCount(scenarios[currentScenario].serverCount, scenarios[nextScenario].serverCount);
                    // Update data with a slight delay for visual effect
                    setTimeout({
                        "ScalableEnvironments.useEffect.interval": ()=>{
                            setData(scenarios[nextScenario].data);
                        }
                    }["ScalableEnvironments.useEffect.interval"], 300);
                    setCycleCount({
                        "ScalableEnvironments.useEffect.interval": (prev)=>prev + 1
                    }["ScalableEnvironments.useEffect.interval"]);
                }
            }["ScalableEnvironments.useEffect.interval"], 5000);
            return ({
                "ScalableEnvironments.useEffect": ()=>clearInterval(interval)
            })["ScalableEnvironments.useEffect"];
        }
    }["ScalableEnvironments.useEffect"], [
        isVisible,
        currentScenario,
        cycleCount
    ]);
    // Animate server count changes
    const animateServerCount = (from, to)=>{
        const duration = 1500; // ms
        const frameRate = 50; // ms
        const steps = duration / frameRate;
        const increment = (to - from) / steps;
        let current = from;
        let step = 0;
        const updateFrame = ()=>{
            if (step++ < steps) {
                current += increment;
                setServerCount(Math.round(current));
                requestAnimationFrame(updateFrame);
            } else {
                setServerCount(to);
            }
        };
        requestAnimationFrame(updateFrame);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: containerRef,
        className: "flex flex-col h-full",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center mb-2 sm:mb-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-1 bg-neutral-200 dark:bg-neutral-700 rounded-lg mr-2",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            fill: "none",
                            viewBox: "0 0 24 24",
                            strokeWidth: 1.5,
                            stroke: "currentColor",
                            className: "w-4 h-4 text-neutral-600 dark:text-neutral-300",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                d: "M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125-1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"
                            }, void 0, false, {
                                fileName: "[project]/src/components/common/ScalableEnvironments/index.tsx",
                                lineNumber: 147,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/common/ScalableEnvironments/index.tsx",
                            lineNumber: 146,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/common/ScalableEnvironments/index.tsx",
                        lineNumber: 145,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-sm sm:text-base font-semibold text-neutral-900 dark:text-neutral-300",
                        children: "Resource Scaling"
                    }, void 0, false, {
                        fileName: "[project]/src/components/common/ScalableEnvironments/index.tsx",
                        lineNumber: 150,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/common/ScalableEnvironments/index.tsx",
                lineNumber: 144,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 bg-white/90 dark:bg-neutral-800/50 rounded-lg border border-neutral-200 dark:border-neutral-700/50 p-2 sm:p-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-[11px] sm:text-xs text-neutral-600 dark:text-neutral-400 mb-2 sm:mb-3",
                        children: "Resource Usage (24h)"
                    }, void 0, false, {
                        fileName: "[project]/src/components/common/ScalableEnvironments/index.tsx",
                        lineNumber: 155,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-[70px] sm:h-[100px]",
                        children: isVisible ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Chart, {
                            data: data
                        }, void 0, false, {
                            fileName: "[project]/src/components/common/ScalableEnvironments/index.tsx",
                            lineNumber: 158,
                            columnNumber: 34
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "h-full w-full flex items-center justify-center text-xs text-neutral-400",
                            children: "Loading..."
                        }, void 0, false, {
                            fileName: "[project]/src/components/common/ScalableEnvironments/index.tsx",
                            lineNumber: 159,
                            columnNumber: 25
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/common/ScalableEnvironments/index.tsx",
                        lineNumber: 156,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/common/ScalableEnvironments/index.tsx",
                lineNumber: 154,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-2 sm:mt-2 rounded-lg border border-neutral-200 dark:border-neutral-700/50 p-2 sm:p-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-1 sm:mb-2 flex justify-between items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-[11px] sm:text-xs text-neutral-600 dark:text-neutral-400",
                                children: "Active Servers"
                            }, void 0, false, {
                                fileName: "[project]/src/components/common/ScalableEnvironments/index.tsx",
                                lineNumber: 169,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-xs sm:text-sm font-medium text-neutral-900 dark:text-neutral-300",
                                children: serverCount
                            }, void 0, false, {
                                fileName: "[project]/src/components/common/ScalableEnvironments/index.tsx",
                                lineNumber: 170,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/common/ScalableEnvironments/index.tsx",
                        lineNumber: 168,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-end h-8 sm:h-10 gap-0.5 sm:gap-1",
                        children: Array.from({
                            length: 5
                        }).map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                className: `flex-1 bg-neutral-100 dark:bg-neutral-800 rounded-xs border border-neutral-200 dark:border-neutral-700/50 relative overflow-hidden ${i < serverCount ? "shadow-xs" : ""}`,
                                animate: {
                                    height: i < serverCount ? '100%' : '30%',
                                    opacity: i < serverCount ? 1 : 0.3
                                },
                                transition: {
                                    duration: 0.8
                                },
                                children: i < serverCount && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    className: "absolute bottom-0 left-0 right-0 bg-neutral-300/40 dark:bg-neutral-700/40",
                                    initial: {
                                        height: '0%'
                                    },
                                    animate: {
                                        height: [
                                            '30%',
                                            '60%',
                                            '40%',
                                            '70%',
                                            '50%'
                                        ]
                                    },
                                    transition: {
                                        repeat: Infinity,
                                        repeatType: "reverse",
                                        duration: 9,
                                        delay: i * 0.8
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/components/common/ScalableEnvironments/index.tsx",
                                    lineNumber: 186,
                                    columnNumber: 33
                                }, this)
                            }, i, false, {
                                fileName: "[project]/src/components/common/ScalableEnvironments/index.tsx",
                                lineNumber: 175,
                                columnNumber: 25
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/common/ScalableEnvironments/index.tsx",
                        lineNumber: 173,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/common/ScalableEnvironments/index.tsx",
                lineNumber: 167,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-1 sm:mt-2 text-[9px] sm:text-[10px] text-neutral-500 flex items-center justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "Auto-scaling Platform"
                    }, void 0, false, {
                        fileName: "[project]/src/components/common/ScalableEnvironments/index.tsx",
                        lineNumber: 204,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-neutral-600 dark:text-neutral-400",
                        children: "Handles Any Load"
                    }, void 0, false, {
                        fileName: "[project]/src/components/common/ScalableEnvironments/index.tsx",
                        lineNumber: 205,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/common/ScalableEnvironments/index.tsx",
                lineNumber: 203,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/common/ScalableEnvironments/index.tsx",
        lineNumber: 143,
        columnNumber: 9
    }, this);
}
_s(ScalableEnvironments, "R+RhuUOkCIzQWpSmuk5t+rAuX5s=");
_c1 = ScalableEnvironments;
var _c, _c1;
__turbopack_context__.k.register(_c, "Chart");
__turbopack_context__.k.register(_c1, "ScalableEnvironments");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/common/ScalableEnvironments/index.tsx [app-client] (ecmascript, next/dynamic entry)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/src/components/common/ScalableEnvironments/index.tsx [app-client] (ecmascript)"));
}}),
}]);

//# sourceMappingURL=src_components_common_ScalableEnvironments_index_tsx_24a5d40b._.js.map