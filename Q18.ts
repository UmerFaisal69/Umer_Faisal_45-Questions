
const placesToVisit: string[] = [
    "Tokyo",
    "Paris",
    "London",
    "Switzerland",
    "Turkey"
  ];
  
  console.log("Original Order:");
  console.log(placesToVisit);
  
  console.log("\nAlphabetical Order (without modifying the original):");
  console.log([...placesToVisit].sort());

  console.log("\nOriginal Order (after alphabetical sorting check):");
  console.log(placesToVisit);

  console.log("\nReverse Alphabetical Order (without modifying the original):");
  console.log([...placesToVisit].sort().reverse());

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
  placesToVisit.sort((a, b) => b.localeCompare(a));
  
  console.log("\nReverse Alphabetical Order (after sorting):");
  console.log(placesToVisit);
  