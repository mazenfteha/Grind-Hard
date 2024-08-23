/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    // sort input array to avoid duplicates - find triplets [nums[i], nums[j], nums[k]]
    nums.sort((a, b) => a - b);
    const res = [];

    //Loop to pick first elment nums[i]
    for (let i = 0; i < nums.length; i++) {
        //Skip Duplicates for the First Element
        if (nums[i] > 0) break; 
        if (i > 0 && nums[i] === nums[i - 1]) continue; 

        //Setup two pointers
        let l = i + 1;
        let r = nums.length - 1;
        //loop to find matching triplets
        while (l < r) {
            const sum = nums[i] + nums[l] + nums[r];
            if (sum > 0) {
                r--;
            } else if (sum < 0) {
                l++;
            } else { // sum = 0
                res.push([nums[i], nums[l], nums[r]]);
                l++;
                r--;
                //skip duplicate elements for L to avoid duplicate triplets.
                while (l < r && nums[l] === nums[l - 1]) {
                    l++;
                }
            }
        }
    }
    return res;
};