const numbers: number[] = [1, 2, 3, 4, 5];

const outOfBoundsIndex = 10;

try {
  const value = numbers[outOfBoundsIndex];
  console.log(`Value at index ${outOfBoundsIndex}: ${value}`);
} catch (error) {
  console.error("An error occurred:", error);
}

const validIndex = 2;

const correctedValue = numbers[validIndex];
console.log(`Corrected value at index ${validIndex}: ${correctedValue}`);