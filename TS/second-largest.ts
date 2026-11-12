function findSecondLargest(arr: number[]): number {
    // assign the first element of the array to a variable called largest
    let largest = arr[0];
    // assign the second largest number to a variable called secondLargest
    let secondLargest=  -Infinity;


    // loop through the array (Traverse the rest of the array)
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > largest) {
            secondLargest = largest;
            largest = arr[i];
        } else if (arr[i] > secondLargest) {
            secondLargest = arr[i];
        }
    }
    return secondLargest;

}

const secondLargestNumber = findSecondLargest([3, 7, 2, 9, 4]);
console.log("the second largest number is :" + " " + secondLargestNumber);
