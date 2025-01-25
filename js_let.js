// ES6 -- EcmaScript 2015
// let is block scoped
// var is function scoped or global scoped

var a = 100; // global scoped

let x = 34; // block scoped that means these only declared under a particular box and cannot be redeclared outside the box
{
    let z=67;
    console.log(z);
}
console.log(a);
// let keyword was introduced in ES6 
// let variables are block scoped
// let variables cannot be redeclared