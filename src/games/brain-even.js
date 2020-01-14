import game from '..';
import getRandom from '../random';

const minNumber = 1;
const maxNumber = 100;

const isEven = (num) => num % 2 === 0;

const greeting = 'Answer "yes" if the number is even, otherwise answer "no"';
const createGameData = () => {
  const question = getRandom(minNumber, maxNumber);
  const answer = isEven(question) ? 'yes' : 'no';
  return { question, answer };
};

export default () => {
  game(greeting, createGameData);
};
