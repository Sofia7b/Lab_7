'use strict';

const removeElement = (array, item) => {
  // Remove item from array modifying original array
  let index = array.indexOf(item);
  if(index < 0) return;
  array.splice(index, 1);
};
/*
const numbers = [1, 2, 3, 4, 5, 5, 6, 7];
console.log(numbers);
removeElement(numbers, 5);
console.log(numbers);

const array = ['Kiev', 'Beijing', 'Lima', 'Saratov'];
console.log(array);

removeElement(array, 'Lima'); // удалит 'Lima' из массива
console.log(array);

removeElement(array, 'Berlin'); // не удалит ничего
console.log(array);
*/

module.exports = { removeElement };
