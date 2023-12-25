// Find the mean (average) of a list of numbers in an array.



// .reduce() method adds all the numbers in an array
//nums.length = the number of elements in the nums array
//to find the mean you have to add all the numbers together and divide the sum by the length of numbers
const findAverage = nums => nums.reduce((a, b) => a + b) / nums.length;
