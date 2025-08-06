const mixedElements = [6, 1, 'Marvel', 1, 'hamburguesa', '10', 'Prometeo', 8, 'Hola mundo'];
function averageWord(list) {
    let sum = 0;
    for (const element of list) {
        if (typeof element === 'string') {
            sum = sum + element.length;
        }else if (typeof element === 'number') {
            sum = sum + element;
        }
    }
    return sum;
}
console.log(averageWord(mixedElements));