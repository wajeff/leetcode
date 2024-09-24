var intersection = function(nums1, nums2) {
  let result = []
  for(num of nums1){
    if(nums2.includes(num) && !result.includes(num)){
      result.push(num)
    }
  }
  return(result)

};
intersection([1,2,2,1],[2,2])