var moveZeroes = function(nums) {
  for(let i = 0; i < nums.length; i++){
    if(nums[i] === 0){
      nums[nums.length - 1] = nums.splice(nums[i],1)
    }
  }
  console.log(nums.flat())
  return(nums.flat())
};

moveZeroes([0,1,0,3,12])

/* 
for(num of nums){
    if(num===0){
      nums.splice(nums.indexOf(0),1)
      nums.push(0)
    }
  }

return nums */