import game from '..';
import random from '../random';

const minNumber = 1;
const maxNumber = 100;

const calculateGcd = (num1, num2) => {
  if (num1 === num2) return num1;
  return calculateGcd(num2, Math.abs(num2 - num1));
};

const greeting = 'Find the greatest common divisor of given numbers.';
const createGameData = () => {
  const num1 = random(minNumber, maxNumber);
  const num2 = random(minNumber, maxNumber);
  return {
    question: `${num1} ${num2}`,
    answer: calculateGcd(num1, num2).toString()
  };
};

export default () => {
  game(greeting, createGameData);
};
