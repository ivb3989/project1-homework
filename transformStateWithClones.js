export const transformStateWithClones = (state, transforms) => {
  let clone = { ...state };
  const result = [];

  transforms.forEach((element) => {
    if (element.operation == 'addProperties') {
      clone = {
        ...clone,
        ...element.properties,
      };
      result.push({ ...clone });
    } else if (element.operation == 'removeProperties') {
      for (let i = 0; i < element.properties.length; i++) {
        delete clone[element.properties[i]];
      }
      result.push({ ...clone });
    } else if (element.operation == 'clear') {
      const props = Object.getOwnPropertyNames(clone);

      for (let i = 0; i < props.length; i++) {
        delete clone[props[i]];
      }
      result.push({ ...clone });
    }
  });

  return result;
};
