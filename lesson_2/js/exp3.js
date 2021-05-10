"use strict";

/**
 * 
 * @returns Возвращает: 1. a - b, если чила положительные 2. a * b, если числа отрицательные 3. a + b, при разных знаках
 */

function exp3() {
    let a = prompt("Введите 1-ое число: ");
    while (isNaN(+a) || a === null || a === "") {
        a = prompt("Нужно ввести число! Введите 1-ое число: ");
    }
    a = +a;
    let b = prompt("Введите 2-ое число: ");
    while (isNaN(+b) || b === null || b === "") {
        b = prompt("Нужно ввести число! Введите 2-ое число: ");
    }
    b = +b;

    if (a >= 0 && b >= 0) {
        if (a > b) { // Мне кажется лучше, чтобы выводилась положительная разница
            return a - b;
        } else return b - a;
    } else if (a < 0 && b < 0) {
        return a * b;
    } else return a + b;
}

console.log(exp3());