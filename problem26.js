// const products = [

//     { name: "Apple", price: 0.5, inStock: true }, { name: "Banana", price: 0.25, inStock: false }, { name: "Orange", price: 8.75, inStock: true }];

// const availableProducts = products.filter((product) => product.inStock); 
// console.log(availableProducts);



// const arr = [1,2,3,4,5];
// const sum =arr.reduce((acc,curr) => acc+curr,10);
// console.log(sum);


// const numbers = [1,2,3,4];
// function sum(...args) {
//     return args.reduce((acc,num) => acc+num, 0);

// }
// const result = sum(...numbers);
// console.log(result);\



// const numbers = [1,2,3,4,5];
// const [first, ...rest] = numbers;
// console.log(first, rest);


// const arr = [1,2,3,4,5];
// const sumOfSquares = arr.reduce((acc,curr) => acc+curr **2,0)
// console.log(sumOfSquares);



// const arr= ['arr','aaa','ksks'];
// const firstFruit = arr.shift();
// console.log(arr, firstFruit);


// const greeting = (name) => `hello, ${name}!`;
// console.log(greeting('alice'));


// function add(a,b) {
//     return a+b;
// }
// function multiply (a,b){
//     return a*b;
// }
// const result = multiply(add(2,3), 4);
// console.log(result);


const arr = ['apple','banana', 'cherry'];
for(const fruit of arr){
    console.log(fruit);
}