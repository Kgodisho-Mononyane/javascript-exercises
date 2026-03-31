const factorial = function(n) {
    
    if (typeof(n) !== "number" || n < 0 || n % 1 !== 0) {
        return undefined;
    } else if (n == 0 || n == 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
};

console.log(factorial(0))

// Do not edit below this line
module.exports = factorial;