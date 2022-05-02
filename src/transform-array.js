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
function transform(arr) {
  if (!Array.isArray(arr)) {
    return "'arr' parameter must be an instance of the Array!";
  }

  if (arr.length === 0) {
    return [];
  }

  let result = arr.slice();
  for (let i = 0; i < result.length; i++) {
    if (result[i] === '--discard-next' && i === (result.length - 1) || result[i] === '--double-next' && i === (result.length - 1)) {
      return result.slice(0, result.length - 1);
    } else if (result[i] === '--discard-prev' && i === 0 || result[i] === '--double-prev' && i === 0) {
        return result.slice(1, result.length);
    } else if (result[i] === '--discard-next') {
        resultHalf = result.slice(0, i);
        let j = i + 2;
        result = resultHalf.concat(result.slice(j, result.length));
      return result;
    } else if (result[i] === '--discard-prev') {
        resultHalf = result.slice(0, i - 1);
        let j = i + 1;
        result = resultHalf.concat(result.slice(j, result.length)); 
        return result; 
    } else if (result[i] === '--double-next') {
        resultHalf = result.slice(0, i);
        let j = i + 1;
        result = resultHalf.concat(j, result.slice(j, result.length));  
        return result;
    } else if (result[i] === '--double-prev') {
      resultHalf = result.slice(0, i);
      let j = i - 1;
      result = resultHalf.concat(j, result.slice(i + 1, result.length));  
      return result;
    } else {
      result = result;
    }
  }
}
module.exports = {
  transform
};
