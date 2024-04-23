let Name: string = "Asma Furqan";

console.log("Lowercase:", Name.toLowerCase());
console.log("Uppercase:", Name.toUpperCase());
console.log("Titlecase:", Name.replace(/\b\w/g, (char: string) => char.toUpperCase()));
