#!/usr/bin/env node

import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
console.log('Answer "yes" if the number is even, otherwise answer "no"\n');

const userName = readlineSync.question('May I have your name? ');
console.log(`Hello ${userName}!\n`);

const attempt = (result = 0) => {
  if (result === 3) {
    console.log(`Congratulations, ${userName}!`);
    return;
  }
  const num = Math.floor(Math.random() * 100);
  const even = num % 2 === 0 ? 'yes' : 'no';
  console.log(`Question: ${num}`);
  const answer = readlineSync.question('Your answer: ');
  if (answer === even) {
    console.log('Correct!');
    attempt(result + 1);
    return;
  }
  console.log(`'${answer}' is wrong answer ;(. Correct answer was '${even}'.
Let's try again, ${userName}!`);
};
attempt();
