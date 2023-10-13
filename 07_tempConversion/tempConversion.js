const convertToCelsius = function(inputF) {
  let outputC = (inputF - 32) * 5/9;
  return Math.round(outputC * 10) / 10; 
};

const convertToFahrenheit = function(inputC) {
  let outputF = (inputC * 9/5 + 32);
  return Math.round(outputF * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
