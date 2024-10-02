var threeSum = function(nums) {
  if(nums.length===3){
    if(nums.reduce((a,b)=>a+b,0)==0){
      console.log([nums])
      return ([nums])
    }
  }
  let result = []
  let lPointer = 0
  let mPointer = 1
  let rPointer = 2
  // console.log(nums.length)
  while(lPointer<nums.length-2){ //while lPointer !== 3rd last element
    valueToFind = (0-nums[lPointer])
    while(mPointer<nums.length-1){
      toFind = (valueToFind-nums[mPointer])
      while(rPointer<nums.length){
        if(nums[lPointer]+nums[mPointer]+nums[rPointer]===0){
          result.push([nums[lPointer],nums[mPointer],nums[rPointer]])
        }
        rPointer++
      }
      mPointer++
      rPointer=mPointer+1
    }
    lPointer++
    mPointer=lPointer+1
  }
  console.log(result)
};
threeSum([-1,0,1,2,-1,-4])

