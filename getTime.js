export const getTime = (str) => {
  let points = str
    .split(/[\s,]+/)
    .filter((subStr) =>
      /^([0-9]|0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/.test(subStr)
    );
  return points.length > 0 ? points[0] : "";
};
