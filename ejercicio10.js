const numbers = [12, 21, 38, 5, 45, 37, 6];
function average(numberList) {
    const sum = numberList.reduce((acc, num) => acc + num, 0);
    return sum / numberList.length;
}
console.log(average(numbers));