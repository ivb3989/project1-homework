export const makeArmy = (len) => {
  const funcArray = [];
  let index = 0;

  while (len > index) {
    funcArray[index] = ((index) => {
      return () => {
        return index;
      };
    })(index);
    index++;
  }

  return funcArray;
};
