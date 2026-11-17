/**
    - Given an array, return a new array containing only unique values.
    - Example
    [1, 2, 3, 2, 4, 1] → [1, 2, 3, 4]
 */


// intialize set 
// add array to the set 
// turn it to array again

function removeDuplicates(arr: number[]) : number[] {
  let uniqueNumbers = new Set(arr);

  return Array.form(uniqueNumbers);
}
