/*
╔═╗╔═╗╔═╗╦═╗╔═╗╔╦╗╔═╗╦═╗╔═╗
║ ║╠═╝║╣ ╠╦╝╠═╣ ║ ║ ║╠╦╝╚═╗
╚═╝╩  ╚═╝╩╚═╩ ╩ ╩ ╚═╝╩╚═╚═╝*/

/**
 * operators perform simple duties inside our code
 * these include assignment, arithmetic, comparison, logical, urnary, and ternary
 * 

// Assignment Operators
/**
 * these take a value and reassign it based on the value on the right
 * using the terms of the operator */
 
 //this assigns the variable
var a = 123
var b = 234
console.log(a) //<-- we see 123, our variable assignment for the variable a

//addition assignment
a += b;
console.log(a); //<-- we see that a has now been reassigned to the value of 357, the sum of a and b

//a += b === a = a + b

//this rule and syntax applies for the remainder of the arithmetic functions possible in javscript

//Arithmetic expressions
/**
 * arithmetic expressions perform math inside javascript
 * they take two numeric values and return a single numeric value */

//here are some examples of arithmetic expressions
//notice that these do not reassign the values of x or y, they only return the value of the operation

let x = 300;
let y = 100;
//addition operator
console.log(x + y); // <-- 400

//subtraction operator
console.log(x - y); // <-- 200

//multiplication operator
console.log(x * y); // <-- 3000

//division operator
console.log(x / y); // <-- 3

//remainder operator
console.log(x % y); // <-- 0

//Comparison Operators
/**
 * Comparison operators take two values and return a boolean value 
 * of true or false based on its comparison of the two values */

 let f = 1;
 let g = 2;

//here are some comparison operators 


 //strictly equal operator
 console.log(f === g); //<-- false!
 
 // !== is not strictly equal to operator
 console.log(f !== g); //<-- true because f DOES NOT equal g
 
 // less than operator
 console.log(f < g); // <-- true because 1 is less than 2
 
 // less than or equal to operator
 console.log(f <= g); // <-- still same

 // greater than operator
 console.log(f > g); // <-- false because 1 is less than 2
 
 // greater than or equal to operator
 console.log(f >= g); // <-- still same
 
//Logical Operators
/**
 * logical operators are typically used with a boolean value or a conditional statement that 
 * results to a boolean statement to add additional logic to a  */
 
//the AND operator (&&)
if(1 === 1 && 2 === 3){
    console.log('both statements are true') // <-- this code will only run if both statements are true
} else {
    console.log('at least one of these statements') // <-- this code will run if that isnt ths case
}

//the OR operator (||)

if(1 === 1 || 2 === 3){
    console.log('at least one of these statements is true')
} else {
    console.log('both statements are false')
}

//the NOT ! Operator (which we already used)

if(1 !== 2){
    console.log('this is a false statement')
} else {
    console.log('this is a true statement');
}

//The Ternary Operator
/**
 * The ternary, or conditional, operator "?" returns one of two values depending on the condition
 * 
the syntax for this would be*/

let ifTrue = 'im True!'
let ifFalse = 'im False!'

console.log((4 === 3 ? ifTrue : ifFalse)); //<-- 4 doesnt equal 3, console.logs 'im false'

//Unary Operators
/**
 * Unary operators do similar tasks to arithmetic operators but they only require a single operator

here are the unary operators*/

//++
//the ++ operator will increment a number or variable by 1
let e = 123;
console.log(e); //<-- still 123
e++; // <-- increments e by 1
console.log(e) //<-- 124!

// !
// the ! operator just means NOT
var obj = {};
var obj = {key: 'value', key2: 'value2'};
if(!obj.key3){
    console.log('the object does not have a 3rd key');
}

// typeOf
// the typeOf operator returns the datatype of the value passed to it

console.log(typeof obj); // <-- returns that obj is in fact an object

var arr = [];

console.log(typeof arr); // <-- still returns object even though it is an array, just the way the cookie crumbles
//need to use array.isArray if you want to know if your array is an array


