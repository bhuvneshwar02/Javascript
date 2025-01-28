// find -- returns first element if array which satisfies condition

const arr =[1,2,3,7,45,90];

// find any even no
const evenNumber =arr.find(element => element % 2==0);
console.log(evenNumber);

// findLast 

const lastEvenNumber = arr.findLast(element => element%2==0);
console.log(lastEvenNumber);

// find index

const lastEvenIndex = arr.findLast(element => element%2==0);
console.log(lastEvenIndex);