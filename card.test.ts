import {expect, test} from '@jest/globals';

test('Проверка формирования карт в колоде', () => {
  const cardSymbols = ['spades', 'hearts', 'diamonds', 'clubs'];
  const cardValues = ['A', 'K', 'Q', 'J', '10', '9', '8', '7', '6'];
  
  // Создание пустой колоды
  const cardDeck = [];

  // Формирование карт в колоде
  for (let i = 0; i < cardSymbols.length; i++) {
    for (let j = 0; j < cardValues.length; j++) {
      let card = {
        symbol: cardSymbols[i],
        value: cardValues[j],
      };
      cardDeck.push(card);
    }
  }

  // Проверка, что в колоде находятся все карты
  expect(cardDeck.length).toBe(cardSymbols.length * cardValues.length);

  // Проверка, что каждая карта имеет правильный символ и значение
  for (let i = 0; i < cardSymbols.length; i++) {
    for (let j = 0; j < cardValues.length; j++) {
      let card = cardDeck[i * cardValues.length + j];
      expect(card.symbol).toBe(cardSymbols[i]);
      expect(card.value).toBe(cardValues[j]);
    }
  }
});

