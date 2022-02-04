export const invertObject = (obj) => {
  const keys = Object.keys(obj);
  const values = Object.values(obj);
  const result = {};

  if (!values.some((element, i, arr) => arr.indexOf(element) !== i)) {
    for (let i = 0; i < keys.length; i++) {
      if (!isNaN(values[i])) {
        result[`${values[i]}`] = +keys[i];
        continue;
      }
      result[`${values[i]}`] = keys[i];
    }
    
    return result;
  }

  return null;
  
};
