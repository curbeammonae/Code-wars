// Your task is to create a function that does four basic mathematical operations.

// The function should take three arguments - operation(string/char), value1(number), value2(number).
// The function should return result of numbers after applying the chosen operation.

function basicMathOperation(operation, value1, value2) {
    if (operation === '+') {
        return value1 + value2;
    } else if (operation === '-') {
        return value1 - value2;
    } else if (operation === '*') {
        return value1 * value2;
    } else if (operation === '/') {
        if (value2 !== 0) {
            return value1 / value2;
        } else {
            return "Division by zero is undefined";
        }
    } else {
        return "Invalid operation";
    }
}

// Example usage:
console.log(basicMathOperation('+', 5, 3));  // Output: 8
console.log(basicMathOperation('-', 10, 4));  // Output: 6
console.log(basicMathOperation('*', 2, 6));   // Output: 12
console.log(basicMathOperation('/', 8, 2));   // Output: 4
console.log(basicMathOperation('/', 8, 0));   // Output: Division by zero is undefined
console.log(basicMathOperation('%', 8, 2));   // Output: Invalid operation
