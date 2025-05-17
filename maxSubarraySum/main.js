/*
Write a function called maxSubarraySum which accepts an array 
of integers and a number called n. The function should calculate the maximum 
sum of n consecutive elements in the array.
*/

function maxSubarraySum(arr, limit) {
    let temp = 0;
    if (arr.length === 0) {
        return null;
    }

    for (let i = 0; i < arr.length; i++) {
        let counter = 1;
        let total = arr[i];
        for (let j = i + 1; j < arr.length; j++) {
            if (limit == counter) {
                break;
            }
            total = total + arr[j];
            counter++;
        }

        if (temp < total) {
            temp = total;
        }
    }

    return temp;
}

console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2));
console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4));
console.log(maxSubarraySum([4, 2, 1, 6], 1));
console.log(maxSubarraySum([4, 2, 1, 6, 2], 4));
console.log(maxSubarraySum([], 4));
