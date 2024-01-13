// Sum all number values in dict
'use strict';

const count = (obj) => {
  return Object.values(obj).reduce(
    (acc, val) => (typeof val === 'number' ? acc + val : acc),
    0
  );
};

module.exports = count;
