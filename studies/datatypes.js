/*
╔╦╗╔═╗╔╦╗╔═╗╔╦╗╦ ╦╔═╗╔═╗╔═╗
 ║║╠═╣ ║ ╠═╣ ║ ╚╦╝╠═╝║╣ ╚═╗
═╩╝╩ ╩ ╩ ╩ ╩ ╩  ╩ ╩  ╚═╝╚═╝*/
/**
 * in javascript there are simple/primitive and complex datatypes, as well as functions
 * 
 * Primitive datatypes (strings, numbers, booleans, etc) exist to store an immutable value of various type
 * 
 * Complex datatypes (arrays and objects) exist to be containers of primitive datatypes
 * 
 * inside a function a primitive datatype is passed by copy
 *      this means the data from that primitive datatype is copied into the function at runtime
 *              a duplicate is made of this data
 * 
 * complex datatypes when passed to a function access the data by reference
 *      this means that javascript is going to the original location of the data to REFERENCE it. This is instead of making
 *      a copy or duplicate to use inside of the function.
 * 
 **** simple datatypes include */

/**string
 * strings include a string of text, surrounding text by quotation marks is syntax for a string in js
 * 
 */
let string = "im a string";
console.log(string);
//each character of a string can be accessed by bracket notation
console.log(string[1]); // <-- m

/**number
 * simple datatype used to denote integers and decimal values, as well as
 * perform basic arithmetic functions
 */
let number = 69420;
let doMath = 69420 + 365;

//boolean
/**booleans are simple datatypes that exist as either true or false
 * they are the basis on which we the conditional logic that is the center of programming
 * if statements require a true boolean value as the argument in order to perform their functions
 */
let boolean = true;
if(true){
    console.log('this code runs')
}
if(false){
    console.log('this code doesnt run')
}

//null
/** null is a special datatype that is never returned by the system but
 * can be created by the programmer as a placeholder or when something is supposed to have
 * no value or return nothing */
let nullObject = null;

//NaN or "Not a Number"
/** similar to null but used only to describe that the object is not a number
 */
let notANumber = NaN;

//undefined
/** this is different to null and NaN in that it is returned by the javascript environment
 * when an attempt to use an undefined variable or function, or an attempt to access a place 
 * in an array or object that doesnt exist, is made.
 * 
 * also can be called by the user to create an object with no value or a scenario where
 * undefined is returned in a function */
 
 let thisIsNothing = undefined;
 console.log(thisIsNothing);
 //Infinity
 /** infinity is a property of the global object, or a variable in global scope
  * if infinity was x then (x > any other number)
 */
 
 //This will create infinity 
 console.log(1/0);
 //this is still infinity
 console.log(Infinity + 1);
 // this is negative infinity
 console.log(-Infinity);
 
 // Complex datatypes include // 

//arrays
/**
 * arrays are a list-like complex datatype declared with brackets that is used to store values with an index 
 * 
 */
var myArray = []; //<-- this is how you declare an array
myArray = ['a', 'b', 'c',]; // <-- this is an array with string data types inside it

// we can access individual elements in an array by using bracket notation

console.log(myArray[1]); //prints to the console the second thing in the array, remember we count from 0

// we can use different methods on an array to perform different tasks
// here are a few of them

console.log(myArray.length); // <-- returns a number that is the number of items in the array
console.log(myArray.push('anything')) // adds a value at the end of an array
console.log(myArray.pop()) // <-- removes an element at the end of an array
console.log(myArray.unshift('anything')) // <-- adds a value at the beginning of an array
console.log(myArray.shift()) // <-- removes a value at the beginning of an array
console.log(myArray.join('-')) // <-- joins all elements of array into a string, separated by method arg

//objects
/**
 * objects are a complex datatype that stores values in key value pairs called properties.
 * objects do not have a length property
 * 
 * 
 */
 			var myObject = {}; //<-- this is how you declare an object
			myObject = {key1: 'a', key2: 'b'}; //<-- this is proper syntax for storing keys and values

//Objects use bracket or dot notation to access objects
//if a key or value is called on using bracket or dot notation that doesnt exist that key is created
//these are almost identical statements

			myObject['key1'];
			myObject.key1
			
//however bracket notation uses provided key and dot notation uses literal key

/**we should use objects the data is a whole set that represents an individual thing or the values
 * need to be identified by word */
 
/** we should use arrays if the data is a collection of many things, and the values need to be
 * identified by number */
 
 