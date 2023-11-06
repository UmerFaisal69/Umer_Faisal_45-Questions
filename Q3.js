var personName = "JOHN WICK";
console.log("Lowercase: " + personName.toLowerCase());
console.log("Uppercase: " + personName.toUpperCase());
var titleCaseName = personName
    .toLowerCase()
    .replace(/\b\w/g, function (char) { return char.toUpperCase(); });
console.log("Titlecase: " + titleCaseName);
