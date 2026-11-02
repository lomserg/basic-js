const { NotImplementedError } = require("../lib");

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
    throw new Error("'arr' parameter must be an instance of the Array!");
  }

  const newArr = [...arr];

  let result = newArr.reduce((acc, cur, i) => {
    if (cur === "--discard-next") {
      if (i + 1 < newArr.length) {
        newArr[i + 1] = undefined; // Mark the next element for removal
      }
    } else if (cur === "--discard-prev") {
      if (i > 0 && newArr[i - 1] !== undefined) {
        acc.pop();
      }
    } else if (cur === "--double-next") {
      if (i + 1 < newArr.length) {
        acc.push(newArr[i + 1]);
      }
    } else if (cur === "--double-prev") {
      if (i > 0 && newArr[i - 1] !== undefined) {
        acc.push(newArr[i - 1]);
      }
    } else {
      acc.push(cur);
    }

    return acc;
  }, []);

  return result.filter((item) => item !== undefined);
}

module.exports = {
  transform,
};
