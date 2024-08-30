/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let left = 0;
    let right = nums.length - 1

    while(left <= right) {
        let mid = Math.floor((left + right) / 2)

        if(target === nums[mid]) {
            return mid
        }

        // we need to check portion of the array we in
        //left sorted portion 
        if(nums[left] <= nums[mid]) {
            if(target > nums[mid] || target < nums[left]){ //search right
                left = mid + 1
            }else { //search left
                right = mid - 1
            }
        } else { //right sorted portion
            if(target < nums[mid] || target > nums[right]) { //search left
                right = mid - 1
            } else { // search right
                left = mid + 1
            }
        }
    }
    return -1
};