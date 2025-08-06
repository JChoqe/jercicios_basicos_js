const avengers = ['Hulk', 'Thor', 'Iron Man', 'Captain A.', 'Spiderman', 'Captain M.'];
function findLongestWord(stringList) {
    stringList.sort((a, b) => b.length - a.length);
    return stringList[0];
}
console.log(findLongestWord(avengers));