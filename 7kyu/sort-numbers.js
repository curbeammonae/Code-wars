// Finish the solution so that it sorts the passed in array of numbers. If the function passes in an empty array or null/nil value then it should return an empty array.


function sortNumbers(numbers) {
    // Check if the input array is empty or null/nil
    if (!numbers || numbers.length === 0) {
        return [];
    }
    
    // Sort the array of numbers
    return numbers.sort((a, b) => a - b);
}

// Example usage:
const numbers1 = [3, 1, 5, 2, 4];
console.log(sortNumbers(numbers1)); // Output: [1, 2, 3, 4, 5]

const numbers2 = [];
console.log(sortNumbers(numbers2)); // Output: []

const numbers3 = null;
console.log(sortNumbers(numbers3)); // Output: []
