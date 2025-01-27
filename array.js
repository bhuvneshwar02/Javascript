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

// const numbers = [ 4,5,6,7,3,1];
// console.log(numbers[1]);
// console.log(numbers.at(1));

// // pop method --- it removes last emelent  from an array
// // push is used to push element at end of array

// const colors = ['red' , 'blue' , 'pink' ];
// const result = colors.pop();
// colors.pop();
// console.log(result);
// console.log(colors);

// // push is used to push element at end of array
//  colors.push("green");
//  console.log(colors);

//  colors.push("black");
//  console.log(colors);


//  // shifting

//  // shift() --- removes element from begining if an array
//  // return element which has been removed 

//  const fruits = ['mangi', 'apple' , 'grapes' ];
//  console.log(fruits);

//  console.log(fruits);

//  // unshift( -- adds element at begining of an arrsy 
//  // return new length of an array
// const val =
//  fruits.unshift(1);
//  console.log(val);
//  console.log(fruits);


//  // delete method 

//  const arr = ['anshika' , 'ankit ', 'naina'];
//  delete arr[1];
//  console.log[arr];

//  // splice
 
//  const a = [1,2,3,4,5,6];
//  //a.splice(0,2);  // modifies the original array 

// //  a.splice(2,1);

//  a.splice(2,1,4,6,7,9);
//  console.log(a);
//  // toSpliced
// const newArr = a.toSpliced(2,0,4,6 )



//  slice 
// const b =[3,4,5,6,7];
// b.slice(1);
// const newArray =b.slice(1);
// console.log(newArray);
// console.log(b);



// concatenation --- join two arrays 
// concat

const arr1 = [1,2,3,4,5];
const arr2 = [ 6,7,8,9,10];
const arr3= [11,12,13,14,15,16];
const newArray = arr.concat(arr2,arr3);

console.log(arr1);
console.log(newArray);


//flat method

const a = [[1,2],[3,4],[5,6]];
const flattenedArray = a.flat();
console.log('flattened array is ', flattenedArray);
console.log(a);

// for array searching elements 

// indexOf
const colors = ['red', 'blue', 'green'];
const index = colors.indexOf('green');
console.log('index',index);

// lastIndexOf
const color = ['red', 'blue', 'green','pink'];
console.log=color.lastIndexOf('red');

//includes 
console.log(color.includes('purple'));



// array sorting method 
const fruits = ['apple','mango','banana'];
fruits.sort();

console.log(fruits);

// toSorted --- new array gets created and original array is not effected

const sortedArray = fruits.toSorted();
console.log(sortedArray);
console.log(fruits);


//reverse method
fruits.reverse();
console.log(fruits);

//toReversed -- new array\
const reversedArray= fruits.toReverse();
console.log(reversedArray);
console.log(fruits);

// another array
const cars = ['maruti', ' xuv' ,'vitara'];
cars.sort();
cars.reverse();
console.log(cars);


// in case of numerical sorting your output wi be not correct
const arr = ['34','112','45'];
arr.sort();
console.log(arr);

// compaare funtion
arr.sort(function(a,b) {return a-b} ); // for asscending order return b-a for decending order
