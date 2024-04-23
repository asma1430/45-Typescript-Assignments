//16. More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

// • Add one new guest to the beginning of your array.

// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.



// Function to print invitation messages
function inviteToDinner(person: string) {
    console.log(`Dear ${person}, you are invited to dinner. Looking forward to your presence!`);
}

// Function to handle updating the guest list and sending new invitations
function updateGuestListAndSendInvitations(guestList: string[], newGuests: string[]) {
    // Print existing invitations
    console.log("Existing invitations:");
    guestList.forEach(inviteToDinner);

    // Inform about the bigger dinner table
    console.log("Good news! We found a bigger dinner table.");

    // Add new guests
    guestList.unshift(newGuests[0]); // Add new guest to the beginning
    guestList.splice(Math.floor(guestList.length / 2), 0, newGuests[1]); // Add new guest to the middle
    guestList.push(newGuests[2]); // Add new guest to the end using push

    // Print new invitations
    console.log("New invitations:");
    guestList.forEach(inviteToDinner);
}

// Initial guest list
let initialGuestList: string[] = ["Albert Einstein", "Marie Curie", "Leonardo da Vinci"];
// New guests to be added
let newGuests: string[] = ["Isaac Newton", "Galileo Galilei", "Stephen Hawking"];

// Update guest list and send new invitations
updateGuestListAndSendInvitations(initialGuestList, newGuests);
