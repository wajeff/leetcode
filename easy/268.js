var missingNumber = function(nums) {
  const sortedNums = [...nums].sort((a,b)=>a-b)
  console.log(sortedNums)
  for (let i = 0; i < nums.length; i++){
    if(i==0){
      if(sortedNums[i]!==0){
        console.log('break')
        return 0
      }
    }
    else if(sortedNums[i]!==sortedNums[i-1]+1){
      console.log(true)
      return sortedNums[i-1]+1
    }
  }
  if(!sortedNums.includes(sortedNums.length)){
    return sortedNums.length
  }
};

missingNumber([ 0, 1 ])