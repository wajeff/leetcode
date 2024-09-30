var arrayPairSum = function(nums) {
  //Unfinished new algo
  const map = new Map();
  nums=nums.sort((a,b)=>a-b)
  nums.forEach((value,index) => {
    map.set(index, value);
  });
  result = 0
  iterator1 = map.keys()
  console.log(iterator1.next().value)
};
arrayPairSum([1,4,3,2])

/*sortedNums=[...nums].sort((a,b)=>a-b)
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
  return(result) */