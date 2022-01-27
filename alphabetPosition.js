export const alphabetPosition = (str) => {
  let modifiedStr = str.toLowerCase().replace(/[^a-z]/g, "");
  let charCodeOfA = "a".charCodeAt();
  return [...modifiedStr].map((letter) => letter.charCodeAt() - charCodeOfA + 1).join(" ");
};
