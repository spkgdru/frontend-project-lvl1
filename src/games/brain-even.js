import game from '..';
import random from '../random';

const minNumber = 1;
const maxNUmber = 100;

const isEven = (num) => num % 2 === 0;

const greeting = 'Answer "yes" if the number is even, otherwise answer "no"';
const createGameData = () => {
    const question = random(minNumber, maxNumber);
    const answer = isEven(question) ? 'yes' : 'no';
    return { question, answer };
  };


export default () => {
  game(greeting, createGameData);
};
