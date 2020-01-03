import game from '..';
import random from '../random';
import gcd from '../gcd';

export default () => {
  const greeting = 'Find the greatest common divisor of given numbers.';
  const quest = () => {
    const num1 = random(1, 100);
    const num2 = random(1, 100);
    const [bigNum, smallNum] = num1 >= num2 ? [num1, num2] : [num2, num1];
    return {
      question: `${num1} ${num2}`,
      answer: `${gcd(bigNum, smallNum)}`,
    };
  };
  game(greeting, quest);
};
