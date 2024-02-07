// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

// Return your answer as a number.

function sumArrayValues(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        // Convert each element to a number using the unary plus operator (+)
        // If the element is already a number, it remains unchanged
        // If the element is a string representation of a number, it gets converted to a number
        sum += +arr[i];
    }
    return sum;
}