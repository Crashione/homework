let number = +prompt('Введите число')
if (number <= 0 && !number) {
    alert('Введите корректное число число');
} else {
    let i = 1;
    while (i <= number) {
        if (number % i === 0) { 
            alert('Делитель: ' + i); 
        }
        i++; 
    }
}