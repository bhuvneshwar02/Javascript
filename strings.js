// let firstName = "Bhuvi";
// console.log(typeof(firstName));

// let lastName = "Sharma";
// console.log(typeof(lastName));

//  let sentence = 'my name is "vishal" and my favouirtes color is "blue"';
//  console.log(sentence);

//  console.log(firstName.length);

//  //string as object

//  let fullName= new String ('Bhuvneshwar Sharma');
//  console.log(fullName);
//  console.log(typeof(fullName) );//obect


 //string methods

//  let text = 'hello john!! ' ;

//  console.log('length of string is',text.length);
//  //strings are immutable that original atring does change

//  const replaceString = text.replace('hello','hii');
//  console.log(text);
//  console.log(replaceString);

//  //split method 
//  const splitString = text.split(" ");
//  console.log(splitString);

//  let randomText = "anshika, internshala, color";
//  const randomStringSplit = randomText.split(",");
//     console.log(randomStringSplit);


//     //repeat (
//    // console.log(text.repeat(2));

//     //trim

//     const trimmedString = text.trim()
//     console.log(trimmedString.length);

//     const trimStart = text.trimStart();
//     console.log(trimStart);


//     //concat

//     let firstName= "bhuvi";
//     let lastName= " sharma";
//     const fullName = firstName.concat(lastName);
//     console.log(fullName);



let text= "hello john !!";

// charAt is only for  positive indexing
console.log(text.charAt(6));

// ascii value of character
console.log(text.charCodeAt(6));

//at can be used for negative indexing
console.log(text.at(6));

console.log(text[2]);
text[2]="y";  // not change any character of string 
console.log(text);

//slice method is used to extract the part of the string

text.slice(1,4);
console.log(text.slice(1,4));
console.log(text.slice(1,3));
console.log(text.slice(2)); // we can give negative indexing


// substinrg method is used to extract the part of the string

console.log(text.substring(1,4));
console.log(text.substring(-2)); // negative indexing is not allowed

// doing cases to upper and lower cases
console.log(text.toLowerCase());