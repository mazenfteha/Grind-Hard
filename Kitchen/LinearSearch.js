/*
ex:
arr = [5,2,10,4,6]   , t=10 -> should return 2 as 10 in index 2

Linear search:
- start at the first element in the array and move towords the last
- at each element , check if the element is equal to the target element
- if  found , return the index of the element
- if  not found , return -1
*/

function linearSearch(arr, target) {
  for(let i = 0 ; i< arr.length ;i++) {
    if (arr[i] === target) {
      return i
    }
  }
  return -1
}

console.log(linearSearch([-5, 2, 10, 4, 6], 10))
console.log(linearSearch([-5, 2, 10, 4, 6], 20))

//O(n)
