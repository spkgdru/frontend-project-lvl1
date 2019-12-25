#!/usr/bin/env node

import game from '..';

const greeting = 'What number is missing in the progression?';

const quest = () => {
  const progressStartValue = Math.floor(Math.random() * 30);
  const progressStep = Math.floor(Math.random() * 14) + 1;
  const position = Math.floor(Math.random() * 10);
  const progressLength = 10;

  const progress = (element, step, amountOfNumbers, unknownPosition) => {
    if (amountOfNumbers === 0) return '';
    if (unknownPosition === 0) return `.. ${progress(element + step, step, amountOfNumbers - 1, unknownPosition - 1)} `;
    return `${element} ${progress(element + step, step, amountOfNumbers - 1, unknownPosition - 1)} `;
  };
  const unknownElement = progressStartValue + progressStep * position;

  return {
    question: progress(progressStartValue, progressStep, progressLength, position),
    answer: `${unknownElement}`,
  };
};

game(greeting, quest);
