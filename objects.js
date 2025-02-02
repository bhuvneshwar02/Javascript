// object Literal
const user = {
    names: ['john', 'bob'],
    age: 23,
    printDetails: function(){
        console.log('Details of User');
    },
    greet: function (){
        console.log('greetings!!');
    }
};
console.log(user.names);
console.log(user.age);
user.greet();
user.printDetails();


// bracket notation

console.log(user['age']);
function logProperty(propertyName) {
      console.log(user[propertyName]);   //user['age']
}
logProperty(age); 


user["names"]["first"] = "Alice";
user.names.first="Alice_new";
console.log(user.names.first); 

user.age=15;
console.log(user.age);

user.hobbies = ["listenning music", "cooking"];
console.log(user.hobbies);
console.log(user);

user.farewell= function() {
    console.log("goodbye");
}

console.log(user);
user.farewell();