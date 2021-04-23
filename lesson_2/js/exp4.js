"use strict"

function exp4() {
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

    let arefmNumber = +prompt("1. Сложение\n2. Вычитание\n3. Умножение\n4. Деление\nКакое арифмитическое действие вы хотите выполнить?");
    while(arefmNumber < 0 && arefmNumber > 4) {
        alert("Введите число от 1 до 4, в соотвествии с нужной операцией.");
        arefmNumber = +prompt("1. Сложение\n2. Вычитание\n3. Умножение\n4. Деление\nКакое арифмитическое действие вы хотите выполнить?");
    }
    switch (arefmNumber) {
        case 1:
            return a + b;
        case 2:
            let aOrB = +prompt("Если нужно вычесть 1-ое число из 2-го, тогда нажмите 1. Если же 2-ое из 1-го, тогда нажмите 2.")
            if (aOrB == 1) {
                return b - a;
            } else if (aOrB == 2) {
                return a - b;
            }
            alert("Вы ввели неверное значение, пройдите по программе заного.")
            break;
        case 3:
            return a * b;
        case 4:
            let aOrBMultiplication = +prompt("Если нужно поделить 1-ое число на 2-ое, тогда нажмите 1. Если же 2-ое на 1-ое, тогда нажмите 2.")
            if (aOrBMultiplication == 1) {
                return a / b;
            } else if (aOrBMultiplication == 2) {
                return b / a;
            }
            alert("Вы ввели неверное значение, пройдите по программе заного.")
            break;
    }
}

console.log(exp4());