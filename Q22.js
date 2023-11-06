var numbers = [1, 2, 3, 4, 5];
var outOfBoundsIndex = 10;
try {
    var value = numbers[outOfBoundsIndex];
    console.log("Value at index ".concat(outOfBoundsIndex, ": ").concat(value));
}
catch (error) {
    console.error("An error occurred:", error);
}
var validIndex = 2;
var correctedValue = numbers[validIndex];
console.log("Corrected value at index ".concat(validIndex, ": ").concat(correctedValue));
