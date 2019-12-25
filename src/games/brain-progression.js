#!/usr/bin/env node

import game from '..';

const greeting = 'What number is missing in the progression?';

const quest = () => {
  const num1 = Math.floor(Math.random() * 30);
  const num2 = Math.floor(Math.random() * 14) + 1;
  const num3 = Math.floor(Math.random() * 10);

  const progress = (element, step, amountOfNumbers, unknownPosition) => {
    if (amountOfNumbers === 0) return '';
    if (unknownPosition === 0) return `.. ${progress(element + step, step, amountOfNumbers - 1, unknownPosition - 1)} `;
    return `${element} ${progress(element + step, step, amountOfNumbers - 1, unknownPosition - 1)} `;
  };
  const unknownElement = num1 + num2 * num3;

  return {
    question: progress(num1, num2, 10, num3),
    answer: `${unknownElement}`,
  };
};

game(greeting, quest);
