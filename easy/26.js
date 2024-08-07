var removeDuplicates = function(nums) {
  let numSet = new Set(nums)
  const result= [...numSet]
  for(let i = result.length-1; i>-1;i--){
    nums.unshift(result[i])
  }
  return result.length
};

removeDuplicates([0,0,0,0,3])