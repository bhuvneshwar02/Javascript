// it is an higher order function

const arr = [1, 2, 3, 4, 5];


// sum will = 15




let sum=0;

for (let i = 0; i < arr.length; i++) {
     sum= sum + arr[i];}
     console.log(sum)


// using the reduce method 

const result = arr.reduce(function (acc, curr) {
    acc = acc + curr;
    return acc;
}, 0)           // accumulator and cuureent elemnt 
console.log(result);




// find the max elemt in an array
let max = arr[0];

for (let i = 0; i < arr.length; i++) {
    if(arr[i]> max){
        max = arr[i]
    }
}
console.log(max);

// using reduce method

const output=arr.reduce(function(acc, curr){
    if (curr>acc){
        acc=curr;
    }
    return max;
},0);
console.log(output);