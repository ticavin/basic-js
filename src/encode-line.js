const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let newString = "";
  let count = 0;
  let array = Array.from(str);
  for (let i = 0; i < array.length; i++) {
    if (array[i] == array[i + 1]) {
      count = count + 1;
    } else {
      if (count + 1 == 1) {
        newString += `${array[i]}`;
        count = 0;
      } else {
        newString += `${count + 1}${array[i]}`;
        count = 0;
      }
    }
  }
  return newString;
}

module.exports = {
  encodeLine
};
