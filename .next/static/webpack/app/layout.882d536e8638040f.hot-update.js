"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-pages-browser)/./src/app/globals.css":
/*!*****************************!*\
  !*** ./src/app/globals.css ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"2aff4e732112\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvZ2xvYmFscy5jc3MiLCJtYXBwaW5ncyI6IjtBQUFBLCtEQUFlLGNBQWM7QUFDN0IsSUFBSSxJQUFVLElBQUksaUJBQWlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvZ2xvYmFscy5jc3M/MWJmNiJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBcIjJhZmY0ZTczMjExMlwiXG5pZiAobW9kdWxlLmhvdCkgeyBtb2R1bGUuaG90LmFjY2VwdCgpIH1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/globals.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./src/app/urlMap.tsx":
/*!****************************!*\
  !*** ./src/app/urlMap.tsx ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nconst urlMap = new Map();\nurlMap.set(\"gym\", \"/gym\");\nurlMap.set(\"sleep\", \"/sleep\");\nurlMap.set(\"nutrition\", \"/nutrition\");\nurlMap.set(\"macros\", \"/nutrition/macros\");\nurlMap.set(\"test\", \"nutrition/macros/test\");\nurlMap.set(\"overview\", \"/overview\");\nurlMap.set(\"guide\", \"/guide\");\nurlMap.set(\"2\", \"/guide/2\");\nurlMap.set(\"3\", \"/guide/3\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (urlMap);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvdXJsTWFwLnRzeCIsIm1hcHBpbmdzIjoiOzs7QUFBQTtBQUMrQjtBQUsvQixNQUFNQyxTQUFTLElBQUlDO0FBRW5CRCxPQUFPRSxHQUFHLENBQUMsT0FBTTtBQUNqQkYsT0FBT0UsR0FBRyxDQUFDLFNBQVE7QUFDbkJGLE9BQU9FLEdBQUcsQ0FBQyxhQUFZO0FBQ3ZCRixPQUFPRSxHQUFHLENBQUMsVUFBUztBQUNwQkYsT0FBT0UsR0FBRyxDQUFDLFFBQU87QUFDbEJGLE9BQU9FLEdBQUcsQ0FBQyxZQUFXO0FBQ3RCRixPQUFPRSxHQUFHLENBQUMsU0FBUTtBQUNuQkYsT0FBT0UsR0FBRyxDQUFDLEtBQUk7QUFDZkYsT0FBT0UsR0FBRyxDQUFDLEtBQUk7QUFFZiwrREFBZUYsTUFBTUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL3VybE1hcC50c3g/ZmIyZiJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5cblxuXG5cbmNvbnN0IHVybE1hcCA9IG5ldyBNYXAoKTtcblxudXJsTWFwLnNldCgnZ3ltJywnL2d5bScpO1xudXJsTWFwLnNldCgnc2xlZXAnLCcvc2xlZXAnKTtcbnVybE1hcC5zZXQoJ251dHJpdGlvbicsJy9udXRyaXRpb24nKTtcbnVybE1hcC5zZXQoJ21hY3JvcycsJy9udXRyaXRpb24vbWFjcm9zJyk7XG51cmxNYXAuc2V0KCd0ZXN0JywnbnV0cml0aW9uL21hY3Jvcy90ZXN0Jyk7XG51cmxNYXAuc2V0KCdvdmVydmlldycsJy9vdmVydmlldycpO1xudXJsTWFwLnNldCgnZ3VpZGUnLCcvZ3VpZGUnKTtcbnVybE1hcC5zZXQoJzInLCcvZ3VpZGUvMicpO1xudXJsTWFwLnNldCgnMycsJy9ndWlkZS8zJyk7XG5cbmV4cG9ydCBkZWZhdWx0IHVybE1hcDsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1cmxNYXAiLCJNYXAiLCJzZXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/urlMap.tsx\n"));

/***/ })

});