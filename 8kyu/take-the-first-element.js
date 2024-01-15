// Create a function that accepts a list/array and a number n, and returns a list/array of the first n elements from the list/array.
function firstNElements(array, n) {
    return array.slice(0, n);
}

// Example usage:
const originalArray = [1, 2, 3, 4, 5];
const n = 3;
const result = firstNElements(originalArray, n);
console.log(result); // Output: [1, 2, 3]
