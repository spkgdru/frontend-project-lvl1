import game from '..';
import getRandom from '../random';

const seriesStartValue = getRandom(1, 30);
const seriesLength = 10;
const seriesMinStep = 2;
const seriesMaxStep = 15;

const greeting = 'What number is missing in the progression?';
const createGameData = () => {
  const emptyPosition = getRandom(0, seriesLength - 1);
  const seriesStep = getRandom(seriesMinStep, seriesMaxStep);
  const createProgression = (element, step, amountOfNumbers, unknownPosition) => {
    if (amountOfNumbers === 0) return '';
    if (unknownPosition === 0) return `.. ${createProgression(element + step, step, amountOfNumbers - 1, unknownPosition - 1)} `;
    return `${element} ${createProgression(element + step, step, amountOfNumbers - 1, unknownPosition - 1)} `;
    }
  const unknownElement = seriesStartValue + seriesStep * emptyPosition;
  return {
    question: createProgression(seriesStartValue, seriesStep, seriesLength, emptyPosition),
    answer: unknownElement.toString(),
  };
}

export default () => {
  game(greeting, createGameData);
};
