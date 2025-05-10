/*
    Create pointers or values that correspond to an index or position and move 
    towards the begeinning and or middle based on a certain condition.
*/

function sunZero(arr) {
    return recursion(arr, 0, arr.length - 1);
}

function recursion(arr, left, rigth) {

    if (left > arr.length) {
        return;
    }

    let sun = arr[left] + arr[rigth]
    if (sun === 0) {
        return [arr[left], arr[rigth]];
    }
    if (sun > 0) {
        rigth--;
    }
    else {
        left++;
    }

    return recursion(arr, left, rigth);
}

console.log(sunZero([-3, -2, -1, 0, 1, 2, 6, 7, 8, 9, 10, 11]));
// console.log(sunZero([-2, -1, 0, 1, 2]));
// console.log(sunZero([-1, 0, 1, 2, 3]));
// console.log(sunZero([-3, -2, -1, 0, 1, 2, 3]));
