var containsNearbyDuplicate = function(nums, k) {
  let map = new Map()

  for (let i = 0 ; i < nums.length ; i++){
    if(!map.has(nums[i])){
      map.set(nums[i],i)
    }
    else{
      if(Math.abs(map.get(nums[i])-i) <=k){
        // console.log(true)
        return true
      }
      map.set((nums[i]),i)
    }
  }
  // console.log(false)
  return false
}
containsNearbyDuplicate([1,0,1,1],1)