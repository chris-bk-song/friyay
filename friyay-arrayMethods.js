const nums = [1, 2, 3, 4, 5, 6, 7]

// ### helper functions

function addOne(num) {
  return num + 1;
}

function printThing(thing) {
  console.log(thing);
}

// console.log(addOne);
// console.log(addOne(1));

function isGreaterThanFive(num) {
  return num > 5;
}

function totalNums(accumulator, currentVal) {
  return accumulator + currentVal;
}





// ------------------------------------------------------------------------------------------------------------------------------
// ### forEach

// nums.forEach(printThing);
// [printThing(1), printThing(2), printThing(3), printThing(4), printThing(5), printThing(6), printThing(7)].forEach(printThing);

// nums.forEach(function (item, index, array) {
//   console.log(item);
//   console.log(index);
//   console.log(array);
// })
// ------------------------------------------------------------------------------------------------------------------------------



// ------------------------------------------------------------------------------------------------------------------------------
// ### map
// ### you don't modify existing data. It creates new data
// ### map is used to modify existing array and return new array

// console.log(nums.map(addOne));

// let newNums = nums.map(addOne);
// console.log(newNums);

// let arrOfStrings = ["joe", "bob", "billy"];
// let =capArrOfStrings = arrOfStrings.map(item => item.toUpperCase());
// console.log(arrOfStrings);
// console.log(capArrOfStrings);
// ------------------------------------------------------------------------------------------------------------------------------




// ------------------------------------------------------------------------------------------------------------------------------
// ### filter
// ### similar to map
// ### check for certain conditions
// ### it has to return either true or false otherwise, it will return undefined

// let largeNums = nums.filter(isGreaterThanFive);
// console.log(largeNums);

// let evenNums = nums.filter((num) => num % 2 === 0)
// console.log(evenNums);
// ------------------------------------------------------------------------------------------------------------------------------




// ------------------------------------------------------------------------------------------------------------------------------
// ### reduce
// ### function to find one thing
// ### whatever is the accumulator is returned at the end

// console.log(nums.reduce(totalNums, 0)); // [1, 2, 3, 4, 5, 6, 7].reduce(totalNums, 0); 0 is accumulator

// let totalEvenNum = nums.reduce(function(acc, currentVal) {
//   console.log('######### acc #########') // debugging
//   console.log(acc);
//   console.log('##### currentVal ######') //debugging
//   console.log(currentVal);
//   if(currentVal % 2 === 0) {
//     return acc + currentVal
//   } else {
//     return acc;
//   }
// }, 0)
// console.log(totalEvenNum);
 
// let smallestNum = nums.reduce((acc, currentVal) => {
//   if(currentVal < acc) {
//     return currentVal;
//   } else {
//     return acc;
//   }
// }, Infinity);
// console.log(smallestNum);

// let strings = ['a', 'bob', 'gerrit', 'onomatopeioa', 'spark'];
// let long = strings.filter((item) => item.length > 3);
// console.log(long);
// let longest = strings.reduce((acc, cur) => {
//   if (cur.length > acc.length) {
//     return cur;
//   } else {
//     return acc;
//   }
// }, "");
// console.log(longest);
// ------------------------------------------------------------------------------------------------------------------------------