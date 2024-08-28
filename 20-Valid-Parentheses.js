/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stack = []
    const hashMap = {
        \)\:\(\,
        \]\:\[\,
        \}\:\{\
    }

    for(const char of s) {
        //chack if the char is closing bracket (key in map)
        const isBracket = char in hashMap
        if(!isBracket) {
            stack.push(char)
            continue
        }
        const isMatch = stack[stack.length - 1] === hashMap[char]
        if(isMatch) {
            stack.pop()
            continue
        }
        return false
    }
    return stack.length === 0
};