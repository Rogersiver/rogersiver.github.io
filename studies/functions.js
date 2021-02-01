/*
╔═╗╦ ╦╔╗╔╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
╠╣ ║ ║║║║║   ║ ║║ ║║║║╚═╗
╚  ╚═╝╝╚╝╚═╝ ╩ ╩╚═╝╝╚╝╚═╝
*/

/**
 * functions are blocks of code created to be reused throughout a program in JavaScript
 * they accept inputs, process those inputs, and return a new data value and have 4 parts
 *      1. Name
 *      2. Parameters  - the data set during the function declaration to be the expected arguments
 *              2a. arguments are the data to be put into the function when calling said function
 *      3. Function Body or Code Block - the code to be ran on the arguments
 *      4. Return Statement - returns the value or data back to the function call
 *              4a. return statements can only be used inside of the function code block
 * 
 * functions can take no parameters or as many as required
 * 
 * functions ARE HOISTED. all Function declarations are hoisted to the top of their scope and able to be used
 * before declaration.
 *
 * functions also can optionally return things, a function may just complete a task and return nothing */
 
 //First we must declare our function, lets make one that adds
 
 //this is a function declaration. function declarations start with the keyword function
 function add(num,num2){
     return num + num2
 }
 console.log(add(1,5)); // <-- 6!
 
 //a function can also be stored in a variable and defined using an expression
 //function expressions are functions that do not start with the keyword function
 //this is a function expression
 
 var multiply = function(num, num2){
     return num * num2;
 }
 
console.log(multiply(12,2)); // <-- 24!

/**heres another example, but weve created a named function expression, where the function has
 * a name as well as its variable name this is useful as you can call the variable as well as the function
 */

 var divide =  function divideFunction(num, num2){
     return num * num2;
 }
 
console.log(divide(12,2)); // <-- 8!

//functions dont need to take parameters (inputs), or output anything (return)

//heres a function with no parameters or return statement that just uses .pop on a specific array when called
var arr = [1, 2, 3];
function deleteLastItem(){
    arr.pop(); 
}
console.log(arr); //<-- array as is
deleteLastItem(); //<-- pops last one off
console.log(arr); //<-- altered array

//SCOPE
/**
 * Functions can use variables and data stored in the global scope
 * however if something is declared inside of a function it can only be used inside of that function
 * or by that function. You can use this code from the global scope by calling the function, but you cannot
 * directly reference variables declared inside the function scope. Think of it as nested boxes. */

// heres an example of scope

function addToTheNumber(num){
    var theNumber = 13;
    console.log(theNumber); 
    return num + theNumber;
}
console.log(addToTheNumber(3)); //<-- 16!

//functions can affect global scope variables but global scope variables can't affect function scope variables
let x = 3;
x = addToTheNumber(x);
console.log(x)

// console.log(theNumber) // <-- theNumber is only accessible inside function scope. therefore this will return undefined

//Closures
/**
 * the reason for the existence of the function scope is Javascript forms closures, a closure consists of a function call and
 * any local scope variables that were in its scope at the time of its creation
 * for example */

function makeWelcome(welcome) {
  return function(name) {
    return welcome + name;
  };
}

var makeHello = makeWelcome("Hello ");
var makeHola = makeWelcome("Hola ");

console.log(makeHello('Roger'));  // Hello Roger
console.log(makeHola('Roger')); // Hola Roger

/**you would think that this wouldnt work because of the nesting functions, but due to closures, welcome and name share
 * a lexical environment and are available to operate with eachother at the time of the function call. */