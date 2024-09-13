var findMaxConsecutiveOnes = function(nums) {
  count = 0
  currentCount = 0
  for(let i = 0 ; i < nums.length ; i ++){
    
    if(nums[i]===1){
      currentCount++

    }
    else{
      
      currentCount = 0
    }
    if(currentCount>count){
      count = currentCount
    }
  }
  return(count)
};
findMaxConsecutiveOnes([1,1,0,1,1,1])