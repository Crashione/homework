let age = +prompt('Введите год')
if (!age){
        alert ('Введен не корректный год')
    } else if (age % 400 === 0 || age % 4 === 0 && age % 100 !== 0){
        alert('Год високосный')
    } else {
        alert('Год не високосный')
    }