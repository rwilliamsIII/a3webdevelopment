(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/components/pages/home/FaqSection/data.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
// Define the categories for FAQs
__turbopack_context__.s({
    "faqData": (()=>faqData)
});
const faqData = [
    {
        question: "How do I download the templates after purchase?",
        answer: "After completing your purchase, you'll receive an email with download instructions. You can also access your purchases through your account dashboard where you'll find download links for all your purchased templates and components.",
        category: "templates"
    },
    {
        question: "Are updates included in the price?",
        answer: "Yes! All our packages include updates for the specified period in the plan details. Templates & Components plan includes 1 year of updates, while the Commercial License includes lifetime updates.",
        category: "licensing"
    },
    {
        question: "Can I use the templates for client projects?",
        answer: "Yes, with our Templates & Components plan or Commercial License, you can use the templates for client projects. The basic Components plan is restricted to personal projects only.",
        category: "licensing"
    },
    {
        question: "Are the components compatible with my framework?",
        answer: "Our components are primarily built for React and Next.js applications. We provide TypeScript support out of the box, and the components can be easily adapted to work with other React-based frameworks.",
        category: "components"
    },
    {
        question: "Is there technical support available if I need help?",
        answer: "Yes! We offer email support for all paid plans. The response time varies depending on your plan, with Commercial License holders receiving priority support. We also have extensive documentation and a community forum for common questions.",
        category: "support"
    },
    {
        question: "Can I request custom modifications to the templates?",
        answer: "Yes, custom modifications are available for an additional fee. Please contact our support team with your requirements, and we'll provide a quote based on the complexity of the requested changes.",
        category: "templates"
    },
    {
        question: "What does the Commercial License allow me to do?",
        answer: "The Commercial License allows you to use our templates and components in products that you sell to customers. This includes SaaS applications, themes, templates, or any other product where the UI is part of what you're selling. You also get white-labeling rights to remove our branding.",
        category: "licensing"
    },
    {
        question: "Do the templates work on mobile devices?",
        answer: "Yes, all our templates are fully responsive and work seamlessly on mobile, tablet, and desktop devices. We thoroughly test each template on multiple screen sizes to ensure a great user experience across all devices.",
        category: "templates"
    },
    {
        question: "Can I get a refund if I'm not satisfied?",
        answer: "We offer a 30-day money-back guarantee for all our plans. If you're not satisfied with our products, simply contact our support team within 30 days of purchase for a full refund.",
        category: "support"
    },
    {
        question: "How do I import the components into my project?",
        answer: "Our components can be easily imported using standard import statements in your JavaScript or TypeScript files. We provide detailed documentation with examples for each component to help you get started quickly.",
        category: "components"
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/pages/home/FaqSection/index.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>FaqSection)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/motion/dist/es/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$pages$2f$home$2f$FaqSection$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/pages/home/FaqSection/data.ts [app-client] (ecmascript)");
"use client";
;
;
;
;
function FaqSection() {
    // Get unique categories with their actual counts
    const categories = [
        "all",
        ...new Set(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$pages$2f$home$2f$FaqSection$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["faqData"].map((faq)=>faq.category))
    ];
    // Count FAQs in each category
    const categoryCounts = categories.reduce((counts, category)=>{
        if (category !== "all") {
            counts[category] = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$pages$2f$home$2f$FaqSection$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["faqData"].filter((faq)=>faq.category === category).length;
        } else {
            counts[category] = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$pages$2f$home$2f$FaqSection$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["faqData"].length;
        }
        return counts;
    }, {});
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "faq",
        className: "relative z-10 overflow-hidden flex flex-col items-center justify-center w-full py-12 sm:py-16 md:py-24 px-4 sm:px-6 md:px-10 mx-auto  bg-gray-50/60 dark:bg-neutral-950/50",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative z-10 container mx-auto max-w-4xl",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                initial: {
                    opacity: 0,
                    y: 10
                },
                whileInView: {
                    opacity: 1,
                    y: 0
                },
                viewport: {
                    once: true
                },
                transition: {
                    duration: 0.4
                },
                className: "mt-10 sm:mt-16 p-4 sm:p-8 rounded-xl border border-neutral-200 dark:border-neutral-700 text-center bg-white/50 dark:bg-neutral-800/50",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-lg sm:text-xl font-semibold text-neutral-900 dark:text-white mb-2",
                        children: "We`d Love To Hear From You!"
                    }, void 0, false, {
                        fileName: "[project]/src/components/pages/home/FaqSection/index.tsx",
                        lineNumber: 43,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm sm:text-base text-neutral-600 dark:text-neutral-400 mb-4 sm:mb-6",
                        children: ` For a free quote or consultation, we're here to help! Reach out to us and let's discuss how we can support your business goals.`
                    }, void 0, false, {
                        fileName: "[project]/src/components/pages/home/FaqSection/index.tsx",
                        lineNumber: 46,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        variant: "default",
                        className: "w-full sm:w-auto",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "#https://a3marketing.com/contact-us",
                            children: "Contact Us"
                        }, void 0, false, {
                            fileName: "[project]/src/components/pages/home/FaqSection/index.tsx",
                            lineNumber: 50,
                            columnNumber: 25
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/pages/home/FaqSection/index.tsx",
                        lineNumber: 49,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/pages/home/FaqSection/index.tsx",
                lineNumber: 36,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/pages/home/FaqSection/index.tsx",
            lineNumber: 33,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/pages/home/FaqSection/index.tsx",
        lineNumber: 28,
        columnNumber: 9
    }, this);
}
_c = FaqSection;
var _c;
__turbopack_context__.k.register(_c, "FaqSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/pages/home/FaqSection/index.tsx [app-client] (ecmascript, next/dynamic entry)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/src/components/pages/home/FaqSection/index.tsx [app-client] (ecmascript)"));
}}),
}]);

//# sourceMappingURL=src_components_pages_home_FaqSection_706e9344._.js.map