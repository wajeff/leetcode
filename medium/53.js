var maxSubArray = function(nums) {
  if(nums.length==1){
    return nums[0]
  }
  let accumulatedNumber = nums[0]
  let max = nums[0]
  for(let i = 1; i < nums.length ; i++){
    if(accumulatedNumber+nums[i]>nums[i]){
      accumulatedNumber+=nums[i]
    }
    else if(accumulatedNumber+nums[i]<=nums[i]){
      accumulatedNumber=nums[i]
    }
    max = Math.max(accumulatedNumber,max)
  }
  console.log(max)
  return(max)
};

maxSubArray([1,2,-1,-2,2,1,-2,1,4,-5,4])