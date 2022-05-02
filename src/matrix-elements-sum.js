const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  return matrix.reduce((p, c, r) => p + c.filter((x, col) => {
    for (let i = 0; i < r; i++) {
      if (matrix[i][col] === 0) {
        return false
      }
    }
    return true
  }).reduce((x, y) => x + y, 0), 0)
}

module.exports = {
  getMatrixElementsSum
};
