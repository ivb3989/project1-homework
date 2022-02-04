export const squareList = (array) => {
  return array.map((element) =>
    /^[1-9]\d*$/.test(element) ? Math.pow(element, 2) : undefined,
  ).filter(element=>element);
};
