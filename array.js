// let fruit1="mango";
// let fruit2="aaple";
// let fruit3="guava";

// //array lietrals
// const fruits = ["mango","aaple","guava"];
// // indexes --- access any element inside an array

// // array follows zero  based indexing 

// console.log(fruits[0]); //mango
// console.log(fruit[1]); //aaple
// console.log(fruit[2]); //guava


// fruits[0]='grapes';
// console.log(fruits[0]);

// //using new keyboard
// const numbers = new Array(1,2,3,4,5);
// console.log('number',numbers);

// console.log("Type of numbers array", typeof(numbers));

// array methods in js 
// const arr = [24]
// console.log(arr);
// const numbers = new Array(24); //creates an array og length 240
// console.log(numbers);

// const colors = ["green","blue",'black'];
// console.log(colors.length);
// console.log(arr[arr.length-1]) // to get the last element of the array

// // toString
// console.log(arr.toString());

// //join -- using operators 

// console.log(colors.join(" %"));


// some more array methods 

// at()

const numbers = [ 4,5,6,7,3,1];
console.log(numbers[1]);
console.log(numbers.at(1));

// pop method --- it removes last emelent  from an array

const colors = ['red' , 'blue' , 'pink' ];
const result = colors.pop();
colors.pop();
console.log(result);
console.log(colors);

// push is used to push element at end of array
 colors.push("green");
 console.log(colors);

 colors.push("black");
 console.log(colors);


 // shifting

 // shift() --- removes element from begining if an array
 // return element which has been removed 

 const fruits = ['mangi', 'apple' , 'grapes' ];
 console.log(fruits);

 console.log(fruits);

 // unshift( -- adds element at begining of an arrsy 
 // return new length of an array
const val =
 fruits.unshift(1);
 console.log(val);
 console.log(fruits);
