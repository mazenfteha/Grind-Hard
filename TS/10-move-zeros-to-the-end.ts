/**
 * 🧩 Problem 10 — Move Zeros to the End
Given an array of numbers, move all 0s to the end while keeping the relative order of the non-zero numbers.
Example
Input:
[0, 1, 0, 3, 12]

Output:
[1, 3, 12, 0, 0]
Notice -> keep all non-zero numbers with same order 
 */

// [ non-zero numbers | zeros ]
// Two Steps : collect non-zero values - fill the remaining specs with zeros 


function moveZeroes (nums: number[]) : void {
  let insertIndex = 0; // Where should I put the next non-zero number?

  // move zeros at the end - all non zeros at the front
  for(const num of nums) {
    if(num !== 0) {
      nums[insertIndex] = num;
      insertIndex ++;
    }
  }

  // fill the remaining positions at the end 
  while(insertIndex < nums.length) {
    nums[insertIndex] = 0;
    insertIndex ++;
  }
  
}
