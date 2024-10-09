/**
 * Problem :
 * **Given two strings `s` and `t`, return `true` if the two strings 
 * are Permutation  of each other, otherwise return `false`.**

**An Permutation (like anagram) is a string that contains the exact same characters as another string,
but the order of the characters can be different.**
 */

const checkPermute = function(stringOne, stringTwo) {
  // check if two strings lengths are equal if not return false 
  if (stringOne.length !== stringTwo.length) return false 
  // else sort and compare
  let stringOneSorted = stringOne.split('').sort().join('');
  let stringTwoSorted = stringTwo.split('').sort().join('');
  return stringOneSorted === stringTwoSorted;
}

// Test cases.

console.log(checkPermute('abc', 'bca')); // true
console.log(checkPermute('abc', 'abd')); // false
console.log(checkPermute('abc', 'abc')); // true
console.log(checkPermute('abc', 'def')); // false

