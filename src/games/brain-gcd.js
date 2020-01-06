import game from '..';
import random from '../random';

const gcd = (num1, num2) => {
  if (num1 === num2) return num1;
  return gcd(num2, Math.abs(num2 - num1));
};

const greeting = 'Find the greatest common divisor of given numbers.';
const quest = () => {
  const num1 = random(1, 100);
  const num2 = random(1, 100);
  return {
    question: `${num1} ${num2}`,
    answer: gcd(num1, num2).toString()
  };
};

export default () => {
  game(greeting, quest);
};
