// Find the total sum of internal angles (in degrees) in an n-sided simple polygon. N will be greater than 2.


function sumOfInternalAngles(n) {
    return (n - 2) * 180;
}

// Example usage:
const n = 6; // For a hexagon
const sum = sumOfInternalAngles(n);
console.log("Sum of internal angles:", sum, "degrees");
