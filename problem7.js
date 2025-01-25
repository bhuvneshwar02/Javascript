// define the anonymous function expression 
     // log the message with a prefix
//define the named function expression

// define the anonymous function expression 
const printMessage1 = function(message){
console.log(`anonymous function says: ${message}`);
};

//define the named function expression
const printMessage2 = function printMessage (message) {
    console.log(`named function says: ${message}`);
};

printMessage1("Hello, World!");
printMessage2("Welcome to JavaScript!");