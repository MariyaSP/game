'use strict';

const isNumber = function (num) {
    return !isNaN(parseFloat(num)) && isFinite(num);
}

function game() {
    let a;
    return function guess(number) {
        console.log(number);
        const numberUser = prompt("Угадай число от 1 до 100");
        if (!numberUser) {
            alert("Игра окончена");
        } else if (!isNumber(numberUser)) {
            alert("Введи число");
            guess();
        } else if (numberUser == number) { alert("Поздравляю, вы угадали!") }
        else if (numberUser > number) {
            alert("Загаданное число меньше");
            guess();
        } else if (numberUser < number) {
            alert("Загаданное число больше");
            a = number;
            guess(a);
        }
    }
}
const guessNumber = game();

guessNumber(Math.floor(100 * Math.random()));