// 20.Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.

// Create an array of landmark names
let landmarks: string[] = [
    "Eiffel Tower",
    "Great Wall of China",
    "Statue of Liberty",
    "Taj Mahal",
    "Machu Picchu",
    "Pyramids of Giza",
    "Colosseum",
    "Sydney Opera House",
    "Petra",
    "Christ the Redeemer"
];

// Print the list of landmarks
console.log("List of Famous Landmarks:");
for (let landmark of landmarks) {
    console.log("-", landmark);
}
