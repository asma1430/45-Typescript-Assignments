//16. More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

// • Add one new guest to the beginning of your array.

// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.

let guestList: string[] = ["Asma", "Ali", "Ayesha", "Muhammad", "Hafsa"];
let cantMakeIt = "Ayesha";
let newGuest: string = "Muneeba";
let moreGuest: string[] = ["Rahima", "Nawal", "Khateeba"]

console.log("****INVITATIONS****")
guestList.forEach(name => console.log(`Dear ${name}, you are invited to dinner. Looking forward to your presence!`));

const index = guestList.indexOf(cantMakeIt);
    if (index !== -1) {
        guestList.splice(index, 1);
    }

    guestList.push(newGuest);
    console.log(`${cantMakeIt} can't make it to the dinner.\n`);

    console.log("****UPDATED INVITATIONS****");
guestList.forEach(name=>console.log(`Dear ${name}, you are invited to dinner. Looking forward to your presence!`))

console.log("Good news! We found a bigger dinner table.\n");
guestList.unshift(moreGuest[0]); // Add new guest to the beginning
guestList.splice(Math.floor(guestList.length / 2), 0, moreGuest[1]); // Add new guest to the middle
guestList.push(moreGuest[2]);

console.log("****NEW INVITATIONS****");
guestList.forEach(name => console.log(`Dear ${name}, you are invited to dinner. Looking forward to your presence!`));