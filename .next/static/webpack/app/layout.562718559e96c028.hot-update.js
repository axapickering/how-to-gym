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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"88fe311bab6e\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvZ2xvYmFscy5jc3MiLCJtYXBwaW5ncyI6IjtBQUFBLCtEQUFlLGNBQWM7QUFDN0IsSUFBSSxJQUFVLElBQUksaUJBQWlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvZ2xvYmFscy5jc3M/MWJmNiJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBcIjg4ZmUzMTFiYWI2ZVwiXG5pZiAobW9kdWxlLmhvdCkgeyBtb2R1bGUuaG90LmFjY2VwdCgpIH1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/globals.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./src/app/Breadcrumbs.tsx":
/*!*********************************!*\
  !*** ./src/app/Breadcrumbs.tsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ BasicBreadcrumbs; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material_Breadcrumbs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/Breadcrumbs */ \"(app-pages-browser)/./node_modules/@mui/material/Breadcrumbs/Breadcrumbs.js\");\n/* harmony import */ var _mui_material_Link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/Link */ \"(app-pages-browser)/./node_modules/@mui/material/Link/Link.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var _urlMap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./urlMap */ \"(app-pages-browser)/./src/app/urlMap.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction BasicBreadcrumbs() {\n    _s();\n    const paths = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.usePathname)().split(\"/\");\n    console.log(_urlMap__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get());\n    const crumbs = paths.map((segment)=>{\n        console.log(\"segment: \".concat(segment, \". url : \").concat(_urlMap__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(segment)));\n        return segment != \"\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Link__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n            underline: \"hover\",\n            color: \"inherit\",\n            href: _urlMap__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(segment),\n            children: segment\n        }, void 0, false, {\n            fileName: \"/home/axa/how-to-gym/src/app/Breadcrumbs.tsx\",\n            lineNumber: 21,\n            columnNumber: 31\n        }, this) : \"\";\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        role: \"presentation\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Breadcrumbs__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n            \"aria-label\": \"breadcrumb\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Link__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                    underline: \"hover\",\n                    color: \"inherit\",\n                    href: \"/\",\n                    children: \"Home\"\n                }, void 0, false, {\n                    fileName: \"/home/axa/how-to-gym/src/app/Breadcrumbs.tsx\",\n                    lineNumber: 30,\n                    columnNumber: 9\n                }, this),\n                crumbs\n            ]\n        }, void 0, true, {\n            fileName: \"/home/axa/how-to-gym/src/app/Breadcrumbs.tsx\",\n            lineNumber: 29,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/axa/how-to-gym/src/app/Breadcrumbs.tsx\",\n        lineNumber: 28,\n        columnNumber: 5\n    }, this);\n}\n_s(BasicBreadcrumbs, \"wVXOWZKWdId76kQQO0KX6Oz3JDA=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.usePathname\n    ];\n});\n_c = BasicBreadcrumbs;\nvar _c;\n$RefreshReg$(_c, \"BasicBreadcrumbs\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvQnJlYWRjcnVtYnMudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDK0I7QUFFcUI7QUFDZDtBQUNRO0FBQ2hCO0FBSWYsU0FBU0s7O0lBRXRCLE1BQU1DLFFBQVFILDREQUFXQSxHQUN0QkksS0FBSyxDQUFDO0lBRVRDLFFBQVFDLEdBQUcsQ0FBQ0wsK0NBQU1BLENBQUNNLEdBQUc7SUFFdEIsTUFBTUMsU0FBU0wsTUFDWk0sR0FBRyxDQUFDQyxDQUFBQTtRQUNITCxRQUFRQyxHQUFHLENBQUMsWUFBOEJMLE9BQWxCUyxTQUFRLFlBQThCLE9BQXBCVCwrQ0FBTUEsQ0FBQ00sR0FBRyxDQUFDRztRQUNyRCxPQUFPQSxXQUFXLG1CQUFNLDhEQUFDWCwwREFBSUE7WUFBQ1ksV0FBVTtZQUFRQyxPQUFNO1lBQVVDLE1BQU1aLCtDQUFNQSxDQUFDTSxHQUFHLENBQUNHO3NCQUM5RUE7Ozs7O21CQUVDO0lBQ047SUFFRixxQkFDRSw4REFBQ0k7UUFBSUMsTUFBSztrQkFDUiw0RUFBQ2pCLGlFQUFXQTtZQUFDa0IsY0FBVzs7OEJBQ3RCLDhEQUFDakIsMERBQUlBO29CQUFDWSxXQUFVO29CQUFRQyxPQUFNO29CQUFVQyxNQUFLOzhCQUFJOzs7Ozs7Z0JBR2hETDs7Ozs7Ozs7Ozs7O0FBSVQ7R0ExQndCTjs7UUFFUkYsd0RBQVdBOzs7S0FGSEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9CcmVhZGNydW1icy50c3g/NzMxZCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtdWkvbWF0ZXJpYWwvVHlwb2dyYXBoeSc7XG5pbXBvcnQgQnJlYWRjcnVtYnMgZnJvbSAnQG11aS9tYXRlcmlhbC9CcmVhZGNydW1icyc7XG5pbXBvcnQgTGluayBmcm9tICdAbXVpL21hdGVyaWFsL0xpbmsnO1xuaW1wb3J0IHsgdXNlUGF0aG5hbWUgfSBmcm9tICduZXh0L25hdmlnYXRpb24nO1xuaW1wb3J0IHVybE1hcCBmcm9tICcuL3VybE1hcCc7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCYXNpY0JyZWFkY3J1bWJzKCkge1xuXG4gIGNvbnN0IHBhdGhzID0gdXNlUGF0aG5hbWUoKVxuICAgIC5zcGxpdCgnLycpO1xuXG4gIGNvbnNvbGUubG9nKHVybE1hcC5nZXQoKSk7XG5cbiAgY29uc3QgY3J1bWJzID0gcGF0aHNcbiAgICAubWFwKHNlZ21lbnQgPT4ge1xuICAgICAgY29uc29sZS5sb2coYHNlZ21lbnQ6ICR7c2VnbWVudH0uIHVybCA6ICR7dXJsTWFwLmdldChzZWdtZW50KX1gKVxuICAgICAgcmV0dXJuIHNlZ21lbnQgIT0gJycgPyAoPExpbmsgdW5kZXJsaW5lPVwiaG92ZXJcIiBjb2xvcj1cImluaGVyaXRcIiBocmVmPXt1cmxNYXAuZ2V0KHNlZ21lbnQpfT5cbiAgICAgICAge3NlZ21lbnR9XG4gICAgICA8L0xpbms+XG4gICAgICApIDogJyc7XG4gICAgfSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IHJvbGU9XCJwcmVzZW50YXRpb25cIj5cbiAgICAgIDxCcmVhZGNydW1icyBhcmlhLWxhYmVsPVwiYnJlYWRjcnVtYlwiPlxuICAgICAgICA8TGluayB1bmRlcmxpbmU9XCJob3ZlclwiIGNvbG9yPVwiaW5oZXJpdFwiIGhyZWY9XCIvXCI+XG4gICAgICAgICAgSG9tZVxuICAgICAgICA8L0xpbms+XG4gICAgICAgIHtjcnVtYnN9XG4gICAgICA8L0JyZWFkY3J1bWJzPlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiQnJlYWRjcnVtYnMiLCJMaW5rIiwidXNlUGF0aG5hbWUiLCJ1cmxNYXAiLCJCYXNpY0JyZWFkY3J1bWJzIiwicGF0aHMiLCJzcGxpdCIsImNvbnNvbGUiLCJsb2ciLCJnZXQiLCJjcnVtYnMiLCJtYXAiLCJzZWdtZW50IiwidW5kZXJsaW5lIiwiY29sb3IiLCJocmVmIiwiZGl2Iiwicm9sZSIsImFyaWEtbGFiZWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/Breadcrumbs.tsx\n"));

/***/ })

});