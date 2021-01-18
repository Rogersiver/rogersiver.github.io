/*
╦  ╦╔═╗╦═╗╦╔═╗╔╗ ╦  ╔═╗╔═╗
╚╗╔╝╠═╣╠╦╝║╠═╣╠╩╗║  ║╣ ╚═╗
 ╚╝ ╩ ╩╩╚═╩╩ ╩╚═╝╩═╝╚═╝╚═╝
 *
 * 0. To hold things in memory during the life-cycle of a program, we can use variables.  Variables
 * are named identifiers that can point to values of a particular type, like a Number, String,
 * Boolean, Array, Object or another data-type.  Variables are called so because once created, we
 * can CHANGE the value (and type of value) to which they point.
 *
 * 1. To create a variable we use the keyword, var, followed by a name (id or alias) for our
 * variable.
 *
 * 2. There are 2 phases of using variables: declaration and initialization (or assignment).
 */

// a. declaration //
var myName;

/*
 * At the declaration phase, the variable myName is undefined because we have NOT initialized
 * it to anything
 */
console.log(myName); // prints => undefined

// b. initialization or assignment //
myName = 'john';
console.log(myName); // prints => john

// c. re-assignment //
myName = 'bob';
console.log(myName); // prints => bob

// NOTE: We can assign and re-assign anything to a variable - we cannot do this with constants //
var myVariable = 1;
var myVariable = true;
myVariable = "someString";

/*
Var let and Const

 * Variables declared using var are value containers that can be declared globally and 
 * ARE hoisted depending on the scope in which they are declared, however you can also
 * declare variables using LET and CONST
 
 
 //Let
 
 * The let statement is a way to define a block scope local variable
 *      1. it can be reassigned
 *      2. it cannot be redeclared
 *      3. is NOT hoisted
 *              3a. this is the key difference between let and var
 * 
 
 //This is an example of how a let statement changes the scope when defined inside of a function
*/

function letStatementExample(){
    let x = 1
{
 let x = 2;
 console.log(x);  // 2
}
console.log(x); // 2
}

// See how when we redeclare the let statements inside curly braces it doesnt change the global variable?
// lets see how that goes when we do the same thing with var!

function varStatementExample(){
    var x = 1
    {
        var x = 2;
        console.log(x); // <-- 2
    }
    console.log(x); // <--2
}

//IMPORTANT NOTE: none of these variables can be referenced outside of this function, due to it's scope
    
/** See the global variable var can be redefined even inside of the function scope, 
 * but the block scope variable of let cannot
 * 
 * the CONST statement represents a value in your code that not only wont change but cannot change
 *      1. -- A variable declared with const CANNOT be reassigned
 *      2. -- A variable declared with const CANNOT be redeclared
 *      3. -- A variable declared with const IS NOT hoisted
 * 
*/

//here is an example of a const statement//

const a = 12;
const b = 'this cannot change'

//If i were to redeclare or reassign either of these variables instead of simply using them the code would fail

/**
 * HOISTING
 * 
 * hoisting is a process in which the interpreter does an initial pass over the code called the compile phase
 * it loads all global variables and function declarations into memory for use before execution of the code
 * 
 *      1. for both variable and function declarations
 *      2. taken to the very top of its scope
 *      3. Different types of data are hoisted differently 
 *          a. variables are only hoisted by their names and not their contents, they have no value til assigned
 *          b. functions are hoisted by their name as well as their code bodies
 *      4. function declarations hold precedence over variables
 *      
 * 
 */
 
//here youll see were using a variable and a function that dont exist yet and theyre working just fine
console.log(hoistedVar)
console.log(add(2,3))
//here we create both that function and variable
var hoistedVar = 14
function add(num, num){
    return (num + num);
}
//hoisting at work!