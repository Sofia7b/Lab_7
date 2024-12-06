'use strict';

const removeElements = (array, ...items) => {
  // Remove multiple items from array modifying original array
  for (const item of items) {
    let index = array.indexOf(item);
    if(index >= 0) {

    array.splice(index, 1);
    }
  }
};
const numbers = [1, 2, 3, 4, 5, 6, 7];
console.log(numbers);
removeElements(numbers, 5, 1, 6);
console.log(numbers);

const array = ['Kiev', 'Beijing', 'Lima', 'Saratov'];
removeElements(array, 'Lima', 'Berlin', 'Kiev');
console.log(array);

module.exports = { removeElements };
