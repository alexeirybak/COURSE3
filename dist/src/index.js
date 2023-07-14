/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/screen-card.ts":
/*!****************************!*\
  !*** ./src/screen-card.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   renderCards: () => (/* binding */ renderCards)
/* harmony export */ });
/* harmony import */ var _screen_start__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./screen-start */ "./src/screen-start.ts");

var selectedCards;
var numberOfPairs = 0;
var cardSymbols = ['spades', 'hearts', 'diamonds', 'clubs'];
var cardValues = ['A', 'K', 'Q', 'J', '10', '9', '8', '7', '6'];
var cardDeck = [];
var timerId;
var minutesElement = document.querySelector('.min-figures');
var secondsElement = document.querySelector('.sec-figures');
var totalTime = "";
var result;
var screenAllCards = document.getElementById('begin');
var topDeck = '<div class="row">';
var cardsArray = [];
;
function renderCards() {
    screenAllCards.style.display = 'block';
    var screenCards = "\n      <div class=\"top\">\n        <div class=\"time\">\n          <div class=\"time-text\">\n            <div class=\"min\">min</div>\n            <div class=\"sec\">sec</div> \n          </div>\n          <div class=\"time-block\">\n            <div class=\"min-figures\">00</div>\n            <p>.</p>\n            <div class=\"sec-figures\">00</div>\n          </div>\n        </div>\n        <button class=\"begin\">\u041D\u0430\u0447\u0430\u0442\u044C \u0437\u0430\u043D\u043E\u0432\u043E</button>\n      </div>\n      <div class=\"cards\">\n        <div class=\"card-deck-row1\"></div> \n        <div class=\"card-deck-row2\"></div>\n      </div>";
    screenAllCards.innerHTML = screenCards;
    for (var i = 0; i < cardSymbols.length; i++) {
        for (var j = 0; j < cardValues.length; j++) {
            var card = {
                symbol: cardSymbols[i],
                value: cardValues[j],
            };
            cardDeck.push(card);
        }
    }
    if (_screen_start__WEBPACK_IMPORTED_MODULE_0__.currentSelectedLevel !== null) {
        var shuffledCards = cardDeck.sort(function () { return Math.random() - 0.5; });
        topDeck = '<div class="row">';
        var cardsArray_1 = [];
        for (var i = 0; i < _screen_start__WEBPACK_IMPORTED_MODULE_0__.currentSelectedLevel * 3; i++) {
            var card = shuffledCards[i];
            cardsArray_1.push(card);
            topDeck += createCardElement(card);
        }
    }
    topDeck += "</div>";
    var cardsRowTop = cardsArray.sort(function () { return Math.random() - 0.5; });
    for (var i = 0; i < Number(_screen_start__WEBPACK_IMPORTED_MODULE_0__.currentSelectedLevel) * 3; i++) {
        var card = cardsRowTop[i];
        topDeck += createCardElement(card);
    }
    topDeck += "</div>";
    var row1Element = document.querySelector('.card-deck-row1');
    if (row1Element) {
        row1Element.innerHTML = topDeck;
    }
    var lowDeck = '<div class="row">';
    var cardsRowLow = cardsArray.sort(function () { return Math.random() - 0.5; });
    for (var i = 0; i < Number(_screen_start__WEBPACK_IMPORTED_MODULE_0__.currentSelectedLevel) * 3; i++) {
        var card = cardsRowLow[i];
        lowDeck += createCardElement(card);
    }
    lowDeck += "</div>";
    var row2Element = document.querySelector('.card-deck-row2');
    if (row2Element) {
        row2Element.innerHTML = lowDeck;
    }
    function createCardElement(card) {
        return "<div class=\"card ".concat(card.value, "\" data-value=\"").concat(card.value, "\" data-symbol=\"").concat(card.symbol, ".svg\">\n                    <div class=\"symbol-top-left\"><div>").concat(card.value, "</div>\n                    <div class=\"block-symbol\"><img src=\"static/").concat(card.symbol, ".svg\"></div>\n                </div>\n                <div class=\"value-center my-svg\"><img src=\"static/").concat(card.symbol, ".svg\"></div>\n                <div class=\"symbol-bottom-right\"><div>").concat(card.value, "</div>\n                <div class=\"block-symbol\"><img src=\"static/").concat(card.symbol, ".svg\"></div></div></div>");
    }
    function changeCardStyle() {
        clearTimeout(timerId);
        var startTime = new Date();
        minutesElement = document.querySelector('.min-figures');
        secondsElement = document.querySelector('.sec-figures');
        if (minutesElement && secondsElement) {
            minutesElement.textContent = '00';
            secondsElement.textContent = '00';
        }
        var cardFrontElements = document.querySelectorAll('.card');
        cardFrontElements.forEach(function (cardFrontElement) {
            cardFrontElement
                .querySelectorAll('.value-center, .symbol-top-left, .symbol-bottom-right')
                .forEach(function (element) {
                element.style.display = 'none';
            });
            cardFrontElement.classList.add('selected');
            selectedCards = [];
        });
        timerId = setInterval(updateTime, 1000);
    }
    setTimeout(changeCardStyle, 5000);
    function addRestartButtonListener() {
        var restartButton = document.querySelector('.begin');
        if (restartButton) {
            restartButton.addEventListener('click', function (event) {
                selectedCards = [];
                event.preventDefault();
                screenAllCards.style.display = 'none';
                if (_screen_start__WEBPACK_IMPORTED_MODULE_0__.screenFirstElement) {
                    _screen_start__WEBPACK_IMPORTED_MODULE_0__.screenFirstElement.style.display = 'flex';
                }
                (0,_screen_start__WEBPACK_IMPORTED_MODULE_0__.getScreen)();
            });
        }
    }
    addRestartButtonListener();
    function choiceCard() {
        var cardFrontElements = document.querySelectorAll('.card');
        cardFrontElements.forEach(function (cardFrontElement) {
            var element = cardFrontElement;
            element.addEventListener('click', function (event) {
                event.stopPropagation();
                element.classList.remove('selected');
                element
                    .querySelectorAll('.value-center, .symbol-top-left, .symbol-bottom-right')
                    .forEach(function (childElement) {
                    var child = childElement;
                    child.style.display = 'block';
                });
                var valueCard = element.dataset.value;
                var symbolCard = element.dataset.symbol;
                if (selectedCards.length < 2) {
                    if (valueCard && symbolCard !== undefined) {
                        selectedCards.push({
                            value: valueCard,
                            symbol: symbolCard,
                        });
                    }
                }
                else {
                    if (valueCard && symbolCard !== undefined) {
                        selectedCards = [{ value: valueCard, symbol: symbolCard }];
                    }
                }
                if (selectedCards.length === 2) {
                    compareCards();
                }
            });
        });
    }
    choiceCard();
}
function compareCards() {
    var selectedCard1 = selectedCards[0];
    var selectedCard2 = selectedCards[1];
    if (selectedCard1.value === selectedCard2.value &&
        selectedCard1.symbol === selectedCard2.symbol) {
        setTimeout(function () {
            ++numberOfPairs;
            selectedCards = [];
            if (numberOfPairs / 3 === _screen_start__WEBPACK_IMPORTED_MODULE_0__.currentSelectedLevel) {
                numberOfPairs = 0;
                selectedCards.splice(0, 2);
                result = true;
                clearInterval(timerId);
                var cardPanel = document.querySelector('.cards');
                if (cardPanel) {
                    cardPanel.remove();
                    gameOver();
                }
            }
        }, 300);
    }
    else {
        setTimeout(function () {
            selectedCards.splice(0, 2);
            result = false;
            clearInterval(timerId);
            var cardPanel = document.querySelector('.cards');
            if (cardPanel) {
                cardPanel.remove();
                gameOver();
            }
        }, 300);
    }
}
function updateTime(startTime, minutesElement, secondsElement) {
    var currentTime = new Date();
    var timeElapsed = Math.floor((currentTime.getTime() - startTime.getTime()) / 1000);
    var minutes = Math.floor(timeElapsed / 60);
    var seconds = timeElapsed % 60;
    var formattedMinutes = minutes < 10 ? "0".concat(minutes) : minutes.toString();
    var formattedSeconds = seconds < 10 ? "0".concat(seconds) : seconds.toString();
    minutesElement.textContent = formattedMinutes;
    secondsElement.textContent = formattedSeconds;
}
function gameOver() {
    if (minutesElement && secondsElement) {
        totalTime = "".concat(minutesElement.textContent, ":").concat(secondsElement.textContent);
    }
    screenAllCards.style.display = 'none';
    if (_screen_start__WEBPACK_IMPORTED_MODULE_0__.screenFirstElement) {
        _screen_start__WEBPACK_IMPORTED_MODULE_0__.screenFirstElement.style.display = 'flex';
        var screenStart = void 0;
        screenStart = "<form class=\"form-block\">\n                            ".concat(result ? '<img src="static/win.png" title="Выигрыш" alt="Выигрыш"></img>' : '<img src="static/win.png" title="Выигрыш" alt="Выигрыш"></img>', "\n                            <div class=\"final-text\">").concat(result ? '<p>Вы выиграли!</p>' : '<p>Вы проиграли!</p>', "</div>\n                            <p class=\"total-time-text\">\u0417\u0430\u0442\u0440\u0430\u0447\u0435\u043D\u043D\u043E\u0435 \u0432\u0440\u0435\u043C\u044F</p>\n                            <p class=\"total-time-figures\">").concat(totalTime, "</p>\n                            <button type=\"submit\" class=\"button-start\">\u0418\u0433\u0440\u0430\u0442\u044C \u0441\u043D\u043E\u0432\u0430</button>\n                        </form>");
        _screen_start__WEBPACK_IMPORTED_MODULE_0__.screenFirstElement.innerHTML = screenStart;
    }
    document.body.classList.add('game-over-background');
}


/***/ }),

/***/ "./src/screen-start.ts":
/*!*****************************!*\
  !*** ./src/screen-start.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   currentSelectedLevel: () => (/* binding */ currentSelectedLevel),
/* harmony export */   getScreen: () => (/* binding */ getScreen),
/* harmony export */   screenFirstElement: () => (/* binding */ screenFirstElement),
/* harmony export */   screenStart: () => (/* binding */ screenStart)
/* harmony export */ });
/* harmony import */ var _screen_card__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./screen-card */ "./src/screen-card.ts");

var screenFirstElement = document.querySelector('.front');
var screenStart = "<form class=\"form-block\">\n                                    <p class=\"level-choice\">\u0412\u044B\u0431\u0435\u0440\u0438 \u0441\u043B\u043E\u0436\u043D\u043E\u0441\u0442\u044C</p>\n                                    <div class=\"level\" id=\"levels\"></div>\n                                    <button type=\"submit\" class=\"button-start\">\u0421\u0442\u0430\u0440\u0442</button>\n                                    </form>";
if (screenFirstElement) {
    screenFirstElement.innerHTML = screenStart;
}
var levels = [{ level: 1 }, { level: 2 }, { level: 3 }];
var currentSelectedLevel = null;
var listLevels = document.getElementById('levels');
var form = document.querySelector('.form-block');
var getScreen = function () {
    if (screenFirstElement) {
        screenFirstElement.classList.add('front');
    }
    if (form) {
        var radioButtons_1 = document.querySelectorAll('input[type="radio"]');
        radioButtons_1.forEach(function (radioButton) {
            radioButton.addEventListener('change', function () {
                var _a;
                radioButtons_1.forEach(function (btn) {
                    var _a;
                    if (btn !== radioButton) {
                        (_a = btn.parentElement) === null || _a === void 0 ? void 0 : _a.classList.remove('chosen-level');
                    }
                });
                (_a = radioButton.parentElement) === null || _a === void 0 ? void 0 : _a.classList.add('chosen-level');
                currentSelectedLevel = radioButton.value ? parseInt(radioButton.value) : null;
            });
        });
        form.addEventListener('submit', function (event) {
            var _a;
            event.preventDefault();
            var checkedLevel = (_a = form.elements.namedItem('level')) === null || _a === void 0 ? void 0 : _a.value;
            if (checkedLevel) {
                currentSelectedLevel = parseInt(checkedLevel);
                if (screenFirstElement) {
                    screenFirstElement.style.display = 'none';
                }
                (0,_screen_card__WEBPACK_IMPORTED_MODULE_0__.renderCards)();
            }
            else {
                alert('Выберите уровень');
            }
        });
    }
};


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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _screen_start__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./screen-start */ "./src/screen-start.ts");



(0,_screen_start__WEBPACK_IMPORTED_MODULE_1__.getScreen)();

})();

/******/ })()
;
//# sourceMappingURL=index.js.map