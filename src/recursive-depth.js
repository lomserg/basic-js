const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    let depth = 0;
    if (Array.isArray(arr)) {
      for (let i in arr) {
        depth = Math.max(depth, this.calculateDepth(arr[i])); // Use "this.calculateDepth"
      }
      depth++;
    }
    return depth;
  }
}

const newCount = new DepthCalculator();
console.log(newCount.calculateDepth([1, 2, 3, [4, 5]]));
module.exports = {
  DepthCalculator,
};
