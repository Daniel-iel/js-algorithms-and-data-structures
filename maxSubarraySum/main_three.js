
function maxSubarraySum(arr, num) {
    let maxSum = 0;
    let tempSum = 0;

    if (arr.length < num) {
        return null;
    }

    for (let i = 0; i < num; i++) {
        maxSum += arr[i];
    }
    tempSum = maxSum

    for (let i = num; i < arr.length; i++) {
        tempSum = tempSum - arr[i - num] + arr[i];
        maxSum = Math.max(maxSum, tempSum);
    }
    return maxSum;
}

console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2));
console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4));
console.log(maxSubarraySum([4, 2, 1, 6], 1));
console.log(maxSubarraySum([4, 2, 1, 6, 2], 4));
console.log(maxSubarraySum([], 4));