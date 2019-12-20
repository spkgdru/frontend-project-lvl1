#!/usr/bin/env node

import game from '..';

const greeting = 'What is the result of the expression?';

const quest = () => {
  const num1 = Math.floor(Math.random() * 100);
  const num2 = Math.floor(Math.random() * 100);
  const sign = Math.floor(Math.random() * 2);
  const question = {
    0: `${num1}+${num2}`,
    1: `${num1}*${num2}`,
  };
  const answer = {
    0: num1 + num2,
    1: num1 * num2,
  };
  return {
    question: question[sign],
    answer: `${answer[sign]}`,
  };
};

game(greeting, quest);
