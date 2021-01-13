/**
 * Part 2
 *
 * In this file, we're going to create some
 * Functions to work with our data created in
 * data.js.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function search(arr, str){
    for (let i = 0; i < arr.length; i++){
        if(str === arr[i].name){
    return arr[i];
 } 
    } return null;
}

//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function replace(arr, str, obj){
    for (let i = 0; i < arr.length; i++){
        if(str === arr[i].name){
            arr[i] = obj
        }
    }
}

//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function remove(arr, str){
    for (let i = 0; i < arr.length; i++){
        if(str === arr[i].name){
            arr.splice(i);
        }
    }
    
}

//////////////////////////////////////////////////////////////////////
// Step 4 - Add ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function add(arr, obj){
    let result = true
    if(obj.name.length <= 0){
        result = false;
    }
    if(obj.species.length <= 0){
        result = false;
    }
     for (let i = 0; i < arr.length; i++){
        if(obj.name === arr[i].name){
            result = false
        }
     }
    if(result === true){
        arr.push(obj)
    }
}


/**
 * You did it! You're all done with Matchy!
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var search, replace, remove, add;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.search = search || null;
    module.exports.replace = replace || null;
    module.exports.remove = remove || null;
    module.exports.add = add || null;
}
