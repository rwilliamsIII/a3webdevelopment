(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/components/common/ShineBorder.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "ShineBorder": (()=>ShineBorder)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
"use client";
;
// Simple utility function to replace the cn import if it doesn't exist
const cn = (...classes)=>classes.filter(Boolean).join(' ');
function ShineBorder({ borderWidth = 1, duration = 14, shineColor = "#000000", className, style, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            "--border-width": `${borderWidth}px`,
            "--duration": `${duration}s`,
            backgroundImage: `radial-gradient(transparent,transparent, ${Array.isArray(shineColor) ? shineColor.join(",") : shineColor},transparent,transparent)`,
            backgroundSize: "300% 300%",
            mask: `linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)`,
            WebkitMask: `linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)`,
            WebkitMaskComposite: "xor",
            maskComposite: "exclude",
            padding: "var(--border-width)",
            animation: "shine var(--duration) infinite linear",
            ...style
        },
        className: cn("pointer-events-none absolute inset-0 w-full h-full rounded-[inherit] will-change-[background-position]", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/common/ShineBorder.tsx",
        lineNumber: 40,
        columnNumber: 5
    }, this);
}
_c = ShineBorder;
var _c;
__turbopack_context__.k.register(_c, "ShineBorder");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/common/Gauge.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "Gauge": (()=>Gauge),
    "GaugeDemo": (()=>GaugeDemo)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
function GaugeDemo() {
    _s();
    const [value, setValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(48); // Default value
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "flex flex-col items-center gap-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex gap-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Gauge, {
                        size: 100,
                        primary: "success",
                        value: value
                    }, void 0, false, {
                        fileName: "[project]/src/components/common/Gauge.tsx",
                        lineNumber: 13,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Gauge, {
                        size: 100,
                        primary: "danger",
                        value: value
                    }, void 0, false, {
                        fileName: "[project]/src/components/common/Gauge.tsx",
                        lineNumber: 14,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Gauge, {
                        size: 100,
                        primary: "info",
                        value: value
                    }, void 0, false, {
                        fileName: "[project]/src/components/common/Gauge.tsx",
                        lineNumber: 15,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Gauge, {
                        size: 100,
                        primary: "warning",
                        value: value
                    }, void 0, false, {
                        fileName: "[project]/src/components/common/Gauge.tsx",
                        lineNumber: 16,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/common/Gauge.tsx",
                lineNumber: 12,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                type: "range",
                min: "0",
                max: "100",
                value: value,
                onChange: (e)=>setValue(Number(e.target.value)),
                className: "w-64 h-2 mt-10 bg-gray-300 rounded-lg appearance-none cursor-pointer"
            }, void 0, false, {
                fileName: "[project]/src/components/common/Gauge.tsx",
                lineNumber: 20,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-lg font-semibold",
                children: [
                    value,
                    "%"
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/common/Gauge.tsx",
                lineNumber: 30,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/common/Gauge.tsx",
        lineNumber: 10,
        columnNumber: 9
    }, this);
}
_s(GaugeDemo, "AX9f5udANamKyT5tuVdmIaSExAo=");
_c = GaugeDemo;
/**
 * Renders a circular gauge using SVG. Allows configuration of colors, stroke, and animations.
 * @param value - Current value of the gauge, expressed as a percentage.
 * @param size = Width and height of the gauge. Defaults to 100%.
 * @param gapPercent -  Percentage of the total circumference that represents a gap in the gauge. Defaults to 5%.
 * @param strokeWidth - Stroke width of the gauge. Defaults to 10px.
 * @param equal - Determines if the gauge should have equal primary and secondary stroke lengths. Defaults to false.
 * @param showValue - Option to display the numeric value inside the gauge. Defaults to true.
 * @param primary - Primary color or set of colors for the gauge, with optional threshold values to determine color changes.
 * @param secondary - Secondary color or set of colors for the gauge, similar to `primary`.
 * @param transition - Transition settings for the gauge's animation, specifying the length, step, and delay of transitions.
 * @param className - Class names for different parts of the gauge, including the SVG container and individual elements.
 * @param props Configuration and properties for the svg.
 */ function Gauge({ value, size = '100%', gapPercent = 5, strokeWidth = 10, equal = false, showValue = true, primary, secondary, transition = {
    length: 1000,
    step: 200,
    delay: 0 // ms
}, className, ...props }) {
    const strokePercent = value // %
    ;
    const circleSize = 100 // px
    ;
    const radius = circleSize / 2 - strokeWidth / 2;
    const circumference = 2 * Math.PI * radius;
    const percentToDegree = 360 / 100 // deg
    ;
    const percentToPx = circumference / 100 // px
    ;
    const offsetFactor = equal ? 0.5 : 0;
    const offsetFactorSecondary = 1 - offsetFactor;
    const primaryStrokeDasharray = ()=>{
        if (offsetFactor > 0 && strokePercent > 100 - gapPercent * 2 * offsetFactor) {
            // calculation to gradually shift back to 0 offset as progress nears 100% when offsetFactor > 0
            const subtract = -strokePercent + 100;
            return `${Math.max(strokePercent * percentToPx - subtract * percentToPx, 0)} ${circumference}`;
        } else {
            const subtract = gapPercent * 2 * offsetFactor;
            return `${Math.max(strokePercent * percentToPx - subtract * percentToPx, 0)} ${circumference}`;
        }
    };
    const secondaryStrokeDasharray = ()=>{
        if (offsetFactorSecondary < 1 && strokePercent < gapPercent * 2 * offsetFactorSecondary) {
            // calculation to gradually shift back to 1 secondary offset as progress nears 100% when offsetFactorSecondary < 1
            const subtract = strokePercent;
            return `${Math.max((100 - strokePercent) * percentToPx - subtract * percentToPx, 0)} ${circumference}`;
        } else {
            const subtract = gapPercent * 2 * offsetFactorSecondary;
            return `${Math.max((100 - strokePercent) * percentToPx - subtract * percentToPx, 0)} ${circumference}`;
        }
    };
    const primaryTransform = ()=>{
        if (offsetFactor > 0 && strokePercent > 100 - gapPercent * 2 * offsetFactor) {
            // calculation to gradually shift back to 0 offset as progress nears 100% when offsetFactor > 0
            const add = 0.5 * (-strokePercent + 100);
            return `rotate(${-90 + add * percentToDegree}deg)`;
        } else {
            const add = gapPercent * offsetFactor;
            return `rotate(${-90 + add * percentToDegree}deg)`;
        }
    };
    const secondaryTransform = ()=>{
        if (offsetFactorSecondary < 1 && strokePercent < gapPercent * 2 * offsetFactorSecondary) {
            // calculation to gradually shift back to 1 secondary offset as progress nears 100% when offsetFactorSecondary < 1
            const subtract = 0.5 * strokePercent;
            return `rotate(${360 - 90 - subtract * percentToDegree}deg) scaleY(-1)`;
        } else {
            const subtract = gapPercent * offsetFactorSecondary;
            return `rotate(${360 - 90 - subtract * percentToDegree}deg) scaleY(-1)`;
        }
    };
    const primaryStroke = ()=>{
        if (!primary) {
            return strokePercent <= 25 ? '#dc2626' // Red
             : strokePercent <= 50 ? '#f59e0b' // Amber
             : strokePercent <= 75 ? '#3b82f6' // Blue
             : '#22c55e' // Green
            ;
        } else if (typeof primary === 'string') {
            return primary === 'danger' ? '#dc2626' // Red
             : primary === 'warning' ? '#f59e0b' // Amber
             : primary === 'info' ? '#3b82f6' // Blue
             : primary === 'success' ? '#22c55e' // Green
             : primary;
        } else if (typeof primary === 'object') {
            const primaryKeys = Object.keys(primary).sort((a, b)=>Number(a) - Number(b));
            let primaryStroke = '';
            for(let i = 0; i < primaryKeys.length; i++){
                const currentKey = Number(primaryKeys[i]);
                const nextKey = Number(primaryKeys[i + 1]);
                if (strokePercent >= currentKey && (strokePercent < nextKey || !nextKey)) {
                    primaryStroke = primary[currentKey] || '';
                    if ([
                        'danger',
                        'warning',
                        'success',
                        'info'
                    ].includes(primaryStroke)) {
                        primaryStroke = ({
                            danger: '#dc2626',
                            warning: '#f59e0b',
                            info: '#3b82f6',
                            success: '#22c55e'
                        })[primaryStroke] || primaryStroke;
                    }
                    break;
                }
            }
            return primaryStroke;
        }
    };
    const secondaryStroke = ()=>{
        if (!secondary) {
            return '#9ca3af' // Default Gray
            ;
        } else if (typeof secondary === 'string') {
            return secondary === 'danger' ? '#fecaca' // Light Red
             : secondary === 'warning' ? '#fde68a' // Light Amber
             : secondary === 'info' ? '#bfdbfe' // Light Blue
             : secondary === 'success' ? '#bbf7d0' // Light Green
             : secondary;
        } else if (typeof secondary === 'object') {
            const stroke_percent_secondary = 100 - strokePercent;
            const secondaryKeys = Object.keys(secondary).sort((a, b)=>Number(a) - Number(b));
            let secondaryStroke = '';
            for(let i = 0; i < secondaryKeys.length; i++){
                const currentKey = Number(secondaryKeys[i]);
                const nextKey = Number(secondaryKeys[i + 1]);
                if (stroke_percent_secondary >= currentKey && (stroke_percent_secondary < nextKey || !nextKey)) {
                    secondaryStroke = secondary[currentKey] || '';
                    if ([
                        'danger',
                        'warning',
                        'success',
                        'info'
                    ].includes(secondaryStroke)) {
                        secondaryStroke = ({
                            danger: '#fecaca',
                            warning: '#fde68a',
                            info: '#bfdbfe',
                            success: '#bbf7d0'
                        })[secondaryStroke] || secondaryStroke;
                    }
                    break;
                }
            }
            return secondaryStroke;
        }
    };
    const primaryOpacity = ()=>{
        if (offsetFactor > 0 && strokePercent < gapPercent * 2 * offsetFactor && strokePercent < gapPercent * 2 * offsetFactorSecondary) {
            return 0;
        } else return 1;
    };
    const secondaryOpacity = ()=>{
        if (offsetFactor === 0 && strokePercent > 100 - gapPercent * 2 || offsetFactor > 0 && strokePercent > 100 - gapPercent * 2 * offsetFactor && strokePercent > 100 - gapPercent * 2 * offsetFactorSecondary) {
            return 0;
        } else return 1;
    };
    const circleStyles = {
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
        strokeDashoffset: 0,
        strokeWidth: strokeWidth,
        transition: `all ${transition?.length}ms ease ${transition?.delay}ms`,
        transformOrigin: '50% 50%',
        shapeRendering: 'geometricPrecision'
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: `0 0 ${circleSize} ${circleSize}`,
        shapeRendering: "crispEdges",
        width: size,
        height: size,
        style: {
            userSelect: 'none'
        },
        strokeWidth: 2,
        fill: "none",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('', typeof className === 'string' ? className : className?.svgClassName),
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: circleSize / 2,
                cy: circleSize / 2,
                r: radius,
                style: {
                    ...circleStyles,
                    strokeDasharray: secondaryStrokeDasharray(),
                    transform: secondaryTransform(),
                    stroke: secondaryStroke(),
                    opacity: secondaryOpacity()
                },
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('', typeof className === 'object' && className?.secondaryClassName)
            }, void 0, false, {
                fileName: "[project]/src/components/common/Gauge.tsx",
                lineNumber: 299,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: circleSize / 2,
                cy: circleSize / 2,
                r: radius,
                style: {
                    ...circleStyles,
                    strokeDasharray: primaryStrokeDasharray(),
                    transform: primaryTransform(),
                    stroke: primaryStroke(),
                    opacity: primaryOpacity()
                },
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('', typeof className === 'object' && className?.primaryClassName)
            }, void 0, false, {
                fileName: "[project]/src/components/common/Gauge.tsx",
                lineNumber: 314,
                columnNumber: 13
            }, this),
            showValue && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                x: "50%",
                y: "50%",
                textAnchor: "middle",
                dominantBaseline: "middle",
                alignmentBaseline: "central",
                fill: "currentColor",
                fontSize: 36,
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('font-semibold', typeof className === 'object' && className?.textClassName),
                children: Math.round(strokePercent)
            }, void 0, false, {
                fileName: "[project]/src/components/common/Gauge.tsx",
                lineNumber: 329,
                columnNumber: 17
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/common/Gauge.tsx",
        lineNumber: 286,
        columnNumber: 9
    }, this);
}
_c1 = Gauge;
;
var _c, _c1;
__turbopack_context__.k.register(_c, "GaugeDemo");
__turbopack_context__.k.register(_c1, "Gauge");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/common/LighthouseMetrics.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "LighthouseMetrics": (()=>LighthouseMetrics)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$Gauge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/common/Gauge.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
// Main performance metrics - changed colors to monochrome
const metrics = [
    {
        title: "Performance",
        value: 100,
        color: "success",
        description: "Values are calculated from lab data"
    },
    {
        title: "Accessibility",
        value: 100,
        color: "success",
        description: "These checks highlight opportunities to improve the accessibility of your web app"
    },
    {
        title: "Best Practices",
        value: 100,
        color: "success",
        description: "Following best practices ensures your site is secure and high quality"
    },
    {
        title: "SEO",
        value: 100,
        color: "success",
        description: "These checks ensure that your page is optimized for search engine results"
    }
];
// Tab-specific detail metrics
const tabMetrics = {
    performance: [
        {
            name: "First Contentful Paint",
            value: "0.8s",
            score: "Fast"
        },
        {
            name: "Largest Contentful Paint",
            value: "1.2s",
            score: "Fast"
        },
        {
            name: "Total Blocking Time",
            value: "0ms",
            score: "Fast"
        },
        {
            name: "Cumulative Layout Shift",
            value: "0",
            score: "Good"
        },
        {
            name: "Speed Index",
            value: "1.4s",
            score: "Fast"
        }
    ],
    accessibility: [
        {
            name: "Color Contrast",
            value: "Pass",
            score: "Good"
        },
        {
            name: "ARIA Attributes",
            value: "Pass",
            score: "Good"
        },
        {
            name: "Keyboard Navigation",
            value: "100%",
            score: "Fast"
        },
        {
            name: "Labels & Alt Text",
            value: "Pass",
            score: "Good"
        },
        {
            name: "Focus Indicators",
            value: "Pass",
            score: "Good"
        }
    ],
    "best practices": [
        {
            name: "HTTPS Usage",
            value: "Yes",
            score: "Good"
        },
        {
            name: "JavaScript Errors",
            value: "None",
            score: "Fast"
        },
        {
            name: "Image Aspect Ratio",
            value: "Correct",
            score: "Good"
        },
        {
            name: "Deprecated APIs",
            value: "None",
            score: "Good"
        },
        {
            name: "Browser Support",
            value: "Modern",
            score: "Good"
        }
    ],
    seo: [
        {
            name: "Meta Description",
            value: "Yes",
            score: "Good"
        },
        {
            name: "Crawlable Links",
            value: "Pass",
            score: "Good"
        },
        {
            name: "Legible Font Sizes",
            value: "Pass",
            score: "Fast"
        },
        {
            name: "Search Friendly",
            value: "Yes",
            score: "Good"
        },
        {
            name: "Mobile Optimized",
            value: "Yes",
            score: "Fast"
        }
    ]
};
function LighthouseMetrics() {
    _s();
    const [isVisible, setIsVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [animatedValues, setAnimatedValues] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(metrics.map({
        "LighthouseMetrics.useState": ()=>0
    }["LighthouseMetrics.useState"]));
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("performance");
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LighthouseMetrics.useEffect": ()=>{
            const observer = new IntersectionObserver({
                "LighthouseMetrics.useEffect": (entries)=>{
                    if (entries[0].isIntersecting) {
                        setIsVisible(true);
                        observer.disconnect();
                    }
                }
            }["LighthouseMetrics.useEffect"], {
                threshold: 0.2
            });
            if (containerRef.current) {
                observer.observe(containerRef.current);
            }
            return ({
                "LighthouseMetrics.useEffect": ()=>observer.disconnect()
            })["LighthouseMetrics.useEffect"];
        }
    }["LighthouseMetrics.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LighthouseMetrics.useEffect": ()=>{
            if (isVisible) {
                const animationDuration = 1800;
                const stepTime = 20;
                const steps = animationDuration / stepTime;
                let currentStep = 0;
                const timer = setInterval({
                    "LighthouseMetrics.useEffect.timer": ()=>{
                        currentStep++;
                        const progress = Math.min(currentStep / steps, 1);
                        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
                        setAnimatedValues(metrics.map({
                            "LighthouseMetrics.useEffect.timer": (metric)=>Math.ceil(metric.value * easeOutQuart)
                        }["LighthouseMetrics.useEffect.timer"]));
                        if (progress >= 1) {
                            clearInterval(timer);
                        }
                    }
                }["LighthouseMetrics.useEffect.timer"], stepTime);
                return ({
                    "LighthouseMetrics.useEffect": ()=>clearInterval(timer)
                })["LighthouseMetrics.useEffect"];
            }
        }
    }["LighthouseMetrics.useEffect"], [
        isVisible
    ]);
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
                            className: "w-4 h-4 text-neutral-500 dark:text-neutral-400",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                d: "M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
                            }, void 0, false, {
                                fileName: "[project]/src/components/common/LighthouseMetrics.tsx",
                                lineNumber: 108,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/common/LighthouseMetrics.tsx",
                            lineNumber: 107,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/common/LighthouseMetrics.tsx",
                        lineNumber: 106,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-sm sm:text-base font-semibold text-neutral-900 dark:text-white",
                        children: "Lighthouse Performance"
                    }, void 0, false, {
                        fileName: "[project]/src/components/common/LighthouseMetrics.tsx",
                        lineNumber: 111,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/common/LighthouseMetrics.tsx",
                lineNumber: 105,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 flex flex-col md:flex-row",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col md:flex-row gap-2 sm:gap-3 mt-1 flex-1",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-full md:w-[65%] h-[160px] sm:h-[220px] md:h-auto relative rounded-md overflow-hidden border border-neutral-200 dark:border-neutral-700",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute inset-0 z-10 flex items-start justify-start",
                                    children: isVisible && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        src: "/image.png",
                                        alt: "Website Screenshot",
                                        fill: true,
                                        className: "object-cover object-top-left",
                                        style: {
                                            objectPosition: "top left"
                                        },
                                        priority: true
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/common/LighthouseMetrics.tsx",
                                        lineNumber: 121,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/common/LighthouseMetrics.tsx",
                                    lineNumber: 119,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `absolute inset-0 bg-linear-to-br from-neutral-200 dark:from-neutral-700 to-neutral-100 dark:to-black transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`
                                }, void 0, false, {
                                    fileName: "[project]/src/components/common/LighthouseMetrics.tsx",
                                    lineNumber: 131,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/common/LighthouseMetrics.tsx",
                            lineNumber: 118,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-1 flex flex-col mt-2 md:mt-0",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex border-b border-neutral-200 dark:border-neutral-700 mb-1 sm:mb-2 overflow-x-auto",
                                    children: [
                                        "performance",
                                        "accessibility",
                                        "best practices",
                                        "seo"
                                    ].map((tab)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: `py-1 px-1.5 sm:py-1.5 sm:px-2 cursor-pointer text-[10px] sm:text-[11px] font-medium capitalize whitespace-nowrap ${activeTab === tab ? "text-neutral-600 dark:text-neutral-400 border-b-[1px] border-neutral-600 dark:border-neutral-400" : "text-neutral-600 dark:text-neutral-400 border-b-[1px] border-transparent hover:text-neutral-800 dark:hover:text-neutral-300"}`,
                                            onClick: ()=>setActiveTab(tab),
                                            children: tab
                                        }, tab, false, {
                                            fileName: "[project]/src/components/common/LighthouseMetrics.tsx",
                                            lineNumber: 139,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/common/LighthouseMetrics.tsx",
                                    lineNumber: 137,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-neutral-50 dark:bg-neutral-900 p-1.5 sm:p-2 rounded-lg border border-neutral-200 dark:border-neutral-800 mb-1 sm:mb-2",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-wrap gap-1",
                                        children: metrics.map((metric, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: `flex-1 min-w-[48px] sm:min-w-[60px] flex flex-col items-center p-1 rounded-lg ${activeTab.toLowerCase() === metric.title.toLowerCase() ? 'bg-neutral-100 dark:bg-neutral-800/50' : ''}`,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-[36px] h-[36px] sm:w-[48px] sm:h-[48px] mb-1",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$Gauge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Gauge"], {
                                                            value: animatedValues[index],
                                                            primary: metric.color,
                                                            secondary: "#d1d5db",
                                                            strokeWidth: 6,
                                                            showValue: true,
                                                            size: "100%",
                                                            className: {
                                                                textClassName: 'text-[18px] sm:text-[25px] font-bold text-neutral-900 dark:text-white',
                                                                svgClassName: `transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`,
                                                                primaryClassName: 'dark:stroke-white',
                                                                secondaryClassName: 'stroke-neutral-200 dark:stroke-neutral-700'
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/common/LighthouseMetrics.tsx",
                                                            lineNumber: 164,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/common/LighthouseMetrics.tsx",
                                                        lineNumber: 163,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[7px] sm:text-[8px] font-medium text-neutral-600 dark:text-neutral-300 mt-0.5 text-center",
                                                        children: metric.title
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/common/LighthouseMetrics.tsx",
                                                        lineNumber: 179,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, metric.title, true, {
                                                fileName: "[project]/src/components/common/LighthouseMetrics.tsx",
                                                lineNumber: 156,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/common/LighthouseMetrics.tsx",
                                        lineNumber: 154,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/common/LighthouseMetrics.tsx",
                                    lineNumber: 153,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-white dark:bg-neutral-900/50 p-1.5 sm:p-2 rounded-lg border border-neutral-200 dark:border-neutral-700/50 flex-1 h-[90px] sm:h-[120px] overflow-y-auto",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                            className: "text-[10px] sm:text-xs font-semibold text-neutral-900 dark:text-white mb-1 sm:mb-2 uppercase",
                                            children: activeTab === "best practices" ? "Best Practices Metrics" : `${activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} Metrics`
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/common/LighthouseMetrics.tsx",
                                            lineNumber: 187,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-col gap-1",
                                            children: tabMetrics[activeTab].map((detail)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex justify-between items-center text-[9px] sm:text-[10px]",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center gap-1",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: `w-1.5 h-1.5 rounded-full ${detail.score === 'Fast' ? 'bg-neutral-500' : detail.score === 'Moderate' ? 'bg-orange-500' : 'bg-neutral-500'}`
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/common/LighthouseMetrics.tsx",
                                                                    lineNumber: 194,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-neutral-700 dark:text-neutral-300",
                                                                    children: detail.name
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/common/LighthouseMetrics.tsx",
                                                                    lineNumber: 198,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/common/LighthouseMetrics.tsx",
                                                            lineNumber: 193,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center gap-1",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-neutral-600 dark:text-neutral-400",
                                                                    children: detail.value
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/common/LighthouseMetrics.tsx",
                                                                    lineNumber: 201,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: `text-[9px] sm:text-[10px] font-medium px-1 py-0.5 rounded ${detail.score === 'Fast' ? 'bg-neutral-500/20 text-neutral-700 dark:text-neutral-400' : detail.score === 'Moderate' ? 'bg-orange-500/20 text-orange-700 dark:text-orange-400' : 'bg-neutral-500/20 text-neutral-700 dark:text-neutral-400'}`,
                                                                    children: detail.score
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/common/LighthouseMetrics.tsx",
                                                                    lineNumber: 202,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/common/LighthouseMetrics.tsx",
                                                            lineNumber: 200,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, detail.name, true, {
                                                    fileName: "[project]/src/components/common/LighthouseMetrics.tsx",
                                                    lineNumber: 192,
                                                    columnNumber: 19
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/common/LighthouseMetrics.tsx",
                                            lineNumber: 190,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/common/LighthouseMetrics.tsx",
                                    lineNumber: 186,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-1 pt-1 flex justify-between items-center text-[9px] sm:text-[10px]",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-neutral-600 dark:text-neutral-400",
                                            children: isVisible ? 'Analysis Complete' : 'Analyzing...'
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/common/LighthouseMetrics.tsx",
                                            lineNumber: 214,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-neutral-600 dark:text-neutral-400 font-medium",
                                            children: isVisible ? new Date().toLocaleDateString() : ''
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/common/LighthouseMetrics.tsx",
                                            lineNumber: 217,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/common/LighthouseMetrics.tsx",
                                    lineNumber: 213,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/common/LighthouseMetrics.tsx",
                            lineNumber: 135,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/common/LighthouseMetrics.tsx",
                    lineNumber: 116,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/common/LighthouseMetrics.tsx",
                lineNumber: 114,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/common/LighthouseMetrics.tsx",
        lineNumber: 104,
        columnNumber: 5
    }, this);
}
_s(LighthouseMetrics, "pvDyBevw9vQBtKI3kCib+ivyCxc=");
_c = LighthouseMetrics;
var _c;
__turbopack_context__.k.register(_c, "LighthouseMetrics");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/common/FileTree.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "FileTree": (()=>FileTree)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-jsx/style.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
// Sample file structure for a Next.js project
const initialFileSystem = [
    {
        name: 'src',
        type: 'folder',
        open: true,
        children: [
            {
                name: 'components',
                type: 'folder',
                open: true,
                children: [
                    {
                        name: 'common',
                        type: 'folder',
                        children: [
                            {
                                name: 'Button.tsx',
                                type: 'file',
                                language: 'tsx'
                            },
                            {
                                name: 'Card.tsx',
                                type: 'file',
                                language: 'tsx'
                            },
                            {
                                name: 'FileTree.tsx',
                                type: 'file',
                                language: 'tsx'
                            },
                            {
                                name: 'LighthouseMetrics.tsx',
                                type: 'file',
                                language: 'tsx'
                            }
                        ]
                    },
                    {
                        name: 'layout',
                        type: 'folder',
                        children: [
                            {
                                name: 'Footer.tsx',
                                type: 'file',
                                language: 'tsx'
                            },
                            {
                                name: 'Header.tsx',
                                type: 'file',
                                language: 'tsx'
                            },
                            {
                                name: 'Sidebar.tsx',
                                type: 'file',
                                language: 'tsx'
                            }
                        ]
                    },
                    {
                        name: 'pages',
                        type: 'folder',
                        children: [
                            {
                                name: 'home',
                                type: 'folder',
                                children: [
                                    {
                                        name: 'HomeSection1.tsx',
                                        type: 'file',
                                        language: 'tsx'
                                    },
                                    {
                                        name: 'HomeSection2.tsx',
                                        type: 'file',
                                        language: 'tsx'
                                    },
                                    {
                                        name: 'HomeSection3.tsx',
                                        type: 'file',
                                        language: 'tsx'
                                    }
                                ]
                            },
                            {
                                name: 'about',
                                type: 'folder',
                                children: [
                                    {
                                        name: 'AboutHero.tsx',
                                        type: 'file',
                                        language: 'tsx'
                                    },
                                    {
                                        name: 'TeamSection.tsx',
                                        type: 'file',
                                        language: 'tsx'
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                name: 'lib',
                type: 'folder',
                children: [
                    {
                        name: 'utils.ts',
                        type: 'file',
                        language: 'ts'
                    },
                    {
                        name: 'constants.ts',
                        type: 'file',
                        language: 'ts'
                    }
                ]
            },
            {
                name: 'app',
                type: 'folder',
                open: true,
                children: [
                    {
                        name: 'layout.tsx',
                        type: 'file',
                        language: 'tsx'
                    },
                    {
                        name: 'page.tsx',
                        type: 'file',
                        language: 'tsx'
                    },
                    {
                        name: 'about',
                        type: 'folder',
                        children: [
                            {
                                name: 'page.tsx',
                                type: 'file',
                                language: 'tsx'
                            }
                        ]
                    },
                    {
                        name: 'blog',
                        type: 'folder',
                        children: [
                            {
                                name: 'page.tsx',
                                type: 'file',
                                language: 'tsx'
                            },
                            {
                                name: '[slug]',
                                type: 'folder',
                                children: [
                                    {
                                        name: 'page.tsx',
                                        type: 'file',
                                        language: 'tsx'
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        name: 'public',
        type: 'folder',
        children: [
            {
                name: 'assets',
                type: 'folder',
                children: [
                    {
                        name: 'images',
                        type: 'folder',
                        children: [
                            {
                                name: 'hero.jpg',
                                type: 'file',
                                language: 'image'
                            },
                            {
                                name: 'logo.svg',
                                type: 'file',
                                language: 'svg'
                            }
                        ]
                    }
                ]
            },
            {
                name: 'favicon.ico',
                type: 'file',
                language: 'icon'
            }
        ]
    },
    {
        name: 'package.json',
        type: 'file',
        language: 'json'
    },
    {
        name: 'tsconfig.json',
        type: 'file',
        language: 'json'
    },
    {
        name: 'next.config.js',
        type: 'file',
        language: 'js'
    },
    {
        name: 'tailwind.config.js',
        type: 'file',
        language: 'js'
    },
    {
        name: '.gitignore',
        type: 'file',
        language: 'git'
    }
];
function FileIcon({ language }) {
    // Different file type icons based on language
    const getFileIcon = ()=>{
        switch(language){
            case 'tsx':
            case 'ts':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    className: "w-3.5 h-3.5 text-neutral-400",
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    stroke: "currentColor",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: "2",
                        d: "M12 6v6m0 0v6m0-6h6m-6 0H6"
                    }, void 0, false, {
                        fileName: "[project]/src/components/common/FileTree.tsx",
                        lineNumber: 129,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/common/FileTree.tsx",
                    lineNumber: 128,
                    columnNumber: 11
                }, this);
            case 'js':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    className: "w-3.5 h-3.5 text-neutral-400",
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    stroke: "currentColor",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: "2",
                        d: "M13 10V3L4 14h7v7l9-11h-7z"
                    }, void 0, false, {
                        fileName: "[project]/src/components/common/FileTree.tsx",
                        lineNumber: 135,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/common/FileTree.tsx",
                    lineNumber: 134,
                    columnNumber: 11
                }, this);
            case 'json':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    className: "w-3.5 h-3.5 text-neutral-400",
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    stroke: "currentColor",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: "2",
                        d: "M4 7v10c0 2 1 3 3 3h10c2 0 3-1 3-3V7c0-2-1-3-3-3H7C5 4 4 5 4 7z"
                    }, void 0, false, {
                        fileName: "[project]/src/components/common/FileTree.tsx",
                        lineNumber: 141,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/common/FileTree.tsx",
                    lineNumber: 140,
                    columnNumber: 11
                }, this);
            case 'image':
            case 'svg':
            case 'icon':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    className: "w-3.5 h-3.5 text-purple-400",
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    stroke: "currentColor",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: "2",
                        d: "M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    }, void 0, false, {
                        fileName: "[project]/src/components/common/FileTree.tsx",
                        lineNumber: 149,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/common/FileTree.tsx",
                    lineNumber: 148,
                    columnNumber: 11
                }, this);
            case 'git':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    className: "w-3.5 h-3.5 text-red-400",
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    stroke: "currentColor",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: "2",
                        d: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                    }, void 0, false, {
                        fileName: "[project]/src/components/common/FileTree.tsx",
                        lineNumber: 155,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/common/FileTree.tsx",
                    lineNumber: 154,
                    columnNumber: 11
                }, this);
            default:
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    className: "w-3.5 h-3.5 text-gray-400",
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    stroke: "currentColor",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: "2",
                        d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    }, void 0, false, {
                        fileName: "[project]/src/components/common/FileTree.tsx",
                        lineNumber: 161,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/common/FileTree.tsx",
                    lineNumber: 160,
                    columnNumber: 11
                }, this);
        }
    };
    return getFileIcon();
}
_c = FileIcon;
function FolderIcon({ isOpen }) {
    return isOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        className: "w-3.5 h-3.5 text-neutral-400",
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        stroke: "currentColor",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: "2",
            d: "M5 19a2 2 0 01-2-2V7a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1M5 19h14a2 2 0 002-2v-5a2 2 0 00-2-2H9a2 2 0 00-2 2v5a2 2 0 01-2 2z"
        }, void 0, false, {
            fileName: "[project]/src/components/common/FileTree.tsx",
            lineNumber: 173,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/common/FileTree.tsx",
        lineNumber: 172,
        columnNumber: 5
    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        className: "w-3.5 h-3.5 text-neutral-400",
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        stroke: "currentColor",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: "2",
            d: "M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
        }, void 0, false, {
            fileName: "[project]/src/components/common/FileTree.tsx",
            lineNumber: 177,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/common/FileTree.tsx",
        lineNumber: 176,
        columnNumber: 5
    }, this);
}
_c1 = FolderIcon;
function FileTreeItem({ item, depth = 0 }) {
    _s();
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "select-none",
        ref: containerRef,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `flex items-center py-0.5 px-1 rounded-sm ${item.type === 'folder' ? '' : 'cursor-default'}`,
                style: {
                    paddingLeft: `${depth * 10}px`
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-4 h-4 flex items-center justify-center mr-1",
                        children: item.type === 'folder' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FolderIcon, {
                            isOpen: !!item.open
                        }, void 0, false, {
                            fileName: "[project]/src/components/common/FileTree.tsx",
                            lineNumber: 193,
                            columnNumber: 13
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FileIcon, {
                            language: item.language
                        }, void 0, false, {
                            fileName: "[project]/src/components/common/FileTree.tsx",
                            lineNumber: 195,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/common/FileTree.tsx",
                        lineNumber: 191,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: `text-xs ${item.type === 'folder' ? 'font-medium text-neutral-700 dark:text-neutral-300' : 'text-neutral-600 dark:text-neutral-400'}`,
                        children: item.name
                    }, void 0, false, {
                        fileName: "[project]/src/components/common/FileTree.tsx",
                        lineNumber: 198,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/common/FileTree.tsx",
                lineNumber: 187,
                columnNumber: 7
            }, this),
            item.type === 'folder' && item.open && item.children && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "transition-all duration-200 ease-in-out",
                children: item.children.map((child, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FileTreeItem, {
                        item: child,
                        depth: depth + 1
                    }, `${child.name}-${index}`, false, {
                        fileName: "[project]/src/components/common/FileTree.tsx",
                        lineNumber: 206,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/common/FileTree.tsx",
                lineNumber: 204,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/common/FileTree.tsx",
        lineNumber: 186,
        columnNumber: 5
    }, this);
}
_s(FileTreeItem, "5okL0DAk6Atnb3+Rru+wGBWyP+4=");
_c2 = FileTreeItem;
function FileTree() {
    _s1();
    const [fileSystem] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialFileSystem);
    const scrollContainerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "jsx-d64f0db7e5dff25e" + " " + "flex flex-col h-full",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-d64f0db7e5dff25e" + " " + "flex items-center mb-2 sm:mb-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-d64f0db7e5dff25e" + " " + "p-1 bg-neutral-200 dark:bg-neutral-700 rounded-lg mr-2",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            fill: "none",
                            viewBox: "0 0 24 24",
                            strokeWidth: 1.5,
                            stroke: "currentColor",
                            className: "jsx-d64f0db7e5dff25e" + " " + "w-4 h-4 text-neutral-500",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                d: "M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z",
                                className: "jsx-d64f0db7e5dff25e"
                            }, void 0, false, {
                                fileName: "[project]/src/components/common/FileTree.tsx",
                                lineNumber: 223,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/common/FileTree.tsx",
                            lineNumber: 222,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/common/FileTree.tsx",
                        lineNumber: 221,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "jsx-d64f0db7e5dff25e" + " " + "text-sm sm:text-base font-semibold text-[var(--foreground)]",
                        children: "Ideal Project Structure"
                    }, void 0, false, {
                        fileName: "[project]/src/components/common/FileTree.tsx",
                        lineNumber: 226,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/common/FileTree.tsx",
                lineNumber: 220,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-d64f0db7e5dff25e" + " " + "flex-1 bg-white/90 dark:bg-neutral-800/50 rounded-lg border border-neutral-200 dark:border-neutral-700/50 flex flex-col max-h-[180px] sm:max-h-[250px] h-[180px] sm:h-[250px] overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-d64f0db7e5dff25e" + " " + "sticky top-0 z-10 p-1.5 sm:p-2 bg-neutral-100/95 dark:bg-neutral-800/95 border-b border-neutral-200/40 dark:border-neutral-700/40 mb-1",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-d64f0db7e5dff25e" + " " + "flex justify-between items-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-d64f0db7e5dff25e" + " " + "flex items-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-d64f0db7e5dff25e" + " " + "flex gap-1 mr-2 sm:gap-1.5 sm:mr-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-d64f0db7e5dff25e" + " " + "w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-red-500"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/common/FileTree.tsx",
                                                    lineNumber: 235,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-d64f0db7e5dff25e" + " " + "w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-yellow-500"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/common/FileTree.tsx",
                                                    lineNumber: 236,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-d64f0db7e5dff25e" + " " + "w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-green-500"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/common/FileTree.tsx",
                                                    lineNumber: 237,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/common/FileTree.tsx",
                                            lineNumber: 234,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "jsx-d64f0db7e5dff25e" + " " + "text-[11px] sm:text-xs text-neutral-500 dark:text-neutral-400",
                                            children: "Explorer"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/common/FileTree.tsx",
                                            lineNumber: 239,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/common/FileTree.tsx",
                                    lineNumber: 233,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-d64f0db7e5dff25e" + " " + "flex text-[11px] sm:text-xs text-neutral-500",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "jsx-d64f0db7e5dff25e",
                                        children: "PROJECT_01"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/common/FileTree.tsx",
                                        lineNumber: 242,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/common/FileTree.tsx",
                                    lineNumber: 241,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/common/FileTree.tsx",
                            lineNumber: 232,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/common/FileTree.tsx",
                        lineNumber: 231,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        ref: scrollContainerRef,
                        className: "jsx-d64f0db7e5dff25e" + " " + "flex-1 p-1.5 min-h-40 sm:p-2 pt-0 overflow-y-auto custom-scrollbar",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-d64f0db7e5dff25e" + " " + "mt-1 sm:mt-2",
                            children: fileSystem.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FileTreeItem, {
                                    item: item
                                }, `${item.name}-${index}`, false, {
                                    fileName: "[project]/src/components/common/FileTree.tsx",
                                    lineNumber: 254,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/components/common/FileTree.tsx",
                            lineNumber: 252,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/common/FileTree.tsx",
                        lineNumber: 248,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/common/FileTree.tsx",
                lineNumber: 229,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-d64f0db7e5dff25e" + " " + "mt-1 sm:mt-2 text-[9px] sm:text-[10px] text-neutral-500 flex items-center justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "jsx-d64f0db7e5dff25e",
                        children: "Next.js App"
                    }, void 0, false, {
                        fileName: "[project]/src/components/common/FileTree.tsx",
                        lineNumber: 261,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "jsx-d64f0db7e5dff25e" + " " + "text-neutral-500 dark:text-neutral-400",
                        children: "Optimized for Performance"
                    }, void 0, false, {
                        fileName: "[project]/src/components/common/FileTree.tsx",
                        lineNumber: 262,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/common/FileTree.tsx",
                lineNumber: 260,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                id: "d64f0db7e5dff25e",
                children: ".custom-scrollbar::-webkit-scrollbar{width:6px;height:6px}.custom-scrollbar::-webkit-scrollbar-track{background:#e5e7eb33;border-radius:10px}.dark .custom-scrollbar::-webkit-scrollbar-track{background:#1f1f1f33;border-radius:10px}.custom-scrollbar::-webkit-scrollbar-thumb{background:#9ca3af66;border-radius:10px}.dark .custom-scrollbar::-webkit-scrollbar-thumb{background:#64646466;border-radius:10px}.custom-scrollbar::-webkit-scrollbar-thumb:hover{background:#9ca3afb3}.dark .custom-scrollbar::-webkit-scrollbar-thumb:hover{background:#646464b3}.custom-scrollbar{scrollbar-width:thin;scrollbar-color:#9ca3af66 #e5e7eb33}.dark .custom-scrollbar{scrollbar-width:thin;scrollbar-color:#64646466 #1f1f1f33}"
            }, void 0, false, void 0, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/common/FileTree.tsx",
        lineNumber: 219,
        columnNumber: 5
    }, this);
}
_s1(FileTree, "yjWNmBJTZq+7CLgGoLZg1xlgNuI=");
_c3 = FileTree;
var _c, _c1, _c2, _c3;
__turbopack_context__.k.register(_c, "FileIcon");
__turbopack_context__.k.register(_c1, "FolderIcon");
__turbopack_context__.k.register(_c2, "FileTreeItem");
__turbopack_context__.k.register(_c3, "FileTree");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/common/Globe.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
/* eslint-disable react-hooks/exhaustive-deps */ __turbopack_context__.s({
    "Globe": (()=>Globe)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cobe$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/cobe/dist/index.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-motion-value.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-spring.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const MOVEMENT_DAMPING = 1400;
const GLOBE_CONFIG = {
    width: 800,
    height: 800,
    onRender: ()=>{},
    devicePixelRatio: 2,
    phi: 0,
    theta: 0.3,
    dark: 0,
    diffuse: 0.4,
    mapSamples: 16000,
    mapBrightness: 1.2,
    baseColor: [
        1,
        1,
        1
    ],
    markerColor: [
        20 / 255,
        20 / 255,
        21 / 255
    ],
    glowColor: [
        1,
        1,
        1
    ],
    markers: [
        {
            location: [
                14.5995,
                120.9842
            ],
            size: 0.03
        },
        {
            location: [
                19.076,
                72.8777
            ],
            size: 0.1
        },
        {
            location: [
                23.8103,
                90.4125
            ],
            size: 0.05
        },
        {
            location: [
                30.0444,
                31.2357
            ],
            size: 0.07
        },
        {
            location: [
                39.9042,
                116.4074
            ],
            size: 0.08
        },
        {
            location: [
                -23.5505,
                -46.6333
            ],
            size: 0.1
        },
        {
            location: [
                19.4326,
                -99.1332
            ],
            size: 0.1
        },
        {
            location: [
                40.7128,
                -74.006
            ],
            size: 0.1
        },
        {
            location: [
                34.6937,
                135.5022
            ],
            size: 0.05
        },
        {
            location: [
                41.0082,
                28.9784
            ],
            size: 0.06
        }
    ]
};
function Globe({ className, config = GLOBE_CONFIG }) {
    _s();
    let phi = 0;
    let width = 0;
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const pointerInteracting = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const pointerInteractionMovement = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const r = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"])(0);
    const rs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpring"])(r, {
        mass: 1,
        damping: 30,
        stiffness: 100
    });
    const updatePointerInteraction = (value)=>{
        pointerInteracting.current = value;
        if (canvasRef.current) {
            canvasRef.current.style.cursor = value !== null ? "grabbing" : "grab";
        }
    };
    const updateMovement = (clientX)=>{
        if (pointerInteracting.current !== null) {
            const delta = clientX - pointerInteracting.current;
            pointerInteractionMovement.current = delta;
            r.set(r.get() + delta / MOVEMENT_DAMPING);
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Globe.useEffect": ()=>{
            const onResize = {
                "Globe.useEffect.onResize": ()=>{
                    if (canvasRef.current) {
                        width = canvasRef.current.offsetWidth;
                    }
                }
            }["Globe.useEffect.onResize"];
            window.addEventListener("resize", onResize);
            onResize();
            const globe = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cobe$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(canvasRef.current, {
                ...config,
                width: width * 2,
                height: width * 2,
                onRender: {
                    "Globe.useEffect.globe": (state)=>{
                        if (!pointerInteracting.current) phi += 0.005;
                        state.phi = phi + rs.get();
                        state.width = width * 2;
                        state.height = width * 2;
                    }
                }["Globe.useEffect.globe"]
            });
            setTimeout({
                "Globe.useEffect": ()=>canvasRef.current.style.opacity = "1"
            }["Globe.useEffect"], 0);
            return ({
                "Globe.useEffect": ()=>{
                    globe.destroy();
                    window.removeEventListener("resize", onResize);
                }
            })["Globe.useEffect"];
        }
    }["Globe.useEffect"], [
        rs,
        config
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("absolute inset-0 mx-auto aspect-1/1 w-full max-w-[600px]", className),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("size-full opacity-0 transition-opacity duration-500 [contain:layout_paint_size]"),
            ref: canvasRef,
            onPointerDown: (e)=>{
                pointerInteracting.current = e.clientX;
                updatePointerInteraction(e.clientX);
            },
            onPointerUp: ()=>updatePointerInteraction(null),
            onPointerOut: ()=>updatePointerInteraction(null),
            onMouseMove: (e)=>updateMovement(e.clientX),
            onTouchMove: (e)=>e.touches[0] && updateMovement(e.touches[0].clientX)
        }, void 0, false, {
            fileName: "[project]/src/components/common/Globe.tsx",
            lineNumber: 111,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/common/Globe.tsx",
        lineNumber: 105,
        columnNumber: 5
    }, this);
}
_s(Globe, "hNsFU6SWGNXoXMu/3aRBQzgOIjU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpring"]
    ];
});
_c = Globe;
var _c;
__turbopack_context__.k.register(_c, "Globe");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/common/GlobalDeployments.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "GlobalDeployments": (()=>GlobalDeployments)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$Globe$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/common/Globe.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ThemeProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ThemeProvider.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
// Expanded metadata for existing markers
const regions = [
    {
        name: "Manila",
        location: [
            14.5995,
            120.9842
        ],
        uptime: "99.9%",
        latency: "44ms",
        deployments: 23,
        status: 'active',
        size: 0.03
    },
    {
        name: "Mumbai",
        location: [
            19.076,
            72.8777
        ],
        uptime: "99.8%",
        latency: "51ms",
        deployments: 157,
        status: 'active',
        size: 0.1
    },
    {
        name: "Dhaka",
        location: [
            23.8103,
            90.4125
        ],
        uptime: "99.7%",
        latency: "73ms",
        deployments: 42,
        status: 'active',
        size: 0.05
    },
    {
        name: "Cairo",
        location: [
            30.0444,
            31.2357
        ],
        uptime: "99.5%",
        latency: "88ms",
        deployments: 67,
        status: 'maintenance',
        size: 0.07
    },
    {
        name: "Beijing",
        location: [
            39.9042,
            116.4074
        ],
        uptime: "99.9%",
        latency: "63ms",
        deployments: 184,
        status: 'active',
        size: 0.08
    },
    {
        name: "São Paulo",
        location: [
            -23.5505,
            -46.6333
        ],
        uptime: "99.6%",
        latency: "110ms",
        deployments: 95,
        status: 'active',
        size: 0.1
    },
    {
        name: "Mexico City",
        location: [
            19.4326,
            -99.1332
        ],
        uptime: "99.7%",
        latency: "67ms",
        deployments: 78,
        status: 'active',
        size: 0.1
    },
    {
        name: "New York",
        location: [
            40.7128,
            -74.006
        ],
        uptime: "99.99%",
        latency: "24ms",
        deployments: 231,
        status: 'active',
        size: 0.1
    },
    {
        name: "Tokyo",
        location: [
            34.6937,
            135.5022
        ],
        uptime: "99.95%",
        latency: "48ms",
        deployments: 156,
        status: 'issue',
        size: 0.05
    },
    {
        name: "Istanbul",
        location: [
            41.0082,
            28.9784
        ],
        uptime: "99.6%",
        latency: "92ms",
        deployments: 61,
        status: 'active',
        size: 0.06
    }
];
// Calculate total metrics
const totalDeployments = "250+";
const averageUptime = "99.8%";
const activeRegions = regions.filter((r)=>r.status === 'active').length;
function GlobalDeployments() {
    _s();
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const { theme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ThemeProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"])();
    // Configure the globe with our regions - use neutral markers with neutral base
    const globeConfig = {
        width: 320,
        height: 320,
        devicePixelRatio: 2,
        phi: 0,
        theta: 0.3,
        dark: theme === 'dark' ? 2 : 0,
        diffuse: theme === 'dark' ? 0.6 : 0,
        mapSamples: 16000,
        mapBrightness: theme === 'dark' ? 0.9 : 0.8,
        baseColor: theme === 'dark' ? [
            0.5,
            0.5,
            0.5
        ] : [
            0.9,
            0.9,
            0.9
        ],
        markerColor: [
            0.1,
            0.5,
            1
        ],
        glowColor: theme === 'dark' ? [
            0.11,
            0.11,
            0.11
        ] : [
            0.8,
            0.8,
            0.8
        ],
        markers: regions.map((region)=>({
                location: region.location,
                size: region.size
            })),
        onRender: ()=>{}
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col h-full relative",
        ref: containerRef,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center mb-2 sm:mb-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-1 bg-neutral-200 dark:bg-neutral-800 rounded-lg mr-2",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            fill: "none",
                            viewBox: "0 0 24 24",
                            strokeWidth: 1.5,
                            stroke: "currentColor",
                            className: "w-4 h-4 text-neutral-500 dark:text-neutral-500/80",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                d: "M20.893 13.393l-1.135-1.135a2.252 2.252 0 01-.421-.585l-1.08-2.16a.414.414 0 00-.663-.107.827.827 0 01-.812.21l-1.273-.363a.89.89 0 00-.738 1.595l.587.39c.59.395.674 1.23.172 1.732l-.2.2c-.212.212-.33.498-.33.796v.41c0 .409-.11.809-.32 1.158l-1.315 2.191a2.11 2.11 0 01-1.81 1.025 1.055 1.055 0 01-1.055-1.055v-1.172c0-.92-.56-1.747-1.414-2.089l-.655-.261a2.25 2.25 0 01-1.383-2.46l.007-.042a2.25 2.25 0 01.29-.787l.09-.15a2.25 2.25 0 012.37-1.048l1.178.236a1.125 1.125 0 001.302-.795l.208-.73a1.125 1.125 0 00-.578-1.315l-.665-.332-.091.091a2.25 2.25 0 01-1.591.659h-.18c-.249 0-.487.1-.662.274a.931.931 0 01-1.458-1.137l1.411-2.353a2.25 2.25 0 00.286-.76m11.928 9.869A9 9 0 008.965 3.525m11.928 9.868A9 9 0 118.965 3.525"
                            }, void 0, false, {
                                fileName: "[project]/src/components/common/GlobalDeployments.tsx",
                                lineNumber: 70,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/common/GlobalDeployments.tsx",
                            lineNumber: 69,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/common/GlobalDeployments.tsx",
                        lineNumber: 68,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-sm sm:text-base font-semibold text-neutral-900 dark:text-[var(--foreground)]",
                        children: "Global Deployments"
                    }, void 0, false, {
                        fileName: "[project]/src/components/common/GlobalDeployments.tsx",
                        lineNumber: 73,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/common/GlobalDeployments.tsx",
                lineNumber: 67,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-2 sm:top-4 right-0 z-20",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white/60 dark:bg-neutral-800/50 text-neutral-600 dark:text-neutral-400 text-[9px] sm:text-[10px] px-1.5 sm:px-2 py-0.5 rounded-full backdrop-blur-xs border border-neutral-200 dark:border-neutral-700/30 flex items-center gap-1.5",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"
                        }, void 0, false, {
                            fileName: "[project]/src/components/common/GlobalDeployments.tsx",
                            lineNumber: 79,
                            columnNumber: 21
                        }, this),
                        "Live Status"
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/common/GlobalDeployments.tsx",
                    lineNumber: 78,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/common/GlobalDeployments.tsx",
                lineNumber: 77,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 relative min-h-[180px] sm:min-h-[260px] overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 flex items-center justify-center scale-100 sm:scale-110",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-[180px] h-[180px] sm:w-[320px] sm:h-[320px]",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$Globe$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Globe"], {
                                config: {
                                    ...globeConfig,
                                    width: 320,
                                    height: 320
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/components/common/GlobalDeployments.tsx",
                                lineNumber: 88,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/common/GlobalDeployments.tsx",
                            lineNumber: 87,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/common/GlobalDeployments.tsx",
                        lineNumber: 86,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-linear-to-b from-white/0 via-white/5 to-white/20 dark:from-neutral-900/0 dark:via-neutral-900/10 dark:to-neutral-900/30 pointer-events-none"
                    }, void 0, false, {
                        fileName: "[project]/src/components/common/GlobalDeployments.tsx",
                        lineNumber: 93,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute left-0 right-0 bottom-0 p-1 sm:p-2 pointer-events-none",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex  flex-row justify-between gap-1 sm:gap-0",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-1 sm:gap-3 text-[10px] sm:text-xs",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-white/90 dark:bg-neutral-800/90 backdrop-blur-xs p-1 sm:p-1.5 rounded-md border border-neutral-200 dark:border-neutral-700/30",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "block text-neutral-500 dark:text-neutral-200 font-medium",
                                                children: totalDeployments
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/common/GlobalDeployments.tsx",
                                                lineNumber: 100,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "block text-neutral-500",
                                                children: "Deployments"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/common/GlobalDeployments.tsx",
                                                lineNumber: 101,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/common/GlobalDeployments.tsx",
                                        lineNumber: 99,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-white/90 dark:bg-neutral-800/90 backdrop-blur-xs p-1 sm:p-1.5 rounded-md border border-neutral-200 dark:border-neutral-700/30",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "block text-neutral-500 dark:text-neutral-200 font-medium",
                                                children: averageUptime
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/common/GlobalDeployments.tsx",
                                                lineNumber: 104,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "block text-neutral-500",
                                                children: "Uptime"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/common/GlobalDeployments.tsx",
                                                lineNumber: 105,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/common/GlobalDeployments.tsx",
                                        lineNumber: 103,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-white/90 dark:bg-neutral-800/90 backdrop-blur-xs p-1 sm:p-1.5 rounded-md border border-neutral-200 dark:border-neutral-700/30",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "block text-neutral-500 dark:text-neutral-200 font-medium",
                                                children: activeRegions
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/common/GlobalDeployments.tsx",
                                                lineNumber: 108,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "block text-neutral-500",
                                                children: "Regions"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/common/GlobalDeployments.tsx",
                                                lineNumber: 109,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/common/GlobalDeployments.tsx",
                                        lineNumber: 107,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/common/GlobalDeployments.tsx",
                                lineNumber: 98,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/common/GlobalDeployments.tsx",
                            lineNumber: 97,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/common/GlobalDeployments.tsx",
                        lineNumber: 96,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/common/GlobalDeployments.tsx",
                lineNumber: 84,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-1 sm:mt-2 text-[9px] sm:text-[10px] text-neutral-500 flex items-center justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "Edge Network"
                    }, void 0, false, {
                        fileName: "[project]/src/components/common/GlobalDeployments.tsx",
                        lineNumber: 117,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-neutral-500 dark:text-neutral-400",
                        children: "Global Coverage"
                    }, void 0, false, {
                        fileName: "[project]/src/components/common/GlobalDeployments.tsx",
                        lineNumber: 118,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/common/GlobalDeployments.tsx",
                lineNumber: 116,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/common/GlobalDeployments.tsx",
        lineNumber: 63,
        columnNumber: 9
    }, this);
}
_s(GlobalDeployments, "gZ57u9sSPtxAAGh+qdj+vHE1328=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ThemeProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"]
    ];
});
_c = GlobalDeployments;
var _c;
__turbopack_context__.k.register(_c, "GlobalDeployments");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/common/OneClickDeployment/types.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "pipelineStages": (()=>pipelineStages)
});
const pipelineStages = [
    {
        id: "preparing",
        name: "Prepare",
        duration: 3000
    },
    {
        id: "building",
        name: "Build",
        duration: 3000
    },
    {
        id: "deploying",
        name: "Deploy",
        duration: 3000
    },
    {
        id: "success",
        name: "Live",
        duration: 4000
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/common/OneClickDeployment/utils.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "generateCodeSnippet": (()=>generateCodeSnippet),
    "isStageActive": (()=>isStageActive),
    "isStageComplete": (()=>isStageComplete)
});
const generateCodeSnippet = (stageId)=>{
    switch(stageId){
        case 'preparing':
            return `git checkout main && npm install`;
        case 'building':
            return `npm run build -- --production`;
        case 'testing':
            return `npm run test && npm run e2e`;
        case 'deploying':
            return `aws cloudfront deploy --environment=prod`;
        case 'success':
            return `✨ Deployment successful! Site is live.`;
        default:
            return `initializing...`;
    }
};
const isStageComplete = (currentStage, stageId, pipelineStages)=>{
    const stageIndex = pipelineStages.findIndex((s)=>s.id === stageId);
    const currentIndex = pipelineStages.findIndex((s)=>s.id === currentStage);
    return currentIndex > stageIndex || currentStage === "success";
};
const isStageActive = (currentStage, stageId)=>currentStage === stageId;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/common/OneClickDeployment/components/Terminal.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Terminal)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$OneClickDeployment$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/common/OneClickDeployment/utils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
function Terminal({ stage, deploymentCount }) {
    _s();
    const [typingComplete, setTypingComplete] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const terminalRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [wrappedLines, setWrappedLines] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([
        ""
    ]);
    const commandText = stage !== "reset" ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$OneClickDeployment$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generateCodeSnippet"])(stage) : "Preparing next deployment...";
    // Terminal width properties
    const charsPerLine = 45; // Approximate characters per line
    // Reset and start typing when command changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Terminal.useEffect": ()=>{
            // For success message, display instantly without typing effect
            if (stage === "success") {
                setTypingComplete(true);
                setWrappedLines([
                    ""
                ]);
                return;
            }
            // For other stages, use typing effect
            setTypingComplete(false);
            setWrappedLines([
                ""
            ]);
            let typingTimer;
            let currentPosition = 0;
            // Type one character at a time
            const typeNextChar = {
                "Terminal.useEffect.typeNextChar": ()=>{
                    if (currentPosition < commandText.length) {
                        currentPosition++;
                        const newText = commandText.substring(0, currentPosition);
                        // Handle line wrapping
                        updateWrappedLines(newText);
                        // Randomize typing speed slightly for realism
                        const randomDelay = Math.floor(Math.random() * 30) + 30;
                        typingTimer = setTimeout(typeNextChar, randomDelay);
                    } else {
                        setTypingComplete(true);
                    }
                }
            }["Terminal.useEffect.typeNextChar"];
            // Start typing after a short delay
            typingTimer = setTimeout(typeNextChar, 300);
            return ({
                "Terminal.useEffect": ()=>clearTimeout(typingTimer)
            })["Terminal.useEffect"];
        }
    }["Terminal.useEffect"], [
        commandText,
        stage
    ]);
    // Handle line wrapping
    const updateWrappedLines = (text)=>{
        // Split text into lines that fit within terminal width
        const lines = [];
        let remainingText = text;
        while(remainingText.length > 0){
            if (remainingText.length <= charsPerLine) {
                lines.push(remainingText);
                break;
            }
            // Find a good break point
            let breakPoint = charsPerLine;
            // Try to break at a space if possible
            const lastSpaceIndex = remainingText.substring(0, charsPerLine).lastIndexOf(' ');
            if (lastSpaceIndex > 0 && lastSpaceIndex > charsPerLine - 10) {
                breakPoint = lastSpaceIndex + 1;
            }
            lines.push(remainingText.substring(0, breakPoint));
            remainingText = remainingText.substring(breakPoint);
        }
        setWrappedLines(lines);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-[#0D1117] dark:bg-[#0D1117] rounded-lg border border-neutral-300 dark:border-neutral-700 overflow-hidden mb-1",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between px-3 py-1.5 bg-[#F6F8FA] dark:bg-[#161B22] border-b border-neutral-300 dark:border-neutral-700",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-1.5 mr-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-2.5 h-2.5 rounded-full bg-red-500"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/common/OneClickDeployment/components/Terminal.tsx",
                                    lineNumber: 92,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-2.5 h-2.5 rounded-full bg-yellow-500"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/common/OneClickDeployment/components/Terminal.tsx",
                                    lineNumber: 93,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-2.5 h-2.5 rounded-full bg-neutral-500"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/common/OneClickDeployment/components/Terminal.tsx",
                                    lineNumber: 94,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/common/OneClickDeployment/components/Terminal.tsx",
                            lineNumber: 91,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-xs text-neutral-600 dark:text-neutral-400",
                            children: "terminal"
                        }, void 0, false, {
                            fileName: "[project]/src/components/common/OneClickDeployment/components/Terminal.tsx",
                            lineNumber: 96,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/common/OneClickDeployment/components/Terminal.tsx",
                    lineNumber: 90,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/common/OneClickDeployment/components/Terminal.tsx",
                lineNumber: 89,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: terminalRef,
                className: "p-3 h-28 font-mono text-xs relative overflow-hidden bg-white dark:bg-neutral-900 text-neutral-800 dark:text-white",
                children: [
                    stage !== "success" ? /* Regular command with typing effect */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-neutral-600 dark:text-neutral-400 mr-1.5",
                                        children: ">"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/common/OneClickDeployment/components/Terminal.tsx",
                                        lineNumber: 108,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "whitespace-pre-wrap",
                                        children: [
                                            wrappedLines[0],
                                            !typingComplete && wrappedLines.length === 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                                                className: "inline-block w-1.5 h-3.5 bg-neutral-800 dark:bg-white ml-0.5 align-middle",
                                                animate: {
                                                    opacity: [
                                                        1,
                                                        0,
                                                        1
                                                    ]
                                                },
                                                transition: {
                                                    repeat: Infinity,
                                                    duration: 1
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/common/OneClickDeployment/components/Terminal.tsx",
                                                lineNumber: 112,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/common/OneClickDeployment/components/Terminal.tsx",
                                        lineNumber: 109,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/common/OneClickDeployment/components/Terminal.tsx",
                                lineNumber: 107,
                                columnNumber: 13
                            }, this),
                            wrappedLines.slice(1).map((line, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "ml-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: line
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/common/OneClickDeployment/components/Terminal.tsx",
                                            lineNumber: 124,
                                            columnNumber: 17
                                        }, this),
                                        !typingComplete && index === wrappedLines.length - 2 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                                            className: "inline-block w-1.5 h-3.5 bg-neutral-800 dark:bg-white ml-0.5 align-middle",
                                            animate: {
                                                opacity: [
                                                    1,
                                                    0,
                                                    1
                                                ]
                                            },
                                            transition: {
                                                repeat: Infinity,
                                                duration: 1
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/common/OneClickDeployment/components/Terminal.tsx",
                                            lineNumber: 126,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, index, true, {
                                    fileName: "[project]/src/components/common/OneClickDeployment/components/Terminal.tsx",
                                    lineNumber: 123,
                                    columnNumber: 15
                                }, this))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/common/OneClickDeployment/components/Terminal.tsx",
                        lineNumber: 105,
                        columnNumber: 11
                    }, this) : /* Success message without typing effect */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0
                        },
                        animate: {
                            opacity: 1
                        },
                        transition: {
                            duration: 0.3
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-neutral-600 dark:text-neutral-400",
                            children: "✨ Deployment successful! Site is live."
                        }, void 0, false, {
                            fileName: "[project]/src/components/common/OneClickDeployment/components/Terminal.tsx",
                            lineNumber: 142,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/common/OneClickDeployment/components/Terminal.tsx",
                        lineNumber: 137,
                        columnNumber: 11
                    }, this),
                    typingComplete && stage === "preparing" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        className: "mt-1",
                        initial: {
                            opacity: 0
                        },
                        animate: {
                            opacity: 1
                        },
                        transition: {
                            delay: 0.2
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-neutral-600 dark:text-neutral-400",
                                children: "Checking dependencies..."
                            }, void 0, false, {
                                fileName: "[project]/src/components/common/OneClickDeployment/components/Terminal.tsx",
                                lineNumber: 154,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-neutral-600 dark:text-neutral-400",
                                children: "Initializing environment..."
                            }, void 0, false, {
                                fileName: "[project]/src/components/common/OneClickDeployment/components/Terminal.tsx",
                                lineNumber: 155,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/common/OneClickDeployment/components/Terminal.tsx",
                        lineNumber: 148,
                        columnNumber: 11
                    }, this),
                    typingComplete && stage === "building" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        className: "mt-1",
                        initial: {
                            opacity: 0
                        },
                        animate: {
                            opacity: 1
                        },
                        transition: {
                            delay: 0.2
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-amber-600 dark:text-yellow-400",
                                children: "→ Bundling assets..."
                            }, void 0, false, {
                                fileName: "[project]/src/components/common/OneClickDeployment/components/Terminal.tsx",
                                lineNumber: 166,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-neutral-600 dark:text-neutral-400",
                                children: "→ Optimizing code..."
                            }, void 0, false, {
                                fileName: "[project]/src/components/common/OneClickDeployment/components/Terminal.tsx",
                                lineNumber: 167,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/common/OneClickDeployment/components/Terminal.tsx",
                        lineNumber: 160,
                        columnNumber: 11
                    }, this),
                    typingComplete && stage === "deploying" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        className: "mt-1",
                        initial: {
                            opacity: 0
                        },
                        animate: {
                            opacity: 1
                        },
                        transition: {
                            delay: 0.2
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-neutral-600 dark:text-neutral-400",
                                children: "→ Uploading to CDN..."
                            }, void 0, false, {
                                fileName: "[project]/src/components/common/OneClickDeployment/components/Terminal.tsx",
                                lineNumber: 178,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-neutral-600 dark:text-neutral-400",
                                children: "→ Setting up routing..."
                            }, void 0, false, {
                                fileName: "[project]/src/components/common/OneClickDeployment/components/Terminal.tsx",
                                lineNumber: 179,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/common/OneClickDeployment/components/Terminal.tsx",
                        lineNumber: 172,
                        columnNumber: 11
                    }, this),
                    stage === "success" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0,
                            y: 5
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            delay: 0.2
                        },
                        className: "mt-2 text-neutral-600 dark:text-neutral-300",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mr-2 text-neutral-800 dark:text-white",
                                        children: "✓"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/common/OneClickDeployment/components/Terminal.tsx",
                                        lineNumber: 192,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: [
                                            "Deployment #00",
                                            deploymentCount + 1,
                                            " complete"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/common/OneClickDeployment/components/Terminal.tsx",
                                        lineNumber: 193,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/common/OneClickDeployment/components/Terminal.tsx",
                                lineNumber: 191,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center mt-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mr-2 text-neutral-800 dark:text-white",
                                        children: "ℹ"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/common/OneClickDeployment/components/Terminal.tsx",
                                        lineNumber: 196,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: [
                                            "URL: ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-neutral-600 dark:text-neutral-400 underline",
                                                children: "https://example.com"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/common/OneClickDeployment/components/Terminal.tsx",
                                                lineNumber: 197,
                                                columnNumber: 26
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/common/OneClickDeployment/components/Terminal.tsx",
                                        lineNumber: 197,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/common/OneClickDeployment/components/Terminal.tsx",
                                lineNumber: 195,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/common/OneClickDeployment/components/Terminal.tsx",
                        lineNumber: 185,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/common/OneClickDeployment/components/Terminal.tsx",
                lineNumber: 102,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/common/OneClickDeployment/components/Terminal.tsx",
        lineNumber: 87,
        columnNumber: 5
    }, this);
}
_s(Terminal, "pbjgiebveExBjczXi7IsIvcLn0U=");
_c = Terminal;
var _c;
__turbopack_context__.k.register(_c, "Terminal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/common/OneClickDeployment/components/DeploymentProgress.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>DeploymentProgress)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$OneClickDeployment$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/common/OneClickDeployment/types.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$OneClickDeployment$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/common/OneClickDeployment/utils.ts [app-client] (ecmascript)");
;
;
;
;
function DeploymentProgress({ stage }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative flex items-center justify-between mb-1 p-2 rounded-lg border border-neutral-300 dark:border-neutral-700",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute right-0 h-[2px] bg-neutral-200 dark:bg-neutral-800 z-0",
                style: {
                    top: '14px'
                }
            }, void 0, false, {
                fileName: "[project]/src/components/common/OneClickDeployment/components/DeploymentProgress.tsx",
                lineNumber: 13,
                columnNumber: 13
            }, this),
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$OneClickDeployment$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipelineStages"].map((pStage, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative flex flex-col items-center z-50",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            className: `w-8 h-8 rounded-full flex items-center justify-center z-20`,
                            initial: {
                                backgroundColor: "var(--progress-inactive-bg)"
                            },
                            animate: {
                                backgroundColor: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$OneClickDeployment$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isStageComplete"])(stage, pStage.id, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$OneClickDeployment$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipelineStages"]) ? "var(--progress-active-bg)" : (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$OneClickDeployment$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isStageActive"])(stage, pStage.id) ? "var(--progress-active-bg)" : "var(--progress-inactive-bg)",
                                transition: {
                                    duration: 0.5,
                                    ease: "easeIn",
                                    delay: 0.5
                                }
                            },
                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$OneClickDeployment$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isStageComplete"])(stage, pStage.id, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$OneClickDeployment$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipelineStages"]) ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                className: "w-4 h-4 text-neutral-100 dark:text-neutral-900",
                                xmlns: "http://www.w3.org/2000/svg",
                                viewBox: "0 0 20 20",
                                fill: "currentColor",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    fillRule: "evenodd",
                                    d: "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",
                                    clipRule: "evenodd"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/common/OneClickDeployment/components/DeploymentProgress.tsx",
                                    lineNumber: 37,
                                    columnNumber: 33
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/common/OneClickDeployment/components/DeploymentProgress.tsx",
                                lineNumber: 36,
                                columnNumber: 29
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: `text-xs ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$OneClickDeployment$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isStageActive"])(stage, pStage.id) ? "text-white dark:text-black" : "text-neutral-600 dark:text-neutral-600"}`,
                                children: index + 1
                            }, void 0, false, {
                                fileName: "[project]/src/components/common/OneClickDeployment/components/DeploymentProgress.tsx",
                                lineNumber: 40,
                                columnNumber: 29
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/common/OneClickDeployment/components/DeploymentProgress.tsx",
                            lineNumber: 21,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-2 text-[9px] font-medium text-neutral-600 dark:text-neutral-400",
                            children: pStage.name
                        }, void 0, false, {
                            fileName: "[project]/src/components/common/OneClickDeployment/components/DeploymentProgress.tsx",
                            lineNumber: 45,
                            columnNumber: 21
                        }, this),
                        index < __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$OneClickDeployment$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipelineStages"].length - 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute top-[14px] h-[2px] bg-neutral-300 dark:bg-neutral-700 origin-left z-0",
                            style: {
                                left: '32px',
                                width: '40px'
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/components/common/OneClickDeployment/components/DeploymentProgress.tsx",
                            lineNumber: 49,
                            columnNumber: 25
                        }, this),
                        index < __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$OneClickDeployment$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipelineStages"].length - 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute top-[14px] h-[2px] z-1",
                            style: {
                                left: '32px',
                                width: '40px'
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                className: "h-full bg-gray-500 dark:bg-gray-100 origin-left",
                                initial: {
                                    scaleX: 0
                                },
                                animate: {
                                    scaleX: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$OneClickDeployment$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isStageComplete"])(stage, pStage.id, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$OneClickDeployment$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipelineStages"]) ? 1 : 0
                                },
                                transition: {
                                    duration: 0.5,
                                    ease: "easeInOut"
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/components/common/OneClickDeployment/components/DeploymentProgress.tsx",
                                lineNumber: 62,
                                columnNumber: 29
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/common/OneClickDeployment/components/DeploymentProgress.tsx",
                            lineNumber: 58,
                            columnNumber: 25
                        }, this)
                    ]
                }, pStage.id, true, {
                    fileName: "[project]/src/components/common/OneClickDeployment/components/DeploymentProgress.tsx",
                    lineNumber: 19,
                    columnNumber: 17
                }, this))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/common/OneClickDeployment/components/DeploymentProgress.tsx",
        lineNumber: 11,
        columnNumber: 9
    }, this);
}
_c = DeploymentProgress;
var _c;
__turbopack_context__.k.register(_c, "DeploymentProgress");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/common/OneClickDeployment/components/SuccessEffects.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>SuccessEffects)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
;
;
function SuccessEffects({ showSuccessEffects }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
        children: showSuccessEffects && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute inset-0 pointer-events-none overflow-hidden",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                className: "absolute inset-0 bg-blue-500/10 dark:bg-blue-500/10 rounded-lg",
                initial: {
                    opacity: 0
                },
                animate: {
                    opacity: [
                        0,
                        0.3,
                        0
                    ]
                },
                transition: {
                    duration: 1.5
                }
            }, void 0, false, {
                fileName: "[project]/src/components/common/OneClickDeployment/components/SuccessEffects.tsx",
                lineNumber: 13,
                columnNumber: 11
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/common/OneClickDeployment/components/SuccessEffects.tsx",
            lineNumber: 11,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/common/OneClickDeployment/components/SuccessEffects.tsx",
        lineNumber: 9,
        columnNumber: 5
    }, this);
}
_c = SuccessEffects;
var _c;
__turbopack_context__.k.register(_c, "SuccessEffects");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/common/OneClickDeployment/index.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "OneClickDeployment": (()=>OneClickDeployment)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$OneClickDeployment$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/common/OneClickDeployment/types.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$OneClickDeployment$2f$components$2f$Terminal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/common/OneClickDeployment/components/Terminal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$OneClickDeployment$2f$components$2f$DeploymentProgress$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/common/OneClickDeployment/components/DeploymentProgress.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$OneClickDeployment$2f$components$2f$SuccessEffects$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/common/OneClickDeployment/components/SuccessEffects.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function OneClickDeployment() {
    _s();
    const [stage, setStage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("preparing");
    const [showSuccessEffects, setShowSuccessEffects] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isVisible, setIsVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [deploymentCount, setDeploymentCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const autoAnimationRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Detect when component comes into view
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OneClickDeployment.useEffect": ()=>{
            const observer = new IntersectionObserver({
                "OneClickDeployment.useEffect": (entries)=>{
                    if (entries[0].isIntersecting) {
                        setIsVisible(true);
                        observer.disconnect();
                    }
                }
            }["OneClickDeployment.useEffect"], {
                threshold: 0.2
            });
            if (containerRef.current) {
                observer.observe(containerRef.current);
            }
            return ({
                "OneClickDeployment.useEffect": ()=>observer.disconnect()
            })["OneClickDeployment.useEffect"];
        }
    }["OneClickDeployment.useEffect"], []);
    // Orchestrate the automatic demo when visible
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OneClickDeployment.useEffect": ()=>{
            if (isVisible) {
                runDeploymentDemo();
            }
            return ({
                "OneClickDeployment.useEffect": ()=>{
                    if (autoAnimationRef.current) {
                        clearTimeout(autoAnimationRef.current);
                    }
                }
            })["OneClickDeployment.useEffect"];
        }
    }["OneClickDeployment.useEffect"], [
        isVisible,
        deploymentCount
    ]);
    // Progress timing and sequence for each stage
    const runDeploymentDemo = ()=>{
        setStage("preparing");
        setShowSuccessEffects(false);
        let cumulativeTime = 0;
        // Sequentially run through stages
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$OneClickDeployment$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipelineStages"].forEach((stageConfig)=>{
            // Set stage change timeout
            autoAnimationRef.current = setTimeout(()=>{
                setStage(stageConfig.id);
                // Show success effects when reaching the final stage
                if (stageConfig.id === "success") {
                    setShowSuccessEffects(true);
                    // Reset after showcasing success
                    autoAnimationRef.current = setTimeout(()=>{
                        setStage("reset");
                        // Start a new deployment cycle after reset
                        autoAnimationRef.current = setTimeout(()=>{
                            setDeploymentCount((prev)=>prev + 1);
                        }, 50);
                    }, stageConfig.duration);
                }
            }, cumulativeTime);
            cumulativeTime += stageConfig.duration;
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: containerRef,
        className: "flex flex-col h-full overflow-hidden",
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
                            className: "w-4 h-4 text-neutral-600 dark:text-[var(--foreground)]",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                d: "M3 8.688c0-.864.933-1.405 1.683-.977l7.108 4.062a1.125 1.125 0 010 1.953l-7.108 4.062A1.125 1.125 0 013 16.81V8.688zM12.75 8.688c0-.864.933-1.405 1.683-.977l7.108 4.062a1.125 1.125 0 010 1.953l-7.108 4.062a1.125 1.125 0 01-1.683-.977V8.688z"
                            }, void 0, false, {
                                fileName: "[project]/src/components/common/OneClickDeployment/index.tsx",
                                lineNumber: 91,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/common/OneClickDeployment/index.tsx",
                            lineNumber: 90,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/common/OneClickDeployment/index.tsx",
                        lineNumber: 89,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-sm sm:text-base font-semibold text-neutral-900 dark:text-[var(--foreground)]",
                        children: "Deployment Pipeline"
                    }, void 0, false, {
                        fileName: "[project]/src/components/common/OneClickDeployment/index.tsx",
                        lineNumber: 94,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/common/OneClickDeployment/index.tsx",
                lineNumber: 88,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$OneClickDeployment$2f$components$2f$Terminal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                stage: stage,
                deploymentCount: deploymentCount
            }, void 0, false, {
                fileName: "[project]/src/components/common/OneClickDeployment/index.tsx",
                lineNumber: 97,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 flex flex-col pt-2 sm:pt-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$OneClickDeployment$2f$components$2f$DeploymentProgress$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    stage: stage
                }, void 0, false, {
                    fileName: "[project]/src/components/common/OneClickDeployment/index.tsx",
                    lineNumber: 101,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/common/OneClickDeployment/index.tsx",
                lineNumber: 100,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$OneClickDeployment$2f$components$2f$SuccessEffects$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                showSuccessEffects: showSuccessEffects
            }, void 0, false, {
                fileName: "[project]/src/components/common/OneClickDeployment/index.tsx",
                lineNumber: 104,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-1 sm:mt-2 text-[9px] sm:text-[10px] text-neutral-500 flex items-center justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "CI/CD Pipeline"
                    }, void 0, false, {
                        fileName: "[project]/src/components/common/OneClickDeployment/index.tsx",
                        lineNumber: 108,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-neutral-500 dark:text-neutral-400",
                        children: "Automated Deployment"
                    }, void 0, false, {
                        fileName: "[project]/src/components/common/OneClickDeployment/index.tsx",
                        lineNumber: 109,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/common/OneClickDeployment/index.tsx",
                lineNumber: 107,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/common/OneClickDeployment/index.tsx",
        lineNumber: 84,
        columnNumber: 5
    }, this);
}
_s(OneClickDeployment, "KKXJYvU5BhjRvUzDt2KJLUM6hX4=");
_c = OneClickDeployment;
var _c;
__turbopack_context__.k.register(_c, "OneClickDeployment");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/pages/home/HomeSection3/index.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>HomeSection3)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$ShineBorder$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/common/ShineBorder.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$LighthouseMetrics$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/common/LighthouseMetrics.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$FileTree$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/common/FileTree.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$GlobalDeployments$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/common/GlobalDeployments.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$OneClickDeployment$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/common/OneClickDeployment/index.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/shared/lib/app-dynamic.js [app-client] (ecmascript)");
;
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
// Dynamically import ScalableEnvironments to avoid recharts in initial JS bundle
const ScalableEnvironments = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.r("[project]/src/components/common/ScalableEnvironments/index.tsx [app-client] (ecmascript, next/dynamic entry, async loader)")(__turbopack_context__.i).then((mod)=>mod.ScalableEnvironments), {
    loadableGenerated: {
        modules: [
            "[project]/src/components/common/ScalableEnvironments/index.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false,
    loading: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "h-[180px] flex items-center justify-center border border-neutral-200 dark:border-neutral-700/50 rounded-lg bg-white/90 dark:bg-neutral-800/50 p-3",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-xs text-neutral-400 animate-pulse",
                children: "Loading visualization..."
            }, void 0, false, {
                fileName: "[project]/src/components/pages/home/HomeSection3/index.tsx",
                lineNumber: 18,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/pages/home/HomeSection3/index.tsx",
            lineNumber: 17,
            columnNumber: 7
        }, this)
});
_c = ScalableEnvironments;
// Combined features array with size information and LighthouseMetrics
const features = [
    {
        title: "Performance Metrics",
        description: "See how your site performs with our built-in performance analysis tools.",
        size: "col-span-1 md:col-span-3 md:row-span-3",
        customComponent: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$LighthouseMetrics$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LighthouseMetrics"], {}, void 0, false, {
            fileName: "[project]/src/components/pages/home/HomeSection3/index.tsx",
            lineNumber: 39,
            columnNumber: 26
        }, this)
    },
    {
        title: "One-Click Deployment",
        description: "Roll out updates or entire projects with just a single click. Build, deploy, and go live in seconds.",
        size: "col-span-1 md:col-span-1 row-span-1 md:row-span-3",
        customComponent: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$OneClickDeployment$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OneClickDeployment"], {}, void 0, false, {
            fileName: "[project]/src/components/pages/home/HomeSection3/index.tsx",
            lineNumber: 45,
            columnNumber: 26
        }, this)
    },
    {
        title: "File Structure",
        description: "Organize your project with our recommended file structure for optimal maintainability.",
        size: "col-span-1 row-span-2",
        customComponent: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$FileTree$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FileTree"], {}, void 0, false, {
            fileName: "[project]/src/components/pages/home/HomeSection3/index.tsx",
            lineNumber: 51,
            columnNumber: 26
        }, this)
    },
    {
        title: "Scalable Environments",
        description: "Automatically scale your application as traffic and usage increases, ensuring optimal performance at all times.",
        size: "col-span-1 row-span-2",
        customComponent: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ScalableEnvironments, {}, void 0, false, {
            fileName: "[project]/src/components/pages/home/HomeSection3/index.tsx",
            lineNumber: 57,
            columnNumber: 26
        }, this)
    },
    {
        title: "Global Deployments",
        description: "Deploy your applications to data centers worldwide for optimal performance and reliability.",
        size: "col-span-1 md:col-span-2 row-span-2",
        customComponent: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$GlobalDeployments$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GlobalDeployments"], {}, void 0, false, {
            fileName: "[project]/src/components/pages/home/HomeSection3/index.tsx",
            lineNumber: 63,
            columnNumber: 26
        }, this)
    }
];
function HomeSection3() {
    _s();
    const [hasBeenVisible, setHasBeenVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const sectionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HomeSection3.useEffect": ()=>{
            const observer = new IntersectionObserver({
                "HomeSection3.useEffect": (entries)=>{
                    if (entries[0].isIntersecting) {
                        setHasBeenVisible(true);
                        observer.disconnect();
                    }
                }
            }["HomeSection3.useEffect"], {
                threshold: 0.1
            } // Trigger when at least 10% of the element is visible
            );
            if (sectionRef.current) {
                observer.observe(sectionRef.current);
            }
            return ({
                "HomeSection3.useEffect": ()=>{
                    observer.disconnect();
                }
            })["HomeSection3.useEffect"];
        }
    }["HomeSection3.useEffect"], []);
    if (!hasBeenVisible) {
        // Return an empty placeholder with the same dimensions
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            ref: sectionRef,
            className: "relative z-10 flex flex-col items-center justify-center w-full p-6 sm:p-10 md:p-20 px-2 sm:px-6 md:px-10 mx-auto mt-[-100px] sm:mt-[-150px] md:mt-[-190px] border-[1px] dark:bg-black border-neutral-100 dark:border-neutral-900 rounded-lg min-h-[300px]"
        }, void 0, false, {
            fileName: "[project]/src/components/pages/home/HomeSection3/index.tsx",
            lineNumber: 94,
            columnNumber: 13
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        ref: sectionRef,
        className: "relative z-10 flex flex-col items-center justify-center w-full p-6 sm:p-10 md:p-20 px-2 sm:px-6 md:px-10 mx-auto   border-[1px] dark:bg-black border-neutral-100 dark:border-neutral-900",
        "aria-label": "Platform features",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container px-2 sm:px-4 mx-auto",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-8 sm:mb-12 text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--foreground)] mb-2 sm:mb-3",
                            children: "Powerful Features"
                        }, void 0, false, {
                            fileName: "[project]/src/components/pages/home/HomeSection3/index.tsx",
                            lineNumber: 109,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-base sm:text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto",
                            children: "Discover the tools that make our platform stand out from the competition"
                        }, void 0, false, {
                            fileName: "[project]/src/components/pages/home/HomeSection3/index.tsx",
                            lineNumber: 110,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/pages/home/HomeSection3/index.tsx",
                    lineNumber: 108,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 auto-rows-min min-[400px]:auto-rows-[minmax(100px,auto)]",
                    role: "list",
                    "aria-label": "Platform feature list",
                    children: features.map((feature, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `mb-2 ${feature.size} bg-neutral-100 dark:bg-neutral-900 relative rounded-xl p-4 sm:p-6 flex flex-col`,
                            role: "listitem",
                            "aria-labelledby": `feature-title-${index}`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$ShineBorder$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShineBorder"], {
                                    shineColor: "var(--shineBorder)"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/pages/home/HomeSection3/index.tsx",
                                    lineNumber: 127,
                                    columnNumber: 29
                                }, this),
                                feature.customComponent ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            id: `feature-title-${index}`,
                                            className: "sr-only",
                                            children: feature.title
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/pages/home/HomeSection3/index.tsx",
                                            lineNumber: 130,
                                            columnNumber: 37
                                        }, this),
                                        feature.customComponent
                                    ]
                                }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "p-2 sm:p-3 bg-neutral-700 rounded-lg inline-block mb-3 sm:mb-4",
                                            "aria-hidden": "true",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-blue-400",
                                                children: feature.icon
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/pages/home/HomeSection3/index.tsx",
                                                lineNumber: 141,
                                                columnNumber: 41
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/pages/home/HomeSection3/index.tsx",
                                            lineNumber: 140,
                                            columnNumber: 37
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            id: `feature-title-${index}`,
                                            className: "text-lg sm:text-xl font-semibold text-[var(--foreground)] mb-1 sm:mb-2",
                                            children: feature.title
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/pages/home/HomeSection3/index.tsx",
                                            lineNumber: 145,
                                            columnNumber: 37
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-neutral-400 text-sm sm:text-base",
                                            children: feature.description
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/pages/home/HomeSection3/index.tsx",
                                            lineNumber: 151,
                                            columnNumber: 37
                                        }, this)
                                    ]
                                }, void 0, true)
                            ]
                        }, index, true, {
                            fileName: "[project]/src/components/pages/home/HomeSection3/index.tsx",
                            lineNumber: 121,
                            columnNumber: 25
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/components/pages/home/HomeSection3/index.tsx",
                    lineNumber: 115,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/pages/home/HomeSection3/index.tsx",
            lineNumber: 107,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/pages/home/HomeSection3/index.tsx",
        lineNumber: 102,
        columnNumber: 9
    }, this);
}
_s(HomeSection3, "qJli0p+2rBVMl3Lx94zHbGeW9IY=");
_c1 = HomeSection3;
var _c, _c1;
__turbopack_context__.k.register(_c, "ScalableEnvironments");
__turbopack_context__.k.register(_c1, "HomeSection3");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/pages/home/HomeSection3/index.tsx [app-client] (ecmascript, next/dynamic entry)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/src/components/pages/home/HomeSection3/index.tsx [app-client] (ecmascript)"));
}}),
}]);

//# sourceMappingURL=src_components_d6be24be._.js.map