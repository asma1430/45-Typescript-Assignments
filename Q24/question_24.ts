//24. More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings

// • Tests using the lower case function

// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

// • Tests using "and" and "or" operators

// • Test whether an item is in a array

// • Test whether an item is not in a array

let name1 = "Alice";
let name2 = "Bob";
let name3 = "Alice";

console.log("Equality and Inequality with Strings:");
console.log(name1 === name2); // False
console.log(name1 !== name2); // True
console.log(name1 === name3); // True
console.log(name1 !== name3); // False


console.log("\nTests using the lower case function");
let str1 = "Hello";
let str2 = "hello";
console.log(str1.toLowerCase() === str2.toLowerCase()); // True


console.log("\nNumerical tests:");
let num1 = 10;
let num2 = 5;
console.log(num1 > num2); // True
console.log(num1 < num2); // False
console.log(num1 >= num2); // True
console.log(num1 <= num2); // False


console.log("\nTests using 'and' and 'or' operators:");
let age = 25;
let isStudent = true;
console.log(age > 18 && isStudent); // True
console.log(age > 30 || isStudent); // True


let fruits = ["apple", "banana", "orange"];

// Test whether an item is in an array
console.log("\nTest whether an item is in an array:");
console.log(fruits.indexOf("banana") !== -1); // True

// Test whether an item is not in an array
console.log("\nTest whether an item is not in an array:");
console.log(fruits.indexOf("grape") === -1); // True
