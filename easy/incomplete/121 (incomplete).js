var maxProfit = function(prices) {
  let left=0
  let right=0
  let result=0
  
  if(prices.length%2==0){
    let left = prices.length/2-1
    let right = prices.length/2
    let result = prices[right]-prices[left]
    while(left!=0&&right!=prices.length-1){
      if(prices[right+1]-prices[left]>result){
        right++
        result=prices[right]-prices[left]
      }
      else if(prices[right]-prices[left-1]>result){
        left--
        result=prices[right]-prices[left]
      }
    }
  }
  else{
    let left = Math.floor(prices.length/2)
    let right = Math.floor(prices.length/2)
    let result = prices[right]-prices[left]
    while(left!=0&&right!=prices.length-1){
      if(prices[right+1]-prices[left]>result){
        right++
        result=prices[right]-prices[left]
      }
      else if(prices[right]-prices[left-1]>result){
        left--
        result=prices[right]-prices[left]
      }
    }
  }
  
  // while(left!=0&&right!=prices.length-1){
  //   if(prices[right+1]-prices[left]>result){
  //     right++
  //     result=prices[right]-prices[left]
  //   }
  //   else if(prices[right]-prices[left-1]>result){
  //     left--
  //     result=prices[right]-prices[left]
  //   }
  // }
  console.log(result)
};

maxProfit([7,1,5,3,6,4]
)