// Given an array numbers, filter out even numbers, square each remaining number, and then calculate the sum of all squared numbers using map, filter, and reduce methods.

// Input: arr = [1, 2, 3, 4, 5, 6]

// Output: 56

// Explaination:2^2 + 4^2 + 6^2  = 56


function sumOfSquaredEvens(numbers) {
    return numbers
        .filter(num => num % 2 === 0)        // Filter out even numbers
        .map(num => num * num)               // Square each remaining number
        .reduce((acc, curr) => acc + curr, 0); // Calculate the sum of squared numbers
}
const numbers = [1, 2, 3, 4, 5, 6];
console.log(sumOfSquaredEvens(numbers));