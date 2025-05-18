// O(log n)
function divideAndConquer(arr, num) {

    let min = 0;
    let max = arr.length - 1;

    while (min <= max) {
        let middle = Math.floor((min + max) / 2);
        let current = arr[middle];

        if (current < num) {
            min = middle + 1;
        }
        else if (current > num) {
            max = middle - 1
        }
        else {
            return middle;
        }
    }

    return -1;
}

console.log(divideAndConquer([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 8));
console.log(divideAndConquer([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 20));