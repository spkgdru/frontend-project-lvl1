import game from '..';
import random from '../random';

export default () => {
  const greeting = 'What number is missing in the progression?';
  const quest = () => {
    const progressStartValue = random(1, 30);
    const progressStep = random(2, 15);
    const position = random(0, 9);
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
};
