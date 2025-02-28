/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ loadAboutPage)\n/* harmony export */ });\nfunction loadAboutPage() {\n    const content = document.getElementById(\"content\");\n    content.innerHTML = \"\";\n\n    const aboutText = document.createElement(\"div\");\n    aboutText.innerHTML = \n    `<h1>About Delightful Bites</h1>\n    <p>At <strong>Delightful Bites</strong>, we believe that great food brings people together.</p>\n    <p>Nestled in the heart of the city, our restaurant offers a warm and inviting atmosphere where every meal is crafted with passion and care.</p>\n    <p>Our menu is a celebration of fresh, locally sourced ingredients, expertly prepared to deliver a perfect balance of flavour and presentation.</p>\n    <p>Whether you're joining us for a leisurely breakfast, a hearty lunch, or an elegant dinner, every dish is designed to delight your taste buds.</p>\n    <p>Our chefs take inspiration from both traditional and modern cuisine, ensuring that every plate showcases bold flavours and the finest ingredients.</p>\n    <p>From comforting classics to innovative creations, there’s something for everyone at Delightful Bites.</p>\n    <p>We take pride in delivering not just exceptional food, but also outstanding service.</p>\n    <p>Whether you're here for a casual meal with friends, a special occasion, or simply a moment to savour good food, we strive to make every visit memorable.</p>\n    <p>Join us at <strong>Delightful Bites</strong> and experience the joy of great food, warm hospitality, and unforgettable moments.</p>\n`;\n\n    content.appendChild(aboutText);\n}\n\n//# sourceURL=webpack:///./src/about.js?");

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ loadContactPage)\n/* harmony export */ });\nfunction loadContactPage() {\n    const content = document.getElementById(\"content\");\n    content.innerHTML = \"\";\n\n    const title = document.createElement(\"h1\");\n    title.textContent = \"Contact Us\";\n\n    const address = document.createElement(\"p\");\n    address.textContent = \"📍 123 London Road, London, UK\";\n\n    const phone = document.createElement(\"p\");\n    phone.textContent = \"📞 Call us: +44 123 456 789\";\n\n    const email = document.createElement(\"p\");\n    email.textContent = \"📧 Email: contact@delightfulbites.com\";\n    \n    const hours = document.createElement(\"p\");\n    hours.textContent = \"⏰ Opening Hours: Monday - Sunday, 12:00 PM to 10:00 PM\";\n\n    content.appendChild(title);\n    content.appendChild(address);\n    content.appendChild(phone);\n    content.appendChild(email);\n    content.appendChild(hours);\n\n}\n\n\n//# sourceURL=webpack:///./src/contact.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ loadHomePage)\n/* harmony export */ });\n/* harmony import */ var _restaurant_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./restaurant.jpg */ \"./src/restaurant.jpg\");\n\n\nfunction loadHomePage() {\n    const content = document.getElementById(\"content\");\n    content.innerHTML = \"\";\n\n    const title = document.createElement(\"h1\");\n    title.textContent = \"Welcome to Delightful Bites\";\n\n    const image = document.createElement(\"img\");\n    image.src = _restaurant_jpg__WEBPACK_IMPORTED_MODULE_0__;\n    image.alt = \"A cosy restaurant interior\";\n\n    const taglineOne = document.createElement(\"p\");\n    taglineOne.textContent = \"Experience a world of exquisite flavours and a warm ambiance at Delightful Bites. Our chefs bring the finest ingredients together to craft dishes that will leave you craving for more.\";\n\n    const taglineTwo = document.createElement(\"p\");\n    taglineTwo.textContent = \"Visit us for an unforgettable dining experience!\";\n\n    content.appendChild(title);\n    content.appendChild(image);\n    content.appendChild(taglineOne);\n    content.appendChild(taglineTwo);\n\n\n\n}\n\n//# sourceURL=webpack:///./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.js */ \"./src/home.js\");\n/* harmony import */ var _about_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./about.js */ \"./src/about.js\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n/* harmony import */ var _reservations_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reservations.js */ \"./src/reservations.js\");\n/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contact.js */ \"./src/contact.js\");\n\n\n\n\n\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n    const content = document.getElementById(\"content\");\n\n    (0,_home_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n    const homeButton = document.getElementById(\"homeBtn\");\n    const aboutButton = document.getElementById(\"aboutBtn\");\n    const menuButton = document.getElementById(\"menuBtn\");\n    const reservationsButton = document.getElementById(\"reservationsBtn\");\n    const contactButton = document.getElementById(\"contactBtn\");\n\n    \n\n    homeButton.addEventListener(\"click\", () => {\n        content.innerHTML = \"\";\n        (0,_home_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n    });\n\n    aboutButton.addEventListener(\"click\", () => {\n        content.innerHTML = \"\";\n        (0,_about_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n    });\n\n    menuButton.addEventListener(\"click\", () => {\n        content.innerHTML = \"\";\n        (0,_menu_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n    });\n\n    reservationsButton.addEventListener(\"click\", () => {\n        content.innerHTML = \"\";\n        (0,_reservations_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n    });\n\n    contactButton.addEventListener(\"click\", () => {\n        content.innerHTML = \"\";\n        (0,_contact_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n    });\n});\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ loadMenuPage)\n/* harmony export */ });\nfunction loadMenuPage() {\n    const content = document.getElementById(\"content\");\n    content.innerHTML = \"\";\n\n    const title = document.createElement(\"h1\");\n    title.textContent = \"Our Menu\";\n\n    const description = document.createElement(\"p\");\n    description.textContent = \"Explore our delicious selection of dishes, carefully crafted with the finest ingredients.\";\n\n    const menuList = document.createElement(\"ul\");\n\n    const items = [\n        \"Starter: Garlic Bread\",\n        \"Starter: Tomato Bruschetta\",\n        \"Main: Grilled Salmon with Lemon Butter\",\n        \"Main: Handmade Truffle Pasta\",\n        \"Dessert: Classic Tiramisu\",\n        \"Dessert: Chocolate Lava Cake\",\n    ];\n\n    items.forEach(item => {\n        const listItem = document.createElement(\"li\");\n        listItem.textContent = item;\n        menuList.appendChild(listItem);\n    });\n\n    content.appendChild(title);\n    content.appendChild(description);\n    content.appendChild(menuList);\n}\n\n\n//# sourceURL=webpack:///./src/menu.js?");

/***/ }),

/***/ "./src/reservations.js":
/*!*****************************!*\
  !*** ./src/reservations.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ loadReservationsPage)\n/* harmony export */ });\nfunction loadReservationsPage() {\n    const content = document.getElementById(\"content\");\n    content.innerHTML = \"\";\n\n    const title = document.createElement(\"h1\");\n    title.textContent = \"Reservations\";\n\n    const description = document.createElement(\"p\");\n    description.textContent = \"Reserve a table for a delightful dining experience. Call us or book online!\";\n\n    const phone = document.createElement(\"p\");\n    phone.textContent = \"📞 Call us: +44 123 456 789\";\n\n    const form = document.createElement(\"form\");\n\n    const label = document.createElement(\"label\");\n    label.textContent = \"Select Date & Time:\";\n    label.setAttribute(\"for\", \"datetime\");\n\n    const input = document.createElement(\"input\");\n    input.type = \"datetime-local\";\n    input.id = \"datetime\";\n    input.name = \"datetime\"\n\n    const button = document.createElement(\"button\");\n    button.textContent = \"Reserve Now\";\n    button.type = \"submit\";\n\n    form.appendChild(label);\n    form.appendChild(input);\n    form.appendChild(button);\n\n    content.appendChild(title);\n    content.appendChild(description);\n    content.appendChild(phone);\n    content.appendChild(form);\n}\n\n//# sourceURL=webpack:///./src/reservations.js?");

/***/ }),

/***/ "./src/restaurant.jpg":
/*!****************************!*\
  !*** ./src/restaurant.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"2456dd7b6486cce9e79e.jpg\";\n\n//# sourceURL=webpack:///./src/restaurant.jpg?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;