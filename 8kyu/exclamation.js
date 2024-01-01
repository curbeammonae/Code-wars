// User
// Remove an exclamation mark from the end of a string. For a beginner kata, you can assume that the input data is always a string, no need to verify it. javascript


function removeExclamationMark(str) {
    if (str.endsWith('!')) {
        return str.slice(0, -1);
    }
    return str;
}

// Example usage:
const result = removeExclamationMark("Hello world!"); // Output: "Hello world"
console.log(result);

//refactor


const remove = s => s.replace(/!$/, '');