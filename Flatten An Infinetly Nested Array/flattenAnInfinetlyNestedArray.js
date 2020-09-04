//Nested Array

const nestedArray = [
    [1, [2, 2, [3, [4, [5, [6]]]]], 1]
];

console.log('Infinetly nested array', nestedArray);

//use in-built flat
console.log('using inbuilt flat method', nestedArray.flat(Infinity));