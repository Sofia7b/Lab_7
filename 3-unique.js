'use strict';

// Create and return a new array without duplicate elements
// Don't modify initial array

const unique = (array) => {
    const result = [];
    for (const element of array) {
        if (result.indexOf(element) < 0) {
            result.push(element);
        }
    }
    return result;
};
/*
let result = unique([2, 1, 1, 3, 2]);
console.log(result);

result = unique(['top', 'bottom', 'top', 'left']);
console.log(result);
*/

module.exports = { unique };
