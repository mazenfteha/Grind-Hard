/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const hashMap = new Map() // value : index
    for(let index = 0 ; index < nums.length ; index ++){
        const num = nums[index]
        const complement = target - num

        const sumIndex = hashMap.get(complement)
        const isTarget = hashMap.has(complement)
        
        if(isTarget) return [index , sumIndex]
        hashMap.set(num , index) // value : index

    }
    return [-1, -1]
};