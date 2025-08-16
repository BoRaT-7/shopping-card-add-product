const student = {
    name:'Abid Borat',
    age:25,
    movies:['fatacasto', 'dulal boruya','diu mastan']
}

const studentJson =JSON.stringify(student);
console.log(student);
console.log(studentJson);
const  studentobj = JSON.parse(studentJson);
console.log(studentobj);


fetch ('ul')
  .then(res => res.json())
  .then(data => console.log(data));
  
const keys = Object.keys(student);
const values = Object.values(student);
console.log(keys);


const products = [
    {name: 'laptop', price:3200, brand: 'lenevo', color: 'silver'},
    {name: 'Phone', price:1800, brand: 'samsum', color: 'black'},
    {name: 'watch', price:1000, brand: 'casino', color: 'gray'},
    {name: 'glass', price:250, brand: 'luibiton', color: 'red_black'},
   
];


const newProduct ={name:'bike', price:10000,brand:'TVS'}

const newProducts = [...products, newProduct];
console.log(newProducts)
const remaning = products.filter(p => p.name !=='phone')