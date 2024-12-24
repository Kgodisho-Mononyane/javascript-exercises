const convertToCelsius = function(fahrenheit) {
  let celsius = ((fahrenheit * 9/5) + 32);
  return celsius;
  //return celsius.round(num * 10)/10;
};
console.log(convertToCelsius(32));

//Math.round(number * 10) / 10

const convertToFahrenheit = function(celsius) {
  // let fahrenheit = ((num - 32)* 5/9);
  // return fahrenheit.round(num * 10)/10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
