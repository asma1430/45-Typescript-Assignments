//17. Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
// • Print a message to each of the two people still on your list, letting them know they’re still invited.
// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
var guestList = ["Asma", "Ali", "Ayesha", "Muhammad", "Hafsa"];
var cantMakeIt = "Ayesha";
var newGuest = "Muneeba";
var moreGuest = ["Rahima", "Nawal", "Khateeba"];
console.log("****INVITATIONS****");
guestList.forEach(function (name) { return console.log("Dear ".concat(name, ", you are invited to dinner. Looking forward to your presence!")); });
var index = guestList.indexOf(cantMakeIt);
if (index !== -1) {
    guestList.splice(index, 1);
}
guestList.push(newGuest);
console.log("".concat(cantMakeIt, " can't make it to the dinner.\n"));
console.log("****UPDATED INVITATIONS****");
guestList.forEach(function (name) { return console.log("Dear ".concat(name, ", you are invited to dinner. Looking forward to your presence!")); });
console.log("Good news! We found a bigger dinner table.\n");
guestList.unshift(moreGuest[0]); // Add new guest to the beginning
guestList.splice(Math.floor(guestList.length / 2), 0, moreGuest[1]); // Add new guest to the middle
guestList.push(moreGuest[2]);
console.log("****NEW INVITATIONS****");
guestList.forEach(function (name) { return console.log("Dear ".concat(name, ", you are invited to dinner. Looking forward to your presence!")); });
console.log("\n****DINNER TABLE DIDN'T ARRIVED****");
while (guestList.length > 2) {
    var removedGuest = guestList.pop(); // Remove the last guest and store it
    console.log("Sorry ".concat(removedGuest, ", the dinner table won't arrive in time, so we can't invite you."));
}
console.log("\n****INVITATIONS****");
guestList.forEach(function (name) { return console.log("Dear ".concat(name, ", you are invited to dinner. Looking forward to your presence!")); });
