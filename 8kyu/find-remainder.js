// Write a function that accepts two integers and returns the remainder of dividing the larger value by the smaller value.

// Division by zero should return NaN.

function remainderOfDivision(num1, num2) {
    // Check if either number is zero to avoid division by zero
    if (num1 === 0 || num2 === 0) {
        return NaN;
    }

    // Find the larger and smaller numbers
    const larger = Math.max(num1, num2);
    const smaller = Math.min(num1, num2);

    // Calculate the remainder of dividing the larger by the smaller
    return larger % smaller;
}

// Example usage:
console.log(remainderOfDivision(7, 3)); // Output will be 1
console.log(remainderOfDivision(10, 5)); // Output will be 0
console.log(remainderOfDivision(5, 10)); // Output will be 5
console.log(remainderOfDivision(0, 7)); // Output will be NaN
