/**
 * Set
 * Data structure for holding collection of values
 * the values must be unique 
 * can contain mix of data types
 * dynamic size
 * does not maintain an insertion order
*/

// create a new Set 

let mySet = new Set();

// add values to the set
mySet.add(10);
mySet.add('hello');
mySet.add(true);
mySet.add(null);
mySet.add(undefined);
mySet.add(NaN);
mySet.add(Symbol('symbol'));

console.log(mySet); // Output: Set { 10, 'hello', true, null, undefined, NaN, Symbol(symbol) }

// check if a value exists in the set
console.log(mySet.has(10)); // Output: true
console.log(mySet.has(20)); // Output: false

// remove a value from the set
mySet.delete(10);
console.log(mySet); // Output: Set { 'hello', true, null, undefined, NaN, Symbol(symbol) }

// iterate over the set

for (const value of mySet) {
    console.log(value);
} // Output: hello, true, null, undefined, NaN, Symbol(symbol)

// check the size of the set

console.log(mySet.size); // Output: 6

// clear the set
mySet.clear();
console.log(mySet);
