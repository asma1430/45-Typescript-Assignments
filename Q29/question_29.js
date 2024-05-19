//29. Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
// • Make a array of your three favorite fruits and call it favorite_fruits.
// • Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!
var favorite_fruits = ["banana", "apple", "mango"];
for (var _i = 0, favorite_fruits_1 = favorite_fruits; _i < favorite_fruits_1.length; _i++) {
    var fruit = favorite_fruits_1[_i];
    switch (fruit) {
        case "banana":
            console.log("You really like bananas!");
            break;
        case "apple":
            console.log("You really like apples!");
            break;
        case "mango":
            console.log("You really like mangoes!");
            break;
    }
}
