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



let placesToVisit: string[] = ["Tokyo", "Paris", "New York", "Sydney", "Rome"];

// Print original array
console.log("Original Order:", placesToVisit.join(", "));

// Print array in alphabetical order without modifying original list
console.log("\nAlphabetical Order:", placesToVisit.slice().sort().join(", "));

// Show original order is unchanged
console.log("\nOriginal Order after sorting:", placesToVisit.join(", "));

// Print array in reverse alphabetical order without modifying original list
console.log("\nReverse Alphabetical Order:", placesToVisit.slice().sort().reverse().join(", "));

// Show original order is still unchanged
console.log("\nOriginal Order after reverse sorting:", placesToVisit.join(", "));

// Reverse the order of the list
placesToVisit.reverse();
console.log("\nReversed Order:", placesToVisit.join(", "));

// Reverse the order of the list again to get back to original order
placesToVisit.reverse();
console.log("\nOriginal Order after double reverse:", placesToVisit.join(", "));

// Sort array in alphabetical order
placesToVisit.sort();
console.log("\nSorted in Alphabetical Order:", placesToVisit.join(", "));

// Sort array in reverse alphabetical order
placesToVisit.sort((a, b) => b.localeCompare(a));
console.log("\nSorted in Reverse Alphabetical Order:", placesToVisit.join(", "));
