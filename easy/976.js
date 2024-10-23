var largestPerimeter = function(nums) {
  let sortedNums = [...nums].sort((a,b)=>b-a)
  console.log(sortedNums)
  let left = 0
  let middle = 1
  let right = 2

  while(right < nums.length){
    if(sortedNums[left]+sortedNums[middle]>sortedNums[right]&&
      sortedNums[left]+sortedNums[right]>sortedNums[middle]&&
      sortedNums[right]+sortedNums[middle]>sortedNums[left]){
        return sortedNums[left]+sortedNums[middle]+sortedNums[right]
      }
    left++
    middle++
    right++
  }
  return 0
};
largestPerimeter([1,2,1,10])