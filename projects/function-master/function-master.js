//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//
function objectValues(object) {
    //create empty array
let arr = [];
//loop through the object values and fill array with values
for (var key in object){
    //add value to empty array
    arr.push(object[key]);
}
//return array with new values in it
return arr;

} 

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function keysToString(object) {
    //create empty array
    let arr = [];
    //loops through each key in the object and pushes it into the empty array
for (let key in object){
    arr.push(key);
    //returns all the strings in the array joined into a single string by a space
} return arr.join(' ');
}

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function valuesToString(object) {
    //declares empty array
        let arr = [];
    //same as previous loop but gets values
for (let key in object){
    let value = object[key];
if(typeof value === 'string'){
    arr.push(value);
}

} return arr.join(' ');
}

//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function arrayOrObject(collection) {
    //conditional statement that checks if a collection is an array or object and accounts for edge cases
      if(Array.isArray(collection)){
       return 'array';
      } else if (collection === null){
          return;
      } else if (collection instanceof Date){
          return;
      } else if (typeof collection === "object"){
          return 'object';
      }
}
     
      
       
   


//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeWord(string) {
    //capitalizes the first letter in a word
    return string[0].toUpperCase() + string.substring(1)
}

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeAllWords(string) {
    //splits a string, capitalizes all the words and returns it joined back together.
    let splitUpString = string.split(' ');
    for(let i = 0; i < splitUpString.length; i++){
       splitUpString[i] = capitalizeWord(splitUpString[i]);
    } return splitUpString.join(" ");
}

//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function welcomeMessage(object) {
    //creates capitalized name welcome message string
return "Welcome " + capitalizeWord(object.name) + "!";
}

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function profileInfo(object) {
    //returns formatted informational statement about object
return capitalizeWord(object.name) + " is a " + capitalizeWord(object.species);
}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function maybeNoises(object) {
    //if the object object contains noises
    if (object.noises) {
        //and noises is an array AND it has a length
        if (Array.isArray(object.noises) && object.noises.length > 0) {
            //put all the noises together in a string by a space
            return object.noises.join(" ");
        }
        //if !object.noises return that there arent any
    } return "there are no noises";

}

//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function hasWord(string, word) {
    //split up the string into an array
    let arr = string.split(' ');
    //go through each word
    for (let eachWord of arr) {
        //if the word is the test word yes
        if (eachWord === word) {
            return true
            
            //if not false
        } 
    } return false;
}

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function addFriend (name, object) {
    //if the object has friends
if(object.friends){
    //add the given name to the friends list
    object.friends.push(name);
    //return the object
    return object
}
}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function isFriend(name, object) {
    //if the object doesnt have any friends
    if (!object.friends){
        //return false
        return false;
    } 
    for(let friendsName of object.friends){
        //if it does and the name is the given one
        if(name === friendsName){
            //return true
            return true;
        }
    } //if none of this happens return false
     return false;
}
//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function nonFriends(name, array) {
//empty friends array
let friends = [];
//loop through people and add their friends to an array
for(let person of array) {
    //if the name is their name given add it to friends
    if(person.name === name){
        friends = person.friends;

    }
}
//all people
let names = []
// put all names into the array
for(let person of array) {
  names.push(person.name)
}


let nonFriends = [];
//go through names
for (let theName of names){
    //if friends doesnt have or the name is equal to the given name add it to non friends
  if (!(friends.includes(theName) || theName === name)){
    nonFriends.push(theName);
  }
} 
return nonFriends;
}

//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function updateObject(object, key, value) {
    //clone the object "the ... loops through and gets all the objects using spread syntax
let objectClone = {...object};
//adds the provided key and value
objectClone[key] = value;
//returns the cloned object
return objectClone;
}

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

function removeProperties(object, array) {
    //go through all of the array
for(let properties of array){
    //if the object has one of the same properties as the array
    if(object.hasOwnProperty(properties)){
        //delete it
        delete object[properties];
    }
}
}

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function dedup(array) {
    //declare variable array
let arr = [];
//for loop looping through the array
for(let i = 0; i < array.length; i++){
    //if the array doesnt already have it in it
    if (!arr.includes(array[i])){
        //put it in
        arr.push(array[i]);
    }
    //return the fixed array
} return arr
}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}