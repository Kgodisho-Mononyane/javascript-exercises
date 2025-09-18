const leapYears = function(year) {
    if (year % 4 === 0 && year % 100 === 0 && year % 400 === 0) {
        return true;
    } else if (year % 4 === 0 && year % 100 === 0) {
        return false;
    } else if (year % 4 === 0) {
        return true;
    } else {
        return false;
    }
    
    //divisible by 4 = leap year
    //divisible by 4 && divisible by 100 = !leap year
    //divisible by 4 && divisible by 100 && divisible by 400 == leap year

};

// Do not edit below this line
module.exports = leapYears;
