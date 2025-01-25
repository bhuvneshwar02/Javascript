// program to revese a srting 

function reverseString(str) {
    return str.split('').reverse().join('');
}

const reversed = reverseString("code");
console.log(reversed);


// write a simple funtion that returns a boolean ( ture or false) indicating whether or not a string is a palindrome
function isPalindrome(str) {
    const reversedStr = str.split('').reverse().join('');
    return str === reversedStr;
}

const palindromeCheck = isPalindrome("racecar");
console.log(palindromeCheck);