export const swapCase = (str) => {
  if (!isNaN(str)) {
    return str;
  }
  return [...str]
    .map((letter) => (/[A-Z]/.test(letter) ? letter.toLowerCase() : letter.toUpperCase()))
    .join("");
};
