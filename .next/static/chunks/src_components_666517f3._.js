(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/components/ui/GridBg.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "GridBg": (()=>GridBg)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("absolute inset-0 w-full h-full pointer-events-none z-0", className),
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
_c = GridBg;
var _c;
__turbopack_context__.k.register(_c, "GridBg");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/pages/home/Prices/data.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "plans": (()=>plans),
    "testimonials": (()=>testimonials)
});
const testimonials = [
    {
        id: 1,
        name: "Michael Johnson",
        designation: "Frontend Developer",
        image: "/assets/images/avatar/1.webp"
    },
    {
        id: 2,
        name: "Michael Chen",
        designation: "UI/UX Designer",
        image: "/assets/images/avatar/2.webp"
    },
    {
        id: 3,
        name: "Emily Rodriguez",
        designation: "Creative Director",
        image: "/assets/images/avatar/3.webp"
    },
    {
        id: 4,
        name: "David Smith",
        designation: "Product Manager",
        image: "/assets/images/avatar/4.webp"
    },
    {
        id: 5,
        name: "Jessica Lee",
        designation: "Software Engineer",
        image: "/assets/images/avatar/5.webp"
    },
    {
        id: 6,
        name: "Daniel Kim",
        designation: "Data Scientist",
        image: "/assets/images/avatar/6.webp"
    }
];
const plans = [
    {
        name: "Components",
        description: "Access to our premium UI components library",
        price: 49,
        features: [
            {
                text: "80+ UI Components",
                category: "Core",
                tooltip: "Access to our essential UI component library"
            },
            {
                text: "Responsive Designs",
                category: "Core"
            },
            {
                text: "Dark/Light Modes",
                category: "Core"
            },
            {
                text: "Component Documentation",
                category: "Support"
            },
            {
                text: "Community Support",
                category: "Support"
            },
            {
                text: "Personal Projects Only",
                category: "License"
            },
            {
                text: "6 Months Updates",
                category: "Support"
            }
        ],
        featured: false,
        cta: "Purchase Components",
        badge: null,
        accentColor: "from-neutral-200 to-neutral-300 dark:from-neutral-800 dark:to-neutral-900",
        companies: "950+"
    },
    {
        name: "Templates & Components",
        description: "Complete collection of templates and components",
        price: 129,
        features: [
            {
                text: "Everything in Components",
                category: "Core",
                highlighted: true
            },
            {
                text: "20+ Premium Templates",
                category: "Core",
                highlighted: true
            },
            {
                text: "Advanced Theme Customization",
                category: "Customization"
            },
            {
                text: "Priority Email Support",
                category: "Support",
                highlighted: true
            },
            {
                text: "One-click Template Installation",
                category: "Core"
            },
            {
                text: "Personal & Client Projects",
                category: "License",
                tooltip: "Use in projects for yourself and your clients"
            },
            {
                text: "Remove Attribution",
                category: "License"
            },
            {
                text: "1 Year of Updates",
                category: "Support",
                highlighted: true
            }
        ],
        featured: true,
        cta: "Get Complete Package",
        badge: "Best Value",
        accentColor: "from-blue-500 to-violet-500 dark:from-blue-600 dark:to-violet-600",
        companies: "5,000+"
    },
    {
        name: "Commercial License",
        description: "For companies and commercial products",
        price: 349,
        features: [
            {
                text: "All Templates & Components",
                category: "Core",
                highlighted: true
            },
            {
                text: "Commercial Product Usage",
                category: "License",
                highlighted: true,
                tooltip: "Include in products you sell to customers"
            },
            {
                text: "White-labeling",
                category: "License",
                tooltip: "Remove all Aniq-UI branding and add your own"
            },
            {
                text: "Extended Documentation",
                category: "Support"
            },
            {
                text: "Premium Email Support",
                category: "Support",
                highlighted: true
            },
            {
                text: "Unlimited Projects",
                category: "License",
                highlighted: true
            },
            {
                text: "Source Files Included",
                category: "Core",
                highlighted: true
            },
            {
                text: "Lifetime Updates",
                category: "Support",
                highlighted: true
            }
        ],
        featured: false,
        cta: "Purchase Commercial",
        badge: "Unlimited",
        accentColor: "from-amber-500 to-orange-500 dark:from-amber-600 dark:to-orange-600",
        companies: "350+"
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/pages/home/Prices/TestimonialsSection.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "TestimonialsSection": (()=>TestimonialsSection)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/motion/dist/es/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
"use client";
;
;
function TestimonialsSection({}) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        initial: {
            opacity: 0,
            y: 20
        },
        whileInView: {
            opacity: 1,
            y: 0
        },
        viewport: {
            once: true
        },
        transition: {
            duration: 0.5,
            delay: 0.4
        },
        className: "mt-2 sm:mt-16 md:mt-6 p-4 sm:p-6 md:p-8 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/50",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col items-center text-center mb-6 md:mb-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-xl sm:text-2xl font-bold text-neutral-900 dark:text-white mb-2 md:mb-3",
                        children: "Trusted by Hundreds of Clients"
                    }, void 0, false, {
                        fileName: "[project]/src/components/pages/home/Prices/TestimonialsSection.tsx",
                        lineNumber: 23,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm sm:text-base text-neutral-600 dark:text-neutral-400 max-w-2xl",
                        children: "Join the growing number of businesses partnering with A3 Web Development to create fast, modern, and responsive websites that elevate their online presence."
                    }, void 0, false, {
                        fileName: "[project]/src/components/pages/home/Prices/TestimonialsSection.tsx",
                        lineNumber: 26,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/pages/home/Prices/TestimonialsSection.tsx",
                lineNumber: 22,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col md:flex-row gap-6 md:gap-8 items-stretch justify-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 w-full p-4 sm:p-6 flex flex-col justify-center bg-neutral-50 dark:bg-neutral-800/50 rounded-xl",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center flex-col sm:flex-row sm:items-center mb-4",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-center sm:text-left",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm font-medium text-neutral-900 dark:text-white",
                                            children: "Regina Moore"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/pages/home/Prices/TestimonialsSection.tsx",
                                            lineNumber: 39,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-neutral-500 dark:text-neutral-400",
                                            children: "Hertz Asphalt and Concrete Services"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/pages/home/Prices/TestimonialsSection.tsx",
                                            lineNumber: 42,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/pages/home/Prices/TestimonialsSection.tsx",
                                    lineNumber: 38,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/pages/home/Prices/TestimonialsSection.tsx",
                                lineNumber: 34,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-neutral-600 dark:text-neutral-400 text-sm italic",
                                children: `"A3 Web Development transformed our outdated website into a sleek, modern platform that truly represents our brand. Their attention to detail and commitment to quality is unmatched."`
                            }, void 0, false, {
                                fileName: "[project]/src/components/pages/home/Prices/TestimonialsSection.tsx",
                                lineNumber: 47,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/pages/home/Prices/TestimonialsSection.tsx",
                        lineNumber: 33,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 w-full grid grid-cols-2 gap-3 sm:gap-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-neutral-50 dark:bg-neutral-800/50 rounded-xl p-3 sm:p-5 text-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        className: "text-2xl sm:text-2xl font-bold text-neutral-900 dark:text-white",
                                        children: "10,000+"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/pages/home/Prices/TestimonialsSection.tsx",
                                        lineNumber: 55,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 mt-1",
                                        children: "Hours of Development"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/pages/home/Prices/TestimonialsSection.tsx",
                                        lineNumber: 58,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/pages/home/Prices/TestimonialsSection.tsx",
                                lineNumber: 54,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-neutral-50 dark:bg-neutral-800/50 rounded-xl p-3 sm:p-5 text-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        className: "text-2xl sm:text-2xl font-bold text-neutral-900 dark:text-white",
                                        children: "98%"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/pages/home/Prices/TestimonialsSection.tsx",
                                        lineNumber: 63,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 mt-1",
                                        children: "Satisfaction"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/pages/home/Prices/TestimonialsSection.tsx",
                                        lineNumber: 66,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/pages/home/Prices/TestimonialsSection.tsx",
                                lineNumber: 62,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-neutral-50 dark:bg-neutral-800/50 rounded-xl p-3 sm:p-5 text-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        className: "text-2xl sm:text-2xl font-bold text-neutral-900 dark:text-white",
                                        children: "200+"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/pages/home/Prices/TestimonialsSection.tsx",
                                        lineNumber: 71,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 mt-1",
                                        children: "Successful Deployments"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/pages/home/Prices/TestimonialsSection.tsx",
                                        lineNumber: 74,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/pages/home/Prices/TestimonialsSection.tsx",
                                lineNumber: 70,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-neutral-50 dark:bg-neutral-800/50 rounded-xl p-3 sm:p-5 text-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        className: "text-2xl sm:text-2xl font-bold text-neutral-900 dark:text-white",
                                        children: "24/7"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/pages/home/Prices/TestimonialsSection.tsx",
                                        lineNumber: 79,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 mt-1",
                                        children: "Support"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/pages/home/Prices/TestimonialsSection.tsx",
                                        lineNumber: 82,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/pages/home/Prices/TestimonialsSection.tsx",
                                lineNumber: 78,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/pages/home/Prices/TestimonialsSection.tsx",
                        lineNumber: 53,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/pages/home/Prices/TestimonialsSection.tsx",
                lineNumber: 31,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/pages/home/Prices/TestimonialsSection.tsx",
        lineNumber: 15,
        columnNumber: 5
    }, this);
}
_c = TestimonialsSection;
var _c;
__turbopack_context__.k.register(_c, "TestimonialsSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/pages/home/Prices/index.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>PricesSection)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
// import { motion } from "motion/react";
// import { Button } from "@/components/ui/button";
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$GridBg$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/GridBg.tsx [app-client] (ecmascript)");
// import { FeatureCategory } from "./types";
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$pages$2f$home$2f$Prices$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/pages/home/Prices/data.ts [app-client] (ecmascript)");
// import { PlanCard } from "./PlanCard";
// import { FeatureFilter } from "./FeatureFilter";
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$pages$2f$home$2f$Prices$2f$TestimonialsSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/pages/home/Prices/TestimonialsSection.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function PricesSection() {
    _s();
    // const [selectedCategory, setSelectedCategory] = useState<FeatureCategory | null>(null);
    const [, setScrollPosition] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    // Listen for scroll position to trigger header styling
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PricesSection.useEffect": ()=>{
            const handleScroll = {
                "PricesSection.useEffect.handleScroll": ()=>{
                    setScrollPosition(window.scrollY);
                }
            }["PricesSection.useEffect.handleScroll"];
            window.addEventListener('scroll', handleScroll);
            return ({
                "PricesSection.useEffect": ()=>window.removeEventListener('scroll', handleScroll)
            })["PricesSection.useEffect"];
        }
    }["PricesSection.useEffect"], []);
    // Get all unique categories from features
    // const allCategories = Array.from(
    //     new Set(
    //         plans.flatMap(plan =>
    //             plan.features.map(feature => feature.category)
    //         )
    //     )
    // ) as FeatureCategory[];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "relative z-10 overflow-hidden flex flex-col items-center justify-center w-full py-6 sm:py-10 md:py-15 px-4 sm:px-6 md:px-10 mx-auto dark:bg-neutral-900/50  ",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$GridBg$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GridBg"], {
                pattern_type: "grid",
                pattern_size: 90,
                mask_size: 2000,
                opacity: 0.6,
                top: "-1px"
            }, void 0, false, {
                fileName: "[project]/src/components/pages/home/Prices/index.tsx",
                lineNumber: 39,
                columnNumber: 17
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$pages$2f$home$2f$Prices$2f$TestimonialsSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TestimonialsSection"], {
                testimonials: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$pages$2f$home$2f$Prices$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["testimonials"]
            }, void 0, false, {
                fileName: "[project]/src/components/pages/home/Prices/index.tsx",
                lineNumber: 90,
                columnNumber: 17
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/pages/home/Prices/index.tsx",
        lineNumber: 37,
        columnNumber: 9
    }, this);
}
_s(PricesSection, "765LD+3TsL5OJFN1aqzWxN8Zwro=");
_c = PricesSection;
var _c;
__turbopack_context__.k.register(_c, "PricesSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/pages/home/Prices/index.tsx [app-client] (ecmascript, next/dynamic entry)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/src/components/pages/home/Prices/index.tsx [app-client] (ecmascript)"));
}}),
}]);

//# sourceMappingURL=src_components_666517f3._.js.map