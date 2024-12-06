'use strict';

// Find difference of two arrays
// elements from array1 that are not includes in array2

const difference = (array1, array2) => {
    const result = [];
    for (const element of array1) {
        if (array2.indexOf(element) < 0) {
            result.push(element);
        }
    }
    return result;
};
/*
const array1 = [7, -2, 10, 5, 0];
const array2 = [0, 10];
const result = difference(array1, array2);
console.log(result);


const array3 = ['Beijing', 'Kiev'];
const array4 = ['Kiev', 'London', 'Baghdad'];
const result1 = difference(array3, array4);
console.log(result1);
*/

module.exports = { difference };
