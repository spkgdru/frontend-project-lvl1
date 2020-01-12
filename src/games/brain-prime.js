import game from '..';
import getRandom from '../random';

const minNumber = 1;
const maxNumber = 3000;

const isPrime = (num) => {
  const check = (div) => {
    if (div === 1) return true;
    return num % div === 0 ? false : check(div - 1);
  };
  return check(Math.floor(Math.sqrt(num)));
};

const greeting = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const createGameData = () => {
  const question = getRandom(minNumber, maxNumber);
  const answer = isPrime(question) ? 'yes' : 'no';
  return { question, answer };
};

export default () => {
  game(greeting, createGameData);
};
