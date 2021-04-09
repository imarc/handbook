/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkimarc_handbook"] = self["webpackChunkimarc_handbook"] || []).push([["/js/main"],{

/***/ "./src/js/components/animations.js":
/*!*****************************************!*\
  !*** ./src/js/components/animations.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gsap */ \"./node_modules/gsap/index.js\");\n/* harmony import */ var gsap_DrawSVGPlugin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gsap/DrawSVGPlugin */ \"./node_modules/gsap/DrawSVGPlugin.js\");\n/* harmony import */ var gsap_Flip__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gsap/Flip */ \"./node_modules/gsap/Flip.js\");\n\n\n\n/**\n * animations\n */\n\ngsap__WEBPACK_IMPORTED_MODULE_0__.gsap.registerPlugin(gsap_DrawSVGPlugin__WEBPACK_IMPORTED_MODULE_1__.DrawSVGPlugin);\ngsap__WEBPACK_IMPORTED_MODULE_0__.gsap.registerPlugin(gsap_Flip__WEBPACK_IMPORTED_MODULE_2__.Flip);\ngsap__WEBPACK_IMPORTED_MODULE_0__.gsap.from(\".entry__item\", {\n  ease: \"power3.out\",\n  opacity: 0,\n  duration: 1.25,\n  y: 20,\n  stagger: {\n    amount: 0.5,\n    grid: [0, 1]\n  }\n});\nvar tl = gsap__WEBPACK_IMPORTED_MODULE_0__.gsap.timeline();\ntl.from(\".icon--dept .icon__part\", {\n  delay: .25,\n  duration: .75,\n  drawSVG: 0,\n  opacity: 0,\n  ease: \"expo.in\"\n}, 0.1);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pbWFyYy1oYW5kYm9vay8uL3NyYy9qcy9jb21wb25lbnRzL2FuaW1hdGlvbnMuanM/MGU0YyJdLCJuYW1lcyI6WyJnc2FwIiwiRHJhd1NWR1BsdWdpbiIsIkZsaXAiLCJlYXNlIiwib3BhY2l0eSIsImR1cmF0aW9uIiwieSIsInN0YWdnZXIiLCJhbW91bnQiLCJncmlkIiwidGwiLCJmcm9tIiwiZGVsYXkiLCJkcmF3U1ZHIl0sIm1hcHBpbmdzIjoiOzs7O0FBQUE7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBOztBQUVBQSxxREFBQSxDQUFvQkMsNkRBQXBCO0FBQ0FELHFEQUFBLENBQW9CRSwyQ0FBcEI7QUFFQUYsMkNBQUEsQ0FBVSxjQUFWLEVBQTBCO0FBQ3RCRyxNQUFJLEVBQUUsWUFEZ0I7QUFFdEJDLFNBQU8sRUFBRSxDQUZhO0FBR3RCQyxVQUFRLEVBQUUsSUFIWTtBQUl0QkMsR0FBQyxFQUFFLEVBSm1CO0FBS3RCQyxTQUFPLEVBQUU7QUFDTEMsVUFBTSxFQUFFLEdBREg7QUFFTEMsUUFBSSxFQUFFLENBQUMsQ0FBRCxFQUFHLENBQUg7QUFGRDtBQUxhLENBQTFCO0FBV0EsSUFBSUMsRUFBRSxHQUFHViwrQ0FBQSxFQUFUO0FBQ0FVLEVBQUUsQ0FBQ0MsSUFBSCxDQUFRLHlCQUFSLEVBQW1DO0FBQy9CQyxPQUFLLEVBQUUsR0FEd0I7QUFFL0JQLFVBQVEsRUFBRSxHQUZxQjtBQUcvQlEsU0FBTyxFQUFFLENBSHNCO0FBSS9CVCxTQUFPLEVBQUUsQ0FKc0I7QUFLL0JELE1BQUksRUFBRTtBQUx5QixDQUFuQyxFQU1HLEdBTkgiLCJmaWxlIjoiLi9zcmMvanMvY29tcG9uZW50cy9hbmltYXRpb25zLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ3NhcCB9IGZyb20gJ2dzYXAnXG5pbXBvcnQgeyBEcmF3U1ZHUGx1Z2luIH0gZnJvbSAnZ3NhcC9EcmF3U1ZHUGx1Z2luJ1xuaW1wb3J0IHsgRmxpcCB9IGZyb20gJ2dzYXAvRmxpcCdcblxuXG4vKipcbiAqIGFuaW1hdGlvbnNcbiAqL1xuXG5nc2FwLnJlZ2lzdGVyUGx1Z2luKERyYXdTVkdQbHVnaW4pXG5nc2FwLnJlZ2lzdGVyUGx1Z2luKEZsaXApXG5cbmdzYXAuZnJvbShcIi5lbnRyeV9faXRlbVwiLCB7XG4gICAgZWFzZTogXCJwb3dlcjMub3V0XCIsXG4gICAgb3BhY2l0eTogMCxcbiAgICBkdXJhdGlvbjogMS4yNSxcbiAgICB5OiAyMCxcbiAgICBzdGFnZ2VyOiB7XG4gICAgICAgIGFtb3VudDogMC41LFxuICAgICAgICBncmlkOiBbMCwxXSxcbiAgICB9XG59KTtcblxudmFyIHRsID0gZ3NhcC50aW1lbGluZSgpXG50bC5mcm9tKFwiLmljb24tLWRlcHQgLmljb25fX3BhcnRcIiwge1xuICAgIGRlbGF5OiAuMjUsXG4gICAgZHVyYXRpb246IC43NSxcbiAgICBkcmF3U1ZHOiAwLFxuICAgIG9wYWNpdHk6IDAsXG4gICAgZWFzZTogXCJleHBvLmluXCJcbn0sIDAuMSlcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/js/components/animations.js\n");

/***/ }),

/***/ "./src/js/components/colormode.js":
/*!****************************************!*\
  !*** ./src/js/components/colormode.js ***!
  \****************************************/
/***/ (() => {

eval("/**\n * colormode\n */\nvar toggleColorMode = function toggleColorMode(e) {\n  if (e.currentTarget.classList.contains(\"color-mode__button--light\")) {\n    document.documentElement.setAttribute(\"color-mode\", \"light\");\n    localStorage.setItem(\"color-mode\", \"light\");\n    return;\n  }\n\n  document.documentElement.setAttribute(\"color-mode\", \"dark\");\n  localStorage.setItem(\"color-mode\", \"dark\");\n};\n\nvar toggleColorButtons = document.querySelectorAll(\".color-mode__button\");\ntoggleColorButtons.forEach(function (btn) {\n  btn.addEventListener(\"click\", toggleColorMode);\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pbWFyYy1oYW5kYm9vay8uL3NyYy9qcy9jb21wb25lbnRzL2NvbG9ybW9kZS5qcz9hMTFkIl0sIm5hbWVzIjpbInRvZ2dsZUNvbG9yTW9kZSIsImUiLCJjdXJyZW50VGFyZ2V0IiwiY2xhc3NMaXN0IiwiY29udGFpbnMiLCJkb2N1bWVudCIsImRvY3VtZW50RWxlbWVudCIsInNldEF0dHJpYnV0ZSIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJ0b2dnbGVDb2xvckJ1dHRvbnMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsImJ0biIsImFkZEV2ZW50TGlzdGVuZXIiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLGVBQWUsR0FBRyxTQUFTQSxlQUFULENBQXlCQyxDQUF6QixFQUE0QjtBQUNoRCxNQUFJQSxDQUFDLENBQUNDLGFBQUYsQ0FBZ0JDLFNBQWhCLENBQTBCQyxRQUExQixDQUFtQywyQkFBbkMsQ0FBSixFQUFxRTtBQUNqRUMsSUFBQUEsUUFBUSxDQUFDQyxlQUFULENBQXlCQyxZQUF6QixDQUFzQyxZQUF0QyxFQUFvRCxPQUFwRDtBQUNBQyxJQUFBQSxZQUFZLENBQUNDLE9BQWIsQ0FBcUIsWUFBckIsRUFBbUMsT0FBbkM7QUFDQTtBQUNIOztBQUVESixFQUFBQSxRQUFRLENBQUNDLGVBQVQsQ0FBeUJDLFlBQXpCLENBQXNDLFlBQXRDLEVBQW9ELE1BQXBEO0FBQ0FDLEVBQUFBLFlBQVksQ0FBQ0MsT0FBYixDQUFxQixZQUFyQixFQUFtQyxNQUFuQztBQUNILENBVEQ7O0FBV0EsSUFBTUMsa0JBQWtCLEdBQUdMLFFBQVEsQ0FBQ00sZ0JBQVQsQ0FBMEIscUJBQTFCLENBQTNCO0FBRUFELGtCQUFrQixDQUFDRSxPQUFuQixDQUEyQixVQUFDQyxHQUFELEVBQVM7QUFDaENBLEVBQUFBLEdBQUcsQ0FBQ0MsZ0JBQUosQ0FBcUIsT0FBckIsRUFBOEJkLGVBQTlCO0FBQ0gsQ0FGRCIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogY29sb3Jtb2RlXG4gKi9cblxuY29uc3QgdG9nZ2xlQ29sb3JNb2RlID0gZnVuY3Rpb24gdG9nZ2xlQ29sb3JNb2RlKGUpIHtcbiAgICBpZiAoZS5jdXJyZW50VGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcImNvbG9yLW1vZGVfX2J1dHRvbi0tbGlnaHRcIikpIHtcbiAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNldEF0dHJpYnV0ZShcImNvbG9yLW1vZGVcIiwgXCJsaWdodFwiKVxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImNvbG9yLW1vZGVcIiwgXCJsaWdodFwiKVxuICAgICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2V0QXR0cmlidXRlKFwiY29sb3ItbW9kZVwiLCBcImRhcmtcIik7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJjb2xvci1tb2RlXCIsIFwiZGFya1wiKVxufTtcblxuY29uc3QgdG9nZ2xlQ29sb3JCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5jb2xvci1tb2RlX19idXR0b25cIilcblxudG9nZ2xlQ29sb3JCdXR0b25zLmZvckVhY2goKGJ0bikgPT4ge1xuICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdG9nZ2xlQ29sb3JNb2RlKVxufSlcbiJdLCJmaWxlIjoiLi9zcmMvanMvY29tcG9uZW50cy9jb2xvcm1vZGUuanMuanMiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/js/components/colormode.js\n");

/***/ }),

/***/ "./src/js/components/stickyTOC.js":
/*!****************************************!*\
  !*** ./src/js/components/stickyTOC.js ***!
  \****************************************/
/***/ (() => {

eval("/**\n * sticky sidebar\n */\nvar navTOC = document.querySelector(\".nav--toc\");\n\nvar stickTOC = function stickTOC() {\n  var viewportHeight = document.documentElement.clientHeight;\n\n  if (navTOC.clientHeight <= viewportHeight) {\n    navTOC.classList.add(\"torso__nav--toc-stuck\");\n  } else {\n    navTOC.classList.remove(\"torso__nav--toc-stuck\");\n  }\n};\n\ndocument.addEventListener(\"DOMContentLoaded\", stickTOC);\nwindow.addEventListener(\"resize\", stickTOC);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pbWFyYy1oYW5kYm9vay8uL3NyYy9qcy9jb21wb25lbnRzL3N0aWNreVRPQy5qcz9hMjM4Il0sIm5hbWVzIjpbIm5hdlRPQyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInN0aWNrVE9DIiwidmlld3BvcnRIZWlnaHQiLCJkb2N1bWVudEVsZW1lbnQiLCJjbGllbnRIZWlnaHQiLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiLCJhZGRFdmVudExpc3RlbmVyIiwid2luZG93Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxNQUFNLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixXQUF2QixDQUFmOztBQUVBLElBQU1DLFFBQVEsR0FBRyxTQUFYQSxRQUFXLEdBQU07QUFDbkIsTUFBTUMsY0FBYyxHQUFHSCxRQUFRLENBQUNJLGVBQVQsQ0FBeUJDLFlBQWhEOztBQUVBLE1BQUlOLE1BQU0sQ0FBQ00sWUFBUCxJQUF1QkYsY0FBM0IsRUFBMkM7QUFDdkNKLElBQUFBLE1BQU0sQ0FBQ08sU0FBUCxDQUFpQkMsR0FBakIsQ0FBcUIsdUJBQXJCO0FBQ0gsR0FGRCxNQUVPO0FBQ0hSLElBQUFBLE1BQU0sQ0FBQ08sU0FBUCxDQUFpQkUsTUFBakIsQ0FBd0IsdUJBQXhCO0FBQ0g7QUFDSixDQVJEOztBQVVBUixRQUFRLENBQUNTLGdCQUFULENBQTBCLGtCQUExQixFQUE4Q1AsUUFBOUM7QUFFQVEsTUFBTSxDQUFDRCxnQkFBUCxDQUF3QixRQUF4QixFQUFrQ1AsUUFBbEMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIHN0aWNreSBzaWRlYmFyXG4gKi9cblxuY29uc3QgbmF2VE9DID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uYXYtLXRvY1wiKTtcblxuY29uc3Qgc3RpY2tUT0MgPSAoKSA9PiB7XG4gICAgY29uc3Qgdmlld3BvcnRIZWlnaHQgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0XG5cbiAgICBpZiAobmF2VE9DLmNsaWVudEhlaWdodCA8PSB2aWV3cG9ydEhlaWdodCkge1xuICAgICAgICBuYXZUT0MuY2xhc3NMaXN0LmFkZChcInRvcnNvX19uYXYtLXRvYy1zdHVja1wiKVxuICAgIH0gZWxzZSB7XG4gICAgICAgIG5hdlRPQy5jbGFzc0xpc3QucmVtb3ZlKFwidG9yc29fX25hdi0tdG9jLXN0dWNrXCIpXG4gICAgfVxufVxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBzdGlja1RPQyk7XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIHN0aWNrVE9DKTtcbiJdLCJmaWxlIjoiLi9zcmMvanMvY29tcG9uZW50cy9zdGlja3lUT0MuanMuanMiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/js/components/stickyTOC.js\n");

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_animations_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/animations.js */ \"./src/js/components/animations.js\");\n/* harmony import */ var _components_colormode_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/colormode.js */ \"./src/js/components/colormode.js\");\n/* harmony import */ var _components_colormode_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_components_colormode_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_stickyTOC_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/stickyTOC.js */ \"./src/js/components/stickyTOC.js\");\n/* harmony import */ var _components_stickyTOC_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_components_stickyTOC_js__WEBPACK_IMPORTED_MODULE_2__);\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pbWFyYy1oYW5kYm9vay8uL3NyYy9qcy9tYWluLmpzPzkyOTEiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFDQSIsImZpbGUiOiIuL3NyYy9qcy9tYWluLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuL2NvbXBvbmVudHMvYW5pbWF0aW9ucy5qcydcbmltcG9ydCAnLi9jb21wb25lbnRzL2NvbG9ybW9kZS5qcydcbmltcG9ydCAnLi9jb21wb25lbnRzL3N0aWNreVRPQy5qcydcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/js/main.js\n");

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