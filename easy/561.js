var arrayPairSum = function(nums) {
  sortedNums=[...nums].sort((a,b)=>a-b)
  pairs = []
  result = 0
  while(sortedNums.length != 0){
    pairs.push([sortedNums[0],sortedNums[1]])
    sortedNums.splice(0,1)
    sortedNums.splice(0,1)
  }
  
  for(pair of pairs){
    result += Math.min(pair[0],pair[1])
  }
  return(result)
};
arrayPairSum([1,4,3,2])