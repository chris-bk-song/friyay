// Write a recursive function that does a count down from positive number x
// the function will print the numbers counting down until the number 1

function countDown(num) {
  if (num <= 0) {
    return;
  }
  console.log(num)
  countDown(num - 1)
}

console.log(countDown(5))