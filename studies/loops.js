/*
╦  ╔═╗╔═╗╔═╗╔═╗
║  ║ ║║ ║╠═╝╚═╗
╩═╝╚═╝╚═╝╩  ╚═╝
*/

/**
 * loops allow us to iterate through a complex datatype in javascript and perform a task on each item
 * in the array or object, iterating through the container how the programmer choses, whether it be 
 * forwards, backwards, or by any set increment. This iteration process allows us to not write the same 
 * code many times over to complete the same task on similar objects. 
 */
 
 
 //FOR
 /*
  * the syntax of a for loop contains 3 main sections
 *      1. Start - create a counting variable
 *      2. Stop - repeat while condition is true
 *      3. Update - increase or decrease the counting variable
 * 
 * the start and stop statements are both boolean values created upon logic, however the update statement is a unary operator
 * the increment is how much to update each iteration
 * the index is the particular element of the container being accessed
 */
 
 // this for loop counts from 0 to 10, and logs each number to the console
 for(let i = 0; i <= 10; i++){
     console.log(i);
 }
 
 //translation - "i is equal to 0, if i is less than 10, increment i by one and run the code block
 //console.log will be called 10 times
 
 // this for loop does the same thing, only backwards
  for(let i = 10; i >= 0; i--){
     console.log(i);
 }
 
  //translation - "i is equal to 10, if i is greater than 0, decrement i by one and run the code block
 //console.log will be called 10 times
 
 // While
 /**
  * While loops are a different syntax for looping through values however your index variable must be declared outside*/
  let b = 0
  
  while ( b <= 10){
      console.log(b)
      b++
  }
  //translation = while i is less than or equal to 10, console.log the number and increment i by one
  
  //or while (condition is equal to true){run this block of code};
  
  let arr = [1, 2, 3, 4, 5];
  let obj = {key1:"value1", key2:"value2", key3:"value3"};
  
  //For in loop
  /**
   * we can use a for in loop to loop through the contents of an array, however it is not reccomended,
   * for in loops are more specifically for objects, while a for of loop is for iteratables like arrays
   * in is a keyword that specifically looks for an object to be used in the loop*/
   
 for(let key in obj){
     console.log(key); //<-- will log each key in the array to the console
 }
 
 //For Of Loop
 /**
  * we can use a for of loop to loop through the contents of iterables, like arrays. */
  for(let number of arr){
      console.log(number); // <-- will log each number in the array to the console.
  }
  
  
  // to loop over an array regardless of size we use its .length property
for (let i = 0; i <= arr.length; i++){
    console.log(arr[i]); //<-- uses bracket notation to console log each value in the array one by one
};

    //we can also do the exact same thing in reverse
for (let i = arr.length; i >= 0; i--){
    console.log(arr[i]); //<-- uses bracket notation to console log each value in the array one by one
};

//we can use the for in syntax from before to easily iterate through objects
//looping through object keys
for(let key in obj){
    console.log(key); //<-- loops through the object and logs each key
}
//looping through object values
for(let key in obj){
    console.log(obj.key); //<-- loops through the object and logs each value
}