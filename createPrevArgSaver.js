export const createPrevArgSaver = () => {
  let previous;
  let current;

  return (...value) => {
    previous = current;
    current = value[0];

    return previous;
  };
};
