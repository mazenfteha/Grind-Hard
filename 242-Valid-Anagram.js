/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length) return false
    return reOrder(s) === reOrder(t)
};
const reOrder = (str) => str.split('').sort((a, b) => a.localeCompare(b)).join('')