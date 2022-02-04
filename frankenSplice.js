export const frankenSplice = (arrayToInsert, array, insertAt) => {
  if (Array.isArray(array) && Array.isArray(arrayToInsert)) {
    array.splice(insertAt, 0, ...arrayToInsert);

    return array;
  }

  return [];
};
