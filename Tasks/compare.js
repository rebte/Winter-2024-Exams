// Compare two dictionaries
'use strict';

const compare = (first_values, second_values) => {
  first_values = Object.entries(first_values);
  second_values = Object.entries(second_values);
  if (first_values.length !== second_values.length) {
    return false;
  }
  return first_values.join('-') === second_values.join('-');
};

module.exports = compare;
