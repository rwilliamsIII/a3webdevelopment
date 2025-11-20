(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/components/pages/home/HomeSection2/Dashboard/Sidebar/Sidebar.module.css [app-client] (css module)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v({
  "badge": "Sidebar-module__Bo9KDq__badge",
  "badgeActive": "Sidebar-module__Bo9KDq__badgeActive",
  "badgeInactive": "Sidebar-module__Bo9KDq__badgeInactive",
  "brandContainer": "Sidebar-module__Bo9KDq__brandContainer",
  "brandHeader": "Sidebar-module__Bo9KDq__brandHeader",
  "brandName": "Sidebar-module__Bo9KDq__brandName",
  "content": "Sidebar-module__Bo9KDq__content",
  "footer": "Sidebar-module__Bo9KDq__footer",
  "label": "Sidebar-module__Bo9KDq__label",
  "logoContainer": "Sidebar-module__Bo9KDq__logoContainer",
  "logoText": "Sidebar-module__Bo9KDq__logoText",
  "logoutButton": "Sidebar-module__Bo9KDq__logoutButton",
  "logoutIcon": "Sidebar-module__Bo9KDq__logoutIcon",
  "logoutText": "Sidebar-module__Bo9KDq__logoutText",
  "navItem": "Sidebar-module__Bo9KDq__navItem",
  "navItemActive": "Sidebar-module__Bo9KDq__navItemActive",
  "navItemInactive": "Sidebar-module__Bo9KDq__navItemInactive",
  "sectionTitle": "Sidebar-module__Bo9KDq__sectionTitle",
  "sidebarWrapper": "Sidebar-module__Bo9KDq__sidebarWrapper",
});
}}),
"[project]/src/components/pages/home/HomeSection2/Dashboard/Sidebar/index.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Sidebar)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconLayoutDashboard$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconLayoutDashboard$3e$__ = __turbopack_context__.i("[project]/node_modules/@tabler/icons-react/dist/esm/icons/IconLayoutDashboard.mjs [app-client] (ecmascript) <export default as IconLayoutDashboard>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconBox$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconBox$3e$__ = __turbopack_context__.i("[project]/node_modules/@tabler/icons-react/dist/esm/icons/IconBox.mjs [app-client] (ecmascript) <export default as IconBox>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconTerminal2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconTerminal2$3e$__ = __turbopack_context__.i("[project]/node_modules/@tabler/icons-react/dist/esm/icons/IconTerminal2.mjs [app-client] (ecmascript) <export default as IconTerminal2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconBell$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconBell$3e$__ = __turbopack_context__.i("[project]/node_modules/@tabler/icons-react/dist/esm/icons/IconBell.mjs [app-client] (ecmascript) <export default as IconBell>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconUsers$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconUsers$3e$__ = __turbopack_context__.i("[project]/node_modules/@tabler/icons-react/dist/esm/icons/IconUsers.mjs [app-client] (ecmascript) <export default as IconUsers>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconSettings$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconSettings$3e$__ = __turbopack_context__.i("[project]/node_modules/@tabler/icons-react/dist/esm/icons/IconSettings.mjs [app-client] (ecmascript) <export default as IconSettings>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconLogout$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconLogout$3e$__ = __turbopack_context__.i("[project]/node_modules/@tabler/icons-react/dist/esm/icons/IconLogout.mjs [app-client] (ecmascript) <export default as IconLogout>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconFileText$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconFileText$3e$__ = __turbopack_context__.i("[project]/node_modules/@tabler/icons-react/dist/esm/icons/IconFileText.mjs [app-client] (ecmascript) <export default as IconFileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconLifebuoy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconLifebuoy$3e$__ = __turbopack_context__.i("[project]/node_modules/@tabler/icons-react/dist/esm/icons/IconLifebuoy.mjs [app-client] (ecmascript) <export default as IconLifebuoy>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconGitBranch$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconGitBranch$3e$__ = __turbopack_context__.i("[project]/node_modules/@tabler/icons-react/dist/esm/icons/IconGitBranch.mjs [app-client] (ecmascript) <export default as IconGitBranch>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconRocket$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconRocket$3e$__ = __turbopack_context__.i("[project]/node_modules/@tabler/icons-react/dist/esm/icons/IconRocket.mjs [app-client] (ecmascript) <export default as IconRocket>");
// Import only the motion component to reduce bundle size
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$pages$2f$home$2f$HomeSection2$2f$Dashboard$2f$Sidebar$2f$Sidebar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/pages/home/HomeSection2/Dashboard/Sidebar/Sidebar.module.css [app-client] (css module)");
"use client";
;
;
;
;
function Sidebar({ currentRoute, onNavigate }) {
    // Combined navigation items and sections
    const navElements = [
        // Main section
        {
            type: "section",
            title: "Main"
        },
        {
            type: "item",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconLayoutDashboard$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconLayoutDashboard$3e$__["IconLayoutDashboard"], {
                size: 20
            }, void 0, false, {
                fileName: "[project]/src/components/pages/home/HomeSection2/Dashboard/Sidebar/index.tsx",
                lineNumber: 60,
                columnNumber: 13
            }, this),
            label: "Overview",
            route: "overview"
        },
        {
            type: "item",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconBox$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconBox$3e$__["IconBox"], {
                size: 20
            }, void 0, false, {
                fileName: "[project]/src/components/pages/home/HomeSection2/Dashboard/Sidebar/index.tsx",
                lineNumber: 66,
                columnNumber: 13
            }, this),
            label: "Projects",
            route: "projects",
            badge: "12"
        },
        {
            type: "item",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconTerminal2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconTerminal2$3e$__["IconTerminal2"], {
                size: 20
            }, void 0, false, {
                fileName: "[project]/src/components/pages/home/HomeSection2/Dashboard/Sidebar/index.tsx",
                lineNumber: 73,
                columnNumber: 13
            }, this),
            label: "Deployments",
            route: "deployments",
            badge: "3"
        },
        // Management section
        {
            type: "section",
            title: "Management"
        },
        {
            type: "item",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconBell$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconBell$3e$__["IconBell"], {
                size: 20
            }, void 0, false, {
                fileName: "[project]/src/components/pages/home/HomeSection2/Dashboard/Sidebar/index.tsx",
                lineNumber: 83,
                columnNumber: 13
            }, this),
            label: "Notifications",
            route: "notifications",
            badge: "9"
        },
        {
            type: "item",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconUsers$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconUsers$3e$__["IconUsers"], {
                size: 20
            }, void 0, false, {
                fileName: "[project]/src/components/pages/home/HomeSection2/Dashboard/Sidebar/index.tsx",
                lineNumber: 90,
                columnNumber: 13
            }, this),
            label: "Team",
            route: "team"
        },
        {
            type: "item",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconSettings$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconSettings$3e$__["IconSettings"], {
                size: 20
            }, void 0, false, {
                fileName: "[project]/src/components/pages/home/HomeSection2/Dashboard/Sidebar/index.tsx",
                lineNumber: 96,
                columnNumber: 13
            }, this),
            label: "Settings",
            route: "settings"
        },
        // Resources section
        {
            type: "section",
            title: "Resources"
        },
        {
            type: "item",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconFileText$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconFileText$3e$__["IconFileText"], {
                size: 20
            }, void 0, false, {
                fileName: "[project]/src/components/pages/home/HomeSection2/Dashboard/Sidebar/index.tsx",
                lineNumber: 105,
                columnNumber: 13
            }, this),
            label: "Documentation",
            route: "documentation"
        },
        {
            type: "item",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconLifebuoy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconLifebuoy$3e$__["IconLifebuoy"], {
                size: 20
            }, void 0, false, {
                fileName: "[project]/src/components/pages/home/HomeSection2/Dashboard/Sidebar/index.tsx",
                lineNumber: 111,
                columnNumber: 13
            }, this),
            label: "Support",
            route: "support"
        },
        {
            type: "item",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconGitBranch$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconGitBranch$3e$__["IconGitBranch"], {
                size: 20
            }, void 0, false, {
                fileName: "[project]/src/components/pages/home/HomeSection2/Dashboard/Sidebar/index.tsx",
                lineNumber: 117,
                columnNumber: 13
            }, this),
            label: "Changelog",
            route: "changelog"
        }
    ];
    // Calculate total elements for animation sequence
    const totalElements = navElements.length + 2; // +1 for logout and +1 for brand header
    // Get initial animation values based on element position
    const getInitialAnimationValues = (index)=>{
        // The last 3 elements (first to appear) should have less dramatic initial positions
        const animationIndex = totalElements - index - 1;
        if (animationIndex < 7) {
            // First elements (appear first) - less dramatic initial positions
            return {
                opacity: 0,
                scale: 1.6,
                filter: "blur(10px) opacity(0)",
                x: 520,
                y: -150
            };
        } else {
            return {
                opacity: 0,
                scale: 2.6,
                filter: "blur(10px) opacity(0)",
                x: 520,
                y: -150
            };
        }
    };
    const getTransitionProps = (index)=>{
        const animationIndex = totalElements - index - 1;
        if (animationIndex < 7) {
            return {
                delay: animationIndex * 0.03,
                duration: 0.5,
                ease: "easeOut"
            };
        }
        return {
            delay: animationIndex * 0.06,
            duration: 0.8,
            ease: "easeOut"
        };
    };
    // Animation final state - same for all elements
    const animateTo = {
        opacity: 1,
        scale: 1,
        filter: "blur(0px) opacity(1)",
        x: 0,
        y: 0
    };
    // Render a nav element (either section title or item)
    const renderNavElement = (element, index)=>{
        // Animation index (reversed for bottom-up animation)
        if (element.type === "section") {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$pages$2f$home$2f$HomeSection2$2f$Dashboard$2f$Sidebar$2f$Sidebar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sectionTitle,
                style: {
                    transformStyle: "preserve-3d"
                },
                initial: getInitialAnimationValues(index),
                animate: animateTo,
                transition: getTransitionProps(index),
                children: element.title
            }, element.title, false, {
                fileName: "[project]/src/components/pages/home/HomeSection2/Dashboard/Sidebar/index.tsx",
                lineNumber: 182,
                columnNumber: 9
            }, this);
        } else {
            const isActive = currentRoute === element.route;
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                onClick: ()=>onNavigate(element.route),
                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$pages$2f$home$2f$HomeSection2$2f$Dashboard$2f$Sidebar$2f$Sidebar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].navItem} ${isActive ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$pages$2f$home$2f$HomeSection2$2f$Dashboard$2f$Sidebar$2f$Sidebar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].navItemActive : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$pages$2f$home$2f$HomeSection2$2f$Dashboard$2f$Sidebar$2f$Sidebar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].navItemInactive}`,
                style: {
                    transformStyle: "preserve-3d"
                },
                initial: getInitialAnimationValues(index),
                animate: animateTo,
                transition: getTransitionProps(index),
                children: [
                    element.icon,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$pages$2f$home$2f$HomeSection2$2f$Dashboard$2f$Sidebar$2f$Sidebar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].label,
                        children: element.label
                    }, void 0, false, {
                        fileName: "[project]/src/components/pages/home/HomeSection2/Dashboard/Sidebar/index.tsx",
                        lineNumber: 209,
                        columnNumber: 11
                    }, this),
                    element.badge && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$pages$2f$home$2f$HomeSection2$2f$Dashboard$2f$Sidebar$2f$Sidebar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].badge} ${isActive ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$pages$2f$home$2f$HomeSection2$2f$Dashboard$2f$Sidebar$2f$Sidebar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].badgeActive : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$pages$2f$home$2f$HomeSection2$2f$Dashboard$2f$Sidebar$2f$Sidebar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].badgeInactive}`,
                        children: element.badge
                    }, void 0, false, {
                        fileName: "[project]/src/components/pages/home/HomeSection2/Dashboard/Sidebar/index.tsx",
                        lineNumber: 211,
                        columnNumber: 13
                    }, this)
                ]
            }, element.route, true, {
                fileName: "[project]/src/components/pages/home/HomeSection2/Dashboard/Sidebar/index.tsx",
                lineNumber: 197,
                columnNumber: 9
            }, this);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$pages$2f$home$2f$HomeSection2$2f$Dashboard$2f$Sidebar$2f$Sidebar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sidebarWrapper,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$pages$2f$home$2f$HomeSection2$2f$Dashboard$2f$Sidebar$2f$Sidebar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].brandHeader,
                style: {
                    transformStyle: "preserve-3d"
                },
                initial: {
                    opacity: 0,
                    scale: 2,
                    filter: "blur(10px) opacity(0)",
                    x: 520,
                    y: -150
                },
                animate: animateTo,
                transition: {
                    delay: (totalElements + 0.5) * 0.05,
                    duration: 0.8,
                    ease: "easeOut"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$pages$2f$home$2f$HomeSection2$2f$Dashboard$2f$Sidebar$2f$Sidebar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].brandContainer,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$pages$2f$home$2f$HomeSection2$2f$Dashboard$2f$Sidebar$2f$Sidebar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].logoContainer,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$pages$2f$home$2f$HomeSection2$2f$Dashboard$2f$Sidebar$2f$Sidebar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].logoText,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconRocket$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconRocket$3e$__["IconRocket"], {}, void 0, false, {
                                    fileName: "[project]/src/components/pages/home/HomeSection2/Dashboard/Sidebar/index.tsx",
                                    lineNumber: 247,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/pages/home/HomeSection2/Dashboard/Sidebar/index.tsx",
                                lineNumber: 246,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/pages/home/HomeSection2/Dashboard/Sidebar/index.tsx",
                            lineNumber: 245,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$pages$2f$home$2f$HomeSection2$2f$Dashboard$2f$Sidebar$2f$Sidebar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].brandName,
                            children: "A3 Web Dev"
                        }, void 0, false, {
                            fileName: "[project]/src/components/pages/home/HomeSection2/Dashboard/Sidebar/index.tsx",
                            lineNumber: 250,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/pages/home/HomeSection2/Dashboard/Sidebar/index.tsx",
                    lineNumber: 244,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/pages/home/HomeSection2/Dashboard/Sidebar/index.tsx",
                lineNumber: 227,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$pages$2f$home$2f$HomeSection2$2f$Dashboard$2f$Sidebar$2f$Sidebar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].content,
                style: {
                    transformStyle: "preserve-3d"
                },
                children: navElements.map((element, index)=>renderNavElement(element, index))
            }, void 0, false, {
                fileName: "[project]/src/components/pages/home/HomeSection2/Dashboard/Sidebar/index.tsx",
                lineNumber: 255,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$pages$2f$home$2f$HomeSection2$2f$Dashboard$2f$Sidebar$2f$Sidebar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].footer,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$pages$2f$home$2f$HomeSection2$2f$Dashboard$2f$Sidebar$2f$Sidebar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].logoutButton,
                    style: {
                        transformStyle: "preserve-3d"
                    },
                    initial: getInitialAnimationValues(navElements.length),
                    animate: animateTo,
                    transition: getTransitionProps(navElements.length),
                    "aria-label": "Log out of your account",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconLogout$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconLogout$3e$__["IconLogout"], {
                            size: 20,
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$pages$2f$home$2f$HomeSection2$2f$Dashboard$2f$Sidebar$2f$Sidebar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].logoutIcon
                        }, void 0, false, {
                            fileName: "[project]/src/components/pages/home/HomeSection2/Dashboard/Sidebar/index.tsx",
                            lineNumber: 269,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$pages$2f$home$2f$HomeSection2$2f$Dashboard$2f$Sidebar$2f$Sidebar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].logoutText,
                            children: "Logout"
                        }, void 0, false, {
                            fileName: "[project]/src/components/pages/home/HomeSection2/Dashboard/Sidebar/index.tsx",
                            lineNumber: 270,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/pages/home/HomeSection2/Dashboard/Sidebar/index.tsx",
                    lineNumber: 261,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/pages/home/HomeSection2/Dashboard/Sidebar/index.tsx",
                lineNumber: 260,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/pages/home/HomeSection2/Dashboard/Sidebar/index.tsx",
        lineNumber: 225,
        columnNumber: 5
    }, this);
}
_c = Sidebar;
var _c;
__turbopack_context__.k.register(_c, "Sidebar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/pages/home/HomeSection2/Dashboard/Sidebar/index.tsx [app-client] (ecmascript, next/dynamic entry)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/src/components/pages/home/HomeSection2/Dashboard/Sidebar/index.tsx [app-client] (ecmascript)"));
}}),
"[project]/node_modules/@tabler/icons-react/dist/esm/icons/IconLayoutDashboard.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/**
 * @license @tabler/icons-react v3.31.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s({
    "default": (()=>IconLayoutDashboard)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$createReactComponent$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tabler/icons-react/dist/esm/createReactComponent.mjs [app-client] (ecmascript)");
;
var IconLayoutDashboard = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$createReactComponent$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("outline", "layout-dashboard", "IconLayoutDashboard", [
    [
        "path",
        {
            "d": "M5 4h4a1 1 0 0 1 1 1v6a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1v-6a1 1 0 0 1 1 -1",
            "key": "svg-0"
        }
    ],
    [
        "path",
        {
            "d": "M5 16h4a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1v-2a1 1 0 0 1 1 -1",
            "key": "svg-1"
        }
    ],
    [
        "path",
        {
            "d": "M15 12h4a1 1 0 0 1 1 1v6a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1v-6a1 1 0 0 1 1 -1",
            "key": "svg-2"
        }
    ],
    [
        "path",
        {
            "d": "M15 4h4a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1v-2a1 1 0 0 1 1 -1",
            "key": "svg-3"
        }
    ]
]);
;
 //# sourceMappingURL=IconLayoutDashboard.mjs.map
}}),
"[project]/node_modules/@tabler/icons-react/dist/esm/icons/IconLayoutDashboard.mjs [app-client] (ecmascript) <export default as IconLayoutDashboard>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "IconLayoutDashboard": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconLayoutDashboard$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconLayoutDashboard$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tabler/icons-react/dist/esm/icons/IconLayoutDashboard.mjs [app-client] (ecmascript)");
}}),
"[project]/node_modules/@tabler/icons-react/dist/esm/icons/IconBox.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/**
 * @license @tabler/icons-react v3.31.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s({
    "default": (()=>IconBox)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$createReactComponent$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tabler/icons-react/dist/esm/createReactComponent.mjs [app-client] (ecmascript)");
;
var IconBox = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$createReactComponent$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("outline", "box", "IconBox", [
    [
        "path",
        {
            "d": "M12 3l8 4.5l0 9l-8 4.5l-8 -4.5l0 -9l8 -4.5",
            "key": "svg-0"
        }
    ],
    [
        "path",
        {
            "d": "M12 12l8 -4.5",
            "key": "svg-1"
        }
    ],
    [
        "path",
        {
            "d": "M12 12l0 9",
            "key": "svg-2"
        }
    ],
    [
        "path",
        {
            "d": "M12 12l-8 -4.5",
            "key": "svg-3"
        }
    ]
]);
;
 //# sourceMappingURL=IconBox.mjs.map
}}),
"[project]/node_modules/@tabler/icons-react/dist/esm/icons/IconBox.mjs [app-client] (ecmascript) <export default as IconBox>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "IconBox": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconBox$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconBox$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tabler/icons-react/dist/esm/icons/IconBox.mjs [app-client] (ecmascript)");
}}),
"[project]/node_modules/@tabler/icons-react/dist/esm/icons/IconTerminal2.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/**
 * @license @tabler/icons-react v3.31.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s({
    "default": (()=>IconTerminal2)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$createReactComponent$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tabler/icons-react/dist/esm/createReactComponent.mjs [app-client] (ecmascript)");
;
var IconTerminal2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$createReactComponent$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("outline", "terminal-2", "IconTerminal2", [
    [
        "path",
        {
            "d": "M8 9l3 3l-3 3",
            "key": "svg-0"
        }
    ],
    [
        "path",
        {
            "d": "M13 15l3 0",
            "key": "svg-1"
        }
    ],
    [
        "path",
        {
            "d": "M3 4m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z",
            "key": "svg-2"
        }
    ]
]);
;
 //# sourceMappingURL=IconTerminal2.mjs.map
}}),
"[project]/node_modules/@tabler/icons-react/dist/esm/icons/IconTerminal2.mjs [app-client] (ecmascript) <export default as IconTerminal2>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "IconTerminal2": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconTerminal2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconTerminal2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tabler/icons-react/dist/esm/icons/IconTerminal2.mjs [app-client] (ecmascript)");
}}),
"[project]/node_modules/@tabler/icons-react/dist/esm/icons/IconBell.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/**
 * @license @tabler/icons-react v3.31.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s({
    "default": (()=>IconBell)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$createReactComponent$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tabler/icons-react/dist/esm/createReactComponent.mjs [app-client] (ecmascript)");
;
var IconBell = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$createReactComponent$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("outline", "bell", "IconBell", [
    [
        "path",
        {
            "d": "M10 5a2 2 0 1 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6",
            "key": "svg-0"
        }
    ],
    [
        "path",
        {
            "d": "M9 17v1a3 3 0 0 0 6 0v-1",
            "key": "svg-1"
        }
    ]
]);
;
 //# sourceMappingURL=IconBell.mjs.map
}}),
"[project]/node_modules/@tabler/icons-react/dist/esm/icons/IconBell.mjs [app-client] (ecmascript) <export default as IconBell>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "IconBell": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconBell$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconBell$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tabler/icons-react/dist/esm/icons/IconBell.mjs [app-client] (ecmascript)");
}}),
"[project]/node_modules/@tabler/icons-react/dist/esm/icons/IconUsers.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/**
 * @license @tabler/icons-react v3.31.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s({
    "default": (()=>IconUsers)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$createReactComponent$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tabler/icons-react/dist/esm/createReactComponent.mjs [app-client] (ecmascript)");
;
var IconUsers = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$createReactComponent$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("outline", "users", "IconUsers", [
    [
        "path",
        {
            "d": "M9 7m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0",
            "key": "svg-0"
        }
    ],
    [
        "path",
        {
            "d": "M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2",
            "key": "svg-1"
        }
    ],
    [
        "path",
        {
            "d": "M16 3.13a4 4 0 0 1 0 7.75",
            "key": "svg-2"
        }
    ],
    [
        "path",
        {
            "d": "M21 21v-2a4 4 0 0 0 -3 -3.85",
            "key": "svg-3"
        }
    ]
]);
;
 //# sourceMappingURL=IconUsers.mjs.map
}}),
"[project]/node_modules/@tabler/icons-react/dist/esm/icons/IconUsers.mjs [app-client] (ecmascript) <export default as IconUsers>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "IconUsers": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconUsers$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconUsers$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tabler/icons-react/dist/esm/icons/IconUsers.mjs [app-client] (ecmascript)");
}}),
"[project]/node_modules/@tabler/icons-react/dist/esm/icons/IconSettings.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/**
 * @license @tabler/icons-react v3.31.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s({
    "default": (()=>IconSettings)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$createReactComponent$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tabler/icons-react/dist/esm/createReactComponent.mjs [app-client] (ecmascript)");
;
var IconSettings = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$createReactComponent$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("outline", "settings", "IconSettings", [
    [
        "path",
        {
            "d": "M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z",
            "key": "svg-0"
        }
    ],
    [
        "path",
        {
            "d": "M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0",
            "key": "svg-1"
        }
    ]
]);
;
 //# sourceMappingURL=IconSettings.mjs.map
}}),
"[project]/node_modules/@tabler/icons-react/dist/esm/icons/IconSettings.mjs [app-client] (ecmascript) <export default as IconSettings>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "IconSettings": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconSettings$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconSettings$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tabler/icons-react/dist/esm/icons/IconSettings.mjs [app-client] (ecmascript)");
}}),
"[project]/node_modules/@tabler/icons-react/dist/esm/icons/IconLogout.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/**
 * @license @tabler/icons-react v3.31.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s({
    "default": (()=>IconLogout)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$createReactComponent$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tabler/icons-react/dist/esm/createReactComponent.mjs [app-client] (ecmascript)");
;
var IconLogout = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$createReactComponent$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("outline", "logout", "IconLogout", [
    [
        "path",
        {
            "d": "M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2",
            "key": "svg-0"
        }
    ],
    [
        "path",
        {
            "d": "M9 12h12l-3 -3",
            "key": "svg-1"
        }
    ],
    [
        "path",
        {
            "d": "M18 15l3 -3",
            "key": "svg-2"
        }
    ]
]);
;
 //# sourceMappingURL=IconLogout.mjs.map
}}),
"[project]/node_modules/@tabler/icons-react/dist/esm/icons/IconLogout.mjs [app-client] (ecmascript) <export default as IconLogout>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "IconLogout": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconLogout$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconLogout$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tabler/icons-react/dist/esm/icons/IconLogout.mjs [app-client] (ecmascript)");
}}),
"[project]/node_modules/@tabler/icons-react/dist/esm/icons/IconFileText.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/**
 * @license @tabler/icons-react v3.31.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s({
    "default": (()=>IconFileText)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$createReactComponent$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tabler/icons-react/dist/esm/createReactComponent.mjs [app-client] (ecmascript)");
;
var IconFileText = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$createReactComponent$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("outline", "file-text", "IconFileText", [
    [
        "path",
        {
            "d": "M14 3v4a1 1 0 0 0 1 1h4",
            "key": "svg-0"
        }
    ],
    [
        "path",
        {
            "d": "M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z",
            "key": "svg-1"
        }
    ],
    [
        "path",
        {
            "d": "M9 9l1 0",
            "key": "svg-2"
        }
    ],
    [
        "path",
        {
            "d": "M9 13l6 0",
            "key": "svg-3"
        }
    ],
    [
        "path",
        {
            "d": "M9 17l6 0",
            "key": "svg-4"
        }
    ]
]);
;
 //# sourceMappingURL=IconFileText.mjs.map
}}),
"[project]/node_modules/@tabler/icons-react/dist/esm/icons/IconFileText.mjs [app-client] (ecmascript) <export default as IconFileText>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "IconFileText": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconFileText$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconFileText$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tabler/icons-react/dist/esm/icons/IconFileText.mjs [app-client] (ecmascript)");
}}),
"[project]/node_modules/@tabler/icons-react/dist/esm/icons/IconLifebuoy.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/**
 * @license @tabler/icons-react v3.31.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s({
    "default": (()=>IconLifebuoy)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$createReactComponent$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tabler/icons-react/dist/esm/createReactComponent.mjs [app-client] (ecmascript)");
;
var IconLifebuoy = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$createReactComponent$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("outline", "lifebuoy", "IconLifebuoy", [
    [
        "path",
        {
            "d": "M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0",
            "key": "svg-0"
        }
    ],
    [
        "path",
        {
            "d": "M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0",
            "key": "svg-1"
        }
    ],
    [
        "path",
        {
            "d": "M15 15l3.35 3.35",
            "key": "svg-2"
        }
    ],
    [
        "path",
        {
            "d": "M9 15l-3.35 3.35",
            "key": "svg-3"
        }
    ],
    [
        "path",
        {
            "d": "M5.65 5.65l3.35 3.35",
            "key": "svg-4"
        }
    ],
    [
        "path",
        {
            "d": "M18.35 5.65l-3.35 3.35",
            "key": "svg-5"
        }
    ]
]);
;
 //# sourceMappingURL=IconLifebuoy.mjs.map
}}),
"[project]/node_modules/@tabler/icons-react/dist/esm/icons/IconLifebuoy.mjs [app-client] (ecmascript) <export default as IconLifebuoy>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "IconLifebuoy": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconLifebuoy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconLifebuoy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tabler/icons-react/dist/esm/icons/IconLifebuoy.mjs [app-client] (ecmascript)");
}}),
"[project]/node_modules/@tabler/icons-react/dist/esm/icons/IconGitBranch.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/**
 * @license @tabler/icons-react v3.31.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s({
    "default": (()=>IconGitBranch)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$createReactComponent$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tabler/icons-react/dist/esm/createReactComponent.mjs [app-client] (ecmascript)");
;
var IconGitBranch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$createReactComponent$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("outline", "git-branch", "IconGitBranch", [
    [
        "path",
        {
            "d": "M7 18m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0",
            "key": "svg-0"
        }
    ],
    [
        "path",
        {
            "d": "M7 6m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0",
            "key": "svg-1"
        }
    ],
    [
        "path",
        {
            "d": "M17 6m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0",
            "key": "svg-2"
        }
    ],
    [
        "path",
        {
            "d": "M7 8l0 8",
            "key": "svg-3"
        }
    ],
    [
        "path",
        {
            "d": "M9 18h6a2 2 0 0 0 2 -2v-5",
            "key": "svg-4"
        }
    ],
    [
        "path",
        {
            "d": "M14 14l3 -3l3 3",
            "key": "svg-5"
        }
    ]
]);
;
 //# sourceMappingURL=IconGitBranch.mjs.map
}}),
"[project]/node_modules/@tabler/icons-react/dist/esm/icons/IconGitBranch.mjs [app-client] (ecmascript) <export default as IconGitBranch>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "IconGitBranch": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconGitBranch$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconGitBranch$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tabler/icons-react/dist/esm/icons/IconGitBranch.mjs [app-client] (ecmascript)");
}}),
}]);

//# sourceMappingURL=_8c5cbb84._.js.map