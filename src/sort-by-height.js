const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let i = -1;
  let position = [];
  while ((i = arr.indexOf(-1, i + 1)) > -1) {
    position.push(i);
  }
  let positive = position.slice();
  while (positive.length) {
    arr.splice(positive.pop(), 1);
  }
  arr.sort((a, b) => a - b);
  while (position.length) {
    arr.splice(position.shift(), 0, -1);
  }
  return arr;
}

module.exports = {
  sortByHeight
};
