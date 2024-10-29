var repeatedNTimes = function(nums) {
  numsMap = new Map()
  for(num of nums){
    if(!numsMap.has(num)){
      numsMap.set(num,1)
    }
    else{
      numsMap.set(num,numsMap.get(num)+1)
    }
  }
  for([key,value] of numsMap){
    if(value!==1){
      return key
    }
  }
};
repeatedNTimes([1,2,3,3])