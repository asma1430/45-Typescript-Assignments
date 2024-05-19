//41.  Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array


let magicians: string[] = ["Magician1", "Magician2", "Magician3"];

// Function to show magicians
function show_magicians(names: string[]): void {
    names.forEach(name => console.log(name));
}

// Call the function to show magicians
show_magicians(magicians);
