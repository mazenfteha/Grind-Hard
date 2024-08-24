/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let result = 0
    let L = 0
    let R = height.length - 1

    while(L < R) {
        const containerLength = R - L
        const area = containerLength * Math.min(height[L], height[R])
        result = Math.max(result, area)

        if(height[L] < height[R]){
            L++
        }else {
            R--
        }
    }
    return result
};