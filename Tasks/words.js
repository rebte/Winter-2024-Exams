// Count words in a string
'use strict';

const words = (str) => {
  if (str === '') {
    return 0;
  }
  return str.split(' ').length;
};

module.exports = words;
