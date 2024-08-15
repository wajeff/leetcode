var singleNumber = function(nums) {

  while(nums.length!==1){
    for(i=0;i<nums.length;i++){
      if (nums.indexOf(nums[i]) != nums.lastIndexOf(nums[i])){
        nums=nums.filter((value)=>value!=nums[i])
      }
    }
  }

  
  return(nums)

};
singleNumber([1,1,2,3,4,5,4,5,3,-1,2])

/*First Solution 
var singleNumber = function(nums) {
  result=[]
  for(i=0;i<nums.length;i++){
    
    if (nums.indexOf(nums[i]) == nums.lastIndexOf(nums[i])){

      result[0]=(nums.filter(value=>value==nums[i]))
    }
  }
  return(result[0])
};*/