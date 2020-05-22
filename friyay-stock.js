const stock1 = [7, 2, 8, 1, 5, 3, 6, 4] // 6
const stock2 = [7, 6, 4, 3, 1] // 0

function profit(prices) {
  let maxProfit = 0;
  for (let i=0; i<prices.length; i++) {
    for (let j=i+1; j<prices.length; j++) {
      let currentProfit = prices[j] - prices[i];
      if(currentProfit > maxProfit) {
        maxProfit = currentProfit;
      }
    }
  }
  return maxProfit;
}

console.log(profit(stock1));
console.log(profit(stock2));
