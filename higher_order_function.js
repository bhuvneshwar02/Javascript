function x() {
    console.log("this is function x");
}

function y(x) {
    x();
}

y(x);

// y --- higher order function (function that takes another function as a parameter)
// x --- callback function (function which is passed as parameter to another function)
// or higher order function takes one or more functions as arguments or return a new function as their result