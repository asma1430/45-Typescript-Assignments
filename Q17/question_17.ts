 //17. Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

// • Print a message to each of the two people still on your list, letting them know they’re still invited.

// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.

// Function to print invitation messages
function inviteToDinner(person: string) {
    console.log(`Dear ${person}, you are invited to dinner. Looking forward to your presence!`);
}

// Function to print apology message
function apologize(person: string) {
    console.log(`Sorry ${person}, the dinner table won't arrive in time, so we can't invite you.`);
}

// Initial guest list
let guestList: string[] = ["Albert Einstein", "Marie Curie", "Leonardo da Vinci", "Isaac Newton", "Galileo Galilei", "Stephen Hawking"];

// Inform that only two people can be invited for dinner
console.log("Sorry, we can only invite two people for dinner.");

// Remove guests from the list until only two names remain
while (guestList.length > 2) {
    apologize(guestList.pop()!); // Print apology message and remove the last guest from the list
}

// Print invitation message to the remaining two guests
console.log("Invitations:");
guestList.forEach(inviteToDinner);

// Remove the last two names from the list
guestList.splice(0, 2);

// Print the list to ensure it's empty
console.log("Guest list:", guestList);
