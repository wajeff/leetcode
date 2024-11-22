var shuffle = function(nums, n) {
  let left = 0;
  let array = [];
  while(left<nums.length/2){
    array.push(nums[left]);
    array.push(nums[left+nums.length/2]);
    left++;
  };
  return(array);
};
shuffle([2,5,1,3,4,7], 3)

/*OLD SOLUTION */

/*let arrayFirstHalf = []
    for (let i = 0; i<n; i++){
        arrayFirstHalf.push(nums[i])
    }
    let arraySecondHalf = []
    for (let i = n; i<nums.length; i ++){
        arraySecondHalf.push(nums[i])
    }
    let result=[]
    for (let i = 0 ; i <arrayFirstHalf.length ; i++){
        result.push(arrayFirstHalf[i])
        result.push(arraySecondHalf[i])
    }
    return result
*/