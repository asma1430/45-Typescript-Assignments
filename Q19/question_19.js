// 19.Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.
var guestList = ["Asma", "Ali", "Ayesha", "Muhammad", "Hafsa"];
guestList.forEach(function (name) { return console.log("Dear ".concat(name, ", you are invited to dinner. Looking forward to your presence!")); });
console.log("".concat(guestList.length, " people are invited to dinner."));
