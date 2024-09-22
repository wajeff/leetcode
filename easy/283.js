var moveZeroes = function(nums) {
  for(num of nums){
    if(num===0){
      // zeroCount++
      nums.splice(nums.indexOf(0),1)
      nums.push(0)
    }
  }

  return nums
}
moveZeroes([0,0,1])