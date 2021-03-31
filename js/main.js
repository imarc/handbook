/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkimarc_handbook"] = self["webpackChunkimarc_handbook"] || []).push([["/js/main"],{

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gsap */ \"./node_modules/gsap/index.js\");\n/* harmony import */ var gsap_DrawSVGPlugin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gsap/DrawSVGPlugin */ \"./node_modules/gsap/DrawSVGPlugin.js\");\n// import Vue from 'vue';\n\n\ngsap__WEBPACK_IMPORTED_MODULE_0__.gsap.registerPlugin(gsap_DrawSVGPlugin__WEBPACK_IMPORTED_MODULE_1__.DrawSVGPlugin);\ngsap__WEBPACK_IMPORTED_MODULE_0__.gsap.from(\".entry__item\", {\n  ease: \"power3.out\",\n  opacity: 0,\n  duration: 1.25,\n  y: 20,\n  stagger: {\n    amount: 0.5,\n    grid: [0, 1]\n  }\n});\nvar tl = gsap__WEBPACK_IMPORTED_MODULE_0__.gsap.timeline();\ntl.from(\".icon--dept .icon__part\", {\n  delay: .25,\n  duration: .75,\n  drawSVG: 0,\n  opacity: 0,\n  ease: \"expo.in\"\n}, 0.1); // Color mode\n\nvar toggleColorMode = function toggleColorMode(e) {\n  if (e.currentTarget.classList.contains(\"button--color-mode-light\")) {\n    document.documentElement.setAttribute(\"color-mode\", \"light\");\n    localStorage.setItem(\"color-mode\", \"light\");\n    return;\n  }\n\n  document.documentElement.setAttribute(\"color-mode\", \"dark\");\n  localStorage.setItem(\"color-mode\", \"dark\");\n};\n\nvar toggleColorButtons = document.querySelectorAll(\".button--color-mode\");\ntoggleColorButtons.forEach(function (btn) {\n  btn.addEventListener(\"click\", toggleColorMode);\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pbWFyYy1oYW5kYm9vay8uL3NyYy9qcy9tYWluLmpzPzkyOTEiXSwibmFtZXMiOlsiZ3NhcCIsIkRyYXdTVkdQbHVnaW4iLCJlYXNlIiwib3BhY2l0eSIsImR1cmF0aW9uIiwieSIsInN0YWdnZXIiLCJhbW91bnQiLCJncmlkIiwidGwiLCJmcm9tIiwiZGVsYXkiLCJkcmF3U1ZHIiwidG9nZ2xlQ29sb3JNb2RlIiwiZSIsImN1cnJlbnRUYXJnZXQiLCJjbGFzc0xpc3QiLCJjb250YWlucyIsImRvY3VtZW50IiwiZG9jdW1lbnRFbGVtZW50Iiwic2V0QXR0cmlidXRlIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsInRvZ2dsZUNvbG9yQnV0dG9ucyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwiYnRuIiwiYWRkRXZlbnRMaXN0ZW5lciJdLCJtYXBwaW5ncyI6Ijs7O0FBQUE7QUFFQTtBQUNBO0FBRUFBLHFEQUFBLENBQW9CQyw2REFBcEI7QUFFQUQsMkNBQUEsQ0FBVSxjQUFWLEVBQTBCO0FBQ3RCRSxNQUFJLEVBQUUsWUFEZ0I7QUFFdEJDLFNBQU8sRUFBRSxDQUZhO0FBR3RCQyxVQUFRLEVBQUUsSUFIWTtBQUl0QkMsR0FBQyxFQUFFLEVBSm1CO0FBS3RCQyxTQUFPLEVBQUU7QUFDTEMsVUFBTSxFQUFFLEdBREg7QUFFTEMsUUFBSSxFQUFFLENBQUMsQ0FBRCxFQUFHLENBQUg7QUFGRDtBQUxhLENBQTFCO0FBV0EsSUFBSUMsRUFBRSxHQUFHVCwrQ0FBQSxFQUFUO0FBQ0FTLEVBQUUsQ0FBQ0MsSUFBSCxDQUFRLHlCQUFSLEVBQW1DO0FBQy9CQyxPQUFLLEVBQUUsR0FEd0I7QUFFL0JQLFVBQVEsRUFBRSxHQUZxQjtBQUcvQlEsU0FBTyxFQUFFLENBSHNCO0FBSS9CVCxTQUFPLEVBQUUsQ0FKc0I7QUFLL0JELE1BQUksRUFBRTtBQUx5QixDQUFuQyxFQU1HLEdBTkgsRSxDQVNBOztBQUNBLElBQU1XLGVBQWUsR0FBRyxTQUFTQSxlQUFULENBQXlCQyxDQUF6QixFQUE0QjtBQUNoRCxNQUFJQSxDQUFDLENBQUNDLGFBQUYsQ0FBZ0JDLFNBQWhCLENBQTBCQyxRQUExQixDQUFtQywwQkFBbkMsQ0FBSixFQUFvRTtBQUNoRUMsWUFBUSxDQUFDQyxlQUFULENBQXlCQyxZQUF6QixDQUFzQyxZQUF0QyxFQUFvRCxPQUFwRDtBQUNBQyxnQkFBWSxDQUFDQyxPQUFiLENBQXFCLFlBQXJCLEVBQW1DLE9BQW5DO0FBQ0E7QUFDSDs7QUFFREosVUFBUSxDQUFDQyxlQUFULENBQXlCQyxZQUF6QixDQUFzQyxZQUF0QyxFQUFvRCxNQUFwRDtBQUNBQyxjQUFZLENBQUNDLE9BQWIsQ0FBcUIsWUFBckIsRUFBbUMsTUFBbkM7QUFDSCxDQVREOztBQVdBLElBQU1DLGtCQUFrQixHQUFHTCxRQUFRLENBQUNNLGdCQUFULENBQTBCLHFCQUExQixDQUEzQjtBQUVBRCxrQkFBa0IsQ0FBQ0UsT0FBbkIsQ0FBMkIsVUFBQ0MsR0FBRCxFQUFTO0FBQ2hDQSxLQUFHLENBQUNDLGdCQUFKLENBQXFCLE9BQXJCLEVBQThCZCxlQUE5QjtBQUNILENBRkQiLCJmaWxlIjoiLi9zcmMvanMvbWFpbi5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCBWdWUgZnJvbSAndnVlJztcblxuaW1wb3J0IHsgZ3NhcCB9IGZyb20gJ2dzYXAnXG5pbXBvcnQgeyBEcmF3U1ZHUGx1Z2luIH0gZnJvbSAnZ3NhcC9EcmF3U1ZHUGx1Z2luJ1xuXG5nc2FwLnJlZ2lzdGVyUGx1Z2luKERyYXdTVkdQbHVnaW4pXG5cbmdzYXAuZnJvbShcIi5lbnRyeV9faXRlbVwiLCB7XG4gICAgZWFzZTogXCJwb3dlcjMub3V0XCIsXG4gICAgb3BhY2l0eTogMCxcbiAgICBkdXJhdGlvbjogMS4yNSxcbiAgICB5OiAyMCxcbiAgICBzdGFnZ2VyOiB7XG4gICAgICAgIGFtb3VudDogMC41LFxuICAgICAgICBncmlkOiBbMCwxXSxcbiAgICB9XG59KTtcblxudmFyIHRsID0gZ3NhcC50aW1lbGluZSgpXG50bC5mcm9tKFwiLmljb24tLWRlcHQgLmljb25fX3BhcnRcIiwge1xuICAgIGRlbGF5OiAuMjUsXG4gICAgZHVyYXRpb246IC43NSxcbiAgICBkcmF3U1ZHOiAwLFxuICAgIG9wYWNpdHk6IDAsXG4gICAgZWFzZTogXCJleHBvLmluXCJcbn0sIDAuMSlcblxuXG4vLyBDb2xvciBtb2RlXG5jb25zdCB0b2dnbGVDb2xvck1vZGUgPSBmdW5jdGlvbiB0b2dnbGVDb2xvck1vZGUoZSkge1xuICAgIGlmIChlLmN1cnJlbnRUYXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYnV0dG9uLS1jb2xvci1tb2RlLWxpZ2h0XCIpKSB7XG4gICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJjb2xvci1tb2RlXCIsIFwibGlnaHRcIilcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJjb2xvci1tb2RlXCIsIFwibGlnaHRcIilcbiAgICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNldEF0dHJpYnV0ZShcImNvbG9yLW1vZGVcIiwgXCJkYXJrXCIpO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiY29sb3ItbW9kZVwiLCBcImRhcmtcIilcbn07XG5cbmNvbnN0IHRvZ2dsZUNvbG9yQnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYnV0dG9uLS1jb2xvci1tb2RlXCIpXG5cbnRvZ2dsZUNvbG9yQnV0dG9ucy5mb3JFYWNoKChidG4pID0+IHtcbiAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRvZ2dsZUNvbG9yTW9kZSlcbn0pXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/js/main.js\n");

/***/ }),

/***/ "./src/sass/main.scss":
/*!****************************!*\
  !*** ./src/sass/main.scss ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pbWFyYy1oYW5kYm9vay8uL3NyYy9zYXNzL21haW4uc2Nzcz9kODNmIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSIsImZpbGUiOiIuL3NyYy9zYXNzL21haW4uc2Nzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/sass/main.scss\n");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = __webpack_require__.O(undefined, ["css/main","/js/vendor"], () => (__webpack_exec__("./src/js/main.js"), __webpack_exec__("./src/sass/main.scss")));
/******/ }
]);