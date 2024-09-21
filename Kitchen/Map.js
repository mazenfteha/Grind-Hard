/**
 * Map
 * is an in ordered collection of key-value pairs , 
 * Both keys and values can be of any data type 
 */

// Create a new Map

let myMap = new Map();

// Add key-value pairs

myMap.set('name', 'John Doe');
myMap.set('age', 30);
myMap.set('city', 'New York');

// Get values by keys

console.log(myMap.get('name')); // Output: John Doe
console.log(myMap.get('age')); // Output: 30
console.log(myMap.get('city')); // Output: New York

// Check if a key exists

console.log(myMap.has('name')); // Output: true
console.log(myMap.has('occupation')); // Output: false

// Remove a key-value pair

myMap.delete('age');

console.log(myMap.get('age')); // Output: undefined

// Iterate over key-value pairs

myMap.forEach((value, key) => {
    console.log(`${key}: ${value}`);
});

//or

for (let [key, value] of myMap) {
    console.log(`${key}: ${value}`);
}

// Convert Map to an array of key-value pairs

console.log([...myMap]); // Output: [['name', 'John Doe'], ['city', 'New York']]

// Clear all key-value pairs

myMap.clear();

console.log(myMap.size); // Output: 0
