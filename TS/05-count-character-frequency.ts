/**
 * Given a string, count the frequency of each character in the string and return an object with the characters as keys and their corresponding frequencies as values
 * for example : "hello" → { h: 1, e: 1, l: 2, o: 1 }
 */

// we need to remember how many times we have seen each character  
// we should use unique data structure -----> Map

// Algorithm
/* for each character
        if we've seen it before
            increment it's count 
        else 
            initialize it to 1 (cause this is the first time we see it)
*/

function countCharacters(str: string): Map<string, number> {
  let counts = new Map<string, number>();

  for (const char of str) {
    if(counts.has(char)) {
      counts.set(char, counts.get(char)! + 1)
    } else {
      counts.set(char, 1)
    }
  }
  return counts 
}

// test
const string = "hello";
const frequencyMap = countCharacters(string);
console.log("frequency map of the string is : ", frequencyMap);
