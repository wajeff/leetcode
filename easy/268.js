var missingNumber = function(nums) {
  
  nums = nums.sort((a,b)=>a-b)
  let left = 0
  let right = nums.length
  while(left < right){
    let middle = Math.floor((right+left)/2)
    if(nums[middle]==middle){
      left = middle+1
    }
    else{
      right = middle
    }
  }
  return left
};

missingNumber([0])
//0,1,2,3,4,5,6,7,9 => missing 8
//        4
//          5
//          5

//