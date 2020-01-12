import game from '..';
import getRandom from '../random';

const minNumber = 1;
const maxNumber = 100;

const calculateGcd = (num1, num2) => {
  if (num1 === num2) return num1;
  return calculateGcd(num2, Math.abs(num2 - num1));
};

const greeting = 'Find the greatest common divisor of given numbers.';
const createGameData = () => {
  const num1 = getRandom(minNumber, maxNumber);
  const num2 = getRandom(minNumber, maxNumber);
  return {
    question: `${num1} ${num2}`,
    answer: calculateGcd(num1, num2).toString(),
  };
};

export default () => {
  game(greeting, createGameData);
};
