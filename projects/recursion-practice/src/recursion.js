// Solve all of the following prompts using recursion.

// 1. Calculate the factorial of a number.  The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example:  5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5);  // 120
var factorial = function(n) {
  if (n < 0){
    return null;
  }
  else if(n === 0){
    return 1;
  } else {
    return n * factorial(n - 1)
  } 
};
// 2. Compute the sum of an array of integers.
// Example:  sum([1, 2, 3, 4, 5, 6]);  // 21

var sum = function(array) {
  //base case array.length = 0
if(array.length === 0) return 0;
//recursive case
return array[0] + sum(array.slice(1));
};

// 3. Sum all numbers in an array containing nested arrays.
// Example: arraySum([1,[2,3],[[4]],5]); // 15
var arraySum = function(array) {

};

// 4. Check if a number is even.
var isEven = function(n) {
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

// 5. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21
var sumBelow = function(n) {
  //basecase if n gets to 0 return 0
  if(n === 0) return 0;
  //if n is a positive number, return n - 1 plus the recursive call of n - 1 (the next number down)
  else if(n > 0) return (n - 1) + sumBelow(n - 1);
  //if n is a negative number do the same thing in reverse
  else if(n < 0) return (n + 1) + sumBelow(n + 1);
  

};

// 6. Get the integers in range (x, y).
// Example:  range(2, 9);  // [3, 4, 5, 6, 7, 8]
var range = function(x, y, arr = []) {
  //if x is less than y
  if (x < y) {
    //but if x is not y - 1
    if (x !== y - 1) {
      //increment x by 1
      x++;
      //add x to default parameter array
      arr.push(x);
      //recursively call x until it is no longer less than y
      range(x, y, arr);
    }
    //return the default param array
    return arr;
  }
  //if x is equal to y
  else if (x === y) {
    //return the empty array because there is no range
    return arr;
  }
  //final recursion case (if x > y)
  else {
    //if x is not equal to y + 1
  if(x !== y + 1) {
    //decrement x
    x--;
    //add it to variable array
    arr.push(x);
    //recursively call until x is no longer greater than y
    range(x, y, arr);
  }
  //return default parameter array
  return arr;
  }
}

// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64.  Here, 8 is the base and 2 is the exponent.
// Example:  exponent(4,3);  // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number

    var exponent = function(base, exp) {
      //BaseCase if exponent is zero
  if (exp === 0) {
    //return 1 because anything to the zeroth power is 1
    return 1;
    //if the exponent is a negative number
  } else if (exp < 0) {
    //recursive case 1 for negative numbers
    //multiply the base by the exponent 
    return (parseFloat((1 / base * exponent(base, exp + 1)).toFixed(5)));
  }
  //recursive case 2 for positive nummbers, multiply base by itself but with the increment one less
  return base * exponent(base, exp - 1);
};


// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false
var powerOfTwo = function(n){
  if(n < 1) return false;
  if(n === 1 || n === 2) return true;
  return powerOfTwo(n / 2);
  
};

// 9. Write a function that accepts a string a reverses it.
var reverse = function(string, newStr = '') {
if(string.length === 0){
  
  
  return newStr;
}
   newStr += string[string.length - 1]
  
  return reverse(string.substring(0, string.length - 1), newStr);
};

// 10. Write a function that determines if a string is a palindrome.
var palindrome = function(string) {
  //basecase, if the string length is ever less than or equal to 1 its a palindrome
  if(string.length <= 1) {
    //return true
    return true;
  }
  //make the string all lowercase and remove the spaces from it.
string = string.toLowerCase().replace(/\s/g, '');
//the first letter is the first index of the string
let firstLetter = string[0];
//the last letter is the last index of the string
let lastLetter = string[string.length - 1];
//if these are the same (recursive case)
if (firstLetter === lastLetter) {
  //create substring without the first and last in it
  let stringWithoutFirstAndLastLetter = string.substring(1, string.length -1);
//recursively call the string taking out the first and last letter each time until basecase is reached or they are not equal
  return palindrome(stringWithoutFirstAndLastLetter);
  //if the first letter does not equal the last letter
} else {
  //return false
  return false;
}
};

// 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4
var modulo = function(x, y) {
  //basecase 1 if x is equal to y there is no remainder
  if(x === y){
    //return 0 there is no remainder
    return 0
  }
  //recursive case y is less than x ( we are dividing x by y)
  if(y < x){
    //return a recursive call of y subtracted from x with y as the second argument
    return modulo(x - y, y);
  } else {
    //return x when y is go longer less than x.
    return x;
  }
};

// 12. Write a function that multiplies two numbers without using the * operator  or
// JavaScript's Math object.
var multiply = function(x, y) {
  if(y === 1){
    return x;
  }else if(x === 0){
    return 0;
  } else if(y > 0){
    return (x + multiply(x, y -1));
  } else if(y < 0){
    return -multiply(x, -y);
  } else {
    return x + multiply(x, y - 1);
  }
};

// 13. Write a function that divides two numbers without using the / operator  or
// JavaScript's Math object.
var divide = function(x, y) {

};

// 14. Find the greatest common divisor (gcd) of two positive numbers.  The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.
// Example:  gcd(4,36);  // 4
// http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm
var gcd = function(x, y) {
};

// 15. Write a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('', '') // true
// compareStr('tomato', 'tomato') // true
var compareStr = function(str1, str2) {
  //if the strings are empty
  if(str1.length === 0 && str2.length === 0){
    //they are the same
    return true
  }
  //base case if they both have one character left after all the recursion
if(str1.length === 1 && str2.length === 1){
  //and those characters are the same 
  if(str1[0] === str2[0]) {
    //return true
    return true;
  }
}
//recursive case if the first character of the strings are the same
if(str1[0] === str2[0]){
  //return a recursive call of the function but with the strings with 1 less character in them.
  return compareStr(str1.slice(1), str2.slice(1))
}
//if the first chars ever dont match
if(str1[0] !== str2[0]) {
  //return false
  return false;
}
};

// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.
var createArray = function(str, arr = []){
  //multiply the length by itself
  const length = (str.length * str.length);
  //if the length is 0 return the array
  if(str.length === 0){
    return arr;
  }
  //if the arrays length and total length meet return the array
  if(arr.length === length){
    return arr;
  }
  //recursive case if the lengths arent equal
  if(length !== arr.length){
    //push the first value of string
    arr.push(str[0]);
    //run the function without the first value of string
  return createArray(str.slice(1), arr);
  }
};

// 17. Reverse the order of an array
var reverseArr = function (array) {
    if (!array.length) return array;
     return reverseArr(array.slice(1)).concat(array[0]);
};

// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]
var buildList = function(value, length, arr = []) {
  
  if(arr.length === length){
    return arr;
  } 
  
  if(arr.length < length){
    arr.push(value);
    return buildList(value, length, arr);
  }
  
};

// 19. Count the occurence of a value inside a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2
var countOccurrence = function(array, value, counter = 0) {
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
    return countOccurrence(array.slice(1), value, counter);
    
  }
  //return the counter at the very end
  return counter;
};

// 20. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]
var rMap = function(array, callback, mapArr = []) {
  //basecase when the arrays length reaches zero
if(array.length === 0){
  //return the mapped array
  return mapArr;
}
//recursive case if the arrays length is not zero
if(array.length > 0){
  //add its first value to the mapped array after applying the callback function to it
  mapArr.push(callback(array[0]));
}
//rerun the function with one less element in the array until array.length reaches 0
return rMap(array.slice(1), callback, mapArr);
};

// 21. Write a function that counts the number of times a key occurs in an object.
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countKeysInObj(testobj, 'r') // 1
// countKeysInObj(testobj, 'e') // 2
var countKeysInObj = function(obj, key){};

// 22. Write a function that counts the number of times a value occurs in an object.
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countValuesInObj(testobj, 'r') // 2
// countValuesInObj(testobj, 'e') // 1
var countValuesInObj = function(obj, value) {
};

// 23. Find all keys in an object (and nested objects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.
var replaceKeysInObj = function(obj, key, newKey) {
};

// 24. Get the first n Fibonacci numbers.  In the Fibonacci Sequence, each subsequent
// number is the sum of the previous two.
// Example:  0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5);  // [0, 1, 1, 2, 3, 5]
// Note:  The 0 is not counted.
var fibonacci = function(n) {
};

// 25. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2
var nthFibo = function(n) {
  //if n is a negative number
if(n < 0){
  //return null
  return null;
}
//if n is less than 2 (if n is 1 or 0)
if(n < 2){
  //return just n
  return n;
}
//if in is not 0 or 1, return two recursive calls added together, each with a preceding value
return nthFibo(n - 1) + nthFibo(n - 2);
};

// 26. Given an array of words, return a new array containing each word capitalized.
// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
var capitalizeWords = function(input, mapArr = []) {
  
  if(input.length === 0){
    return mapArr;
  }
  
  if(input.length > 0){
    mapArr.push(input[0].toUpperCase());
  }
  return capitalizeWords(input.slice(1), mapArr);
  
};

// 27. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car', 'poop', 'banana']); // ['Car', 'Poop', 'Banana']
var capitalizeFirst = function(array, mapArr = []){
  
if(array.length === 0){
  return mapArr;
}

if(array.length > 0){
  mapArr.push(array[0][0].toUpperCase() + array[0].slice(1));
}
return capitalizeFirst(array.slice(1), mapArr);

};

// 28. Return the sum of all even numbers in an object containing nested objects.
// var obj1 = {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 2}, ee: 'car'}
// };
// nestedEvenSum(obj1); // 10
var nestedEvenSum = function(obj) {
};

// 29. Flatten an array containing nested arrays.
// Example: flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
var flatten = function(arrays) {
};

// 30. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {'p':1, 'o':2, 't':2, 'a':1}
var letterTally = function(str, obj = {}, strArr = str.split("")) {
  //basecase if we get to the end of the split up string return object
  if(strArr.length === 0){
    return obj;
  }
  
  //recursive case if the strings length is greater than 0
  if(strArr.length > 0){
    //declare current letter for readibility
    var currLett = strArr[0];
    //if the object has the key of the current letter
    if(obj[currLett]){
      //add one to this keys value
      obj[currLett] += 1;
    }
    //if the object doesnt have this as a key
    if(!obj[currLett]){
      //create it with a value of one
      obj[currLett] = 1;
    }
    //return the function recursed with one les value in the string array
    return letterTally(str, obj, strArr.slice(1))
  }
};

// 31. Eliminate consecutive duplicates in a list.  If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// Example: compress([1, 2, 2, 3, 4, 4, 5, 5, 5]) // [1, 2, 3, 4, 5]
// Example: compress([1, 2, 2, 3, 4, 4, 2, 5, 5, 5, 4, 4]) // [1, 2, 3, 4, 2, 5, 4]
var compress = function(list, arr = []) {
  if(list.length === 0){
    return arr;
  }
  if(list.length > 0){
    if(list[0] === list[1] && list[0] === list[2]){
      arr.push(list[2]);
      return compress(list.slice(3), arr);
    }
    if(list[0] === list[1]){
      arr.push(list[1]);
      return compress(list.slice(2), arr);
    } else {
      arr.push(list[0]);
    return compress(list.slice(1), arr);
    }
  }
  
};

// 32. Augment every element in a list with a new value where each element is an array
// itself.
// Example: augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
var augmentElements = function(array, aug) {
};

// 33. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]
var minimizeZeroes = function(array, arr = []) {
    if(array.length === 0){
    return arr;
  }
  if(array.length > 0){
    if(array[0] === 0 && array[1] === 0 && array[2] === 0){
      arr.push(array[0]);
      return minimizeZeroes(array.slice(3), arr);
    }
    if(array[0] === 0 && array[1] === 0){
      arr.push(array[0]);
      return minimizeZeroes(array.slice(2), arr);
    } else {
      arr.push(array[0]);
    return minimizeZeroes(array.slice(1), arr);
    }
  }
  
};

// 34. Alternate the numbers in an array between positive and negative regardless of
// their original sign.  The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]
var alternateSign = function(array, arr = []) {
  //basecase
  if(array.length === 0){
    return arr;
  }
  //declare thease eachtime
  let lastNumber = arr[arr.length - 1];
  let currNumber = array[0];
  //recursive cases
  if(array.length > 0){
    //makes sure code starts with a positive integer
    if(arr.length === 0){
      if(currNumber < 0){
        arr.push(-currNumber);
        return alternateSign(array.slice(1), arr);
      } else {
        arr.push(currNumber);
        return alternateSign(array.slice(1), arr)
      }
    }
    //if the last number added to array was negative
    if(lastNumber < 0){
    //add a positive number no matter what
    if(currNumber < 0){
      arr.push(-currNumber);
      return alternateSign(array.slice(1), arr)
    } else {
      arr.push(currNumber);
      return alternateSign(array.slice(1), arr);
    }
    //if the last number added was positive
  } else {
    //add a negative number no matter what
    if(currNumber < 0){
      arr.push(currNumber);
      return alternateSign(array.slice(1), arr);
    } else {
      arr.push(-currNumber);
      return alternateSign(array.slice(1), arr);
    }
  }

}
return arr;
};

// 35. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"
var numToText = function(str, newStr = [], words = str.split(" ")){
  if(words.length === 0){
    return newStr.join(" ");
  }
  if(words.length > 0){
    words[0] = words[0].replace("1", "one");
    words[0] = words[0].replace("2", "two");
    words[0] = words[0].replace("3", 'three');
    words[0] = words[0].replace("4", 'four');
    words[0] = words[0].replace("5", "five");
    words[0] = words[0].replace("6", "six");
    words[0] = words[0].replace("7", "seven");
    words[0] = words[0].replace("8", "eight");
    words[0] = words[0].replace("9", "nine");
    newStr.push(words[0]);
    return numToText(str, newStr, words.slice(1))
  } else {
    newStr.push(words[0]);
    return numToText(str, newStr, words.slice(1))
  }
};

// *** EXTRA CREDIT ***

// 36. Return the number of times a tag occurs in the DOM.
var tagCount = function(tag, node) {
};

// 37. Write a function for binary search.
// Sample array:  [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
// console.log(binarySearch(5)) will return '5'

var binarySearch = function(array, target, min, max) {
};

// 38. Write a merge sort function.
// Sample array:  [34,7,23,32,5,62]
// Sample output: [5,7,23,32,34,62]
var mergeSort = function(array) {
};



//-----------------------------------
// DON'T REMOVE THIS CODE -----------
//-----------------------------------

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {

  /**
   * Due to some node-related issues with spying on recursive functions,
   * it isn't possible to test them with sinon spies like so:
   *
   *   var originalSum = sum;
   *   sum = sinon.spy(sum);
   *
   *   sum([1, 2, 3, 4, 5, 6]);
   *
   *   // callCount will always 1 causing, this test to always fail in node :(
   *   expect(sum.callCount).to.be.above(1);
   *
   *   sum = originalSum;
   *
   * However, we can work around this by using proxies!
   * If you reassign the function to a proxy and use the `apply` trap,
   * you can make a `proxyCallCount` property on the function,
   * increment it each time it's called, and then test that instead.
   *
   *   sum.proxyCallCount = 0;
   *   sum([1, 2, 3, 4, 5, 6]);
   *   expect(sum.proxyCallCount).to.be.above(1);
   *
   * MDN Proxies: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy
   * MDN Proxy Apply Trap: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/apply
   */
  const createSpyProxy = (func) => {
    func.toString = func.toString.bind(func);

    const recursiveFunctionCallCounterHandler = {
      apply(target, thisArg, args) {
        target.proxyCallCount = target.proxyCallCount ? target.proxyCallCount + 1 : 1;
        return target.apply(thisArg, args);
      },
    };

    return new Proxy(func, recursiveFunctionCallCounterHandler);
  };

  factorial = createSpyProxy(factorial);
  sum = createSpyProxy(sum);
  arraySum = createSpyProxy(arraySum);
  isEven = createSpyProxy(isEven);
  sumBelow = createSpyProxy(sumBelow);
  range = createSpyProxy(range);
  exponent = createSpyProxy(exponent);
  powerOfTwo = createSpyProxy(powerOfTwo);
  reverse = createSpyProxy(reverse);
  palindrome = createSpyProxy(palindrome);
  modulo = createSpyProxy(modulo);
  multiply = createSpyProxy(multiply);
  divide = createSpyProxy(divide);
  gcd = createSpyProxy(gcd);
  compareStr = createSpyProxy(compareStr);
  createArray = createSpyProxy(createArray);
  reverseArr = createSpyProxy(reverseArr);
  buildList = createSpyProxy(buildList);
  countOccurrence = createSpyProxy(countOccurrence);
  rMap = createSpyProxy(rMap);
  countKeysInObj = createSpyProxy(countKeysInObj);
  countValuesInObj = createSpyProxy(countValuesInObj);
  replaceKeysInObj = createSpyProxy(replaceKeysInObj);
  fibonacci = createSpyProxy(fibonacci);
  nthFibo = createSpyProxy(nthFibo);
  capitalizeWords = createSpyProxy(capitalizeWords);
  capitalizeFirst = createSpyProxy(capitalizeFirst);
  nestedEvenSum = createSpyProxy(nestedEvenSum);
  flatten = createSpyProxy(flatten);
  letterTally = createSpyProxy(letterTally);
  compress = createSpyProxy(compress);
  augmentElements = createSpyProxy(augmentElements);
  minimizeZeroes = createSpyProxy(minimizeZeroes);
  alternateSign = createSpyProxy(alternateSign);
  numToText = createSpyProxy(numToText);
  tagCount = createSpyProxy(tagCount);
  binarySearch = createSpyProxy(binarySearch);
  mergeSort = createSpyProxy(mergeSort);

  module.exports = {
    factorial,
    sum,
    arraySum,
    isEven,
    sumBelow,
    range,
    exponent,
    powerOfTwo,
    reverse,
    palindrome,
    modulo,
    multiply,
    divide,
    gcd,
    compareStr,
    createArray,
    reverseArr,
    buildList,
    countOccurrence,
    rMap,
    countKeysInObj,
    countValuesInObj,
    replaceKeysInObj,
    fibonacci,
    nthFibo,
    capitalizeWords,
    capitalizeFirst,
    nestedEvenSum,
    flatten,
    letterTally,
    compress,
    augmentElements,
    minimizeZeroes,
    alternateSign,
    numToText,
    tagCount,
    binarySearch,
    mergeSort,
  };
}

//-----------------------------------
