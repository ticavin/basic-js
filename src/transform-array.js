const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform( arr) {
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }
  let transformArr = [...arr];
  console.log(transformArr, "start");
  for (let i = 0; i < transformArr.length; i++) {
    if (transformArr[i] === "--discard-next") {
      transformArr[i] = undefined;
      transformArr[i + 1] = undefined;
    }

    if (transformArr[i] === "--discard-prev") {
      transformArr[i] = undefined;
      transformArr[i - 1] = undefined;
    }

    if (transformArr[i] === "--double-next") {
      transformArr[i] = transformArr[i + 1];
    }

    if (transformArr[i] === "--double-prev") {
      transformArr[i] = transformArr[i - 1];
      console.log(transformArr, "test");
    }
  }
  let result = transformArr.filter((el) => el !== undefined);
  return result;
}

module.exports = {
  transform
};
