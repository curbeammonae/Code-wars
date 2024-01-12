// '! !'                 -> '! !'
// '123456789'           -> ''
// 'This looks5 grea8t!' -> 'This looks great!'
// Your harried co-workers are looking to you for a solution to take this garbled text and remove all of the numbers. Your program will take in a string and clean out all numeric characters, and return a string with spacing and special characters ~#$%^&!@*():;"'.,? all intact.

function removeNumbers(inputString) {
    // Use regular expression to remove numeric characters
    return inputString.replace(/[0-9]/g, '');
}

// Example usage:
console.log(removeNumbers('! !'));                 // Output: '! !'
console.log(removeNumbers('123456789'));           // Output: ''
console.log(removeNumbers('This looks5 grea8t!')); // Output: 'This looks great!'
