/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let left=0
    let right=1
    let profit=0
    while(right<prices.length){
        if(prices[right]>prices[left]){
            profit = Math.max(profit,prices[right]-prices[left])
        }else{
            left = right
        }
        right++
    }
    return profit
};