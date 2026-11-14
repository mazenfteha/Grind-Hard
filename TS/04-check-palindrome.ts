/**
 * Determine whether the string is a palindrome.

A palindrome reads the same from left to right and right to left.
Examples
"madam"   → true
"racecar" → true
"hello"   → false

Return true if the string is a palindrome.
Return false otherwise.
 */

function isPalindrome(str: string): boolean {

    let left = 0;
    let right = str.length - 1;
    
    while (left < right) {
        if(str[left] != str[right]) return false;

        left ++;
        right --;
    }

    return true
}

const result = isPalindrome("madam")
console.log("does the word is really palindrome?", result);

