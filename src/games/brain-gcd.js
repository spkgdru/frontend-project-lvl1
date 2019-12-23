#!/usr/bin/env node

import game from '..';

const greeting = 'Find the greatest common divisor of given numbers.';

const quest = () => {
  const num1 = Math.floor(Math.random() * 100);
  const num2 = Math.floor(Math.random() * 100);
  const [bigNum, smallNum] = num1 >= num2 ? [num1, num2] : [num2, num1];
  const gcd = (big, small) => {
    if (big % small === 0) return small;
    return gcd(small, big % small);
  };
  return {
    question: `${num1} ${num2}`,
    answer: `${gcd(bigNum, smallNum)}`,
  };
};

game(greeting, quest);
