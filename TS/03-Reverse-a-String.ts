
/**
 * 
 * Given a string, return a new string with the characters in reverse order.
 * hello" → "olleh"
"backend" → "dnekcab" 
"mazen" -> "nezam"
 * 
 */

function reverseString(str: string): string {
    // because string are immutable in JS/TS let's convert the string into array first
    let chars = str.split("")
    // initialize two pointers 
    let left = 0;
    let right = chars.length - 1;

    // loop until they meet 
    while(left < right) {
        // use swap technique 
        // make new temp var to store swapped value 
        let temp = chars[left]
        chars[left] = chars[right]
        chars[right] = temp

        left ++;
        right --;
    }

    // return back the string from the array after reversed
    return chars.join("");
}

// test the function
const reversedString = reverseString("mazen");
console.log("the reversed string is :" + " " + reversedString);


