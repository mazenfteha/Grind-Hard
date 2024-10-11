/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    // base case
    if(n <= 3) return n

    let n1 = 2
    let n2 = 3

    for(let i = 4; i <=n ;i++) {
        let temp = n1 + n2
        n1 = n2
        n2 = temp
    }
    return n2
};