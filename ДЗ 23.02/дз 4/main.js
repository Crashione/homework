function simple(n, x = 2) {
    if (n <= 1) return 'Число не простое';
    if (n === 2) return 'Число простое';
    if (n % 2 === 0) return 'Число не простое';
    if (x * x > n) return 'Число простое';
    return simple(n, x + 1)
}

console.log(simple(7));
console.log(simple(12));
console.log(simple(23));
console.log(simple(2));
console.log(simple(1));