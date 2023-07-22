import {describe, expect, test} from '@jest/globals';

import { compareCards } from "./src/screen-card";

describe('compareCards', () => {
  it('should return true when cards match', () => {
    const selectedCards = [{ value: '8', symbol: '♥' }, { value: '8', symbol: '♥' }];
    let numberOfPairs = 0;
    const currentSelectedLevel = 1;
    const timerId = 123;

    const result = compareCards(selectedCards, numberOfPairs, currentSelectedLevel, timerId);

    expect(selectedCards).toEqual([]);
    expect(numberOfPairs).toBe(1);
    expect(result).toBe(true);
  });

  it('should return false when cards do not match', () => {
    const selectedCards = [{ value: '9', symbol: '♥' }, { value: 'A', symbol: '♦' }];
    let numberOfPairs = 0;
    const currentSelectedLevel = 1;
    const timerId = 123;

    const result = compareCards(selectedCards, numberOfPairs, currentSelectedLevel, timerId);

    expect(selectedCards).toEqual([]);
    expect(result).toBe(false);
  });
});