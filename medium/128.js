var longestConsecutive = function(nums) {
  numsSet = new Set(nums)
  nums = [...numsSet].sort((a,b)=>a-b);
      let currentLength = 1
      let max = 0
      for ( let i = 0; i < nums.length ; i++ ){
          if(!numsSet.has(nums[i]-1)){
              let startValue = nums[i]
              let currentValue = startValue+1
              while(numsSet.has(currentValue)){
                  currentValue++
                  currentLength++
              }
              max = Math.max(currentLength,max);
              currentLength = 1
          }
      }
      return max
 
};