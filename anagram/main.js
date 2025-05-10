function validAnagram(str1, str2) {
    let str1Counter = {}
    let str2Counter = {}

    if (str1.length !== str2.length) {
        return false;
    }

    for (let char of str1) {
        str1Counter[char] > 0 ? str1Counter[char]++ : str1Counter[char] = 1;
    }

    for (let char of str2) {
        str2Counter[char] > 0 ? str2Counter[char]++ : str2Counter[char] = 1;
    }

    for (let str in str1Counter) {
        if (str1Counter[str] !== str2Counter[str]) {
            return false;
        }
    }
    return true
}

console.log(validAnagram("cobra", "cobra")) // true
