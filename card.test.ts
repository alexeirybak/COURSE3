import {expect, test} from '@jest/globals';
import { cardSymbols, cardValues, createCards } from './src/screen-card';

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

// ------------ Тестирование функции createCards() ----------------------------
describe('createCards', () => {
  it('следует создавать всю колоду карт', () => {
    const cardDeck = createCards();

    // Проверка, что длина созданной колоды равна умножению длин массивов символов и значений
    expect(cardDeck.length).toBe(cardSymbols.length * cardValues.length);

    // Проверка наличия всех возможных комбинаций в колоде
    cardSymbols.forEach(symbol => {
      cardValues.forEach(value => {
        const card = { symbol, value };
        expect(cardDeck).toContainEqual(card);
      });
    });
  });

  it('следует возвращать одну и ту же колоду карт при каждом вызове', () => {
    // Вызываю функцию дважды
    const cardDeck1 = createCards();
    const cardDeck2 = createCards();

    // Проверяю, что результаты двух вызовов идентичны
    expect(cardDeck1).toEqual(cardDeck2);
  });
});

