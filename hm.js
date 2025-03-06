// const toUpperCase = (str) => str.toUpperCase();
// const removeSpace = (str) => {
//     const res = str.replaceAll(" ", "");
//     return res;
// }
// const strLength = (str) => str.length;

// const myFunc = (functions, input) => {
//     return functions.reduce((acc, fn) =>{
//         return fn(acc);
//     }, input);
// }
// console.log(myFunc([toUpperCase, removeSpace, strLength], "hello world"));




//? 2
// const powTwo = (arr) => arr.map((el) => el ** 2); 

// const sumOfNums = (arr) => arr.reduce((curr, el) => curr + el, 0);

// const sqrt = (num) => Math.sqrt(num); 

// const myFunc = (functions, input) => {
//     return functions.reduce((curr, fn) => fn(curr), input);
// }

// console.log(myFunc([powTwo, sumOfNums, sqrt], [2, 4, 6, 8])); 





//?3
// const add5Years = (obj) => {
//     obj.age+=5;
//     return obj
// }

// const salary = (obj) => {
//     obj.salary*=1.1;
//     return obj
// }

// const toString = (obj) => `${obj.name}: ${obj.age}, Salary: ${obj.salary}`;

// const myfunc = (functions, input) =>{
//     return functions.reduce((curr, fn)=>{
//         return fn(curr);
//     }, input)
// }
// console.log(myfunc([add5Years, salary, toString], {name: "John", age: 25, salary: 5000}))




//?4
// const extractLetters = (text) => text.replace(/\d/g, '');

// const extractNumbers = (text) => text.match(/\d/g).map(Number);

// const sumNumbers = (numbers) => numbers.reduce((acc, num) => acc + num, 0);

// const pipe = (data, ...funcs) => funcs.reduce((value, func) => func(value), data);

// const text = "a1b2c3d4e5";

// const sumOfNumbers = pipe(text, extractNumbers, sumNumbers);
// console.log("Sum of numbers:", sumOfNumbers);



//? 5
// const removeDublicates = (arr) => [...new Set(arr)];

// const selectOdds = (arr) => arr.filter(el => el%2==1);

// const findMaxNum = (arr) => Math.max(...arr);

// const mypipe = (func, input) => func.reduce((value, func) => func(value), input);

// console.log(mypipe([removeDublicates, selectOdds, findMaxNum], [1, 2, 2, 3, 4, 4, 5]));


//? 6
// const multByTwo = (arr) => arr.map((el) => el*=2);

// const getSum = (arr) => arr.reduce((acc, el)=> acc+=el, 0);

// const powOfTwo = (num) => num**2;

// const mypipe = (funcs, input) => funcs.reduce((acc, fn) => fn(acc), input);

// console.log(mypipe([multByTwo, getSum, powOfTwo], [1, 2, 3, 4, 5]))


//? Curry
const currySum = (a) => (b) => b !== undefined ? currySum(a + b) : a;

console.log(currySum(1)(2)(3)(4)()); 
console.log(currySum(5)(10)(15)());  

