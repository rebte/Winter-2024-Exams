// Return an array without duplicates
'use strict';

const duplicate = (value, n) => {
  if (n <= 0) {
    return [];
  }
  return Array(n).fill(value);
};

module.exports = duplicate;
