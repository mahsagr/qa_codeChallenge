import calculator from "../calculator";

// each of the objects in the dataset array has the pieces of a math problem.
// "add": x + y
// "subtract": x - y
// "multiply": x * y
// "divide": x / y
let dataset = [
  { x: 5, y: 10, method: "add" },
  { x: 5, y: 10, method: "subtract" },
  { x: 5, y: 10, method: "multiply" },
  { x: 5, y: 10, method: "divide" },
  { x: -12, y: 10000, method: "add" },
  { x: -12, y: 10000, method: "subtract" },
  { x: -12, y: 10000, method: "multiply" },
  { x: -12, y: 10000, method: "divide" },
  { x: 42, y: 0, method: "add" },
  { x: 42, y: 0, method: "subtract" },
  { x: 42, y: 0, method: "multiply" },
  { x: 42, y: 0, method: "divide" },
  { x: 81, y: 227, method: "add" },
  { x: 81, y: 227, method: "subtract" },
  { x: 81, y: 227, method: "multiply" },
  { x: 81, y: 227, method: "divide" },
];

describe("Calculator", () => {
  dataset.forEach(item => {
    switch (item.method) {
      case "add":
        // code block
        test("add is tested", () => {
          expect(calculator.add(item.x,item.y)).toBe(item.x + item.y)
        })
        break;
      case "subtract":
        // code block
        test("subtract is tested", () => {
          expect(calculator.subtract(item.x,item.y)).toBe(item.x - item.y)
        })
        break;
      case "multiply":
        // code block
        test("multiply is tested", () => {
          expect(calculator.multiply(item.x,item.y)).toBe(item.x * item.y)
        })
        break;
      case "divide":
        // code block
        test("divide is tested", () => {
          expect(calculator.divide(item.x,item.y)).toBe(item.x / item.y)
        })
        break;
      default:
      // code block
    }
  })
});

