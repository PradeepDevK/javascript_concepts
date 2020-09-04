//duplicates array
const array = [1, 2, 2, 3, 4, 4, 4, 5, 6, 7, 8, 8, 9];

console.log('duplicate array', array);

const uniqueArray = [ ...new Set(array) ];

console.log('unique array', uniqueArray);