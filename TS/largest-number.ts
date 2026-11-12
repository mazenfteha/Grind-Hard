// Find the largest number in an array

/*
numbers: number[] = [3, 9, 2, 15, 6, 4];
Largest number: 15
*/

function findLargest(arr: number[]): number {
    // assign the first element of the array to a variable called largest
    let largest = arr[0];

    // loop through the array (Traverse the rest of the array)
    for (let i = 1; i < arr.length; i++) {
        // If the current number is larger than `largest`, update it.
        if(arr[i] > largest)
            largest = arr[i]
    }
    return largest
}

const largestNumber = findLargest([3, 7, 2, 9, 4]);
console.log("the largest number is :" + " " + largestNumber);
