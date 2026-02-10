let sum = 0;
let rangeStart = +prompt('Введите 1 число диапозона');
let rangeEnd = +prompt('Введите 2 число диапозона');
for ( rangeStart; rangeStart <= rangeEnd; rangeStart++) {
    sum = sum + rangeStart;
}
alert('Сумма диапозона чисел = ' + sum);