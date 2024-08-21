/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    const numSet = new Set(nums);
        let longest = 0;

        for(const num of numSet){
            // Check if it's start of the sequance
            if(!numSet.has(num - 1)) {
                let length = 1;
                while (numSet.has(num + length)) {
                    length++;
                }
                longest = Math.max(length, longest);
            }
        }
        return longest
};