const selectionSort = (array) => {
    // Outer loop to iterate over each element in the array
    for (let i = 0; i < array.length - 1; i++) {
        // Assume the current index is the minimum
        let minIndex = i;

        // Inner loop to find the smallest element in the remaining array
        for (let j = i + 1; j < array.length; j++) {
            // If a smaller element is found, update minIndex
            if (array[j] < array[minIndex]) {
                minIndex = j;
            }
        }

        // Swap the current element with the smallest element found
        // Destructuring assignment is used to swap the values
        [array[i], array[minIndex]] = [array[minIndex], array[i]];
    }

    // Return the sorted array
    return array;
}

console.log(selectionSort([27, 3, 7, 1, 0])); // Output: [0, 1, 3, 7, 27]
//O(n^2)
