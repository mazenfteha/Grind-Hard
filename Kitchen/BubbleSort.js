/* Problem
- Given an array of integers, sort the array
const arr = [-6, 20, 8, -2, 4]
bubbleSort(arr)=> Should return [-6, -2, 4, 8, 20]
// O(n^2)
*/

function bubbleSort(arr) {
    let swapped
    // Repeat the process until no swaps are made (i.e., array is sorted)
    do {
        swapped = false // Assume no swaps are made
        // Traverse the array from the first to the second-to-last element
        for (let i = 0; i < arr.length - 1; i++) {
            // Compare adjacent elements
            if (arr[i] > arr[i + 1]) {
                // Swap if the current element is greater than the next one
                const temp = arr[i] // Store the current element in a temporary variable
                arr[i] = arr[i + 1] // Move the smaller element to the left
                arr[i + 1] = temp // Move the larger element to the right
                swapped = true // A swap has occurred, so set swapped to true
            }
        }
        // Continue the loop if swaps were made in the current pass
    } while (swapped); // Stop when no more swaps occur, meaning the array is sorted
}

const arr = [8, 20, -2, 4, -6] // Array to be sorted
bubbleSort(arr) // Call bubble sort on the array
console.log(arr) // Output the sorted array
