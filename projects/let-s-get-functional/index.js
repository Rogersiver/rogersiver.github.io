// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require('underscore');

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./rogersiver.github.io/projects/let-s-get-functional
 *
 *    IMPORTANT: Make sure you replace <YOUR_GITHUB_FOLDER with your actual github folder name that is in your workspace.
 */

var maleCount = function(array) {
let allMales = _.filter(
    array, 
    function(customerObj){
        return customerObj.gender === 'male';
    });
    return allMales.length;
};

var femaleCount = function(array) {
let allFemales = _.filter(
    array, 
    function(customerObj){
        return customerObj.gender === 'female';
    });
    return allFemales.length;
};

var oldestCustomer = function(array){
// max 0
var max = 0;
// reduce the array by the accumulator and each thing in the array (remember these can be any parameter and still do the same thing)
return array.reduce((acc, a) => {
    //if the age of the current customer in thee loop is greater than the max (starting with 0 it will be)
  if (a.age > max) {
      //the accumulator is this persons name
    acc = a.name
    //the max (so far) is this persons age
    max = a.age;
  }
  //return the correct name after array is reduced to oldest person
  return acc;
  //empty string as starting seed
}, "")
};


var youngestCustomer = function(array){
    
    var min = 200;
return array.reduce((acc, a) => {
  if (a.age < min) {
    acc = a.name
    min = a.age;
  }
  return acc;
}, "")
};

var averageBalance = function(array){
var avg = array.reduce((total, nextPerson) => total + (Number(nextPerson.balance.replace(/[^0-9.-]+/g,""))), 0) / array.length;
      return avg;
};

var firstLetterCount = function(array, letter){
    let startsWith = _.filter(array, function(customerObj){

return customerObj.name[0].toUpperCase() === letter.toUpperCase(); 
 
});
   return startsWith.length;
}


var friendFirstLetterCount = function(array, customer, letter){
    //for all the people in the array of objects of people
for(let person of array){
    //if the persons name is the customer were trying to loop through
    if(person.name === customer){
        //declare return array as a filtered version of the persons friends list
        var newArr = _.filter(person.friends, function(friend){
            //the predicate for the function is the first letter of the name being true
            return friend.name[0].toUpperCase() === letter.toUpperCase();
        });
    }
}
    //return the filtered
    return newArr.length
};

var friendsCount = function(array, name){
//let result equal a filtered version of array, with each thing in array being represented by customer obj
let result = _.filter(array, function(customerObj){
    //create each customer object's friends array.
    let customerObjFriendsArr = customerObj.friends
    //loop through the friends array
   for(let i = 0; i < customerObjFriendsArr.length; i++){
       //if the name given in the function is the current name in the friends array
       if(name === customerObjFriendsArr[i].name){
           //then that customer object will return true!
           return true;
       }
   } 
});
//since we have big whole customer objects in our array for each person that has the name in their list
//we need to pluck just the "name" keys out of the result array
    return _.pluck(result, "name")
};

var topThreeTags = function(arr){
    //declare variable result
var result = []
//assign the variable of tagsArray to a reduced version of the input array.
var tagsArray = _.reduce(arr, function(acc, curr){
    //get the tags from the current customer object and let it equal tags
let tags = curr.tags;
//concat all tags from each person into empty seed array
acc = acc.concat(tags); 
     return acc;
},[]);
// console.log(tagsArray);
//code that counts the tags and puts them in a counter object with the objects as keys and numbers as values
var tagsCountObj =_.reduce(tagsArray, function(acc, curr){
    if(acc[curr]){
        acc[curr] += 1;
    } else {
        acc[curr] = 1;
    } return acc;
}, {});
//code that gets the counters with the max value
    var getMax = object => {
        return Object.keys(object).filter(x => {
             return object[x] == Math.max.apply(null, 
             Object.values(object));
       });
    };
result = getMax(tagsCountObj)
return result;
};

var genderCount = function(arr){
   
   //return a reduced version of the customers array
  return  _.reduce(arr, function(acc, curr){
      //set the current persons gender to this variable
   var currentPersonsGender = curr.gender;
   //if the accumulator object already has this gender, add 1 to the value
   if(acc[currentPersonsGender]){
       acc[currentPersonsGender] += 1;
       //if it doesn't make the value 1 cause this is the first one
   } else {
       acc[currentPersonsGender] = 1;
   }
    ;
    //return the object at the end
    return acc
   },{})
   
  
};

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
