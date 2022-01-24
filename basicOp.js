export const basicOp = (op, num1, num2) => {
  return (
    {
      "+": num1 + num2,
      "-": num1 - num2,
      "*": num1 * num2,
      "/": num1 / num2,
    }[op] ?? 0
  );
};


/* let basicOp = (op, num1, num2) => {
  switch (op) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      return num1 / num2;
    default:
      return 0;
  }
}; */