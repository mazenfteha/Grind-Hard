/* 
Object - Big-O time complexity
- insert / delete O(1)
- Access - O(1)
- Search - O(n)
- Object.Keys(),Values(),entries() -O(n)
*/
const obj = {
    name: 'John',
    age: 25,
    city: 'New York'
}

// Insertion
obj.career = 'Software Engineer'

// Access

console.log(obj.name) // O(1)
console.log(obj.age) // O(1)

// Search

console.log('career' in obj) // O(1)
console.log(obj.hasOwnProperty('career')) // O(1)

// Deletion

delete obj.career

// Iteration

for (let key in obj) {
    console.log(key, obj[key]) // O(n)
}

console.log(Object.keys(obj)) // O(n)

console.log(Object.values(obj)) // O(n)

console.log(Object.entries(obj)) // O(n)

