var maxSubArray = function(nums) {
  let arrayReduced = [...nums].reduce((a,b)=>a+b,0)
  let max = arrayReduced
  let left = 0
  let right = nums.length-1

  while (left < right){
    if(arrayReduced-nums[left]>arrayReduced){
      arrayReduced-=nums[left]
      left++
    }
    else if(arrayReduced-nums[right]>arrayReduced){
      arrayReduced-=nums[right]
      right--
    }
    else{
      if(arrayReduced>max){
        max=arrayReduced
      }
      left++
      
    }
  }
  console.log(arrayReduced)
  console.log(max)
};

maxSubArray([5,4,-1,7,8])