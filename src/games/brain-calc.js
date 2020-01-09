import game from '..';
import random from '../random';

const operations = [
  {question: `${a}+${b}`, answer: (a + b).toString()},
  {question: `${a}*${b}`, answer: (a * b).toString()}
  ];

const randomOperation = (a, b) => {
  const ourCase = random(0, operations.length -1);
  return {
    question: operations[ourCase].question,
    answer: operations[ourCase].answer
  };
}

const greeting = 'What is the result of the expression?';
const play = () => {
  const num1 = random(1, 100);
  const num2 = random(1, 100);
  return randomOperation(num1, num2);
};

export default () => {
  game(greeting, play);
};
  
