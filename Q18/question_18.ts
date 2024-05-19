//18. Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.

// • Print your array in its original order.

// • Print your array in alphabetical order without modifying the actual list.

// • Show that your array is still in its original order by printing it.

// • Print your array in reverse alphabetical order without changing the order of the original list.

// • Show that your array is still in its original order by printing it again.

// • Reverse the order of your list. Print the array to show that its order has changed.

// • Reverse the order of your list again. Print the list to show it’s back to its original order.

// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.

// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.

let placesToVisit: string[] = ["Makkah", "Madina", "Germany", "Switzerland", "Rome"];

//original order
console.log("Original Order:");
console.log(placesToVisit);

//alphabetical order without modifying the original list
console.log("\nAlphabetical Order:");
console.log([...placesToVisit].sort());

//original order
console.log("\nOriginal Order Again:");
console.log(placesToVisit);

//reverse alphabetical order without modifying the original list
console.log("\nReverse Alphabetical Order:");
console.log([...placesToVisit].sort().reverse());

//original order
console.log("\nOriginal Order Again:");
console.log(placesToVisit);

// Reverse the order of the list
console.log("\nReversed Order:");
placesToVisit.reverse();
console.log(placesToVisit);

// Reverse the order of the list again to restore original order
console.log("\nRestored Original Order:");
placesToVisit.reverse();
console.log(placesToVisit);

// Sort the list alphabetically
console.log("\nSorted Alphabetically:");
console.log(placesToVisit.sort());

// Sort the list in reverse alphabetical order
console.log("\nSorted in Reverse Alphabetical Order:");
console.log(placesToVisit.sort().reverse());
