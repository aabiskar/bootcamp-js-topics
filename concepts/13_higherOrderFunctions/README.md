# Higher Order Functions
The functions that use other functions as arguments or return functions are named higher-order functions.
Some well known examples are: `map()`, `filter()`, `reduce()` … etc

```
function calculate(operation, initialValue, numbers) {
  let total = initialValue;
  for (const number of numbers) {
    total = operation(total, number);
  }
  return total;
}
function sum(n1, n2) {
  return n1 + n2;
}
function multiply(n1, n2) {
  return n1 * n2;
}
calculate(sum, 0, [1, 2, 4]);      // => 7
calculate(multiply, 1, [1, 2, 4]); // => 8
```