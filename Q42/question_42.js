//42. Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
var magicians = ["Magician1", "Magician2", "Magician3"];
// Function to show magicians
function show_magicians(names) {
    names.forEach(function (name) { return console.log(name); });
}
// Function to make magicians great
function make_great(names) {
    for (var i = 0; i < names.length; i++) {
        names[i] = "The Great " + names[i];
    }
}
make_great(magicians);
show_magicians(magicians);
