/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    let [left, right] = [0 , nums.length -1]

    while(left < right) {
        const mid = (left + right) >> 1
        const guess = nums[mid]
        const [leftNum , rightNum] = [nums[left], nums[right]]

        const isTarget = leftNum < rightNum //arr sorted and with no rotate
        if(isTarget) return leftNum

        const isTargetGreater = leftNum <= guess //search right
        if(isTargetGreater) {
            left = mid + 1
        }

        const isTargetLess = guess < leftNum //search left
        if(isTargetLess) {
            right = mid
        }

    }
    return nums[left]
};