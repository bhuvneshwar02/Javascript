// Create a function named findNegative that finds the first negative number in an array using Array find(). If negative number exists, it should print -1 else print all the elements of the array.

function findNegative(arr){
    const negativeNumber = arr.find(num => num < 0 );
    if(negativeNumber!== undefined){
        return -1;
    }
    else{
        console.log(...arr);
    }
}
const Array = [1,2,3,4,-5];
console.log(findNegative(Array));