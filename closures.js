 // a functionn along with its lexical environment isknows as closuresx
 
 function x(){
    var a=10;;

    function y(){
        console.log(a);
    }
    y();
}
x(); 
