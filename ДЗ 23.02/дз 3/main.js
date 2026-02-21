function maxNum(n) {
    if (n < 0) n = -n
    if (n < 10) return n
    let last = n % 10;
    let max = maxNum(Math.floor(n / 10))
    return last > max ? last : max
}




console.log(maxNum(9))
console.log(maxNum(12565))
console.log(maxNum(92351))
console.log(maxNum(-9432))