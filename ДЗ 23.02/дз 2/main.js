function nod(x,y) {
    if (y === 0) {
        return Math.abs(x);
    }
    return nod(y, x % y);
}

console.log(nod(2,5));
console.log(nod(0,5));
console.log(nod(2,0));
console.log(nod(66,22));