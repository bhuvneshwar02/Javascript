// Write a JavaScript function manageNumbers(numbers) that takes an array of numbers (numbers) as input and performs the following tasks:

// Convert to String: Convert the array of numbers into a comma-separated string using toString().
// Join Strings: Join all elements in the array into a single string separated by a hyphen - using join().

 function manageNumbers(numbers){
    console.log('inital numbers:',numbers);
    

    //convert to string
    function convertToString() {
        const stringRepresentation = numbers.toString();
        console.log('String Representation:', stringRepresentation);
    }
     // join strings
     function joinStrings() {
        const joinedString = numbers.join('-');
        console.log('joined string:', joinedString);
     }
     convertToString();
     joinStrings();

    
 }
 const numbers = [1,2,3,4,5];
 manageNumbers(numbers);