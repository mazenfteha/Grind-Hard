/**
 * Quick sort idea
 * identify the pivot element in the array : pick last element as pivot
 * put everything that's smaller than the pivot into a left array and everything that's 
 * greater than the pivot into a right array
 * repeat the process on left and right arrays till you have an array of length 1
 * which is sorted by definition 
 * concatenate left array , pivot and right array [...left,pivot,...right]
 * base case : if the array contain one element
 */

function quickSort(arr) {
    // Base case: If the array has less than two elements, it's already sorted
    if (arr.length < 2) {
        return arr;
    }

    // Choose the last element as the pivot
    let pivot = arr[arr.length - 1];
    // Create empty arrays to hold elements less than and greater than the pivot
    let left = [];
    let right = [];

    // Iterate over the array, excluding the pivot (last element)
    for (let i = 0; i < arr.length - 1; i++) {
        // Compare each element to the pivot
        if (arr[i] < pivot) {
            // If the element is less than the pivot, push it into the left array
            left.push(arr[i]);
        } else {
            // Otherwise, push it into the right array
            right.push(arr[i]);
        }
    }

    // Recursively apply quicksort to the left and right arrays, then return the sorted array
    // Combine the sorted left array, pivot, and sorted right array
    return [...quickSort(left), pivot, ...quickSort(right)];
}

const arr = [-6, 20, 8, -2, 4]; // Array to be sorted
console.log(quickSort(arr)); // Output the sorted array
