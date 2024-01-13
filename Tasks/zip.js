// Zip two arrays, [1, 2] and [3, 4] -> [[1, 3], [2, 4]]
'use strict';

const zip = (a = [], b = []) => {
  return a
    .map((el, index) => (b[index] ? [el, b[index]] : false))
    .filter((el) => el !== false);
};

module.exports = zip;
