/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let L = 0
    let R = numbers.length - 1

    while(L < R){
        const sum = numbers[L] + numbers[R]

        if(sum > target) {
            R--
        } else if (sum < target) {
            L++
        }else {
            return [L + 1 , R + 1]
        }
    }
};