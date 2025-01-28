// Implement the printArrayElements function that takes an array as input. Use the following loops to perform specific tasks:

// 1. Using for-of : Print each element of the array.

// 2. Using for-in : Print each element of the array along with its index.

// 3. Using basic for : Compute and print the sum of all elements in the a


function printArrayElements(array) {
    console.log("using for-of loop:");
    for (const element of array) {
        console.log(element);
    }
    console.log("using for-in loop:");
    for(const index in array) {
        console.log("index",index,array[index]);
    }
    console.log("using basic for loop to compute sum:");
    let totalSum = 0;
    for(let i =0; i<array.length ; i++) {
        totalSum+=array[i];
    };
    console.log("total sum:",totalSum);
}
const numbers = [1,2,3,4,5];
printArrayElements(numbers);