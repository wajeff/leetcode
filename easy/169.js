var majorityElement = function(nums) {
  let numsCount = new Map()
  for(num of nums){
    if(!numsCount.get(num)){
      numsCount.set(num, 1)
    }
    else{
      numsCount.set(num,numsCount.get(num)+1)
    }
  }
  for([key,val] of numsCount){
    if(val>=nums.length/2){
      return(key)
    }
  }
};
majorityElement([3,2,3])