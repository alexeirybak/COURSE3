/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/screen-card.js":
/*!****************************!*\
  !*** ./src/screen-card.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   renderCards: () => (/* binding */ renderCards)
/* harmony export */ });
/* harmony import */ var _screen_start_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./screen-start.js */ "./src/screen-start.js");


let selectedCards = []
let numberOfPairs = 0
const cardSymbols = ["spades", "hearts", "diamonds", "clubs"]
const cardValues = ["A", "K", "Q", "J", "10", "9", "8", "7", "6"]
const cardDeck = []

const screenAllCards = document.getElementById("begin")

function renderCards() {
    screenAllCards.style.display = "block"
    const screenCards = `
      <div class="top">
        <div class="time">
          <div class="time-text">
            <div class="min">min</div>
            <div class="sec">sec</div> 
          </div>
          <div class="time-figures">00.00</div>
        </div>
        <button class="begin">Начать заново</button>
      </div>
      <div class="cards">
        <div class="card-deck-row1"></div> 
        <div class="card-deck-row2"></div>
      </div>`

    screenAllCards.innerHTML = screenCards

    for (let i = 0; i < cardSymbols.length; i++) {
        for (let j = 0; j < cardValues.length; j++) {
            let card = {
                symbol: cardSymbols[i],
                value: cardValues[j],
            }
            cardDeck.push(card)
        }
    }

    const shuffledCards = cardDeck.sort(() => Math.random() - 0.5)
    let topDeck = '<div class="row">'
    const cardsArray = []
    for (let i = 0; i < _screen_start_js__WEBPACK_IMPORTED_MODULE_0__.currentSelectedLevel * 3; i++) {
        let card = shuffledCards[i]
        cardsArray.push(card)
        topDeck += createCardElement(card)
    }
    topDeck += `</div>`
    document.querySelector(".card-deck-row1").innerHTML = topDeck

    let lowDeck = '<div class="row">'
    const cardsRowLow = cardsArray.sort(() => Math.random() - 0.5)
    for (let i = 0; i < _screen_start_js__WEBPACK_IMPORTED_MODULE_0__.currentSelectedLevel * 3; i++) {
        let card = cardsRowLow[i]
        lowDeck += createCardElement(card)
    }
    lowDeck += `</div>`
    document.querySelector(".card-deck-row2").innerHTML = lowDeck
    function createCardElement(card) {
        return `<div class="card ${card.value}" data-value="${card.value}" data-symbol="${card.symbol}.svg">
                    <div class="symbol-top-left"><div>${card.value}</div>
                    <div class="block-symbol"><img src="${card.symbol}.svg"></div>
                </div>
                <div class="value-center my-svg"><img src="${card.symbol}.svg"></div>
                <div class="symbol-bottom-right"><div>${card.value}</div>
                <div class="block-symbol"><img src="${card.symbol}.svg"></div></div></div>`
    }

    function changeCardStyle() {
        const cardFrontElements = document.querySelectorAll(".card")

        cardFrontElements.forEach((cardFrontElement) => {
            cardFrontElement
                .querySelectorAll(
                    ".value-center, .symbol-top-left, .symbol-bottom-right"
                )
                .forEach((element) => {
                    element.style.display = "none"
                })
            cardFrontElement.classList.add("selected")
            selectedCards = []
        })
    }

    setTimeout(changeCardStyle, 5000)

    function addRestartButtonListener() {
        const restartButton = document.querySelector(".begin")
        restartButton.addEventListener("click", (event) => {
            selectedCards = []
            event.preventDefault()
            screenAllCards.style.display = "none"
            _screen_start_js__WEBPACK_IMPORTED_MODULE_0__.screenFirstElement.style.display = "flex"
            ;(0,_screen_start_js__WEBPACK_IMPORTED_MODULE_0__.getScreen)()
        })
    }
    addRestartButtonListener()

    function choiceCard() {
        const cardFrontElements = document.querySelectorAll(".card")

        cardFrontElements.forEach((cardFrontElement) => {
            cardFrontElement.addEventListener("click", (event) => {
                event.stopPropagation()
                cardFrontElement.classList.remove("selected")
                cardFrontElement
                    .querySelectorAll(
                        ".value-center, .symbol-top-left, .symbol-bottom-right"
                    )
                    .forEach((element) => {
                        element.style.display = "block"
                    })

                const valueCard = cardFrontElement.dataset.value
                const symbolCard = cardFrontElement.dataset.symbol

                if (selectedCards.length < 2) {
                    selectedCards.push({
                        value: valueCard,
                        symbol: symbolCard,
                    })
                } else {
                    selectedCards = [{ value: valueCard, symbol: symbolCard }]
                }

                if (selectedCards.length === 2) {
                    compareCards()
                }
            })
        })
    }
    choiceCard()
}

function compareCards() {
    const selectedCard1 = selectedCards[0]
    const selectedCard2 = selectedCards[1]
    if (
        selectedCard1.value === selectedCard2.value &&
        selectedCard1.symbol === selectedCard2.symbol
    ) {
        setTimeout(() => {
            ++numberOfPairs
            selectedCards = []

            if (numberOfPairs / 3 === _screen_start_js__WEBPACK_IMPORTED_MODULE_0__.currentSelectedLevel) {
                numberOfPairs = 0
                selectedCards.splice(0, 2)
                screenAllCards.style.display = "none"
                _screen_start_js__WEBPACK_IMPORTED_MODULE_0__.screenFirstElement.style.display = "flex"

                alert("Вы победили!")
            }
        }, 300)
    } else {
        setTimeout(() => {
            selectedCards.splice(0, 2)
            showAllCards()
            alert("Вы проиграли!")
        }, 300)
    }
}

function showAllCards() {
    const cardFrontElements = document.querySelectorAll(".card")
    cardFrontElements.forEach((cardFrontElement) => {
        cardFrontElement.classList.remove("selected")
        cardFrontElement
            .querySelectorAll(
                ".value-center, .symbol-top-left, .symbol-bottom-right"
            )
            .forEach((element) => {
                element.style.display = "block"
            })
    })
}


/***/ }),

/***/ "./src/screen-start.js":
/*!*****************************!*\
  !*** ./src/screen-start.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   currentSelectedLevel: () => (/* binding */ currentSelectedLevel),
/* harmony export */   getScreen: () => (/* binding */ getScreen),
/* harmony export */   screenFirstElement: () => (/* binding */ screenFirstElement)
/* harmony export */ });
/* harmony import */ var _screen_card_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./screen-card.js */ "./src/screen-card.js");


// ---------- Рендерим первую страницу ----------------------------------------
const screenFirstElement = document.querySelector('.front');

const screenStart = `<form class="form-block">
                            <p class="level-choice">Выбери сложность</p>
                                <div class="level" id="levels"></div>
                                <button type="submit" class="button-start">Старт</button>
                    </form>`;

screenFirstElement.innerHTML = screenStart;

const levels = [{ level: 1 }, { level: 2 }, { level: 3 }];

let currentSelectedLevel = null;
const listLevels = document.getElementById('levels');
const form = document.querySelector('.form-block');

const getScreen = () => {
    screenFirstElement.classList.add('front');
    // ---------- Рендерим уровни -------------------------------------------------
    const renderLevels = () => {
        const levelsHtml = levels
            .map((level) => {
                return `<label class="level">
        <input type="radio" name="level" value="${level.level}">${level.level}</label>`;
            })
            .join('');
        listLevels.innerHTML = levelsHtml;
    };
    renderLevels();

    // ---------- Выбираем уровень ------------------------------------------------
    const radioButtons = document.querySelectorAll('input[type="radio"]');
    radioButtons.forEach((radioButton) => {
        radioButton.addEventListener('change', () => {
            radioButtons.forEach((btn) => {
                if (btn !== radioButton) {
                    btn.parentElement.classList.remove('chosen-level');
                }
            });
            radioButton.parentElement.classList.add('chosen-level');
            currentSelectedLevel = radioButton;
        });
    });

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const checkedLevel = event.target.elements.level.value;
        if (checkedLevel) {
            currentSelectedLevel = parseInt(checkedLevel);
            screenFirstElement.style.display = 'none';
            (0,_screen_card_js__WEBPACK_IMPORTED_MODULE_0__.renderCards)();
        } else {
            alert('Выберите уровень');
        }
    });
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
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _screen_start_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./screen-start.js */ "./src/screen-start.js");




(0,_screen_start_js__WEBPACK_IMPORTED_MODULE_0__.getScreen)();

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map