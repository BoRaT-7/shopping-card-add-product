function boxify(num1, num2) {
    const nums = [num1, num2];
    return nums;
}

const [first, second] = boxify(25, 65);

console.log(first);   // 25
console.log(second);  // 65
console.log(boxify(25, 65)); // [25, 65]
