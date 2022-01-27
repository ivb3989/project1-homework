export const getOperands = (expression) => {
  const arithmeticOperators = ["+", "-", "*", "/"];
  const fragments = expression.split(" ");
  if (fragments.length > 3) {
    return "More than two operands'n'operators are not allowed;(";
  }
  if (arithmeticOperators.some((operator) => fragments.includes(operator))) {
    return `a: ${fragments[0]}, b: ${fragments[2]}`;
  } else {
    return `No match using "${expression}"`;
  }
};
