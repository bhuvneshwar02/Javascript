//  it is an higher order function used to transform content of sn array
const arr =[1,2,3,4,5];

// square --- [1,4,9,16,25]

function square(x) {
    return x*x;

}
const squareArray= arr.map(square);
console.log(squareArray);

// double ---

function double(x){
    return 2*x;
}
const doubleArray= arr.map(double);
console.log(doubleArray);

//arr.map(x=> 2*x);


const users =[{
    firstName: 'rohot',
    lastName: 'gupta',
    age: 45
},{
    firstName: 'ankit',
    lastName: 'sharma',
    age: '34'
}]
// print only first name of the user

const newArray = users.map(user=> user.firstName);
console.log(newArray);