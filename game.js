'use strict';

const isNumber = function (num) {
    return !isNaN(parseFloat(num)) && isFinite(num);
}

function game() {
    let number = Math.floor(100 * Math.random());
    return function guess(i) {
        console.log(number + " загаданное");
        console.log("номер " + i);
        const numberUser = prompt("Угадай число от 1 до 100");
        if (!numberUser) {
            alert("Игра окончена");
        } else if (!isNumber(numberUser)) {
            alert("Введи число");
            guess(i);
        } else {

            i--;
            if (i) {
                if (numberUser == number) { alert("Поздравляю, вы угадали!") }
                else if (numberUser > number) {
                    alert("Загаданное число меньше, осталось " + i + " попытки");
                    guess(i);
                } else if (numberUser < number) {
                    alert("Загаданное число больше, осталось " + i + " попытки");
                    guess(i);
                }
            }
            else
                if (confirm("Попытки закончились, хотите сыграть еще?")) {

                    number = Math.floor(100 * Math.random());
                    guess(10);
                }
        }
    }
}

const guessNumber = game();

guessNumber(10);