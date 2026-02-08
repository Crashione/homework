let number = +prompt('Введите трехзначное число')
if (!number || number < 100 || number > 999) {
    alert('Введено некорректное число')
} else {
    let str = String(number)
    if (str[0] === str[1] || str[0] === str[2] || str[1] === str[2]){
        alert('В числе есть одинаковые цифры')
    } else {
        alert('Все цифры разные')
    }
}