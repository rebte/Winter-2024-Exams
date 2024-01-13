// Return an array without duplicates
'use strict';

const distinct = (data) => {
  return Array.from(new Set(data));
};

module.exports = distinct;
