let a=10; // let is block scope
const x=80; // const is block scope
//const variables must be initialized during declaration 


x=78; // cannot reassign the value of const

{
    const y = 89;
    console.log(y); 
}
console.log(x);

