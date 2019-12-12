import readlineSync from 'readline-sync';

export const dialog = () => {
const userName = readlineSync.question('May I have your name? ');
console.log('Hello ' + userName + '!');
return;
}
