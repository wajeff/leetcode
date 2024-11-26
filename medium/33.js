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
  console.log(pivot)
  if (pivot == 0){
    return findTarget(nums, target);
  };
  const leftNums = nums.slice(0,pivot)
  const rightNums = nums.slice(pivot,nums.length)

  if(findTarget(leftNums, target)!=-1){
    return findTarget(leftNums, target)
  }
  else if(findTarget(rightNums, target)!=-1){
    // console.log(findTarget(rightNums, target) + pivot)
    return (findTarget(rightNums, target) + pivot)
  };
  return -1
  
};
search([3,1],1)