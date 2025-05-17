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
        /*
            Técnica: Sliding Window

            O que está acontecendo aqui?
            Essa linha está deslizando a janela de soma para frente, removendo o primeiro elemento da janela atual.
            Exemplo para ilustrar:
            Suponha num = 3 e arr = [1, 2, 3, 4].

            Quando currentIndex = 3, a janela atual cobre os elementos:
            [2, 3, 4]
            A soma temp = 2 + 3 + 4 = 9

            Mas agora queremos mover a janela 1 elemento pra frente, ou seja, passar de [2, 3, 4] para [3, 4, ?]
            Para isso, removemos o primeiro valor da janela atual, que é arr[3 - 3 + 1] = arr[1] = 2
            Então fazemos temp -= arr[1] → temp = 9 - 2 = 7
            A próxima iteração adicionará o novo elemento à direita da janela
        */
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