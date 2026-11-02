const { NotImplementedError } = require("../lib");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 *
 * @param {String} sampleActivity string representation of current activity
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 *
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */

function dateSample(sampleActivity) {
  // remove line with error and write your code here
  if (typeof sampleActivity !== "string") return false;

  const activity = Number(sampleActivity);
  //(MODERN_ACTIVITY / str) / (0.693 / HALF_LIFE_PERIOD)
  //Math.log((MODERN_ACTIVITY / str))
  if (typeof sampleActivity != "string") {
    return false;
  }

  if (+sampleActivity < 15 && +sampleActivity > 0) {
    const k = 0.693 / 5730;
    const age = Math.ceil(Math.log(15 / +sampleActivity) / k);
    return age;
  } else {
    return false;
  }
}

module.exports = {
  dateSample,
};
