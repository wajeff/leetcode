var removeElement = function(nums, val) {
    while(nums.includes(val)){
      nums.splice(nums.indexOf(val),1)
    }
    return nums.length
};
removeElement([3,2,2,3],3)