//27. Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
// • If the alien is green, print a message that the player earned 5 points.
// • If the alien is yellow, print a message that the player earned 10 points.
// • If the alien is red, print a message that the player earned 15 points.
// • Write three versions of this program, making sure each message is printed for the appropriate color alien.
//VERSION_1
var alien_color = 'green';
if (alien_color === 'green') {
    console.log("Congratulations! You just earned 5 points for shooting the green alien.");
}
else if (alien_color === 'yellow') {
    console.log("Congratulations! You just earned 10 points for shooting the yellow alien.");
}
else if (alien_color === 'red') {
    console.log("Congratulations! You just earned 15 points for shooting the red alien.");
}
//VERSION_2
var alien_color_01 = 'yellow';
if (alien_color_01 === 'green') {
    console.log("Congratulations! You just earned 5 points for shooting the green alien.");
}
else if (alien_color_01 === 'yellow') {
    console.log("Congratulations! You just earned 10 points for shooting the yellow alien.");
}
else if (alien_color_01 === 'red') {
    console.log("Congratulations! You just earned 15 points for shooting the red alien.");
}
//VERSION_3
var alien_color_02 = 'red';
if (alien_color_02 === 'green') {
    console.log("Congratulations! You just earned 5 points for shooting the green alien.");
}
else if (alien_color_02 === 'yellow') {
    console.log("Congratulations! You just earned 10 points for shooting the yellow alien.");
}
else if (alien_color_02 === 'red') {
    console.log("Congratulations! You just earned 15 points for shooting the red alien.");
}
