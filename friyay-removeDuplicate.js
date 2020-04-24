function removeDuplicate (array) {
  const newArray = [];

  array.forEach(function (item) {
    if(newArray.indexOf(item) === -1) {
      newArray.push(item);
    }
  })
  return newArray;
}

// or

function removeDuplicate2(array) {
  const arrayObject = {}
  array.forEach(function (item) {
    arrayObject[item] = true;
  })
  return Object.keys(arrayObject);
}

array = [1, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 8, 9];

console.log(removeDuplicate(array));
console.log(removeDuplicate2(array));
