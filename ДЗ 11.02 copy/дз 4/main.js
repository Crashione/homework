function square(x, y) {
    if (!y) {
        return x * x;
    } else {
        return x * y;
    }
}

console.log(square(6))
console.log(square(2, 6))
