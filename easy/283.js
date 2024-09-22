var moveZeroes = function(nums) {
  let zeroCount = 0
  for(num of nums){
    if(num===0){
      zeroCount++
    }
  }

  for(let i = 0 ; i < zeroCount ; i++){
    nums.splice(nums.indexOf(0),1)
    nums.push(0)
  }

  return nums
}
moveZeroes([0,0,1])