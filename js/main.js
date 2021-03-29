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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gsap */ \"./node_modules/gsap/index.js\");\n// import Vue from 'vue';\n\ngsap__WEBPACK_IMPORTED_MODULE_0__.gsap.from(\".entry__item\", {\n  ease: \"power3.out\",\n  opacity: 0,\n  duration: 1.25,\n  y: 20,\n  stagger: {\n    amount: 0.5,\n    grid: [0, 1]\n  }\n}); // Color mode\n\nvar toggleColorMode = function toggleColorMode(e) {\n  if (e.currentTarget.classList.contains(\"button--color-mode-light\")) {\n    document.documentElement.setAttribute(\"color-mode\", \"light\");\n    localStorage.setItem(\"color-mode\", \"light\");\n    return;\n  }\n\n  document.documentElement.setAttribute(\"color-mode\", \"dark\");\n  localStorage.setItem(\"color-mode\", \"dark\");\n};\n\nvar toggleColorButtons = document.querySelectorAll(\".button--color-mode\");\ntoggleColorButtons.forEach(function (btn) {\n  btn.addEventListener(\"click\", toggleColorMode);\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pbWFyYy1oYW5kYm9vay8uL3NyYy9qcy9tYWluLmpzPzkyOTEiXSwibmFtZXMiOlsiZ3NhcCIsImVhc2UiLCJvcGFjaXR5IiwiZHVyYXRpb24iLCJ5Iiwic3RhZ2dlciIsImFtb3VudCIsImdyaWQiLCJ0b2dnbGVDb2xvck1vZGUiLCJlIiwiY3VycmVudFRhcmdldCIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwiZG9jdW1lbnQiLCJkb2N1bWVudEVsZW1lbnQiLCJzZXRBdHRyaWJ1dGUiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwidG9nZ2xlQ29sb3JCdXR0b25zIiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJidG4iLCJhZGRFdmVudExpc3RlbmVyIl0sIm1hcHBpbmdzIjoiOztBQUFBO0FBRUE7QUFFQUEsMkNBQUEsQ0FBVSxjQUFWLEVBQTBCO0FBQ3RCQyxNQUFJLEVBQUUsWUFEZ0I7QUFFdEJDLFNBQU8sRUFBRSxDQUZhO0FBR3RCQyxVQUFRLEVBQUUsSUFIWTtBQUl0QkMsR0FBQyxFQUFFLEVBSm1CO0FBS3RCQyxTQUFPLEVBQUU7QUFDTEMsVUFBTSxFQUFFLEdBREg7QUFFTEMsUUFBSSxFQUFFLENBQUMsQ0FBRCxFQUFHLENBQUg7QUFGRDtBQUxhLENBQTFCLEUsQ0FXQTs7QUFDQSxJQUFNQyxlQUFlLEdBQUcsU0FBU0EsZUFBVCxDQUF5QkMsQ0FBekIsRUFBNEI7QUFDaEQsTUFBSUEsQ0FBQyxDQUFDQyxhQUFGLENBQWdCQyxTQUFoQixDQUEwQkMsUUFBMUIsQ0FBbUMsMEJBQW5DLENBQUosRUFBb0U7QUFDaEVDLFlBQVEsQ0FBQ0MsZUFBVCxDQUF5QkMsWUFBekIsQ0FBc0MsWUFBdEMsRUFBb0QsT0FBcEQ7QUFDQUMsZ0JBQVksQ0FBQ0MsT0FBYixDQUFxQixZQUFyQixFQUFtQyxPQUFuQztBQUNBO0FBQ0g7O0FBRURKLFVBQVEsQ0FBQ0MsZUFBVCxDQUF5QkMsWUFBekIsQ0FBc0MsWUFBdEMsRUFBb0QsTUFBcEQ7QUFDQUMsY0FBWSxDQUFDQyxPQUFiLENBQXFCLFlBQXJCLEVBQW1DLE1BQW5DO0FBQ0gsQ0FURDs7QUFXQSxJQUFNQyxrQkFBa0IsR0FBR0wsUUFBUSxDQUFDTSxnQkFBVCxDQUEwQixxQkFBMUIsQ0FBM0I7QUFFQUQsa0JBQWtCLENBQUNFLE9BQW5CLENBQTJCLFVBQUNDLEdBQUQsRUFBUztBQUNoQ0EsS0FBRyxDQUFDQyxnQkFBSixDQUFxQixPQUFyQixFQUE4QmQsZUFBOUI7QUFDSCxDQUZEIiwiZmlsZSI6Ii4vc3JjL2pzL21haW4uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgVnVlIGZyb20gJ3Z1ZSc7XG5cbmltcG9ydCB7IGdzYXAgfSBmcm9tICdnc2FwJ1xuXG5nc2FwLmZyb20oXCIuZW50cnlfX2l0ZW1cIiwge1xuICAgIGVhc2U6IFwicG93ZXIzLm91dFwiLFxuICAgIG9wYWNpdHk6IDAsXG4gICAgZHVyYXRpb246IDEuMjUsXG4gICAgeTogMjAsXG4gICAgc3RhZ2dlcjoge1xuICAgICAgICBhbW91bnQ6IDAuNSxcbiAgICAgICAgZ3JpZDogWzAsMV0sXG4gICAgfVxufSk7XG5cbi8vIENvbG9yIG1vZGVcbmNvbnN0IHRvZ2dsZUNvbG9yTW9kZSA9IGZ1bmN0aW9uIHRvZ2dsZUNvbG9yTW9kZShlKSB7XG4gICAgaWYgKGUuY3VycmVudFRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJidXR0b24tLWNvbG9yLW1vZGUtbGlnaHRcIikpIHtcbiAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNldEF0dHJpYnV0ZShcImNvbG9yLW1vZGVcIiwgXCJsaWdodFwiKVxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImNvbG9yLW1vZGVcIiwgXCJsaWdodFwiKVxuICAgICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2V0QXR0cmlidXRlKFwiY29sb3ItbW9kZVwiLCBcImRhcmtcIik7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJjb2xvci1tb2RlXCIsIFwiZGFya1wiKVxufTtcblxuY29uc3QgdG9nZ2xlQ29sb3JCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5idXR0b24tLWNvbG9yLW1vZGVcIilcblxudG9nZ2xlQ29sb3JCdXR0b25zLmZvckVhY2goKGJ0bikgPT4ge1xuICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdG9nZ2xlQ29sb3JNb2RlKVxufSlcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/js/main.js\n");

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