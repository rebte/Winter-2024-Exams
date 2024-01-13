// Reverse an array, you can't use .reverse()
'use strict';

const invert = (arr) => {
  return Array(arr.length)
    .fill(null)
    .map((el, index) => arr[arr.length - index - 1]);
};

module.exports = invert;
