/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
    let count = new Map()
    let L = 0
    let result = 0

    for(let R = 0 ; R < s.length ; R++){
        let length = R - L + 1
        count.set(s[R], 1 + (count.get(s[R]) || 0));
        //make sure that current window is valid
        let maxFreq =  Math.max(...count.values())
        if(length - maxFreq > k) {
            count.set(s[L], count.get(s[L]) - 1);
            L++
        } 
        length = R - L + 1
        result = Math.max(result, length)
    }

    return result 
};