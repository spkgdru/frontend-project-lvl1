import game from '..';
import getRandom from '../random';

const seriesLength = 10;
const seriesMinStep = 2;
const seriesMaxStep = 15;

const greeting = 'What number is missing in the progression?';
const createGameData = () => {
  const seriesStartValue = getRandom(1, 30);
  const emptyPosition = getRandom(0, seriesLength - 1);
  const seriesStep = getRandom(seriesMinStep, seriesMaxStep);
  const answer = (seriesStartValue + seriesStep * emptyPosition).toString();
  const createProgression = (element, step, amountOfNumbers, unknownPosition) => {
    if (amountOfNumbers === 0) return '';
    if (unknownPosition === 0) return `.. ${createProgression(element + step, step, amountOfNumbers - 1, unknownPosition - 1)} `;
    return `${element} ${createProgression(element + step, step, amountOfNumbers - 1, unknownPosition - 1)} `;
  };
  const question = createProgression(seriesStartValue, seriesStep, seriesLength, emptyPosition);
  return { question, answer };
};

export default () => {
  game(greeting, createGameData);
};
