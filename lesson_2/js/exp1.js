"use strict";
// Со мной воевал браузер, я не понял как создать не глобальные переменные без функций, поэтому все завернул в функции :)
function exp1() {
    // Пример 1.
     let a = 1,
          b = 1,
          c,
          d; // Объявили переменные
     c = ++a; // Переменная a была изначально 1, сначала сработает операция инкремента, затем операция присваивания, поэтому результат будет 2
     alert(c);

     // Пример 2.

     d = b++; // Переменная b была 1, сначала сработает операция присваивания, затем уже операция инкремента, поэтому результат будет 1
     alert(d);

     // Пример 3.

     c = 2 + ++a; // Перменная a = 2, после чего происходит операция инкремента a = 3, затем операция сложения и присваивания, ответ 5
     alert(c);

     // Пример 4

     d = 2 + b++; // Переменная b = 2, после чего происходит операция сложения и присваивания, а потом уже инкремент, поэтому ответ 4
     alert(d);

     alert(a);
     alert(b);
}

exp1();
