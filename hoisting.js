// able to acces variable before even declaring
console.log(a);
var a = 10;
console.log(a);


// funtion hoisting \
// funtion decleration
greetings();
function greetings (){
    console.log('Good Morning');
}
// funtion expression
var greetings = () => {
    console.log('Good Morning');
}