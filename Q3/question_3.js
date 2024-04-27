//3. Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
var Name = "Asma qayyum";
console.log("Lowercase:", Name.toLowerCase());
console.log("Uppercase:", Name.toUpperCase());
console.log("Titlecase:", Name.toLowerCase().replace(/(^|\s)\w/g, function (char) { return char.toUpperCase(); }));
