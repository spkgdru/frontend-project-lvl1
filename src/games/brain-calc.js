import startGame from '..';
import getRandom from '../random';

const minNumber = 1;
const maxNumber = 100;
const operations = ['+', '-', '*'];

const greeting = 'What is the result of the expression?';
const createGameData = () => {
  const num1 = getRandom(minNumber, maxNumber);
  const num2 = getRandom(minNumber, maxNumber);
  const operation = operations[getRandom(0, operations.length - 1)];
  const question = num1.toString() + ' ' + operation + ' ' + num2.toString();
  const result = { question };
  switch (operation) {
    case '+':
      result.answer = (num1 + num2).toString();
      break;
    case '-':
      result.answer = (num1 - num2).toString();
      break;
    default:
      result.answer = (num1 * num2).toString();
  }
  return result;
};

export default () => {
  startGame(greeting, createGameData);
};
