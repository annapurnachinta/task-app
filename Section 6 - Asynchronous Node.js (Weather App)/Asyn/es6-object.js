// object property shorthand

const name = "anna"
const useAge = 27

const user = {
    name,
    age: useAge,
    location: 'Hyderabad'
}

console.log(user);

// Object destructuring

const product = {
    label: 'book label',
    price: 2,
    stock: 12,
    saleProce: undefined
}

const {label, stock, price:rating} = product
console.log(label);
console.log(stock);
console.log(rating);

const transtraction = (type, {label, stock}) => {
    console.log(type, label, stock);
}

transtraction('order', product)