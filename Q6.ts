const personNameWithWhitespace: string = "\t\n   John Doe   \n\t";
console.log("Name with Whitespace: \"" + personNameWithWhitespace + "\"");
const strippedName: string = personNameWithWhitespace.trim();
console.log("Stripped Name: \"" + strippedName + "\"");