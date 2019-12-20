#!/usr/bin/env node

import game from '..';

const greeting = 'Answer "yes" if the number is even, otherwise answer "no"';
const quest = () => {
  const question = Math.floor(Math.random() * 100);
  const answer = question % 2 === 0 ? 'yes' : 'no';
  return { question, answer };
};

game(greeting, quest);
