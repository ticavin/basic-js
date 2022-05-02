const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;


function dateSample(s) {
 
  if (typeof s == "string" && parseFloat(s) > 0 && parseFloat(s) < 15.1) {
    let a = MODERN_ACTIVITY / s; // ?
    let b = 0.693 / HALF_LIFE_PERIOD;
    let c = Math.log(a) / b;
    return Math.ceil(c);
    } else {
      return false;
    }
}

module.exports = {
  dateSample
};
