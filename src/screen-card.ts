import {
    screenFirstElement,
    currentSelectedLevel,
    getScreen,
} from './screen-start';

interface Card {
    value: string;
    symbol: string;
  }

let selectedCards: Card[] = [];
let numberOfPairs = 0;
export const cardSymbols = ['spades', 'hearts', 'diamonds', 'clubs'];
export const cardValues = ['A', 'K', 'Q', 'J', '10', '9', '8', '7', '6'];
const cardDeck: Card[] = [];
let startTime: Date;
let timerId: NodeJS.Timer;
let minutesElement: HTMLElement | null = document.querySelector('.min-figures');
let secondsElement: HTMLElement | null = document.querySelector('.sec-figures');
let totalTime = "";
let result: boolean;

const screenAllCards = document.getElementById('begin') as HTMLElement;

export function createCards () {
    for (let i = 0; i < cardSymbols.length; i++) {
        for (let j = 0; j < cardValues.length; j++) {
            let card = {
                symbol: cardSymbols[i],
                value: cardValues[j],
            };
            cardDeck.push(card);
        }
    }
    return cardDeck;
}

export function renderCards() {
    screenAllCards.style.display = 'block';
    const screenCards = `
      <div class="top">
        <div class="time">
          <div class="time-text">
            <div class="min">min</div>
            <div class="sec">sec</div> 
          </div>
          <div class="time-block">
            <div class="min-figures">00</div>
            <p>.</p>
            <div class="sec-figures">00</div>
          </div>
        </div>
        <button class="begin">Начать заново</button>
      </div>
      <div class="cards">
        <div class="card-deck-row1"></div> 
        <div class="card-deck-row2"></div>
      </div>`;

    screenAllCards.innerHTML = screenCards;

createCards();

    const shuffledCards = cardDeck.sort(() => Math.random() - 0.5);
    let topDeck = '<div class="row">';
    const cardsArray = [];
    for (let i = 0; i < Number(currentSelectedLevel) * 3; i++) {
        let card = shuffledCards[i];
        cardsArray.push(card);
        topDeck += createCardElement(card);
    }
    topDeck += `</div>`;

    const row1Element = document.querySelector('.card-deck-row1');
    if (row1Element) {
        row1Element.innerHTML = topDeck;
    }

    let lowDeck = '<div class="row">';
    const cardsRowLow = cardsArray.sort(() => Math.random() - 0.5);
    for (let i = 0; i < Number(currentSelectedLevel) * 3; i++) {
        let card = cardsRowLow[i];
        lowDeck += createCardElement(card);
    }    lowDeck += `</div>`;

    const row2Element = document.querySelector('.card-deck-row2');
    if (row2Element) {
        row2Element.innerHTML = lowDeck;
    }

    function createCardElement(card: Card) {
        return `<div class="card ${card.value}" data-value="${card.value}" data-symbol="${card.symbol}.svg">
                    <div class="symbol-top-left"><div>${card.value}</div>
                    <div class="block-symbol"><img src="static/${card.symbol}.svg"></div>
                </div>
                <div class="value-center my-svg"><img src="static/${card.symbol}.svg"></div>
                <div class="symbol-bottom-right"><div>${card.value}</div>
                <div class="block-symbol"><img src="static/${card.symbol}.svg"></div></div></div>`;
    }
    
    function changeCardStyle() {
        clearTimeout(timerId);
        startTime = new Date();
        minutesElement = document.querySelector('.min-figures');
        secondsElement = document.querySelector('.sec-figures');
        if (minutesElement && secondsElement) {
            minutesElement.textContent = '00';
            secondsElement.textContent = '00';
        }
        const cardFrontElements = document.querySelectorAll('.card');

        cardFrontElements.forEach((cardFrontElement) => {
            cardFrontElement
                .querySelectorAll(
                    '.value-center, .symbol-top-left, .symbol-bottom-right'
                )
                .forEach((element) => {
                    (element as HTMLElement).style.display = 'none';
                });
            cardFrontElement.classList.add('selected');
            selectedCards = [];
        });

        timerId = setInterval(() => updateTime(startTime, minutesElement, secondsElement), 1000);

    }

    setTimeout(changeCardStyle, 5000);

    const restartButton = document.querySelector('.begin');
    restartButton?.addEventListener('click', (event) => {
        selectedCards = [];
        event.preventDefault();
        screenAllCards.style.display = 'none';
        if(screenFirstElement) {
            screenFirstElement.style.display = 'flex';
        }
        getScreen();
        });

    const cardFrontElements = document.querySelectorAll('.card');
    
    cardFrontElements.forEach((cardFrontElement) => {
        const element = cardFrontElement as HTMLElement;

        element.addEventListener('click', (event) => {
            event.stopPropagation();
            element.classList.remove('selected');
            element
                .querySelectorAll(
                    '.value-center, .symbol-top-left, .symbol-bottom-right'
                )
                .forEach((childElement) => {
                    const child = childElement as HTMLElement;
                    child.style.display = 'block';
                });

            const valueCard = element.dataset.value;
            const symbolCard = element.dataset.symbol;

            if (selectedCards.length < 2) {
                if (valueCard && symbolCard !== undefined) {
                selectedCards.push({
                    value: valueCard,
                    symbol: symbolCard,
                });
            }
            } else {
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

function compareCards() {
    const selectedCard1 = selectedCards[0];
    const selectedCard2 = selectedCards[1];
    if (
        selectedCard1.value === selectedCard2.value &&
        selectedCard1.symbol === selectedCard2.symbol
    ) {
        setTimeout(() => {
            ++numberOfPairs;
            selectedCards = [];

            if (numberOfPairs / 3 === currentSelectedLevel) {
                numberOfPairs = 0;
                selectedCards.splice(0, 2);
                result = true;
                clearInterval(timerId);
                const cardPanel = document.querySelector('.cards');
                if (cardPanel) {
                    cardPanel.remove();
                    gameOver();
                }
        }
        }, 300);
    } else {
        setTimeout(() => {
            selectedCards.splice(0, 2);
            result = false;
            clearInterval(timerId);
            const cardPanel = document.querySelector('.cards');
            if (cardPanel) {
                cardPanel.remove();
                gameOver();
            }
        }, 300);
    }
}

function updateTime(startTime: Date | undefined, minutesElement: HTMLElement | null, secondsElement: HTMLElement | null): void {
    const currentTime: Date = new Date();
    const timeElapsed: number = startTime ? Math.floor((currentTime.getTime() - startTime.getTime()) / 1000) : 0;

    const minutes = Math.floor(timeElapsed / 60);
    const seconds = timeElapsed % 60;
    
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes.toString();
    const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds.toString();
    
    if (minutesElement && secondsElement) {
        minutesElement.textContent = formattedMinutes;
        secondsElement.textContent = formattedSeconds;
    }
    
    totalTime = `${formattedMinutes}:${formattedSeconds}`;
}

function gameOver() {
    if (minutesElement && secondsElement) {
    totalTime = `${minutesElement.textContent}:${secondsElement.textContent}`;
    }
    screenAllCards.style.display = 'none';
    if (screenFirstElement) {
    screenFirstElement.style.display = 'flex';
    let screenStart;

        screenStart =   `<form class="form-block">
                            ${result ? '<img src="static/win.png" title="Выигрыш" alt="Выигрыш"></img>' : '<img src="static/dead.png" title="Выигрыш" alt="Выигрыш"></img>'}
                            <div class="final-text">${result ? '<p>Вы выиграли!</p>' : '<p>Вы проиграли!</p>'}</div>
                            <p class="total-time-text">Затраченное время</p>
                            <p class="total-time-figures">${totalTime}</p>
                            <button type="submit" class="button-start">Играть снова</button>
                        </form>`;
        screenFirstElement.innerHTML = screenStart;
    }
        document.body.classList.add('game-over-background');
}