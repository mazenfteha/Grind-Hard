/**
 * 
 * 
🧩 Find the Missing Number
Problem
Given an array containing n distinct numbers from 0 to n, find the one missing number.

Input:
[3, 0, 1]

Expected:
0  1  2  3

Actual:
3  0  1

Missing:
2
 */

// Calculate the sum of all numbers that SHOULD exist. 0 + 1 + 2 + 3 = 6
// Then calculate the sum of the numbers we ACTUALLY have: 3 + 0 + 1 = 4 
// Then Expected - actual 6 - 4 = 2 which is the missing number 

function findMissing(nums: number[]): number {
  // get numbers of all actual elments in the arr
  let n = nums.length;

  // get expected Sum using formela : n*(n+1) /2;
  let expected = n * (n + 1) / 2;

  // calculate sum of actual numbers 
  let actual = 0;
  for (const num of nums) {
    actual += num
  }
  return expected - actual;
  
}

// Test
const numbers = [3, 0, 1];
const missingNum = missingNumber(numbers);
console.log(missingNum); // Output: 2
