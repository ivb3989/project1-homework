export const getTime = (str) => {
  const matches = str.match(/\b([0-1][0-9]|2[0-3]):[0-5][0-9]?\b/g) || []
  return matches.length > 0 ? matches[0] : "";
};
