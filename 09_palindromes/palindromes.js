const palindromes = function (str) {
    let string = str
    .toLowerCase()
    .split('') //set a value of the string of just letters
    let reverseString = string//set the value of the reverse string of just letters

    return string === reverseString;
}


// Do not edit below this line
module.exports = palindromes;
