"use strict"

function mathOperation(arg1, arg2, operation) {
    
    switch (operation) {
        case 1:
            return arg1 + arg2;
        case 2:
            let aOrB = +prompt("Если нужно вычесть 1-ое число из 2-го, тогда нажмите 1. Если же 2-ое из 1-го, тогда нажмите 2.")
            if (aOrB == 1) {
                return arg2 - arg1;
            } else if (aOrB == 2) {
                return arg1 - arg2;
            }
            alert("Вы ввели неверное значение, пройдите по программе заного.")
            break;
        case 3:
            return arg1 * arg2;
        case 4:
            let aOrBMultiplication = +prompt("Если нужно поделить 1-ое число на 2-ое, тогда нажмите 1. Если же 2-ое на 1-ое, тогда нажмите 2.")
            if (aOrBMultiplication == 1) {
                return arg1 / arg2;
            } else if (aOrBMultiplication == 2) {
                return arg2 / arg1;
            }
            alert("Вы ввели неверное значение, пройдите по программе заного.")
            break;
    }
}

console.log(mathOperation(2, 2, 2));