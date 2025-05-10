function sunZero(arr) {
    let left = 0;
    let rigth = arr.length - 1;

    while (left < rigth) {
        let sun = arr[left] + arr[rigth];
        if (sun === 0) {
            return [arr[left], arr[rigth]];
        } else if (sun > 0) {
            rigth--
        }
        else {
            left++;
        }
    }
}

console.log(sunZero([-3, -2, -1, 0, 1, 2, 6]));