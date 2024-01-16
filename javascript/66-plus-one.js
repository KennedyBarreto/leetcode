/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  if (digits[digits.length - 1] == 9) {
    digits[digits.length - 1] = 1;
    digits.push(0);
    return digits;
  }
  digits[digits.length - 1]++;
  return digits;
};