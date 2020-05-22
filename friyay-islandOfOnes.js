// Robert's solution
function islandOfOnes (arr){
  let count = 0;
  for (let i=0; i<arr.length; i++) {
    if ( arr[i] === 1 && arr[i + 1] !== 1) {
      count++;
    }
  }
  return count;
};

const arr = [0, 1, 1, 0, 1, 0, 1, 1, 1] // 3
console.log(islandOfOnes(arr));