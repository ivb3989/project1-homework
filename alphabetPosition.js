export const alphabetPosition = (str) => {
  const modifiedStr = str.toLowerCase().replace(/[^a-z]/g, "");
  const charCodeOfA = "a".charCodeAt();
  return [...modifiedStr].map((letter) => letter.charCodeAt() - charCodeOfA + 1).join(" ");
};
