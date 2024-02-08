// Create a function that takes 2 integers in form of a string as an input, and outputs the sum (also as a string):


function sumAsString(num1, num2) {
    // Convert the input strings to numbers using the parseInt function
    // If the second argument (radix) is not specified, parseInt will assume base 10
    // parseInt will ignore any non-numeric characters at the end of the string
    const num1Int = parseInt(num1, 10);
    const num2Int = parseInt(num2, 10);

    // Calculate the sum of the two numbers
    const sum = num1Int + num2Int;

    // Convert the sum back to a string using the toString method
    // This ensures that the output is also a string
    return sum.toString();
}

// Example usage:
const num1 = "123";
const num2 = "456";
const result = sumAsString(num1, num2);
console.log(result); // Output will be "579"
