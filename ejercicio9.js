const numbers = [1, 2, 3, 5, 45, 37, 58];

function sumNumbers(numberList) {
    return numberList.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
}

console.log(sumNumbers(numbers));