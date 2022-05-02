const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  if (s1.length < 1) {
    return 0;
  }

  let sum = 0;

  let arrayFirst = s1.split('');
  let arraySecond = s2.split('');

  for (let i of arrayFirst) {
    if (arraySecond.includes(i)) {
      sum++;
      arraySecond.splice(arraySecond.indexOf(i), 1);
    }
  }
  return sum;

}

module.exports = {
  getCommonCharacterCount
};
