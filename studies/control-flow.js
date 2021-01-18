/*
╔═╗╔═╗╔╗╔╔╦╗╦═╗╔═╗╦    ╔═╗╦  ╔═╗╦ ╦
║  ║ ║║║║ ║ ╠╦╝║ ║║    ╠╣ ║  ║ ║║║║
╚═╝╚═╝╝╚╝ ╩ ╩╚═╚═╝╩═╝  ╚  ╩═╝╚═╝╚╩╝
*/

/**
 * Control flow refers to the order in which we structure the conditional statements
 * that make up the logic of our code to be executed. Javascript gives us many options
 * for changing how this logic plays out. these statements allow us to create forks in the road
 */
 
 var a = 1;
 var b = 2;
 
 // IF
/**
 * the most conditional logic tool that javascript gives us to control control flow is
 * the if statement. The if statement quite literally means if the conditional statement is true execute the code
 * inside the code block.
 * 
 * the conditional statement after the if is inside parentheses ()
 * The code block is denominated by curly braces {}
 */
 
if(a != b){
    console.log('the above statement was not true'); //M-- this runs because the above statement was infact not true
}

 // IF ELSE
/**
 * in addition to the if statement, we can add a next condition to be tried after the first conditional
 */
 
 if(a != b){
    console.log('the above statement resolved to true'); //M-- this runs because the above statement was infact not true
} else if (a === (b - 1)){
 console.log('this one also resolved to true')
} 

// Else
/**
 * after you've created an if statement, instead of creating more logic, you can simply use else with no conditional
 * statement to create code that runs if the conditional next to if returns false */
 
 if(a === b){
    console.log('the above statement resolved to true'); //<-- this code doesnt run cause the statement resolves to false
} else if (a === (b + 1)){
 console.log('this one also resolved to true'); // <-- this code doesn't run either cause the statement is false
} else {
 console.log('everything else was false!'); //<-- this code runs because all other statements were false
}

// Switch
/**
 * a switch statement is different syntax that you can use to create conditional logic in your code*/
 var color = "blue"
 
 switch(color){
  case "purple": 
   console.log("the color is purple");
  break;
  
  case "blue":
   console.log("the color is blue"); //<-- this is the only code that runs because the color is "blue"
  break;
  
  case "red":
   console.log("the color is red");
  break;
 }
 