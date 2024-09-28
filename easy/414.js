var thirdMax = function(nums) {
  if(nums.length==1){
    return nums[0]
  }

  nums = nums.sort((a,b)=>b-a)
  nums = new Set(nums)
  nums = Array.from(nums)

  if(nums.length==1){
    return nums[0]
  }
  if(nums.length==2){
    return nums[0]
  }

  return nums[2]
};
thirdMax([1,1,1])