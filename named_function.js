// function expression
var a = function (){

}

// named function expression
var a = function abc(){
    console.log("abc is a function");
    console.log(abc);
}
a();
//abc;



//parameters vs arguments

function sum(num1, num2){
    return num1+num2;
}

const result =sum(1,2);