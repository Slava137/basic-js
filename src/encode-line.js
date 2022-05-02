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
  let array2 = [];

  let array = str.split('');
  let value = 1;

  for (let i = 0; i < array.length; i++) {
    if (array[i] == array[i + 1]) {
      value++;
    } else {
      if (array[i] < 2) {
        value = str[i];
      } else {
        array2.push(value, array[i]);
        value = 1;
      }
    }
  }
  let str2 = array2.join('');
  let result = str2.replace(/1/g, '');
  return result;
}

module.exports = {
  encodeLine
};
