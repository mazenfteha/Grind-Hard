/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    for(let i = 0; i < nums.length - 1 ; i++) {
        let minIndex = i 
        for(let j = i + 1 ; j < nums.length ; j++){
            if(nums[j] < nums[minIndex]) {
                minIndex = j
            }
        }
        [nums[minIndex] , nums[i]] = [nums[i] , nums[minIndex] ]
    }
    return nums 
};