import game from '..';
import random from '../random';

const even = (num) => num % 2 === 0;

const greeting = 'Answer "yes" if the number is even, otherwise answer "no"';
const play = () => {
    const question = random(1, 100);
    const answer = even(question) ? 'yes' : 'no';
    return { question, answer };
  };


export default () => {
  game(greeting, play);
};
