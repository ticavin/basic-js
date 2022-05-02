const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const result = {};
  const arrResult = [];
  const tempArr = domains.map((elem) => elem.split('.').reverse());
  for (let i = 0; i < tempArr.length; i++) {
    let element = '';
    for (let j = 0; j < tempArr[i].length; j++) {
      element += `.${tempArr[i][j]}`;
      arrResult.push(element);
    }
  }
  arrResult.forEach((elem) => {
    if (result[elem] === undefined) {
      result[elem] = 1;
    } else {
      result[elem]++;
    }
  });
  return result;
}

module.exports = {
  getDNSStats
};
