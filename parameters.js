// default rest spread 

function Sum(a,b){
    //block of code
    return a+b;
}
const result = Sum(2);
console.log(result);


// spread syntax
function multiply(a,b){
    return a*b;
}
const arr = [2,3];
const mul= multiply(...arr);
console.log(mul);
const arr1=[1,2,3,4,5];
const obj = {...arr1};
console.log(obj);

// rest parameter
function sumOfAllNumbers(...args){
    let sum =0;

    for (let value of args) {
        sum += value;
    }
    return sum;
}
const sum = sumOfAllNumbers(1,2,3,4,5);
console.log(sum);

