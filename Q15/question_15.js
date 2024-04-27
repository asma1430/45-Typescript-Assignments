// 15. Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
// • Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
// • Print a second set of invitation messages, one for each person who is still in your list.
var guestList = ["Asma", "Ali", "Ayesha", "Muhammad", "Hafsa"];
console.log("****INVITATIONS****");
guestList.forEach(function (name) { return console.log("Dear ".concat(name, ", you are invited to dinner. Looking forward to your presence!")); });
var cantMakeIt = "Ayesha";
var newGuest = "Muneeba";
var index = guestList.indexOf(cantMakeIt);
if (index !== -1) {
    guestList.splice(index, 1);
}
guestList.push(newGuest);
console.log("".concat(cantMakeIt, " can't make it to the dinner.\n"));
console.log("****UPDATED INVITATIONS****");
guestList.forEach(function (name) { return console.log("Dear ".concat(name, ", you are invited to dinner. Looking forward to your presence!")); });
