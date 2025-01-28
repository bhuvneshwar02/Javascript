const numbers = [1,2,3,4,5];
const sum = numbers.filter((num) => num % 2 ===0).reduce((acc,curr)=> acc+curr , 0 );
console.log(sum);
