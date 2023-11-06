var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var placesToVisit = [
    "Tokyo",
    "Paris",
    "London",
    "Switzerland",
    "Turkey"
];
console.log("Original Order:");
console.log(placesToVisit);
console.log("\nAlphabetical Order (without modifying the original):");
console.log(__spreadArray([], placesToVisit, true).sort());
console.log("\nOriginal Order (after alphabetical sorting check):");
console.log(placesToVisit);
console.log("\nReverse Alphabetical Order (without modifying the original):");
console.log(__spreadArray([], placesToVisit, true).sort().reverse());
console.log("\nOriginal Order (after reverse alphabetical sorting check):");
console.log(placesToVisit);
placesToVisit.reverse();
console.log("\nReversed Order:");
console.log(placesToVisit);
placesToVisit.reverse();
console.log("\nRestored Original Order:");
console.log(placesToVisit);
placesToVisit.sort();
console.log("\nAlphabetical Order (after sorting):");
console.log(placesToVisit);
placesToVisit.sort(function (a, b) { return b.localeCompare(a); });
console.log("\nReverse Alphabetical Order (after sorting):");
console.log(placesToVisit);
