export const countOccurrences = (str, ch) => {
  return str.toLowerCase().split(ch).length - 1;
};
