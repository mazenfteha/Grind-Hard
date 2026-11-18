/**

 * 1. Problem Statement
Given an array of numbers and a target, find two numbers whose sum equals the target.
nums = [2, 7, 11, 15]
target = 9

2 + 7 = 9
Return [2, 7]
 */

function twoSum(nums: number[], target: number): number[] {
  let seen = new Map<number, number>();

  for (const num of nums) {
    let needed = target - num; 
    if (seen.has(needed)) {
      return [needed, num]
    } else {
      seen.set(num, num)
    }
  }
  return []
}

// Test 
const nums = [2, 7, 11, 15];
const target = 9;
const twoSumResult = twoSum(nums, target);
console.log(twoSumResult);
