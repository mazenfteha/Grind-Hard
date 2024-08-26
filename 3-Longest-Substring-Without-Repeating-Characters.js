/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let charSet = new Set()
    let L = 0
    let result = 0

    for(let R = 0 ; R < s.length ; R++) {
        while(charSet.has(s[R])) {
            charSet.delete(s[L])
            L++
        }
        charSet.add(s[R])
        result = Math.max(result, R - L + 1)
    }
    return result
};