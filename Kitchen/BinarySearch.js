/**
 * Searches recursively for a number from the list
 * @param {Array} array - Source array (must be sorted)
 * @param {number} target - Search item
 * @returns {(number| -1)} Index of the target if found, or -1 if not found
 * O(logn)
 */

function binarySearch(array, target) {
    // Define the lower and higher bounds for the search
    let low = 0;  // Starting index of the array
    let high = array.length - 1;  // Ending index of the array

    // Continue searching while the search space is valid (low <= high)
    while (low <= high) {
        // Calculate the middle index
        let middle = Math.floor((low + high) / 2);
        let guess = array[middle];  // Value at the middle index

        // Check if the middle element is the target
        if (target === guess) {
            return middle;  // Return the index if the target is found
        } 
        // If the target is smaller than the middle element, search the left half
        else if (guess > target) {
            high = middle - 1;  // Narrow the search space to the left
        } 
        // If the target is larger than the middle element, search the right half
        else {
            low = middle + 1;  // Narrow the search space to the right
        }
    }

    // If the loop ends and the target isn't found, return -1
    return -1;
}

const my_list = [1, 3, 5, 7, 9];

console.log(binarySearch(my_list, 3));  // Output: 1 (index of 3 in the array)
console.log(binarySearch(my_list, -1)); // Output: -1 (target not found)
