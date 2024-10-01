var maximumProduct = function(nums) {
  nums=nums.sort((a,b)=>b-a)

  startingThreeIntegerProduct = nums[0]*nums[1]*nums[2]
  negativesThreeIntegerProduct = nums[nums.length-1]*nums[nums.length-2]*nums[0]
  return Math.max(startingThreeIntegerProduct,negativesThreeIntegerProduct)
};
maximumProduct([-4,-3,-2,-1,60])