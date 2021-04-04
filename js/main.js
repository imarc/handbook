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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gsap */ \"./node_modules/gsap/index.js\");\n/* harmony import */ var gsap_DrawSVGPlugin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gsap/DrawSVGPlugin */ \"./node_modules/gsap/DrawSVGPlugin.js\");\n/* harmony import */ var gsap_Flip__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gsap/Flip */ \"./node_modules/gsap/Flip.js\");\n// import Vue from 'vue';\n\n\n\ngsap__WEBPACK_IMPORTED_MODULE_0__.gsap.registerPlugin(gsap_DrawSVGPlugin__WEBPACK_IMPORTED_MODULE_1__.DrawSVGPlugin);\ngsap__WEBPACK_IMPORTED_MODULE_0__.gsap.registerPlugin(gsap_Flip__WEBPACK_IMPORTED_MODULE_2__.Flip);\ngsap__WEBPACK_IMPORTED_MODULE_0__.gsap.from(\".entry__item\", {\n  ease: \"power3.out\",\n  opacity: 0,\n  duration: 1.25,\n  y: 20,\n  stagger: {\n    amount: 0.5,\n    grid: [0, 1]\n  }\n});\nvar tl = gsap__WEBPACK_IMPORTED_MODULE_0__.gsap.timeline();\ntl.from(\".icon--dept .icon__part\", {\n  delay: .25,\n  duration: .75,\n  drawSVG: 0,\n  opacity: 0,\n  ease: \"expo.in\"\n}, 0.1); // Color mode\n\nvar toggleColorMode = function toggleColorMode(e) {\n  if (e.currentTarget.classList.contains(\"color-mode__button--light\")) {\n    document.documentElement.setAttribute(\"color-mode\", \"light\");\n    localStorage.setItem(\"color-mode\", \"light\");\n    return;\n  }\n\n  document.documentElement.setAttribute(\"color-mode\", \"dark\");\n  localStorage.setItem(\"color-mode\", \"dark\");\n};\n\nvar toggleColorButtons = document.querySelectorAll(\".color-mode__button\");\ntoggleColorButtons.forEach(function (btn) {\n  btn.addEventListener(\"click\", toggleColorMode);\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pbWFyYy1oYW5kYm9vay8uL3NyYy9qcy9tYWluLmpzPzkyOTEiXSwibmFtZXMiOlsiZ3NhcCIsIkRyYXdTVkdQbHVnaW4iLCJGbGlwIiwiZWFzZSIsIm9wYWNpdHkiLCJkdXJhdGlvbiIsInkiLCJzdGFnZ2VyIiwiYW1vdW50IiwiZ3JpZCIsInRsIiwiZnJvbSIsImRlbGF5IiwiZHJhd1NWRyIsInRvZ2dsZUNvbG9yTW9kZSIsImUiLCJjdXJyZW50VGFyZ2V0IiwiY2xhc3NMaXN0IiwiY29udGFpbnMiLCJkb2N1bWVudCIsImRvY3VtZW50RWxlbWVudCIsInNldEF0dHJpYnV0ZSIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJ0b2dnbGVDb2xvckJ1dHRvbnMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsImJ0biIsImFkZEV2ZW50TGlzdGVuZXIiXSwibWFwcGluZ3MiOiI7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUVBQSxxREFBQSxDQUFvQkMsNkRBQXBCO0FBQ0FELHFEQUFBLENBQW9CRSwyQ0FBcEI7QUFFQUYsMkNBQUEsQ0FBVSxjQUFWLEVBQTBCO0FBQ3RCRyxNQUFJLEVBQUUsWUFEZ0I7QUFFdEJDLFNBQU8sRUFBRSxDQUZhO0FBR3RCQyxVQUFRLEVBQUUsSUFIWTtBQUl0QkMsR0FBQyxFQUFFLEVBSm1CO0FBS3RCQyxTQUFPLEVBQUU7QUFDTEMsVUFBTSxFQUFFLEdBREg7QUFFTEMsUUFBSSxFQUFFLENBQUMsQ0FBRCxFQUFHLENBQUg7QUFGRDtBQUxhLENBQTFCO0FBV0EsSUFBSUMsRUFBRSxHQUFHViwrQ0FBQSxFQUFUO0FBQ0FVLEVBQUUsQ0FBQ0MsSUFBSCxDQUFRLHlCQUFSLEVBQW1DO0FBQy9CQyxPQUFLLEVBQUUsR0FEd0I7QUFFL0JQLFVBQVEsRUFBRSxHQUZxQjtBQUcvQlEsU0FBTyxFQUFFLENBSHNCO0FBSS9CVCxTQUFPLEVBQUUsQ0FKc0I7QUFLL0JELE1BQUksRUFBRTtBQUx5QixDQUFuQyxFQU1HLEdBTkgsRSxDQVVBOztBQUVBLElBQU1XLGVBQWUsR0FBRyxTQUFTQSxlQUFULENBQXlCQyxDQUF6QixFQUE0QjtBQUVoRCxNQUFJQSxDQUFDLENBQUNDLGFBQUYsQ0FBZ0JDLFNBQWhCLENBQTBCQyxRQUExQixDQUFtQywyQkFBbkMsQ0FBSixFQUFxRTtBQUNqRUMsWUFBUSxDQUFDQyxlQUFULENBQXlCQyxZQUF6QixDQUFzQyxZQUF0QyxFQUFvRCxPQUFwRDtBQUNBQyxnQkFBWSxDQUFDQyxPQUFiLENBQXFCLFlBQXJCLEVBQW1DLE9BQW5DO0FBQ0E7QUFDSDs7QUFFREosVUFBUSxDQUFDQyxlQUFULENBQXlCQyxZQUF6QixDQUFzQyxZQUF0QyxFQUFvRCxNQUFwRDtBQUNBQyxjQUFZLENBQUNDLE9BQWIsQ0FBcUIsWUFBckIsRUFBbUMsTUFBbkM7QUFDSCxDQVZEOztBQVlBLElBQU1DLGtCQUFrQixHQUFHTCxRQUFRLENBQUNNLGdCQUFULENBQTBCLHFCQUExQixDQUEzQjtBQUVBRCxrQkFBa0IsQ0FBQ0UsT0FBbkIsQ0FBMkIsVUFBQ0MsR0FBRCxFQUFTO0FBQ2hDQSxLQUFHLENBQUNDLGdCQUFKLENBQXFCLE9BQXJCLEVBQThCZCxlQUE5QjtBQUNILENBRkQiLCJmaWxlIjoiLi9zcmMvanMvbWFpbi5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCBWdWUgZnJvbSAndnVlJztcblxuaW1wb3J0IHsgZ3NhcCB9IGZyb20gJ2dzYXAnXG5pbXBvcnQgeyBEcmF3U1ZHUGx1Z2luIH0gZnJvbSAnZ3NhcC9EcmF3U1ZHUGx1Z2luJ1xuaW1wb3J0IHsgRmxpcCB9IGZyb20gJ2dzYXAvRmxpcCdcblxuZ3NhcC5yZWdpc3RlclBsdWdpbihEcmF3U1ZHUGx1Z2luKVxuZ3NhcC5yZWdpc3RlclBsdWdpbihGbGlwKVxuXG5nc2FwLmZyb20oXCIuZW50cnlfX2l0ZW1cIiwge1xuICAgIGVhc2U6IFwicG93ZXIzLm91dFwiLFxuICAgIG9wYWNpdHk6IDAsXG4gICAgZHVyYXRpb246IDEuMjUsXG4gICAgeTogMjAsXG4gICAgc3RhZ2dlcjoge1xuICAgICAgICBhbW91bnQ6IDAuNSxcbiAgICAgICAgZ3JpZDogWzAsMV0sXG4gICAgfVxufSk7XG5cbnZhciB0bCA9IGdzYXAudGltZWxpbmUoKVxudGwuZnJvbShcIi5pY29uLS1kZXB0IC5pY29uX19wYXJ0XCIsIHtcbiAgICBkZWxheTogLjI1LFxuICAgIGR1cmF0aW9uOiAuNzUsXG4gICAgZHJhd1NWRzogMCxcbiAgICBvcGFjaXR5OiAwLFxuICAgIGVhc2U6IFwiZXhwby5pblwiXG59LCAwLjEpXG5cblxuXG4vLyBDb2xvciBtb2RlXG5cbmNvbnN0IHRvZ2dsZUNvbG9yTW9kZSA9IGZ1bmN0aW9uIHRvZ2dsZUNvbG9yTW9kZShlKSB7XG5cbiAgICBpZiAoZS5jdXJyZW50VGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcImNvbG9yLW1vZGVfX2J1dHRvbi0tbGlnaHRcIikpIHtcbiAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNldEF0dHJpYnV0ZShcImNvbG9yLW1vZGVcIiwgXCJsaWdodFwiKVxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImNvbG9yLW1vZGVcIiwgXCJsaWdodFwiKVxuICAgICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2V0QXR0cmlidXRlKFwiY29sb3ItbW9kZVwiLCBcImRhcmtcIik7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJjb2xvci1tb2RlXCIsIFwiZGFya1wiKVxufTtcblxuY29uc3QgdG9nZ2xlQ29sb3JCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5jb2xvci1tb2RlX19idXR0b25cIilcblxudG9nZ2xlQ29sb3JCdXR0b25zLmZvckVhY2goKGJ0bikgPT4ge1xuICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdG9nZ2xlQ29sb3JNb2RlKVxufSlcblxuXG5cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/js/main.js\n");

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