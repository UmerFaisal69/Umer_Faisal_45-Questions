
const personName: string = "JOHN WICK";
console.log("Lowercase: " + personName.toLowerCase())
console.log("Uppercase: " + personName.toUpperCase());
const titleCaseName: string = personName
  .toLowerCase()
  .replace(/\b\w/g, (char) => char.toUpperCase());

console.log("Titlecase: " + titleCaseName);