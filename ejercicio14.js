const words = [
  'code',
  'repeat',
  'eat',
  'sleep',
  'code',
  'enjoy',
  'sleep',
  'code',
  'enjoy',
  'sleep',
  'code'
];
function repeatCounter(list) {
    const counter = {};
    for (const word of list) {
        // Si la palabra ya existe, suma 1, si no se inicia en 0 y se suma 1
        counter[word] = (counter[word] || 0) + 1;
    }
    return counter;
}
console.log(repeatCounter(words));