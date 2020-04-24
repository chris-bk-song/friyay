// write a function called sort that given an array of numbers.
// returns a sorted array. So sort([10, 5, 9, 4, 17])
// should return [4, 5, 9, 10, 17]

const array = [10, 5, 9, 4, 17];

array.sort(function compare(a,b) {
  console.log(a, b, a - b);
  return a - b; 
});

console.log(array)

// array.sort();
// console.log(array);
// This doesn't sort numbers in order
// Used compare function to sort numbers in order