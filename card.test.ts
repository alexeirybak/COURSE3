import {expect, test} from '@jest/globals';

import { updateTime } from "./src/screen-card";

test('должна обновлять элементы с минутами и секундами правильно', () => {
  // Создаю моковые элементы
  const minutesElementMock = document.createElement('div');
  const secondsElementMock = document.createElement('div');

  // Устанавливаю время и вызываю функцию
  const startTime = new Date();
  startTime.setMinutes(0);
  startTime.setSeconds(0);
  const currentTime = new Date(startTime.getTime() + 5000); // Добавить 5 секунд чисто для тестирования

  updateTime(startTime, minutesElementMock, secondsElementMock);

  // Проверяю, что элементы обновлять правильно
  expect(minutesElementMock.textContent).toBe('00');
  expect(secondsElementMock.textContent).toBe('05');
});

test('должна обрабатывать неопределенное начальное время', () => {
  // Создаю элементы
  const minutesElementMock = document.createElement('div');
  const secondsElementMock = document.createElement('div');

  // Вызываю функцию с неопределенным начальным временем
  updateTime(undefined, minutesElementMock, secondsElementMock);

  // Проверяю, что элементы остаются неизменными
  expect(minutesElementMock.textContent).toBe('');
  expect(secondsElementMock.textContent).toBe('');
});



