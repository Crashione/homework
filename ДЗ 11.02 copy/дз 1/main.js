function Boolean(x, y) {
    if (x < y) {
        return -1;   
    } else if (y < x) {
        return 1;
    } else {
        return 0;
    }    
}
console.log(Boolean(2, 3))
console.log(Boolean(3, 3))
console.log(Boolean(4, 3))