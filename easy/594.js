var findLHS = function(nums) {
  nums = nums.sort((a,b)=>a-b)
  numsMap = new Map()
  maxLength = 0
  for(let num of nums){
    if(!numsMap.has(num)){
      numsMap.set(num,1)
    }
    else{
      numsMap.set(num,numsMap.get(num)+1)
    }
  }
  for(let i = 0; i<numsMap.size ; i++){
    
  }
  for(pair of numsMap){
    if(numsMap.get(pair[0]+1)){
      maxLength = Math.max((numsMap.get(pair[0])+numsMap.get(pair[0]+1)),maxLength)
    }
  }
  return(maxLength)
};
findLHS([1,3,2,2,5,2,3,7])