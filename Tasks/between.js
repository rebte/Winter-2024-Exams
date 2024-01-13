// Extract substring between prefix and suffix
'use strict';

const getValueBetween = (str, prefix, suffix) => {
  const start = str.indexOf(prefix);
  const end = str.indexOf(suffix);
  if (start === -1 || end === -1) return '';
  return str.substring(start + 1, end);
};

module.exports = getValueBetween;
