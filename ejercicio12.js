const duplicates = [
  'sushi',
  'pizza',
  'burger',
  'potatoe',
  'pasta',
  'ice-cream',
  'pizza',
  'chicken',
  'onion rings',
  'pasta',
  'soda'
];
function removeDuplicates(list) {
    return list.filter((item, index) => list.indexOf(item) === index);
}
const uniqueList = removeDuplicates(duplicates);
console.log(uniqueList);