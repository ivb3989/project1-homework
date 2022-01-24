export const getOperands = (expression) => {
  const arithmetic_operators = ["+", "-", "*", "/"];
  let fragments = expression.split(" ");
  if (fragments.length > 3) {
    return "More than two operands'n'operators are not allowed;(";
  }
  if (arithmetic_operators.some((v) => fragments.includes(v))) {
    return `a: ${fragments[0]}, b: ${fragments[2]}`;
  } else {
    return `No match using "${expression}"`;
  }
};

/* console.log(
  expression.map((v) =>
    arithmetic_operators.includes(v) ? v + "is operator" : v
  )
); */
