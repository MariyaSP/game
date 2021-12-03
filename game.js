'use strict';

const isNumber = function (num) {
    return !isNaN(parseFloat(num)) && isFinite(num);
}

function game() {
    const number = Math.floor(100 * Math.random());
    console.log(number);
    return function guess() {
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
            guess();
        }
    }
}

const guessNumber = game();

guessNumber();