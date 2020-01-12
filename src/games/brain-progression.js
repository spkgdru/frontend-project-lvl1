import game from '..';
import random from '../random';

const progressionStartValue = random(1, 30);
const progressionStep = random(2, 15);
const progressionLength = 10;

const greeting = 'What number is missing in the progression?';
const createGameData = () => {
  const emptyPosition = random(0, progressLength - 1);
  const createProgression = (element, step, amountOfNumbers, unknownPosition) => {
    if (amountOfNumbers === 0) return '';
    if (unknownPosition === 0) return `.. ${createProgression(element + step, step, amountOfNumbers - 1, unknownPosition - 1)} `;
    return `${element} ${createProgression(element + step, step, amountOfNumbers - 1, unknownPosition - 1)} `;
  };
  const unknownElement = element + step * unknownPosition;
  return {
    question: createProgression(progressionStartValue, progressionStep, progressionLength, emptyPosition),
    answer: unknownElement.toString(),
  };
};

export default () => {
  game(greeting, createGameData);
};
