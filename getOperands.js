export const getOperands = (expression) => {
  let arithmeticOperators = ["+", "-", "*", "/"];
  let fragments = expression.split(" ");
  if (fragments.length > 3) {
    return "More than two operands'n'operators are not allowed;(";
  }
  if (arithmeticOperators.some((value) => fragments.includes(value))) {
    return `a: ${fragments[0]}, b: ${fragments[2]}`;
  } else {
    return `No match using "${expression}"`;
  }
};
