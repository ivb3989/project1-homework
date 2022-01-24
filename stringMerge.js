export const stringMerge = (str1, str2, sep) =>
  ~str1.indexOf(sep) && ~str2.indexOf(sep)
    ? str1.slice(0, str1.indexOf(sep)) + sep + str2.slice(str2.indexOf(sep) + 1)
    : `Missing separator: "${sep}"`;
