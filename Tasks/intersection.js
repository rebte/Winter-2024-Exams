// Find an intersection of two dictionaries
'use strict';

const intersection = (obj1, obj2) => {
  return Object.keys(obj1)
    .filter((el) => obj1[el] === obj2[el])
    .reduce((acc, el) => ({ ...acc, [el]: obj1[el] }), {});
};

module.exports = intersection;
