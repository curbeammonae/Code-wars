// Complete the square sum function so that it squares each number passed into it and then sums the results together.
function squareSum(numbers) {
    // Initialize a variable to store the sum of squared numbers
    let sum = 0;

    // Iterate through the array of numbers
    for (let i = 0; i < numbers.length; i++) {
        // Square each number and add it to the sum
        sum += numbers[i] * numbers[i];
    }

    // Return the sum
    return sum;
}

// Example usage:
const numbers = [1, 2, 3, 4, 5];
console.log(squareSum(numbers)); // Output will be 1*1 + 2*2 + 3*3 + 4*4 + 5*5 = 55
