import game from '..';
import random from '../random';

const operations = [
  {question: `${num1}+${num2}`, answer: num1 + num2},
  {question: `${num1}*${num2}`, answer: num1 & num2}
];

const randomOperation = (num1, num2) => {
  const case = random(0, operations.length -1);
  return {
    question: operations[case].
}

const greeting = 'What is the result of the expression?';
const quest = () => {
  const num1 = random(1, 100);
  const num2 = random(1, 100);
  const sign = random(1, amountOfOperations);
  const question = {
    1: `${num1}+${num2}`,
    2: `${num1}*${num2}`,
  };
  const answer = {
    1: num1 + num2,
    2: num1 * num2,
  };
  return {
    question: question[sign],
    answer: `${answer[sign]}`,
  };
};

export default () => {
  game(greeting, quest);
};
