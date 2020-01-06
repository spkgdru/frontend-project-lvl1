import game from '..';
import random from '../random';

const prime = (num) => {
  const check = (div) => {
    if (div === 1) return true;
    return num % div === 0 ? false : check(div - 1);
  };
  return check(Math.floor(Math.sqrt(num)));
};

const greeting = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const quest = () => {
    const question = random(1, 3000);
    const answer = prime(question) ? 'yes' : 'no';
    return { question, answer };
  };

export default () => {
  game(greeting, quest);
};
