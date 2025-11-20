(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/components/common/TextGenerateEffect.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
/* eslint-disable react-hooks/exhaustive-deps */ __turbopack_context__.s({
    "TextGenerateEffect": (()=>TextGenerateEffect)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
// Only import the specific functions needed
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$utils$2f$stagger$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/animation/utils/stagger.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$hooks$2f$use$2d$animate$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/animation/hooks/use-animate.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const TextGenerateEffect = ({ words, className, filter = true, duration = 0.5, speed = 0.2 })=>{
    _s();
    const [scope, animate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$hooks$2f$use$2d$animate$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAnimate"])();
    const wordsArray = words.split(" ");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TextGenerateEffect.useEffect": ()=>{
            animate("span", {
                opacity: 1,
                filter: filter ? "blur(0px)" : "none"
            }, {
                duration: duration ? duration : 1,
                delay: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$utils$2f$stagger$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stagger"])(speed)
            });
        }
    }["TextGenerateEffect.useEffect"], [
        scope.current,
        animate,
        duration,
        filter,
        speed
    ]);
    const renderWords = ()=>{
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            ref: scope,
            children: wordsArray.map((word, idx)=>{
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                    className: "opacity-0",
                    style: {
                        filter: filter ? "blur(10px)" : "none"
                    },
                    children: [
                        word,
                        " "
                    ]
                }, word + idx, true, {
                    fileName: "[project]/src/components/common/TextGenerateEffect.tsx",
                    lineNumber: 44,
                    columnNumber: 13
                }, this);
            })
        }, void 0, false, {
            fileName: "[project]/src/components/common/TextGenerateEffect.tsx",
            lineNumber: 41,
            columnNumber: 7
        }, this);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("font-bold", className),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mt-4",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: renderWords()
            }, void 0, false, {
                fileName: "[project]/src/components/common/TextGenerateEffect.tsx",
                lineNumber: 62,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/common/TextGenerateEffect.tsx",
            lineNumber: 61,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/common/TextGenerateEffect.tsx",
        lineNumber: 60,
        columnNumber: 5
    }, this);
};
_s(TextGenerateEffect, "crQrtxD822sFKyor5CO2nze/XGc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$hooks$2f$use$2d$animate$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAnimate"]
    ];
});
_c = TextGenerateEffect;
var _c;
__turbopack_context__.k.register(_c, "TextGenerateEffect");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/pages/home/HomeSection1/Content.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>HomeSection1Content)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$TextGenerateEffect$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/common/TextGenerateEffect.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
"use client";
;
;
;
;
function HomeSection1Content() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative flex items-center justify-center pt-6 pb-10 sm:pt-20 sm:pb-[90px] w-full",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative z-10 text-start px-4 md:px-6 w-full mx-auto max-w-[1300px]",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    layout: true,
                    className: "flex flex-col sm:flex-row gap-2 sm:gap-4 justify-start",
                    initial: {
                        opacity: 0
                    },
                    animate: {
                        opacity: 1
                    },
                    transition: {
                        duration: 0.2,
                        ease: [
                            0.22,
                            1,
                            0.36,
                            1
                        ]
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        "aria-label": "Build and launch in minutes, not days",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$TextGenerateEffect$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TextGenerateEffect"], {
                            duration: 0.3,
                            speed: 0.05,
                            className: "text-4xl  sm:text-5xl md:text-6xl lg:text-[62px] lg:leading-[100%] tracking-tight text-[var(--foreground)]",
                            words: "Building Websites"
                        }, void 0, false, {
                            fileName: "[project]/src/components/pages/home/HomeSection1/Content.tsx",
                            lineNumber: 23,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/pages/home/HomeSection1/Content.tsx",
                        lineNumber: 22,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/pages/home/HomeSection1/Content.tsx",
                    lineNumber: 12,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    layout: true,
                    className: "flex flex-col sm:flex-row gap-2 sm:gap-4 justify-start",
                    initial: {
                        opacity: 0
                    },
                    animate: {
                        opacity: 1
                    },
                    transition: {
                        duration: 0.3,
                        ease: [
                            0.22,
                            1,
                            0.36,
                            1
                        ]
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$TextGenerateEffect$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TextGenerateEffect"], {
                        duration: 0.5,
                        speed: 0.2,
                        className: "text-4xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-[62px] lg:leading-[70%] mb-4 sm:mb-6 tracking-tight text-[var(--foreground)]",
                        words: "that build your business."
                    }, void 0, false, {
                        fileName: "[project]/src/components/pages/home/HomeSection1/Content.tsx",
                        lineNumber: 42,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/pages/home/HomeSection1/Content.tsx",
                    lineNumber: 32,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
                    layout: true,
                    initial: {
                        opacity: 0,
                        y: 20
                    },
                    animate: {
                        opacity: 1,
                        y: 0
                    },
                    transition: {
                        duration: 0.3
                    },
                    className: "max-w-full sm:max-w-[660px] text-base xs:text-lg md:text-xl text-neutral-700 dark:text-neutral-300 mb-6 sm:mb-8",
                    children: "Every click, every scroll, built to grow your brand."
                }, void 0, false, {
                    fileName: "[project]/src/components/pages/home/HomeSection1/Content.tsx",
                    lineNumber: 50,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-6 sm:mt-8 flex flex-col xs:flex-row gap-3 sm:gap-4 justify-start w-full",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            variant: "default",
                            "aria-label": "Get started with our platform",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "https://www.a3marketing.com/contact-us",
                                children: "Get Started"
                            }, void 0, false, {
                                fileName: "[project]/src/components/pages/home/HomeSection1/Content.tsx",
                                lineNumber: 64,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/pages/home/HomeSection1/Content.tsx",
                            lineNumber: 63,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            variant: "outline",
                            "aria-label": "Learn more about our features",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "#view-our-work",
                                children: "Learn More"
                            }, void 0, false, {
                                fileName: "[project]/src/components/pages/home/HomeSection1/Content.tsx",
                                lineNumber: 68,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/pages/home/HomeSection1/Content.tsx",
                            lineNumber: 67,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/pages/home/HomeSection1/Content.tsx",
                    lineNumber: 60,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/pages/home/HomeSection1/Content.tsx",
            lineNumber: 10,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/pages/home/HomeSection1/Content.tsx",
        lineNumber: 9,
        columnNumber: 5
    }, this);
}
_c = HomeSection1Content;
var _c;
__turbopack_context__.k.register(_c, "HomeSection1Content");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/pages/home/HomeSection1/Content.tsx [app-client] (ecmascript, next/dynamic entry)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/src/components/pages/home/HomeSection1/Content.tsx [app-client] (ecmascript)"));
}}),
"[project]/node_modules/framer-motion/dist/es/animation/utils/stagger.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "getOriginIndex": (()=>getOriginIndex),
    "stagger": (()=>stagger)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$easing$2f$utils$2f$map$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/easing/utils/map.mjs [app-client] (ecmascript)");
;
function getOriginIndex(from, total) {
    if (from === "first") {
        return 0;
    } else {
        const lastIndex = total - 1;
        return from === "last" ? lastIndex : lastIndex / 2;
    }
}
function stagger(duration = 0.1, { startDelay = 0, from = 0, ease } = {}) {
    return (i, total)=>{
        const fromIndex = typeof from === "number" ? from : getOriginIndex(from, total);
        const distance = Math.abs(fromIndex - i);
        let delay = duration * distance;
        if (ease) {
            const maxDelay = total * duration;
            const easingFunction = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$easing$2f$utils$2f$map$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["easingDefinitionToFunction"])(ease);
            delay = easingFunction(delay / maxDelay) * maxDelay;
        }
        return startDelay + delay;
    };
}
;
}}),
"[project]/node_modules/framer-motion/dist/es/utils/use-unmount-effect.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "useUnmountEffect": (()=>useUnmountEffect)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
function useUnmountEffect(callback) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useUnmountEffect.useEffect": ()=>({
                "useUnmountEffect.useEffect": ()=>callback()
            })["useUnmountEffect.useEffect"]
    }["useUnmountEffect.useEffect"], []);
}
;
}}),
"[project]/node_modules/framer-motion/dist/es/utils/wrap.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "wrap": (()=>wrap)
});
const wrap = (min, max, v)=>{
    const rangeSize = max - min;
    return ((v - min) % rangeSize + rangeSize) % rangeSize + min;
};
;
}}),
"[project]/node_modules/framer-motion/dist/es/easing/utils/get-easing-for-segment.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "getEasingForSegment": (()=>getEasingForSegment)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$wrap$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/utils/wrap.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$easing$2f$utils$2f$is$2d$easing$2d$array$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/easing/utils/is-easing-array.mjs [app-client] (ecmascript)");
;
;
function getEasingForSegment(easing, i) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$easing$2f$utils$2f$is$2d$easing$2d$array$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isEasingArray"])(easing) ? easing[(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$wrap$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["wrap"])(0, easing.length, i)] : easing;
}
;
}}),
"[project]/node_modules/framer-motion/dist/es/animation/utils/is-dom-keyframes.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "isDOMKeyframes": (()=>isDOMKeyframes)
});
function isDOMKeyframes(keyframes) {
    return typeof keyframes === "object" && !Array.isArray(keyframes);
}
;
}}),
"[project]/node_modules/framer-motion/dist/es/animation/animate/resolve-subjects.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "resolveSubjects": (()=>resolveSubjects)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/motion-dom/dist/es/index.mjs [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$resolve$2d$elements$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/motion-dom/dist/es/utils/resolve-elements.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$utils$2f$is$2d$dom$2d$keyframes$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/animation/utils/is-dom-keyframes.mjs [app-client] (ecmascript)");
;
;
function resolveSubjects(subject, keyframes, scope, selectorCache) {
    if (typeof subject === "string" && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$utils$2f$is$2d$dom$2d$keyframes$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isDOMKeyframes"])(keyframes)) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$resolve$2d$elements$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveElements"])(subject, scope, selectorCache);
    } else if (subject instanceof NodeList) {
        return Array.from(subject);
    } else if (Array.isArray(subject)) {
        return subject;
    } else {
        return [
            subject
        ];
    }
}
;
}}),
"[project]/node_modules/framer-motion/dist/es/animation/sequence/utils/calc-repeat-duration.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "calculateRepeatDuration": (()=>calculateRepeatDuration)
});
function calculateRepeatDuration(duration, repeat, _repeatDelay) {
    return duration * (repeat + 1);
}
;
}}),
"[project]/node_modules/framer-motion/dist/es/animation/sequence/utils/calc-time.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/**
 * Given a absolute or relative time definition and current/prev time state of the sequence,
 * calculate an absolute time for the next keyframes.
 */ __turbopack_context__.s({
    "calcNextTime": (()=>calcNextTime)
});
function calcNextTime(current, next, prev, labels) {
    var _a;
    if (typeof next === "number") {
        return next;
    } else if (next.startsWith("-") || next.startsWith("+")) {
        return Math.max(0, current + parseFloat(next));
    } else if (next === "<") {
        return prev;
    } else {
        return (_a = labels.get(next)) !== null && _a !== void 0 ? _a : current;
    }
}
;
}}),
"[project]/node_modules/framer-motion/dist/es/animation/sequence/utils/edit.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "addKeyframes": (()=>addKeyframes),
    "eraseKeyframes": (()=>eraseKeyframes)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$easing$2f$utils$2f$get$2d$easing$2d$for$2d$segment$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/easing/utils/get-easing-for-segment.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$array$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/utils/array.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$mix$2f$number$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/utils/mix/number.mjs [app-client] (ecmascript)");
;
;
;
function eraseKeyframes(sequence, startTime, endTime) {
    for(let i = 0; i < sequence.length; i++){
        const keyframe = sequence[i];
        if (keyframe.at > startTime && keyframe.at < endTime) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$array$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["removeItem"])(sequence, keyframe);
            // If we remove this item we have to push the pointer back one
            i--;
        }
    }
}
function addKeyframes(sequence, keyframes, easing, offset, startTime, endTime) {
    /**
     * Erase every existing value between currentTime and targetTime,
     * this will essentially splice this timeline into any currently
     * defined ones.
     */ eraseKeyframes(sequence, startTime, endTime);
    for(let i = 0; i < keyframes.length; i++){
        sequence.push({
            value: keyframes[i],
            at: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$mix$2f$number$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mixNumber"])(startTime, endTime, offset[i]),
            easing: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$easing$2f$utils$2f$get$2d$easing$2d$for$2d$segment$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getEasingForSegment"])(easing, i)
        });
    }
}
;
}}),
"[project]/node_modules/framer-motion/dist/es/animation/sequence/utils/normalize-times.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/**
 * Take an array of times that represent repeated keyframes. For instance
 * if we have original times of [0, 0.5, 1] then our repeated times will
 * be [0, 0.5, 1, 1, 1.5, 2]. Loop over the times and scale them back
 * down to a 0-1 scale.
 */ __turbopack_context__.s({
    "normalizeTimes": (()=>normalizeTimes)
});
function normalizeTimes(times, repeat) {
    for(let i = 0; i < times.length; i++){
        times[i] = times[i] / (repeat + 1);
    }
}
;
}}),
"[project]/node_modules/framer-motion/dist/es/animation/sequence/utils/sort.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "compareByTime": (()=>compareByTime)
});
function compareByTime(a, b) {
    if (a.at === b.at) {
        if (a.value === null) return 1;
        if (b.value === null) return -1;
        return 0;
    } else {
        return a.at - b.at;
    }
}
;
}}),
"[project]/node_modules/framer-motion/dist/es/animation/sequence/create.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "createAnimationsFromSequence": (()=>createAnimationsFromSequence),
    "getValueTransition": (()=>getValueTransition)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/motion-dom/dist/es/index.mjs [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$generators$2f$utils$2f$is$2d$generator$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/motion-dom/dist/es/animation/generators/utils/is-generator.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$generators$2f$utils$2f$create$2d$generator$2d$easing$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/motion-dom/dist/es/animation/generators/utils/create-generator-easing.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/motion-utils/dist/es/index.mjs [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$progress$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/motion-utils/dist/es/progress.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$time$2d$conversion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/motion-utils/dist/es/time-conversion.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$errors$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/motion-utils/dist/es/errors.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$easing$2f$utils$2f$get$2d$easing$2d$for$2d$segment$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/easing/utils/get-easing-for-segment.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$offsets$2f$default$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/utils/offsets/default.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$offsets$2f$fill$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/utils/offsets/fill.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$utils$2f$is$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/utils/is-motion-value.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$animate$2f$resolve$2d$subjects$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/animation/animate/resolve-subjects.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$sequence$2f$utils$2f$calc$2d$repeat$2d$duration$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/animation/sequence/utils/calc-repeat-duration.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$sequence$2f$utils$2f$calc$2d$time$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/animation/sequence/utils/calc-time.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$sequence$2f$utils$2f$edit$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/animation/sequence/utils/edit.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$sequence$2f$utils$2f$normalize$2d$times$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/animation/sequence/utils/normalize-times.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$sequence$2f$utils$2f$sort$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/animation/sequence/utils/sort.mjs [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
const defaultSegmentEasing = "easeInOut";
const MAX_REPEAT = 20;
function createAnimationsFromSequence(sequence, { defaultTransition = {}, ...sequenceTransition } = {}, scope, generators) {
    const defaultDuration = defaultTransition.duration || 0.3;
    const animationDefinitions = new Map();
    const sequences = new Map();
    const elementCache = {};
    const timeLabels = new Map();
    let prevTime = 0;
    let currentTime = 0;
    let totalDuration = 0;
    /**
     * Build the timeline by mapping over the sequence array and converting
     * the definitions into keyframes and offsets with absolute time values.
     * These will later get converted into relative offsets in a second pass.
     */ for(let i = 0; i < sequence.length; i++){
        const segment = sequence[i];
        /**
         * If this is a timeline label, mark it and skip the rest of this iteration.
         */ if (typeof segment === "string") {
            timeLabels.set(segment, currentTime);
            continue;
        } else if (!Array.isArray(segment)) {
            timeLabels.set(segment.name, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$sequence$2f$utils$2f$calc$2d$time$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calcNextTime"])(currentTime, segment.at, prevTime, timeLabels));
            continue;
        }
        let [subject, keyframes, transition = {}] = segment;
        /**
         * If a relative or absolute time value has been specified we need to resolve
         * it in relation to the currentTime.
         */ if (transition.at !== undefined) {
            currentTime = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$sequence$2f$utils$2f$calc$2d$time$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calcNextTime"])(currentTime, transition.at, prevTime, timeLabels);
        }
        /**
         * Keep track of the maximum duration in this definition. This will be
         * applied to currentTime once the definition has been parsed.
         */ let maxDuration = 0;
        const resolveValueSequence = (valueKeyframes, valueTransition, valueSequence, elementIndex = 0, numSubjects = 0)=>{
            const valueKeyframesAsList = keyframesAsList(valueKeyframes);
            const { delay = 0, times = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$offsets$2f$default$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaultOffset"])(valueKeyframesAsList), type = "keyframes", repeat, repeatType, repeatDelay = 0, ...remainingTransition } = valueTransition;
            let { ease = defaultTransition.ease || "easeOut", duration } = valueTransition;
            /**
             * Resolve stagger() if defined.
             */ const calculatedDelay = typeof delay === "function" ? delay(elementIndex, numSubjects) : delay;
            /**
             * If this animation should and can use a spring, generate a spring easing function.
             */ const numKeyframes = valueKeyframesAsList.length;
            const createGenerator = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$generators$2f$utils$2f$is$2d$generator$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isGenerator"])(type) ? type : generators === null || generators === void 0 ? void 0 : generators[type];
            if (numKeyframes <= 2 && createGenerator) {
                /**
                 * As we're creating an easing function from a spring,
                 * ideally we want to generate it using the real distance
                 * between the two keyframes. However this isn't always
                 * possible - in these situations we use 0-100.
                 */ let absoluteDelta = 100;
                if (numKeyframes === 2 && isNumberKeyframesArray(valueKeyframesAsList)) {
                    const delta = valueKeyframesAsList[1] - valueKeyframesAsList[0];
                    absoluteDelta = Math.abs(delta);
                }
                const springTransition = {
                    ...remainingTransition
                };
                if (duration !== undefined) {
                    springTransition.duration = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$time$2d$conversion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["secondsToMilliseconds"])(duration);
                }
                const springEasing = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$generators$2f$utils$2f$create$2d$generator$2d$easing$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createGeneratorEasing"])(springTransition, absoluteDelta, createGenerator);
                ease = springEasing.ease;
                duration = springEasing.duration;
            }
            duration !== null && duration !== void 0 ? duration : duration = defaultDuration;
            const startTime = currentTime + calculatedDelay;
            /**
             * If there's only one time offset of 0, fill in a second with length 1
             */ if (times.length === 1 && times[0] === 0) {
                times[1] = 1;
            }
            /**
             * Fill out if offset if fewer offsets than keyframes
             */ const remainder = times.length - valueKeyframesAsList.length;
            remainder > 0 && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$offsets$2f$fill$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fillOffset"])(times, remainder);
            /**
             * If only one value has been set, ie [1], push a null to the start of
             * the keyframe array. This will let us mark a keyframe at this point
             * that will later be hydrated with the previous value.
             */ valueKeyframesAsList.length === 1 && valueKeyframesAsList.unshift(null);
            /**
             * Handle repeat options
             */ if (repeat) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$errors$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["invariant"])(repeat < MAX_REPEAT, "Repeat count too high, must be less than 20");
                duration = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$sequence$2f$utils$2f$calc$2d$repeat$2d$duration$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calculateRepeatDuration"])(duration, repeat);
                const originalKeyframes = [
                    ...valueKeyframesAsList
                ];
                const originalTimes = [
                    ...times
                ];
                ease = Array.isArray(ease) ? [
                    ...ease
                ] : [
                    ease
                ];
                const originalEase = [
                    ...ease
                ];
                for(let repeatIndex = 0; repeatIndex < repeat; repeatIndex++){
                    valueKeyframesAsList.push(...originalKeyframes);
                    for(let keyframeIndex = 0; keyframeIndex < originalKeyframes.length; keyframeIndex++){
                        times.push(originalTimes[keyframeIndex] + (repeatIndex + 1));
                        ease.push(keyframeIndex === 0 ? "linear" : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$easing$2f$utils$2f$get$2d$easing$2d$for$2d$segment$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getEasingForSegment"])(originalEase, keyframeIndex - 1));
                    }
                }
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$sequence$2f$utils$2f$normalize$2d$times$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeTimes"])(times, repeat);
            }
            const targetTime = startTime + duration;
            /**
             * Add keyframes, mapping offsets to absolute time.
             */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$sequence$2f$utils$2f$edit$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addKeyframes"])(valueSequence, valueKeyframesAsList, ease, times, startTime, targetTime);
            maxDuration = Math.max(calculatedDelay + duration, maxDuration);
            totalDuration = Math.max(targetTime, totalDuration);
        };
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$utils$2f$is$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isMotionValue"])(subject)) {
            const subjectSequence = getSubjectSequence(subject, sequences);
            resolveValueSequence(keyframes, transition, getValueSequence("default", subjectSequence));
        } else {
            const subjects = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$animate$2f$resolve$2d$subjects$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveSubjects"])(subject, keyframes, scope, elementCache);
            const numSubjects = subjects.length;
            /**
             * For every element in this segment, process the defined values.
             */ for(let subjectIndex = 0; subjectIndex < numSubjects; subjectIndex++){
                /**
                 * Cast necessary, but we know these are of this type
                 */ keyframes = keyframes;
                transition = transition;
                const thisSubject = subjects[subjectIndex];
                const subjectSequence = getSubjectSequence(thisSubject, sequences);
                for(const key in keyframes){
                    resolveValueSequence(keyframes[key], getValueTransition(transition, key), getValueSequence(key, subjectSequence), subjectIndex, numSubjects);
                }
            }
        }
        prevTime = currentTime;
        currentTime += maxDuration;
    }
    /**
     * For every element and value combination create a new animation.
     */ sequences.forEach((valueSequences, element)=>{
        for(const key in valueSequences){
            const valueSequence = valueSequences[key];
            /**
             * Arrange all the keyframes in ascending time order.
             */ valueSequence.sort(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$sequence$2f$utils$2f$sort$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["compareByTime"]);
            const keyframes = [];
            const valueOffset = [];
            const valueEasing = [];
            /**
             * For each keyframe, translate absolute times into
             * relative offsets based on the total duration of the timeline.
             */ for(let i = 0; i < valueSequence.length; i++){
                const { at, value, easing } = valueSequence[i];
                keyframes.push(value);
                valueOffset.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$progress$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["progress"])(0, totalDuration, at));
                valueEasing.push(easing || "easeOut");
            }
            /**
             * If the first keyframe doesn't land on offset: 0
             * provide one by duplicating the initial keyframe. This ensures
             * it snaps to the first keyframe when the animation starts.
             */ if (valueOffset[0] !== 0) {
                valueOffset.unshift(0);
                keyframes.unshift(keyframes[0]);
                valueEasing.unshift(defaultSegmentEasing);
            }
            /**
             * If the last keyframe doesn't land on offset: 1
             * provide one with a null wildcard value. This will ensure it
             * stays static until the end of the animation.
             */ if (valueOffset[valueOffset.length - 1] !== 1) {
                valueOffset.push(1);
                keyframes.push(null);
            }
            if (!animationDefinitions.has(element)) {
                animationDefinitions.set(element, {
                    keyframes: {},
                    transition: {}
                });
            }
            const definition = animationDefinitions.get(element);
            definition.keyframes[key] = keyframes;
            definition.transition[key] = {
                ...defaultTransition,
                duration: totalDuration,
                ease: valueEasing,
                times: valueOffset,
                ...sequenceTransition
            };
        }
    });
    return animationDefinitions;
}
function getSubjectSequence(subject, sequences) {
    !sequences.has(subject) && sequences.set(subject, {});
    return sequences.get(subject);
}
function getValueSequence(name, sequences) {
    if (!sequences[name]) sequences[name] = [];
    return sequences[name];
}
function keyframesAsList(keyframes) {
    return Array.isArray(keyframes) ? keyframes : [
        keyframes
    ];
}
function getValueTransition(transition, key) {
    return transition && transition[key] ? {
        ...transition,
        ...transition[key]
    } : {
        ...transition
    };
}
const isNumber = (keyframe)=>typeof keyframe === "number";
const isNumberKeyframesArray = (keyframes)=>keyframes.every(isNumber);
;
}}),
"[project]/node_modules/framer-motion/dist/es/render/object/ObjectVisualElement.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "ObjectVisualElement": (()=>ObjectVisualElement)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$projection$2f$geometry$2f$models$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/projection/geometry/models.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$VisualElement$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/VisualElement.mjs [app-client] (ecmascript)");
;
;
function isObjectKey(key, object) {
    return key in object;
}
class ObjectVisualElement extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$VisualElement$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VisualElement"] {
    constructor(){
        super(...arguments);
        this.type = "object";
    }
    readValueFromInstance(instance, key) {
        if (isObjectKey(key, instance)) {
            const value = instance[key];
            if (typeof value === "string" || typeof value === "number") {
                return value;
            }
        }
        return undefined;
    }
    getBaseTargetFromProps() {
        return undefined;
    }
    removeValueFromRenderState(key, renderState) {
        delete renderState.output[key];
    }
    measureInstanceViewportBox() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$projection$2f$geometry$2f$models$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createBox"])();
    }
    build(renderState, latestValues) {
        Object.assign(renderState.output, latestValues);
    }
    renderInstance(instance, { output }) {
        Object.assign(instance, output);
    }
    sortInstanceNodePosition() {
        return 0;
    }
}
;
}}),
"[project]/node_modules/framer-motion/dist/es/animation/utils/create-visual-element.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "createDOMVisualElement": (()=>createDOMVisualElement),
    "createObjectVisualElement": (()=>createObjectVisualElement)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$utils$2f$is$2d$svg$2d$element$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/dom/utils/is-svg-element.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$svg$2f$SVGVisualElement$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/svg/SVGVisualElement.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$html$2f$HTMLVisualElement$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/html/HTMLVisualElement.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$store$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/store.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$object$2f$ObjectVisualElement$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/object/ObjectVisualElement.mjs [app-client] (ecmascript)");
;
;
;
;
;
function createDOMVisualElement(element) {
    const options = {
        presenceContext: null,
        props: {},
        visualState: {
            renderState: {
                transform: {},
                transformOrigin: {},
                style: {},
                vars: {},
                attrs: {}
            },
            latestValues: {}
        }
    };
    const node = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$utils$2f$is$2d$svg$2d$element$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isSVGElement"])(element) ? new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$svg$2f$SVGVisualElement$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SVGVisualElement"](options) : new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$html$2f$HTMLVisualElement$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HTMLVisualElement"](options);
    node.mount(element);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$store$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["visualElementStore"].set(element, node);
}
function createObjectVisualElement(subject) {
    const options = {
        presenceContext: null,
        props: {},
        visualState: {
            renderState: {
                output: {}
            },
            latestValues: {}
        }
    };
    const node = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$object$2f$ObjectVisualElement$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ObjectVisualElement"](options);
    node.mount(subject);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$store$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["visualElementStore"].set(subject, node);
}
;
}}),
"[project]/node_modules/framer-motion/dist/es/animation/animate/subject.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "animateSubject": (()=>animateSubject)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/motion-utils/dist/es/index.mjs [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$errors$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/motion-utils/dist/es/errors.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$store$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/store.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$utils$2f$is$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/utils/is-motion-value.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$interfaces$2f$visual$2d$element$2d$target$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/animation/interfaces/visual-element-target.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$utils$2f$create$2d$visual$2d$element$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/animation/utils/create-visual-element.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$utils$2f$is$2d$dom$2d$keyframes$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/animation/utils/is-dom-keyframes.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$animate$2f$resolve$2d$subjects$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/animation/animate/resolve-subjects.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$animate$2f$single$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/animation/animate/single-value.mjs [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
function isSingleValue(subject, keyframes) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$utils$2f$is$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isMotionValue"])(subject) || typeof subject === "number" || typeof subject === "string" && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$utils$2f$is$2d$dom$2d$keyframes$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isDOMKeyframes"])(keyframes);
}
/**
 * Implementation
 */ function animateSubject(subject, keyframes, options, scope) {
    const animations = [];
    if (isSingleValue(subject, keyframes)) {
        animations.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$animate$2f$single$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["animateSingleValue"])(subject, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$utils$2f$is$2d$dom$2d$keyframes$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isDOMKeyframes"])(keyframes) ? keyframes.default || keyframes : keyframes, options ? options.default || options : options));
    } else {
        const subjects = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$animate$2f$resolve$2d$subjects$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveSubjects"])(subject, keyframes, scope);
        const numSubjects = subjects.length;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$errors$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["invariant"])(Boolean(numSubjects), "No valid elements provided.");
        for(let i = 0; i < numSubjects; i++){
            const thisSubject = subjects[i];
            const createVisualElement = thisSubject instanceof Element ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$utils$2f$create$2d$visual$2d$element$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createDOMVisualElement"] : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$utils$2f$create$2d$visual$2d$element$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createObjectVisualElement"];
            if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$store$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["visualElementStore"].has(thisSubject)) {
                createVisualElement(thisSubject);
            }
            const visualElement = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$store$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["visualElementStore"].get(thisSubject);
            const transition = {
                ...options
            };
            /**
             * Resolve stagger function if provided.
             */ if ("delay" in transition && typeof transition.delay === "function") {
                transition.delay = transition.delay(i, numSubjects);
            }
            animations.push(...(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$interfaces$2f$visual$2d$element$2d$target$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["animateTarget"])(visualElement, {
                ...keyframes,
                transition
            }, {}));
        }
    }
    return animations;
}
;
}}),
"[project]/node_modules/framer-motion/dist/es/animation/animate/sequence.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "animateSequence": (()=>animateSequence)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$generators$2f$spring$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/animation/generators/spring/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$sequence$2f$create$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/animation/sequence/create.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$animate$2f$subject$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/animation/animate/subject.mjs [app-client] (ecmascript)");
;
;
;
function animateSequence(sequence, options, scope) {
    const animations = [];
    const animationDefinitions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$sequence$2f$create$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createAnimationsFromSequence"])(sequence, options, scope, {
        spring: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$generators$2f$spring$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spring"]
    });
    animationDefinitions.forEach(({ keyframes, transition }, subject)=>{
        animations.push(...(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$animate$2f$subject$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["animateSubject"])(subject, keyframes, transition));
    });
    return animations;
}
;
}}),
"[project]/node_modules/framer-motion/dist/es/animation/animate/index.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "animate": (()=>animate),
    "createScopedAnimate": (()=>createScopedAnimate)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/motion-dom/dist/es/index.mjs [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$controls$2f$Group$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/motion-dom/dist/es/animation/controls/Group.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$animate$2f$sequence$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/animation/animate/sequence.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$animate$2f$subject$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/animation/animate/subject.mjs [app-client] (ecmascript)");
;
;
;
function isSequence(value) {
    return Array.isArray(value) && value.some(Array.isArray);
}
/**
 * Creates an animation function that is optionally scoped
 * to a specific element.
 */ function createScopedAnimate(scope) {
    /**
     * Implementation
     */ function scopedAnimate(subjectOrSequence, optionsOrKeyframes, options) {
        let animations = [];
        if (isSequence(subjectOrSequence)) {
            animations = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$animate$2f$sequence$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["animateSequence"])(subjectOrSequence, optionsOrKeyframes, scope);
        } else {
            animations = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$animate$2f$subject$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["animateSubject"])(subjectOrSequence, optionsOrKeyframes, options, scope);
        }
        const animation = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$controls$2f$Group$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GroupPlaybackControls"](animations);
        if (scope) {
            scope.animations.push(animation);
        }
        return animation;
    }
    return scopedAnimate;
}
const animate = createScopedAnimate();
;
}}),
"[project]/node_modules/framer-motion/dist/es/animation/hooks/use-animate.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "useAnimate": (()=>useAnimate)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$constant$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/utils/use-constant.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$unmount$2d$effect$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/utils/use-unmount-effect.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$animate$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/animation/animate/index.mjs [app-client] (ecmascript)");
;
;
;
function useAnimate() {
    const scope = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$constant$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useConstant"])({
        "useAnimate.useConstant[scope]": ()=>({
                current: null,
                animations: []
            })
    }["useAnimate.useConstant[scope]"]);
    const animate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$constant$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useConstant"])({
        "useAnimate.useConstant[animate]": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$animate$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createScopedAnimate"])(scope)
    }["useAnimate.useConstant[animate]"]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$unmount$2d$effect$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUnmountEffect"])({
        "useAnimate.useUnmountEffect": ()=>{
            scope.animations.forEach({
                "useAnimate.useUnmountEffect": (animation)=>animation.stop()
            }["useAnimate.useUnmountEffect"]);
        }
    }["useAnimate.useUnmountEffect"]);
    return [
        scope,
        animate
    ];
}
;
}}),
}]);

//# sourceMappingURL=_71153069._.js.map