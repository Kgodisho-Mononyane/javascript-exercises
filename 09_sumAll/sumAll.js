const sumAll = function(num1, num2) {
    let array = [];
    let start = Math.min(num1, num2);
    let end = Math.max(num1, num2);

    if ( 
        num1 < 0 ||
        num2 < 0 ||
        num1 % 1 !== 0 ||
        num2 % 1 !== 0 ||
        typeof num1 !== "number" ||
        typeof num2 !== "number"
    ) {
        return "ERROR";
    }

   for (let i = start; i <= end; i++) {
    array.push(i)
   }

   let finalSum = array.reduce((acc, curr) => acc + curr)
   return finalSum;
};

console.log(sumAll(1, 4));

// Do not edit below this line
module.exports = sumAll;
