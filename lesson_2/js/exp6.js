"use strict";

// Про switch потом увидел, так действительно было бы удобнее :)

function exp6() {
    let sum = prompt("Введите сумму: ");
    while (isNaN(+sum) || sum === null || sum === "") {
        sum = prompt("Это явно не сумма денег! Сколько нужно положить?");
    }

    let sumChar = sum.charAt(sum.length - 1);

    if (sumChar == 0 || sumChar == 5 || sumChar == 6 || sumChar == 7 || sumChar == 8 || sumChar == 9) {
        alert(`Ваша сумма в ${sum} рублей успешно зачислена.`);
    } else if (sumChar == 1) {
        alert(`Ваша сумма в ${sum} рубль успешно зачислена.`);
    } else if (sumChar == 2 || sumChar == 3 || sumChar == 4) {
        alert(`Ваша сумма в ${sum} рубля успешно зачислена.`);
    }
} 

exp6();