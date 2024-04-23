//14. Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner

let guestList: string[] = ["Albert Einstein", "Marie Curie", "Leonardo da Vinci"];

function inviteToDinner(person: string) {
    console.log(`Dear ${person}, you are invited to dinner. Looking forward to your presence!`);
}
for (let i = 0; i < guestList.length; i++) {
    inviteToDinner(guestList[i]);
}
