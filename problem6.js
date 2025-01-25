// x =6;
// function foo(){
//     console.log(x);
//     const x =5;
// }
// foo(); // reference error  becuase cannot access x before initialization



// x=5;
// function outer (){
//     let x=10;
//     function inner (){
//         console.log(x);
//     }
//     inner();
// }
// outer();/



// function greet (name) {
//     console.log(`hello, ${name}!`);
// }
// greet("alice");
// greet("bob");



// let x =5;
// function increment(num){
//     num +=1;
//     return num;
// }
// x=increment(x);
// console.log(x);



// function sum(a,b) {
//     return a+b ;
// }
// console.log(sum(2,3));  //5
// console.log(sum(4));  // Nan
// console.log(sum(6,2,1));  //8 here 1 is ignored



// let counter =0;
// function increment() {
//     counter +=1;
// }
// increment();
// increment();
// increment();
// console.log(counter);