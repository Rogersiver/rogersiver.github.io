////////////////////////////////////////////////////////////////////////////////
// min /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function min(x, y) {
  if(x<y){
    return x;
  } else if(y<x){
    return y;
  } else if(y === x){
    return 0;
  }
}

////////////////////////////////////////////////////////////////////////////////
// isEven //////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function isEven(n) {
  //base case 1 you know the number is even
    if (n === 0) {
      //its even return true
        return true;
    } 
    //base case 2 you know the number is odd
    if (n === 1){
      //it's odd return false
        return false;
    } 
    //if n is a negative number
    if (n <= 0){
      //recurse in reverse
      return isEven(n + 2);
    }
    // recursive case in reverse
    return isEven(n - 2);
       
} 

////////////////////////////////////////////////////////////////////////////////
// countChars //////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function countChars(array, value, counter = 0) {
  //if the arrays length reaches 0 return the count
  if(array.length === 0){return counter;
    
  }
  //if the arrays length is greatere than zero 
  else if(array.length > 0){
    //if the current value is the value were checking for
    if(array[0] === value){
      //increase the counter by one
      counter++;
    }
    //return a recursive call of the function with the array with one less value in it
    return countChars(array.slice(1), value, counter);
    
  }
  //return the counter at the very end
  return counter;
}

////////////////////////////////////////////////////////////////////////////////
// countBs /////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function countBs(string){
return string.split("").reduce(function(acc, curr){
  if(curr === 'b' || curr === "B"){
    acc++;
    return acc;
  } else {
    return acc;
  }
}, 0);
}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    min,
    isEven,
    countBs,
    countChars,
  };
};
