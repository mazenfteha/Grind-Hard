/**
 * Initiates a binary search using recursion.
 * @param {Array} arr - Source array (must be sorted).
 * @param {number} target - Value to search for.
 * @returns {number} Index of the target if found, or -1 if not found.
 */
function binarySearch(arr, target) {
  // Call the helper function `search` to perform the recursive search
  return search(arr, target, 0, arr.length - 1);
}

/**
 * Recursively searches for the target in the array.
 * @param {Array} arr - The sorted array.
 * @param {number} target - The value to search for.
 * @param {number} left - Left boundary of the current search space.
 * @param {number} right - Right boundary of the current search space.
 * @returns {number} Index of the target if found, or -1 if not found.
 */
function search(arr, target, left, right) {
  // Base case: If the search space is invalid (left > right), return -1
  if (left > right) return -1;

  // Calculate the middle index
  let mid = Math.floor((left + right) / 2);
  let guess = arr[mid];  // Value at the middle index

  // If the middle element is the target, return the index
  if (target === guess) {
    return mid;
  }
  // If the target is smaller than the middle element, search in the left half
  else if (guess > target) {
    return search(arr, target, left, mid - 1);
  }
  // If the target is larger than the middle element, search in the right half
  else {
    return search(arr, target, mid + 1, right);
  }
}

const arr = [1, 3, 5, 7, 9];

console.log(binarySearch(arr, 5));  // Output: 2 (index of 5 in the array)
console.log(binarySearch(arr, 8));  // Output: -1 (8 is not in the array)
