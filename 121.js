/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let buy = 0;
    let sell = 1;
    let maxP = 0;
    while (sell < prices.length) {
        if (prices[buy] < prices[sell]) {
            profit = prices[sell] - prices[buy];
            console.log(profit);
            maxP = Math.max(maxP, profit);
        } else {
            buy = sell;
        }
        sell++;
    }
    return maxP;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
