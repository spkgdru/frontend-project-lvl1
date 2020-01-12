import startGame from '..';
import getRandom from '../random';

const minNumber = 1;
const maxNumber = 100;
const operations = ['+', '*'];

const greeting = 'What is the result of the expression?';
const createGameData = () => {
  const num1 = getRandom(minNumber, maxNumber);
  const num2 = getRandom(minNumber, maxNumber);
  const operation = operations[getRandom(0, operations.length - 1)];
  switch (operation) {
    case '+': 
      return {
        question: `${num1} + ${num2}`,
        answer: num1 + num2
      };
    case '*': 
      return {
        question: `${num1} * ${num2}`,
        answer: num1 * num2
      };
  }
};

export default () => {
  startGame(greeting, createGameData);
};
  
