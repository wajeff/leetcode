var search = function(nums, target) {
  const findTarget = function (arr, target){
    let left = 0;
    let right = arr.length-1;
    while(left <= right){
      let middle = Math.floor((left+right)/2)
      if(arr[middle]==target){
        return middle;
      }
      else if(arr[middle]>target){
        right = middle-1
      }
      else{
        left = middle +1
      };
    };
    return -1
  };

  let pivot = 0;
  
  for(let i = 0 ; i<nums.length ; i++){
    if(nums[i+1]<nums[i]){
      pivot = nums.indexOf(nums[i+1]);
    }
  }
  if (pivot == 0){
    return findTarget(nums, target);
  };
  const leftTarget = findTarget(nums.slice(0,pivot), target);
  const rightTarget = (findTarget(nums.slice(pivot , nums.length), target));

  if(rightTarget != -1){
    return rightTarget + pivot
  }

  return leftTarget
};
search([4,5,6,7,0,1,2],3)