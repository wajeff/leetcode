var largestPerimeter = function(nums) {
  let sortedNums = [...nums].sort((a,b)=>b-a)
  let pointer = 0
  while(pointer < nums.length-2){
    if(sortedNums[pointer]>sortedNums[pointer+1]+sortedNums[pointer+2] || sortedNums[pointer]===sortedNums[pointer+1]){
        return sortedNums[pointer]+sortedNums[pointer+1]+sortedNums[pointer+2]
      }
    pointer++
  }
  return 0
};
largestPerimeter([2,1,2])