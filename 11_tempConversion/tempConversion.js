const convertToCelsius = function(fahrenheit) {
  const celsius = (fahrenheit - 32) * (5/9);

  if (celsius % 1 === 0) {
    return Number(celsius);
  } else {
    return Number(celsius.toFixed(1));
  }
};

const convertToFahrenheit = function(celsius) {
  const fahrenheit = (celsius * (9/5)) + 32;

  if (fahrenheit % 1 === 0) {
    return Number(fahrenheit);
  } else {
    return Number(fahrenheit.toFixed(1));
  }
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
