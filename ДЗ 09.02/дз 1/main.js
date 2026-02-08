let age = +prompt('Введите свой возраст')
if (age >= 0 && age < 12) {
    alert('Вы ребенок')
} else if (age >= 12 && age < 18) {
    alert('Вы подросток')
} else if (age >= 18 && age < 60) {
    alert('Вы взрослый')
} else if (age >= 60 && age < 110) {
    alert('Вы пенсионер')
} else {
    alert ('Введен некорректный возраст')
}