/*  
Array - Big-O time complexity
- insert / remove from end (push , pop) - O(1)
- insert / remove from beginning (unshift , shift) - O(0)
- Access - O(1)
- Search - O(n)
- push/ pop - O(1)
shift / unshift / concat / slice / splice - O(n)
forEach / map / filter / reduce - O(n)
*/

/**
 * Loops 
 */

const arr = [1, 2 , 3 , "Back"]

for (const item of arr) {
    console.log(item);
}
// or
for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    console.log(element);
}

// or
arr.forEach((item) => {
    console.log(item);
})

/**
 * Adding from begging or end 
 */
arr.unshift(0)
arr.push("end")

/**
 * Adding from begging or end 
 */
arr.shift()
arr.pop()

/**
 * Accessing elements
 */

console.log(arr[0])
console.log(arr.length)

/**
 * Searching elements
 */

console.log(arr.includes(3))
console.log(arr.indexOf(3))

/**
 * Modifying elements
 */

arr[0] = 0
arr.push("end")


/**
 * Concat method (merging Two Arrays) O(n)
 * create a new array by merging existing arrays
 * does not change the existing arrays m it return new one
 */

const myGirls = ["Cecilie", "Lone"];
const myBoys = ["Emil", "Tobias", "Linus"];

const myChildren = myGirls.concat(myBoys);
console.log(myChildren);

/**
 * Splice method
 * The splice method is used to add or remove elements from an array
 * changes the contents of an array by removing or replacing 
 * existing elements and/or adding new elements 
 * Syntax :
    * splice(start)
    splice(start, deleteCount)
    splice(start, deleteCount, item1)
    splice(start, deleteCount, item1, item2)
    splice(start, deleteCount, item1, item2,..... , itemN)
 */


const months = ['Jan', 'March', 'April', 'June']; 
months.splice(1, 0, 'Feb'); 
console.log(months); 
months.splice(4, 1, 'May'); 
console.log(months);
months.splice(4, 1); 
console.log(months);

/**
 * Slice
 * The slice method extracts a section of an array and returns a new array. 
 * returns a shallow copy of a portion of an array into a new array object 
 * selected from start to end (end not included) 
 * where start and end represent the index of items in that array.
 * Syntax :
    * slice()
        slice(start (return after that))
        slice(start(return after that(included)), end(not included))
 */

    const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
    console.log(animals.slice(2));       // Returns ['camel', 'duck', 'elephant']
    console.log(animals.slice(1, 4));    // Returns ['bison', 'camel', 'duck']
    console.log(animals.slice(0, 3));    // Returns ['ant', 'bison', 'camel']
    console.log(animals.slice(-2));      // Returns ['duck', 'elephant']

/** map method 
 * creates a new array by applying a function to each element of original array
 * */ 
const numbers = [1, 2, 3, 4, 5];
const dubledNumbers = numbers.map((num) => num * 2)
console.log(dubledNumbers);

/** filter method 
 * creates a new array with all elements that pass the test implemented by provided function
 * */

const evenNumbers = numbers.filter((num) => num % 2 === 0)
console.log(evenNumbers);

/**
 * Reduce method
 * The reduce() method runs a function on each array element to produce (reduce it to) a single value.
 * work form left to right
 * reduce(callbackFn)
    reduce(callbackFn, initialValue
 */
const array1 = [1, 2, 3, 4];

  // 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    initialValue,
);

console.log(sumWithInitial); // Output: 10
