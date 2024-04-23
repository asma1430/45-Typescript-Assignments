// 15. Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

// • Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.

// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.

// • Print a second set of invitation messages, one for each person who is still in your list.

// Function to print invitation messages
function inviteToDinner(person: string) {
    console.log(`Dear ${person}, you are invited to dinner. Looking forward to your presence!`);
}

// Function to handle input and update guest list
function updateGuestList(initialGuestList: string[], cantMakeIt: string, newGuest: string) {
    // Print initial invitations
    console.log("Initial invitations:");
    initialGuestList.forEach(inviteToDinner);

    // Remove the guest who can't make it
    const index = initialGuestList.indexOf(cantMakeIt);
    if (index !== -1) {
        initialGuestList.splice(index, 1);
    }

    // Add new guest
    initialGuestList.push(newGuest);

    // Print name of the guest who can't make it
    console.log(`${cantMakeIt} can't make it to the dinner.`);

    // Print updated invitations
    console.log("Updated invitations:");
    initialGuestList.forEach(inviteToDinner);
}

// Example usage
let initialGuestList: string[] = ["Albert Einstein", "Marie Curie", "Leonardo da Vinci"];
let cantMakeIt: string = "Marie Curie";
let newGuest: string = "Nikola Tesla";

updateGuestList(initialGuestList, cantMakeIt, newGuest);

