/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/block/editor.scss":
/*!*******************************!*\
  !*** ./src/block/editor.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYmxvY2svZWRpdG9yLnNjc3MuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2svZWRpdG9yLnNjc3M/ZmI3MiJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpbiJdLCJtYXBwaW5ncyI6IkFBQUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/block/editor.scss\n");

/***/ }),

/***/ "./src/block/faq_accordion.js":
/*!************************************!*\
  !*** ./src/block/faq_accordion.js ***!
  \************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ \"./src/block/style.scss\");\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./editor.scss */ \"./src/block/editor.scss\");\n/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_editor_scss__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nvar __ = wp.i18n.__;\n\nvar el = wp.element.createElement,\n    registerBlockType = wp.blocks.registerBlockType;\n\nvar TextControl = wp.components.TextControl;\nvar RichText = wp.editor.RichText;\n\n\nregisterBlockType('fab/faq-accordion-block', {\n    title: __('FAQ Accordion'),\n    description: __('Block that acts as an accordion when header clicked'),\n    icon: 'sort',\n    category: 'widgets',\n    keywords: [__('faq'), __('fab'), __('accordion')],\n    styles: [{\n        name: 'default',\n        label: __('Default'),\n        isDefault: true\n    }],\n\n    attributes: {\n        question: {\n            type: 'string',\n            source: 'html',\n            selector: 'h3'\n        },\n        answer: {\n            type: 'html',\n            source: 'html',\n            selector: 'p'\n        }\n    },\n\n    edit: function edit(props) {\n\n        return el('div', { className: 'faq-accordion' }, el('h3', { className: 'faq-accordion-question' }, el(RichText, {\n            placeholder: 'Enter a question.',\n            value: props.attributes.question,\n            onChange: function onChange(val) {\n                props.setAttributes({ question: val });\n            }\n        })), el('p', { className: 'faq-accordion-answer' }, el(RichText, {\n            placeholder: 'Enter an answer.',\n            value: props.attributes.answer,\n            onChange: function onChange(val) {\n                props.setAttributes({ answer: val });\n            }\n        })));\n    },\n\n    save: function save(props) {\n        return el('div', { className: 'faq-accordion' }, el('h3', { className: 'faq-accordion-question' }, props.attributes.question), el('p', { className: 'faq-accordion-answer' }, props.attributes.answer));\n    }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYmxvY2svZmFxX2FjY29yZGlvbi5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9jay9mYXFfYWNjb3JkaW9uLmpzPzYwYWYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwiLi9zdHlsZS5zY3NzXCI7XG5pbXBvcnQgXCIuL2VkaXRvci5zY3NzXCI7XG5cbnZhciBfXyA9IHdwLmkxOG4uX187XG5cbnZhciBlbCA9IHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudCxcbiAgICByZWdpc3RlckJsb2NrVHlwZSA9IHdwLmJsb2Nrcy5yZWdpc3RlckJsb2NrVHlwZTtcblxudmFyIFRleHRDb250cm9sID0gd3AuY29tcG9uZW50cy5UZXh0Q29udHJvbDtcbnZhciBSaWNoVGV4dCA9IHdwLmVkaXRvci5SaWNoVGV4dDtcblxuXG5yZWdpc3RlckJsb2NrVHlwZSgnZmFiL2ZhcS1hY2NvcmRpb24tYmxvY2snLCB7XG4gICAgdGl0bGU6IF9fKCdGQVEgQWNjb3JkaW9uJyksXG4gICAgZGVzY3JpcHRpb246IF9fKCdCbG9jayB0aGF0IGFjdHMgYXMgYW4gYWNjb3JkaW9uIHdoZW4gaGVhZGVyIGNsaWNrZWQnKSxcbiAgICBpY29uOiAnc29ydCcsXG4gICAgY2F0ZWdvcnk6ICd3aWRnZXRzJyxcbiAgICBrZXl3b3JkczogW19fKCdmYXEnKSwgX18oJ2ZhYicpLCBfXygnYWNjb3JkaW9uJyldLFxuICAgIHN0eWxlczogW3tcbiAgICAgICAgbmFtZTogJ2RlZmF1bHQnLFxuICAgICAgICBsYWJlbDogX18oJ0RlZmF1bHQnKSxcbiAgICAgICAgaXNEZWZhdWx0OiB0cnVlXG4gICAgfV0sXG5cbiAgICBhdHRyaWJ1dGVzOiB7XG4gICAgICAgIHF1ZXN0aW9uOiB7XG4gICAgICAgICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgICAgICAgIHNvdXJjZTogJ2h0bWwnLFxuICAgICAgICAgICAgc2VsZWN0b3I6ICdoMydcbiAgICAgICAgfSxcbiAgICAgICAgYW5zd2VyOiB7XG4gICAgICAgICAgICB0eXBlOiAnaHRtbCcsXG4gICAgICAgICAgICBzb3VyY2U6ICdodG1sJyxcbiAgICAgICAgICAgIHNlbGVjdG9yOiAncCdcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBlZGl0OiBmdW5jdGlvbiBlZGl0KHByb3BzKSB7XG5cbiAgICAgICAgcmV0dXJuIGVsKCdkaXYnLCB7IGNsYXNzTmFtZTogJ2ZhcS1hY2NvcmRpb24nIH0sIGVsKCdoMycsIHsgY2xhc3NOYW1lOiAnZmFxLWFjY29yZGlvbi1xdWVzdGlvbicgfSwgZWwoUmljaFRleHQsIHtcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyOiAnRW50ZXIgYSBxdWVzdGlvbi4nLFxuICAgICAgICAgICAgdmFsdWU6IHByb3BzLmF0dHJpYnV0ZXMucXVlc3Rpb24sXG4gICAgICAgICAgICBvbkNoYW5nZTogZnVuY3Rpb24gb25DaGFuZ2UodmFsKSB7XG4gICAgICAgICAgICAgICAgcHJvcHMuc2V0QXR0cmlidXRlcyh7IHF1ZXN0aW9uOiB2YWwgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pKSwgZWwoJ3AnLCB7IGNsYXNzTmFtZTogJ2ZhcS1hY2NvcmRpb24tYW5zd2VyJyB9LCBlbChSaWNoVGV4dCwge1xuICAgICAgICAgICAgcGxhY2Vob2xkZXI6ICdFbnRlciBhbiBhbnN3ZXIuJyxcbiAgICAgICAgICAgIHZhbHVlOiBwcm9wcy5hdHRyaWJ1dGVzLmFuc3dlcixcbiAgICAgICAgICAgIG9uQ2hhbmdlOiBmdW5jdGlvbiBvbkNoYW5nZSh2YWwpIHtcbiAgICAgICAgICAgICAgICBwcm9wcy5zZXRBdHRyaWJ1dGVzKHsgYW5zd2VyOiB2YWwgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pKSk7XG4gICAgfSxcblxuICAgIHNhdmU6IGZ1bmN0aW9uIHNhdmUocHJvcHMpIHtcbiAgICAgICAgcmV0dXJuIGVsKCdkaXYnLCB7IGNsYXNzTmFtZTogJ2ZhcS1hY2NvcmRpb24nIH0sIGVsKCdoMycsIHsgY2xhc3NOYW1lOiAnZmFxLWFjY29yZGlvbi1xdWVzdGlvbicgfSwgcHJvcHMuYXR0cmlidXRlcy5xdWVzdGlvbiksIGVsKCdwJywgeyBjbGFzc05hbWU6ICdmYXEtYWNjb3JkaW9uLWFuc3dlcicgfSwgcHJvcHMuYXR0cmlidXRlcy5hbnN3ZXIpKTtcbiAgICB9XG59KTsiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/block/faq_accordion.js\n");

/***/ }),

/***/ "./src/block/style.scss":
/*!******************************!*\
  !*** ./src/block/style.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYmxvY2svc3R5bGUuc2Nzcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9jay9zdHlsZS5zY3NzPzRlOTEiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW4iXSwibWFwcGluZ3MiOiJBQUFBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/block/style.scss\n");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _block_faq_accordion_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./block/faq_accordion.js */ \"./src/block/faq_accordion.js\");\n/**\n * Import blocks\n */\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanM/MzcwMCJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEltcG9ydCBibG9ja3NcbiAqL1xuaW1wb3J0ICcuL2Jsb2NrL2ZhcV9hY2NvcmRpb24uanMnOyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ })

/******/ });