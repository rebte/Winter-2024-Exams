// Filter array by type name
'use strict';

const filter = (arr, type) => {
  return arr.filter((el) => typeof el === type);
};

module.exports = filter;
