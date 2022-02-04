export const createAdder = (num = 0) => {
  let total = num;

  return (...nums) => {
    nums.forEach((num) => {
      total += num;
    });

    return total;
  };
};
