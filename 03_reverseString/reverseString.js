const reverseString = function(str) {
    let revStr = '';

    for (let i = str.length -1; i >= 0; i--) {
        revStr += str[i];
    }

    return revStr;
};

/* Solution:
const reverseString = function (string) {
  return string.split("").reverse().join("");
};

Explanation:
const reverseString = function (string) {
  // Split the string into an array of characters.
  const characters = string.split("");

  // Reverse the order of the characters in the array.
  characters.reverse();

  // Join the characters in the array back into a string.
  const reversedString = characters.join("");

  // Return the reversed string.
  return reversedString;
};
*/

// Do not edit below this line
module.exports = reverseString;
