var nextGreaterElement = function(nums1, nums2) {
  const result = []
  for (number of nums1){
    for( let i = nums2.indexOf(number); i<nums2.length ; i++){
      if(nums2[i]>number){
        console.log(nums2[i])
        result.push(nums2[i])
        break
      }
      else if(i==nums2.length-1){
        result.push(-1)
      }
    }
    
  }
  return(result)
};
nextGreaterElement([4,1,2],[1,3,4,2])