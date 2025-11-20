module.exports = {

"[project]/src/components/pages/home/TemplatesShowcase/TemplateCard/index.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>TemplateCard)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-jsx/style.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/motion/dist/es/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
function TemplateCard({ id, name, category, // price,
// label,
image, demo, index = 0 }) {
    const [rippleEffect, setRippleEffect] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        active: false,
        x: 0,
        y: 0
    });
    const handleRipple = (e)=>{
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        setRippleEffect({
            active: true,
            x,
            y
        });
        setTimeout(()=>{
            setRippleEffect({
                active: false,
                x: 0,
                y: 0
            });
        }, 500);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
        className: "relative overflow-hidden rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 shadow-sm hover:shadow-md transition-all min-h-[220px] xs:min-h-[260px] sm:min-h-[320px] flex flex-col group",
        style: {
            backgroundImage: `url(${image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
        },
        initial: {
            opacity: 0
        },
        whileInView: {
            opacity: 1
        },
        viewport: {
            once: true
        },
        transition: {
            duration: 0.5,
            delay: index * 0.1,
            ease: "easeInOut"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-gradient-to-t from-black/80 to-black/10 z-10 pointer-events-none"
            }, void 0, false, {
                fileName: "[project]/src/components/pages/home/TemplatesShowcase/TemplateCard/index.tsx",
                lineNumber: 69,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-0 left-0 right-0 p-3 sm:p-4 z-20",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-1",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-[10px] sm:text-xs text-white/80 font-mono",
                            children: category
                        }, void 0, false, {
                            fileName: "[project]/src/components/pages/home/TemplatesShowcase/TemplateCard/index.tsx",
                            lineNumber: 74,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/pages/home/TemplatesShowcase/TemplateCard/index.tsx",
                        lineNumber: 73,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-between items-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-base sm:text-lg font-semibold text-white",
                            children: name
                        }, void 0, false, {
                            fileName: "[project]/src/components/pages/home/TemplatesShowcase/TemplateCard/index.tsx",
                            lineNumber: 77,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/pages/home/TemplatesShowcase/TemplateCard/index.tsx",
                        lineNumber: 76,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/pages/home/TemplatesShowcase/TemplateCard/index.tsx",
                lineNumber: 72,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "hidden",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    src: image,
                    alt: `${name} preview`,
                    width: 400,
                    height: 300,
                    loading: "lazy",
                    fetchPriority: "low",
                    sizes: "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                }, void 0, false, {
                    fileName: "[project]/src/components/pages/home/TemplatesShowcase/TemplateCard/index.tsx",
                    lineNumber: 84,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/pages/home/TemplatesShowcase/TemplateCard/index.tsx",
                lineNumber: 83,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                onClick: handleRipple,
                className: "jsx-f991174821d6eea5" + " " + "absolute inset-0 cursor-pointer flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/50 z-30",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "jsx-f991174821d6eea5" + " " + "px-4 py-2 bg-primary text-white text-xs sm:text-sm font-medium rounded shadow",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            target: "blank",
                            href: demo,
                            children: "Preview"
                        }, void 0, false, {
                            fileName: "[project]/src/components/pages/home/TemplatesShowcase/TemplateCard/index.tsx",
                            lineNumber: 101,
                            columnNumber: 113
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/pages/home/TemplatesShowcase/TemplateCard/index.tsx",
                        lineNumber: 101,
                        columnNumber: 17
                    }, this),
                    rippleEffect.active && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            left: rippleEffect.x,
                            top: rippleEffect.y,
                            animation: "ripple 0.5s linear"
                        },
                        className: "jsx-f991174821d6eea5" + " " + "absolute rounded-full bg-white/10 w-[100px] h-[100px] -translate-x-1/2 -translate-y-1/2 pointer-events-none"
                    }, void 0, false, {
                        fileName: "[project]/src/components/pages/home/TemplatesShowcase/TemplateCard/index.tsx",
                        lineNumber: 105,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        id: "f991174821d6eea5",
                        children: "@keyframes ripple{to{opacity:0;transform:scale(6)}}"
                    }, void 0, false, void 0, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/pages/home/TemplatesShowcase/TemplateCard/index.tsx",
                lineNumber: 96,
                columnNumber: 13
            }, this)
        ]
    }, id, true, {
        fileName: "[project]/src/components/pages/home/TemplatesShowcase/TemplateCard/index.tsx",
        lineNumber: 44,
        columnNumber: 9
    }, this);
}
}}),
"[project]/src/components/pages/home/TemplatesShowcase/data.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "defaultTemplates": (()=>defaultTemplates)
});
const defaultTemplates = [
    {
        id: 1,
        name: "Wheeler Construction",
        category: "Website",
        image: "/assets/images/templates/ourWorkWH.jpg",
        demo: "https://wheelerhomesforlife.com"
    },
    {
        id: 2,
        name: "Encouraging Moments",
        category: "Website",
        image: "/assets/images/templates/ourWorkEM.jpg",
        demo: "https://encouragingmoments.com"
    },
    {
        id: 3,
        name: "Nashville Christian Family",
        category: "Online Magazine",
        image: "/assets/images/templates/ourWorkNC.jpg",
        demo: "https://nashchristian.com"
    },
    {
        id: 4,
        name: "Warren Beach Rentals",
        category: "Vacation Rental Platform",
        image: "/assets/images/templates/ourWorkWBR.jpg",
        demo: "https://warrenbeachrentals.com"
    },
    {
        id: 5,
        name: "Hertz Concrete",
        category: "Website",
        image: "/assets/images/templates/ourWorkHC.jpg",
        demo: "https://hertzconcrete.com"
    },
    {
        id: 6,
        name: "Coach Mojo Golf",
        category: "Website",
        image: "/assets/images/templates/ourWorkCM.jpg",
        demo: "https://coachmojogolf.com"
    },
    {
        id: 7,
        name: "A3 Marketing",
        category: "Website",
        image: "/assets/images/templates/ourWorkA3.jpg",
        demo: "https://a3marketing.com"
    },
    {
        id: 8,
        name: "Rhow Homes",
        category: "Website",
        image: "/assets/images/templates/ourWorkRH.jpg",
        demo: "https://warrenbeachrentals.com"
    }
];
}}),
"[project]/src/components/ui/GridBg.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "GridBg": (()=>GridBg)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-ssr] (ecmascript)");
;
;
function GridBg({ mask_size = 600, pattern_size = 80, dot_size = 1, pattern_type = "grid", opacity = 0.1, className = "", invertMask = false, left, top, right, bottom }) {
    // Create CSS variable references with opacity directly applied
    // This approach will automatically update when the theme changes
    const lineColor = `var(--grid-line-color)`;
    const lightLineColor = `var(--grid-line-color-light)`;
    // Create the background pattern based on type
    const getBackgroundImage = ()=>{
        switch(pattern_type){
            case "dots":
                return {
                    backgroundImage: `radial-gradient(circle, ${lineColor} ${dot_size}px, transparent 0)`,
                    backgroundSize: `${pattern_size}px ${pattern_size}px`,
                    opacity: opacity
                };
            case "cross":
                return {
                    backgroundImage: `
            linear-gradient(to right, ${lineColor} 1px, transparent 1px),
            linear-gradient(to bottom, ${lineColor} 1px, transparent 1px),
            linear-gradient(45deg, transparent calc(50% - 0.5px), ${lightLineColor} calc(50% - 0.5px), ${lightLineColor} calc(50% + 0.5px), transparent calc(50% + 0.5px)),
            linear-gradient(-45deg, transparent calc(50% - 0.5px), ${lightLineColor} calc(50% - 0.5px), ${lightLineColor} calc(50% + 0.5px), transparent calc(50% + 0.5px))
          `,
                    backgroundSize: `${pattern_size}px ${pattern_size}px, ${pattern_size}px ${pattern_size}px, ${pattern_size}px ${pattern_size}px, ${pattern_size}px ${pattern_size}px`,
                    backgroundPosition: `0 0, 0 0, 0 0, 0 0`,
                    opacity: opacity
                };
            default:
                return {
                    backgroundImage: `
            linear-gradient(to right, ${lineColor} 1px, transparent 1px),
            linear-gradient(to bottom, ${lineColor} 1px, transparent 1px)
          `,
                    backgroundSize: `${pattern_size}px ${pattern_size}px`,
                    opacity: opacity
                };
        }
    };
    // Create mask image based on invertMask prop
    const maskImage = invertMask ? `radial-gradient(${mask_size}px, transparent, #000)` : `radial-gradient(${mask_size}px, #000, transparent)`;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("absolute inset-0 w-full h-full pointer-events-none z-0", className),
        style: {
            ...getBackgroundImage(),
            maskImage,
            WebkitMaskImage: maskImage,
            position: "absolute",
            left,
            top,
            right,
            bottom
        }
    }, void 0, false, {
        fileName: "[project]/src/components/ui/GridBg.tsx",
        lineNumber: 82,
        columnNumber: 5
    }, this);
}
}}),
"[project]/src/components/pages/home/TemplatesShowcase/index.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>TemplatesShowcase)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$pages$2f$home$2f$TemplatesShowcase$2f$TemplateCard$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/pages/home/TemplatesShowcase/TemplateCard/index.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$pages$2f$home$2f$TemplatesShowcase$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/pages/home/TemplatesShowcase/data.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$GridBg$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/GridBg.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
function TemplatesShowcase({ templates = [] }) {
    const sectionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [visibleCount, setVisibleCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(4);
    // Use provided templates or fall back to default
    const displayTemplates = templates.length > 0 ? templates.slice(0, visibleCount) : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$pages$2f$home$2f$TemplatesShowcase$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defaultTemplates"].slice(0, visibleCount);
    const loadMore = ()=>{
        setVisibleCount((prev)=>Math.min(prev + 4, templates.length || __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$pages$2f$home$2f$TemplatesShowcase$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defaultTemplates"].length));
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        ref: sectionRef,
        id: "view-our-work",
        className: "relative overflow-hidden max-w-[1440px] mx-auto py-10 sm:py-14 md:py-20 px-2 xs:px-4 sm:px-6 md:px-10 bg-white dark:bg-neutral-950   dark:border-neutral-900  ",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$GridBg$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GridBg"], {
                pattern_type: "grid",
                pattern_size: 90,
                mask_size: 1000,
                opacity: 0.6,
                top: "-1px"
            }, void 0, false, {
                fileName: "[project]/src/components/pages/home/TemplatesShowcase/index.tsx",
                lineNumber: 29,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col md:flex-row justify-between items-start mb-8 sm:mb-14",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-4 md:mb-0 w-full md:w-auto",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold mb-2 md:mb-3 text-[var(--foreground)]",
                                        children: "View Our Work"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/pages/home/TemplatesShowcase/index.tsx",
                                        lineNumber: 41,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "h-[2px] w-16 sm:w-20 md:w-24 border-b border-dashed border-gray-300 dark:border-gray-700 mt-1 md:mt-2"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/pages/home/TemplatesShowcase/index.tsx",
                                        lineNumber: 44,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/pages/home/TemplatesShowcase/index.tsx",
                                lineNumber: 40,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-full md:text-right md:max-w-md mt-2 md:mt-0",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm xs:text-base sm:text-lg text-neutral-600 dark:text-neutral-400",
                                    children: "Our work speaks for itself. From small businesses to e-commerce platforms, we design clean, functional websites tailored to each client`s goals. Explore our portfolio to see how A3 Web Development turns ideas into powerful digital experiences."
                                }, void 0, false, {
                                    fileName: "[project]/src/components/pages/home/TemplatesShowcase/index.tsx",
                                    lineNumber: 47,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/pages/home/TemplatesShowcase/index.tsx",
                                lineNumber: 46,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/pages/home/TemplatesShowcase/index.tsx",
                        lineNumber: 39,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 mt-8",
                        children: displayTemplates.map((template, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$pages$2f$home$2f$TemplatesShowcase$2f$TemplateCard$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                ...template,
                                index: index
                            }, template.id, false, {
                                fileName: "[project]/src/components/pages/home/TemplatesShowcase/index.tsx",
                                lineNumber: 56,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/pages/home/TemplatesShowcase/index.tsx",
                        lineNumber: 54,
                        columnNumber: 9
                    }, this),
                    visibleCount < (templates.length || __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$pages$2f$home$2f$TemplatesShowcase$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defaultTemplates"].length) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center mt-6 md:mt-8",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                            variant: "default",
                            size: "default",
                            className: "w-full xs:w-auto max-w-xs",
                            onClick: loadMore,
                            children: "Load More Templates"
                        }, void 0, false, {
                            fileName: "[project]/src/components/pages/home/TemplatesShowcase/index.tsx",
                            lineNumber: 63,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/pages/home/TemplatesShowcase/index.tsx",
                        lineNumber: 62,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-8 sm:mt-12 md:mt-16 text-center"
                    }, void 0, false, {
                        fileName: "[project]/src/components/pages/home/TemplatesShowcase/index.tsx",
                        lineNumber: 75,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/pages/home/TemplatesShowcase/index.tsx",
                lineNumber: 37,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/pages/home/TemplatesShowcase/index.tsx",
        lineNumber: 25,
        columnNumber: 5
    }, this);
}
}}),
"[project]/src/components/pages/home/TemplatesShowcase/index.tsx [app-ssr] (ecmascript, next/dynamic entry)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/src/components/pages/home/TemplatesShowcase/index.tsx [app-ssr] (ecmascript)"));
}}),

};

//# sourceMappingURL=src_components_af21fe4b._.js.map