const item = {
    price: 1000,
    discount: 20
}

item.finalPrice = item.price - (item.price * item.discount / 100)

console.log(item)