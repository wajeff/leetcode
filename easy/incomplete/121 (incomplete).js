var maxProfit = function(prices) {
    let left = 0
    let right = 1
    let highestValue=0
    while(left<prices.length-1){
        if(prices[right]>prices[left]){
            let currentNumber = prices[right]-prices[left]
            if(highestValue<currentNumber){
                highestValue=currentNumber
            }
            right++
        }
        else{
            right++
        }
        if(right>prices.length-1){
            left ++
            right =left+1
        }
    }

    return(highestValue)
};

maxProfit([7,1,5,3,6,4])