/*
╔═╗╔╦╗╦═╗╦╔╗╔╔═╗  ╔╦╗╔═╗╔╗╔╦╔═╗╦ ╦╦  ╔═╗╔╦╗╦╔═╗╔╗╔
╚═╗ ║ ╠╦╝║║║║║ ╦  ║║║╠═╣║║║║╠═╝║ ║║  ╠═╣ ║ ║║ ║║║║
╚═╝ ╩ ╩╚═╩╝╚╝╚═╝  ╩ ╩╩ ╩╝╚╝╩╩  ╚═╝╩═╝╩ ╩ ╩ ╩╚═╝╝╚╝
*/

/**
 * strings can be manipulated in different ways
 * 
 * individual characters of a string can be accessed with bracket notation */
 var string = "I'm a string";
 var string2 = " and I'm another string";
 console.log(string[0]); //<-- I
 
 // Strings can be added together using the + operator
 console.log(string + string2);
 
 // Strings can also be mutated by methods
 
 // .toUpperCase() will capitalize the entire string
 console.log(string2.toUpperCase()); //<-- AND IM ANOTHER STRING
 
 // .toLowerCase() will do the opposite
 console.log(string2.toLowerCase()); //<-- and i'm another string
 
 // .concat() will also combine multiple strings
console.log(string.concat(string2)); //I'm a string and I'm another string

// .split("separator") will split your string by separator of choice into an array.
var splitUpStringbySpaces = string.split(" ")
console.log(string.split(" ")) //<-- ["I'm", "a", "string"];

// .join("") while technically isnt a string operation, joins an array into a string separated by value of coders choice
console.log(splitUpStringbySpaces.join(" ")); //<-- "I'm a string"

// .replace("searchfor", replacewith) will replace every location of a value in a string with a target value. 
//notice that this is case sensitive
console.log(string.replace('i', 'o')); //<-- I'm a strong
 

 