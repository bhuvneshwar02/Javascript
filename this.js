//  console.log(this); // global object ------> window

"use strict"

function abc(){
    console.log("abc");
    console.log(this);
}

abc();
// window.abc();

// in function, this keyword points to global objects 
// but in strict mode this keyword becomes undefined


const obj ={
    x: 10,
    y: function(){
        console.log(this);
    }
}
obj.y();