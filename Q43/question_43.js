//43. Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
var magicians = ["Magician1", "Magician2", "Magician3"];
function show_magicians(names) {
    names.forEach(function (name) { return console.log(name); });
}
function make_great(names) {
    return names.map(function (name) { return "the Great " + name; });
}
// Create a copy of the original magicians array and modify it
var great_magicians = make_great(magicians.slice());
console.log("Original Magicians:");
show_magicians(magicians);
console.log("\nGreat Magicians:");
show_magicians(great_magicians);
