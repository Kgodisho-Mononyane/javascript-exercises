const removeFromArray = function(array, ...args) {
    const newArray = [];

    array.forEach((item) => {
        if (!args.includes(item)) {
            newArray.push(item);
        }
    })
    return newArray;
    //write a function that takes an array and removes any instance of the number within that array and returns the
    //new array without those instances
};

// Do not edit below this line
module.exports = removeFromArray;
