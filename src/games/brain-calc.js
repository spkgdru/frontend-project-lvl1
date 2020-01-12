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
<<<<<<< HEAD
    case '+':
      return {
        question: `${num1} + ${num2}`,
        answer: (num1 + num2).toString(),
      };
    case '*':
      return {
=======
    case '*': 
      const result = {
>>>>>>> f44f3b67398bf869a94dfd34ec6a2f650bdbd59d
        question: `${num1} * ${num2}`,
        answer: (num1 * num2).toString(),
      };
      break;
    default:
<<<<<<< HEAD
  }
=======
      const result = {
        question: `${num1} + ${num2}`,
        answer: (num1 + num2).toString()
      };
  }
  return result;
>>>>>>> f44f3b67398bf869a94dfd34ec6a2f650bdbd59d
};

export default () => {
  startGame(greeting, createGameData);
};
