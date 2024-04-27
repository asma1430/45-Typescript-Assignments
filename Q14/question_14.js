//14. Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner
var guestList = ["Asma", "Ali", "Ayesha", "Muhammad", "Hafsa"];
guestList.forEach(function (name) { return console.log("Dear ".concat(name, ", you are invited to dinner. Looking forward to your presence!")); });
