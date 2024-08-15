var singleNumber = function(nums) {
  result=[]
  for(i=0;i<nums.length;i++){
    
    if (nums.indexOf(nums[i]) == nums.lastIndexOf(nums[i])){

      result[0]=(nums.filter(value=>value==nums[i]))
    }
  }
  return(result[0])
};
singleNumber([4,1,2,1,2])