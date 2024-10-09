/**
 * Is Unique : Implement an algorithm to determine if a string has al uniqueness
 * characters
 */
function isUnique(str) {
  // Create a boolean array of size 256 (ASCII characters)
  let charSet = new Array(256).fill(false)

  // Iterate each charcter in the array
  for(let i =0; i < str.length ;i++) {
    //convert each char to it's ASCII 
    let val = str.charCodeAt(i)

    // If the value is already in the array, return false
    if (charSet[val]) return false

    // Otherwise, mark the character as visited
    charSet[val] = true
  }
  // If no duplicate characters found, return true
  return true
}

// Test the function

console.log(isUnique("hello")); // Output: false (Duplicate characters)
console.log(isUnique("world")); // Output: true (No duplicate characters)


// with o(n^2)
// for each character, check remaining characters for duplicates
function isUniquee(str) {
    for (let i = 0; i < str.length; i++) {
        for (let j = i + 1; j < str.length; j++) {
            if (str[i] === str[j]) {
                return false;
            }
        }
    }
    return true;
}

console.log(isUniquee("hello")); // Output: false (Duplicate characters)
console.log(isUniquee("world")); // Output: true (No duplicate characters)
