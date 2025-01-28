// filter --- filter out the contents from an array on some condition
// not modify original array 
// return new array

const arr = [2,3,5,6,76,7];

// even numbers

function even(num){
    return num %2 ==0;  // callback function

}
const filteredArray=arr.filter(even); // new array to be created 
console.log(filteredArray);
// result [2,6,76]


const newArray=arr.filter(num => num >5);
console.log(newArray);


 