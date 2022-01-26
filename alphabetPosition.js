export const alphabetPosition = (str) => {
  let modifiedStr = str.toLowerCase().replace(/[^a-z]/g, "");
  return [...modifiedStr].map((letter) => letter.charCodeAt() - "a".charCodeAt() + 1).join(" ");
};
