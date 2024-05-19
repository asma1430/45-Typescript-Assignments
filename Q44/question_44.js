// 44. Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.
//rest parameter to accept a variable number of string arguments.
function makeSandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("You ordered a sandwich with the following items:");
    items.forEach(function (item) { return console.log("- ".concat(item)); });
}
makeSandwich("Ham", "Cheese", "Lettuce", "Tomato\n");
makeSandwich("Turkey", "Avocado\n");
makeSandwich("Peanut Butter", "Jelly\n");
