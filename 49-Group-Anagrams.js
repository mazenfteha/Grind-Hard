/**
 * @param {string[]} strs
 * @return {string[][]}
 */
const groupAnagrams = (words, map = new Map()) => {
    if (!words.length) return []
    groupWords(words, map)
    return [...map.values()]
};
const groupWords = (words, map) => {
    for(const original of words) {
        const sorted = reOrder(original)
        const values = map.get(sorted) || []

        values.push(original)
        map.set(sorted, values)
    }
};
const reOrder = (str) => str.split('').sort((a, b) => a.localeCompare(b)).join('');