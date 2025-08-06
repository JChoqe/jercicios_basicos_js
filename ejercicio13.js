const names = [
  'Peter',
  'Steve',
  'Tony',
  'Natasha',
  'Clint',
  'Logan',
  'Xabier',
  'Bruce',
  'Peggy',
  'Jessica',
  'Marc'
];
function nameFinder(nameList, name) {
    const posicion = nameList.indexOf(name);
    let isFound = false;
    if (posicion !== -1) {
        isFound = true;
        return [isFound,posicion];
    } else {
        return isFound;
    } 
}
console.log(nameFinder(names, 'Xabier'));