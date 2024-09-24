function mergeSort(arr) {
    // Base case: If the array has less than two elements, it's already sorted
    if (arr.length < 2) {
        return arr;
    }

    // Find the middle index to divide the array into two halves
    const mid = Math.floor(arr.length / 2);

    // Split the array into two halves: left and right
    const leftArr = arr.slice(0, mid);
    const rightArr = arr.slice(mid);

    // Recursively apply mergeSort to both halves and then merge them back together
    return merge(mergeSort(leftArr), mergeSort(rightArr));
}

function merge(leftArr, rightArr) {
    // Create a new array to hold the merged result
    const sortedArr = [];

    // Compare the elements of the left and right arrays and merge them in sorted order
    while (leftArr.length && rightArr.length) {
        // If the first element of the left array is smaller or equal, push it into sortedArr
        if (leftArr[0] <= rightArr[0]) {
            sortedArr.push(leftArr.shift()); // Remove the first element from leftArr
        } else {
            // Otherwise, push the first element of rightArr into sortedArr
            sortedArr.push(rightArr.shift()); // Remove the first element from rightArr
        }
    }

    // After the loop, append any remaining elements from leftArr or rightArr to sortedArr
    // (At least one of these arrays will be empty by this point)
    return [...sortedArr, ...leftArr, ...rightArr];
}

const arr = [-6, 20, 8, -2, 4]; // Array to be sorted
console.log(mergeSort(arr)); // Output the sorted array
