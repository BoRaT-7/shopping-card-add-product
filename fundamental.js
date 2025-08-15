// how to declare a variable using let and const
const fatername = 'mostofa';
let season = 'rainy';
season = 'winter';

//  6 basic conditions >,<, ===, !==, <=, >=

// es6 
 const numbers = [89,35,98,12];
 const  student = {
    name: 'abid khan',
    age: 25,
    movies:['king', 'dhakar mastan']
 };

 const about = `My Name is ${student.name} age of  ${student.age} has number ${numbers[3]}
  also like movies ${student.movies}`;

 console.log(about)

 // 2.arrow function 
 const getfiftyfive = () => 55;
 const addsixtyfive = num => num +65;
 const isEven = x => x %2 ==0;
 const  addthree = (x,y,z) => x+y+z;
 const doMath = (num1, num2) => {
    const sum = num1 +num2;
    return sum;
 }
 const newNumbers = numbers;
 numbers.push(99);
 console.log(newNumbers);
