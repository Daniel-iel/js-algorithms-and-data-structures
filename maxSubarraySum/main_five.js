function maxSubarraySum(arr, num) {
    if (arr.length === 0 || num > arr.length) {
        return null;
    }

    let total = recursion(arr, num, 0, 0, 0, 0);
    return total;
}

function recursion(arr, num, currentIndex, temp, counter, total) {
    if (currentIndex >= arr.length) {
        return total;
    }

    temp += arr[currentIndex];
    counter++;

    if (counter === num) {
        total = Math.max(total, temp);    
        temp -= arr[currentIndex - num + 1];
        counter--;
    }

    return recursion(arr, num, currentIndex + 1, temp, counter, total);
}
console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2));
console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4));
console.log(maxSubarraySum([4, 2, 1, 6], 1));
console.log(maxSubarraySum([4, 2, 1, 6, 2], 4));
console.log(maxSubarraySum([], 4));