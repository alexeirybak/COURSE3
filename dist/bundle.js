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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _screen_start_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./screen-start.js */ \"./src/screen-start.js\");\n\r\n\r\n\r\n\r\n(0,_screen_start_js__WEBPACK_IMPORTED_MODULE_0__.getScreen)();\r\n\n\n//# sourceURL=webpack://course3/./src/index.js?");

/***/ }),

/***/ "./src/screen-card.js":
/*!****************************!*\
  !*** ./src/screen-card.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   renderCards: () => (/* binding */ renderCards)\n/* harmony export */ });\n/* harmony import */ var _screen_start_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./screen-start.js */ \"./src/screen-start.js\");\n\r\n\r\nlet selectedCards = []\r\nlet numberOfPairs = 0\r\nconst cardSymbols = [\"spades\", \"hearts\", \"diamonds\", \"clubs\"]\r\nconst cardValues = [\"A\", \"K\", \"Q\", \"J\", \"10\", \"9\", \"8\", \"7\", \"6\"]\r\nconst cardDeck = []\r\n\r\nconst screenAllCards = document.getElementById(\"begin\")\r\n\r\nfunction renderCards() {\r\n    screenAllCards.style.display = \"block\"\r\n    const screenCards = `\r\n      <div class=\"top\">\r\n        <div class=\"time\">\r\n          <div class=\"time-text\">\r\n            <div class=\"min\">min</div>\r\n            <div class=\"sec\">sec</div> \r\n          </div>\r\n          <div class=\"time-figures\">00.00</div>\r\n        </div>\r\n        <button class=\"begin\">Начать заново</button>\r\n      </div>\r\n      <div class=\"cards\">\r\n        <div class=\"card-deck-row1\"></div> \r\n        <div class=\"card-deck-row2\"></div>\r\n      </div>`\r\n\r\n    screenAllCards.innerHTML = screenCards\r\n\r\n    for (let i = 0; i < cardSymbols.length; i++) {\r\n        for (let j = 0; j < cardValues.length; j++) {\r\n            let card = {\r\n                symbol: cardSymbols[i],\r\n                value: cardValues[j],\r\n            }\r\n            cardDeck.push(card)\r\n        }\r\n    }\r\n\r\n    const shuffledCards = cardDeck.sort(() => Math.random() - 0.5)\r\n    let topDeck = '<div class=\"row\">'\r\n    const cardsArray = []\r\n    for (let i = 0; i < _screen_start_js__WEBPACK_IMPORTED_MODULE_0__.currentSelectedLevel * 3; i++) {\r\n        let card = shuffledCards[i]\r\n        cardsArray.push(card)\r\n        topDeck += createCardElement(card)\r\n    }\r\n    topDeck += `</div>`\r\n    document.querySelector(\".card-deck-row1\").innerHTML = topDeck\r\n\r\n    let lowDeck = '<div class=\"row\">'\r\n    const cardsRowLow = cardsArray.sort(() => Math.random() - 0.5)\r\n    for (let i = 0; i < _screen_start_js__WEBPACK_IMPORTED_MODULE_0__.currentSelectedLevel * 3; i++) {\r\n        let card = cardsRowLow[i]\r\n        lowDeck += createCardElement(card)\r\n    }\r\n    lowDeck += `</div>`\r\n    document.querySelector(\".card-deck-row2\").innerHTML = lowDeck\r\n    function createCardElement(card) {\r\n        return `<div class=\"card ${card.value}\" data-value=\"${card.value}\" data-symbol=\"${card.symbol}.svg\">\r\n                    <div class=\"symbol-top-left\"><div>${card.value}</div>\r\n                    <div class=\"block-symbol\"><img src=\"${card.symbol}.svg\"></div>\r\n                </div>\r\n                <div class=\"value-center my-svg\"><img src=\"${card.symbol}.svg\"></div>\r\n                <div class=\"symbol-bottom-right\"><div>${card.value}</div>\r\n                <div class=\"block-symbol\"><img src=\"${card.symbol}.svg\"></div></div></div>`\r\n    }\r\n\r\n    function changeCardStyle() {\r\n        const cardFrontElements = document.querySelectorAll(\".card\")\r\n\r\n        cardFrontElements.forEach((cardFrontElement) => {\r\n            cardFrontElement\r\n                .querySelectorAll(\r\n                    \".value-center, .symbol-top-left, .symbol-bottom-right\"\r\n                )\r\n                .forEach((element) => {\r\n                    element.style.display = \"none\"\r\n                })\r\n            cardFrontElement.classList.add(\"selected\")\r\n            selectedCards = []\r\n        })\r\n    }\r\n\r\n    setTimeout(changeCardStyle, 5000)\r\n\r\n    function addRestartButtonListener() {\r\n        const restartButton = document.querySelector(\".begin\")\r\n        restartButton.addEventListener(\"click\", (event) => {\r\n            selectedCards = []\r\n            event.preventDefault()\r\n            screenAllCards.style.display = \"none\"\r\n            _screen_start_js__WEBPACK_IMPORTED_MODULE_0__.screenFirstElement.style.display = \"flex\"\r\n            ;(0,_screen_start_js__WEBPACK_IMPORTED_MODULE_0__.getScreen)()\r\n        })\r\n    }\r\n    addRestartButtonListener()\r\n\r\n    function choiceCard() {\r\n        const cardFrontElements = document.querySelectorAll(\".card\")\r\n\r\n        cardFrontElements.forEach((cardFrontElement) => {\r\n            cardFrontElement.addEventListener(\"click\", (event) => {\r\n                event.stopPropagation()\r\n                cardFrontElement.classList.remove(\"selected\")\r\n                cardFrontElement\r\n                    .querySelectorAll(\r\n                        \".value-center, .symbol-top-left, .symbol-bottom-right\"\r\n                    )\r\n                    .forEach((element) => {\r\n                        element.style.display = \"block\"\r\n                    })\r\n\r\n                const valueCard = cardFrontElement.dataset.value\r\n                const symbolCard = cardFrontElement.dataset.symbol\r\n\r\n                if (selectedCards.length < 2) {\r\n                    selectedCards.push({\r\n                        value: valueCard,\r\n                        symbol: symbolCard,\r\n                    })\r\n                } else {\r\n                    selectedCards = [{ value: valueCard, symbol: symbolCard }]\r\n                }\r\n\r\n                if (selectedCards.length === 2) {\r\n                    compareCards()\r\n                }\r\n            })\r\n        })\r\n    }\r\n    choiceCard()\r\n}\r\n\r\nfunction compareCards() {\r\n    const selectedCard1 = selectedCards[0]\r\n    const selectedCard2 = selectedCards[1]\r\n    if (\r\n        selectedCard1.value === selectedCard2.value &&\r\n        selectedCard1.symbol === selectedCard2.symbol\r\n    ) {\r\n        setTimeout(() => {\r\n            ++numberOfPairs\r\n            selectedCards = []\r\n\r\n            if (numberOfPairs / 3 === _screen_start_js__WEBPACK_IMPORTED_MODULE_0__.currentSelectedLevel) {\r\n                numberOfPairs = 0\r\n                selectedCards.splice(0, 2)\r\n                screenAllCards.style.display = \"none\"\r\n                _screen_start_js__WEBPACK_IMPORTED_MODULE_0__.screenFirstElement.style.display = \"flex\"\r\n\r\n                alert(\"Вы победили!\")\r\n            }\r\n        }, 300)\r\n    } else {\r\n        setTimeout(() => {\r\n            selectedCards.splice(0, 2)\r\n            showAllCards()\r\n            alert(\"Вы проиграли!\")\r\n        }, 300)\r\n    }\r\n}\r\n\r\nfunction showAllCards() {\r\n    const cardFrontElements = document.querySelectorAll(\".card\")\r\n    cardFrontElements.forEach((cardFrontElement) => {\r\n        cardFrontElement.classList.remove(\"selected\")\r\n        cardFrontElement\r\n            .querySelectorAll(\r\n                \".value-center, .symbol-top-left, .symbol-bottom-right\"\r\n            )\r\n            .forEach((element) => {\r\n                element.style.display = \"block\"\r\n            })\r\n    })\r\n}\r\n\n\n//# sourceURL=webpack://course3/./src/screen-card.js?");

/***/ }),

/***/ "./src/screen-start.js":
/*!*****************************!*\
  !*** ./src/screen-start.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   currentSelectedLevel: () => (/* binding */ currentSelectedLevel),\n/* harmony export */   getScreen: () => (/* binding */ getScreen),\n/* harmony export */   screenFirstElement: () => (/* binding */ screenFirstElement)\n/* harmony export */ });\n/* harmony import */ var _screen_card_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./screen-card.js */ \"./src/screen-card.js\");\n\r\n\r\n// ---------- Рендерим первую страницу ----------------------------------------\r\nconst screenFirstElement = document.querySelector('.front');\r\n\r\nconst screenStart = `<form class=\"form-block\">\r\n                            <p class=\"level-choice\">Выбери сложность</p>\r\n                                <div class=\"level\" id=\"levels\"></div>\r\n                                <button type=\"submit\" class=\"button-start\">Старт</button>\r\n                    </form>`;\r\n\r\nscreenFirstElement.innerHTML = screenStart;\r\n\r\nconst levels = [{ level: 1 }, { level: 2 }, { level: 3 }];\r\n\r\nlet currentSelectedLevel = null;\r\nconst listLevels = document.getElementById('levels');\r\nconst form = document.querySelector('.form-block');\r\n\r\nconst getScreen = () => {\r\n    screenFirstElement.classList.add('front');\r\n    // ---------- Рендерим уровни -------------------------------------------------\r\n    const renderLevels = () => {\r\n        const levelsHtml = levels\r\n            .map((level) => {\r\n                return `<label class=\"level\">\r\n        <input type=\"radio\" name=\"level\" value=\"${level.level}\">${level.level}</label>`;\r\n            })\r\n            .join('');\r\n        listLevels.innerHTML = levelsHtml;\r\n    };\r\n    renderLevels();\r\n\r\n    // ---------- Выбираем уровень ------------------------------------------------\r\n    const radioButtons = document.querySelectorAll('input[type=\"radio\"]');\r\n    radioButtons.forEach((radioButton) => {\r\n        radioButton.addEventListener('change', () => {\r\n            radioButtons.forEach((btn) => {\r\n                if (btn !== radioButton) {\r\n                    btn.parentElement.classList.remove('chosen-level');\r\n                }\r\n            });\r\n            radioButton.parentElement.classList.add('chosen-level');\r\n            currentSelectedLevel = radioButton;\r\n        });\r\n    });\r\n\r\n    form.addEventListener('submit', (event) => {\r\n        event.preventDefault();\r\n        const checkedLevel = event.target.elements.level.value;\r\n        if (checkedLevel) {\r\n            currentSelectedLevel = parseInt(checkedLevel);\r\n            screenFirstElement.style.display = 'none';\r\n            (0,_screen_card_js__WEBPACK_IMPORTED_MODULE_0__.renderCards)();\r\n        } else {\r\n            alert('Выберите уровень');\r\n        }\r\n    });\r\n};\r\n\n\n//# sourceURL=webpack://course3/./src/screen-start.js?");

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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;