/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let L = 0
    let R = s.length - 1 

    while(L < R){
        while(L < R && !alphaNumeric(s[L])){
            L++
        }

        while(R > L && !alphaNumeric(s[R])){
            R--
        }

        if (s[L].toLowerCase() != s[R].toLowerCase()) return false
        L++
        R--
    }
    return true
};

var alphaNumeric = function(c) {
    const charCode = c.charCodeAt(0);
    return (
            (65 <= charCode && charCode <= 90) ||
            (97 <= charCode && charCode <= 122) ||
            (48 <= charCode && charCode <= 57)
        );
}