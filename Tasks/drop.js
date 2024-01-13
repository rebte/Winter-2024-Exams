// Delete listed keys from dictionary
'use strict';

const drop = (obj, ...drop) => {
  return Object.fromEntries(
    Object.entries(obj).filter(([key]) => !drop.includes(key))
  );
};

module.exports = drop;
