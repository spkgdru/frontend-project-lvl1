import startGame from '..';
import getRandomNum from '../random';

const [randomNumberMin, randomNumberMax] = [1, 100];
const operations = ['+', '*'];
const greeting = 'What is the result of the expression?';

const createGameData = () => {
  const randomNumber1 = getRandomNum(randomNumberMin, randomNumberMax);
  const randomNumber2 = getRandomNum(randomNumberMin, randomNumberMax);
  const randomOperation = getRandomNum(0, operation.length - 1);
  switch (randomOperation) {
    case 0: 
      return {
        question: `${randomNumber1} + ${randomNumber2}`,
        answer: randomNumber1 + randomNumber2
      };
    case 1: 
      return {
        question: `${randomNumber1} * ${randomNumber2}`,
        answer: randomNumber1 * randomNumber2
      };
  }
};

export default () => {
  startGame(greeting, createGameData);
};
  
