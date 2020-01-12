import game from '..';
import getRandom from '../random';

const progressionStartValue = getRandom(1, 30);
const progressionLength = 10;

const greeting = 'What number is missing in the progression?';
const createGameData = () => {
  const emptyPosition = getRandom(0, progressionLength - 1);
  const progressionStep = getRandom(2, 15);
  const createProgression = (element, step, amountOfNumbers, unknownPosition) => {
    if (amountOfNumbers === 0) return '';
    if (unknownPosition === 0) return `.. ${createProgression(element + step, step, amountOfNumbers - 1, unknownPosition - 1)} `;
    return `${element} ${createProgression(element + step, step, amountOfNumbers - 1, unknownPosition - 1)} `;
  };
  const unknownElement = progressionStartValue + progressionStep * emptyPosition;
  return {
    question: createProgression(progressionStartValue, progressionStep, progressionLength, emptyPosition),
    answer: unknownElement.toString(),
  };
};

export default () => {
  game(greeting, createGameData);
};
