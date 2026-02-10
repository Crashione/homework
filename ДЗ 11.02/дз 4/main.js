let num = +prompt('Введите число')
function counting(number) {
    let count = 0;
    for (let n = number; n > 0; n = Math.floor(n / 10)) {
        count++;
    }
    return count;
}
if (!num) {
    alert('Введено некорректное число');
} else {
    alert('Количество чисел = ' + counting(num));
}
