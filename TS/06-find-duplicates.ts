/**
 * Find duplicates in an array
 * @param arr 
 * @returns an array of duplicates
 * 
 * Given an array of numbers, find the values that appear more than once.
 * Example
[1, 2, 3, 2, 4, 1]

Expected:
[1, 2]
 */

// we need to remember how many times we have seen each number
// we should use a unique data structure -----> Set
// we need to answer do i see this number before, Set is perfect for this 

function findDuplicates(arr: number[]) : number[] {
  // initialize 2 sets 
  let seen = new Set<number>(); // for store each number of array when we loop over it 
  let duplicates = new Set<number>(); // to store duplictates numbers only

  for (const num of arr) {
    if(seen.has(num) {
      duplicates.add(num)
    } else {
      seen.add(num)
    }
  }

  return Array.form(duplicates)
} 


console.log(findDuplicates([1, 2, 3, 2, 4, 1]));
// [2, 1]

console.log(findDuplicates([1, 2, 3, 4]));
// []

console.log(findDuplicates([5, 5, 5, 5]));
// [5]
