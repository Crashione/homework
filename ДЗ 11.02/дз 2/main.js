let numFirst = +prompt('Введите 1 число');
let numTwo = +prompt('Введите 2 число');
function gcd(a, b) {  
    a = Math.abs(a);  
    b = Math.abs(b);  
    while (b !== 0) {  
        let temp = b;  
        b = a % b;  
        a = temp;  
    }  
    return a;  
}
alert('Наибольший общий делитель = ' + gcd(numFirst, numTwo)) 