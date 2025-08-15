const products = [
    {name: 'laptop', price:3200, brand: 'lenevo', color: 'silver'},
    {name: 'Phone', price:1800, brand: 'samsum', color: 'black'},
    {name: 'watch', price:1000, brand: 'casino', color: 'gray'},
    {name: 'glass', price:250, brand: 'luibiton', color: 'red_black'},
   
];

const brands = products.map(product => product.brand);
console.log(brands);

const prices = products.map(product =>product.price);
console.log(prices);

products.forEach(product => console.log(product.color))

//filter
const cheap = products.filter(product => product.price <= 500);
console.log(cheap)

