import game from '..';
import random from '../random';

const progressLength = 10;

const greeting = 'What number is missing in the progression?';
const play = () => {
  const progressStartValue = random(1, 30);
  const progressStep = random(2, 15);
  const position = random(0, 9);
  const progress = (element, step, amountOfNumbers, unknownPosition) => {
    if (amountOfNumbers === 0) return '';
    if (unknownPosition === 0) return `.. ${progress(element + step, step, amountOfNumbers - 1, unknownPosition - 1)} `;
    return `${element} ${progress(element + step, step, amountOfNumbers - 1, unknownPosition - 1)} `;
  };
  const unknownElement = progressStartValue + progressStep * position;
  return {
    question: progress(progressStartValue, progressStep, progressLength, position),
    answer: unknownElement.toString(),
  };
};

export default () => {
  game(greeting, play);
};
