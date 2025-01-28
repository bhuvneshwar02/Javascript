// every 
// check every person in array is adult or not 

function checkAge (age){
    if(age<18) {
        console.log("persoon is an adult");
    } else {
        console.log("person is not adult");
    }
}
checkAge(19);

const ages =[32,23,45,72,111];
const isAdult=ages.every(age=> age >= 18);
console.log(isAdult);


// some --- even if one elemt in an array satisfies condition , it will return true 

// is anyone is a kid

const isKid = ages.some(age=> age > 18);
console.log("is Kid", isKid);
