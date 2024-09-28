var summaryRanges = function(nums) {
  let left = 0
  let right = 1
  let startOfRangePointer= 0
  let currentRange = []
  let result = []
  while(left < nums.length){
    if (nums[right] == nums[left]+1){
      currentRange = `${nums[startOfRangePointer]}->${nums[right]}`
      left++
      right++
    }
    else{
      if(currentRange.length!=0){
        result.push(currentRange)
        currentRange=[]
      }
      else{
        result.push(String(nums[left]))
      }
      startOfRangePointer = right
      left = startOfRangePointer
      right = left+1
    } 
  }

  return result
  
};
summaryRanges([0,1,2,4,5,7])

/*
[0,2] --> "0->2"
[4,5] --> "4->5"
[7,7] --> "7"
 */