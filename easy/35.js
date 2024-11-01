var searchInsert = function(nums, target) {

  let start = 0;
  let end = nums.length-1;

  while(start<=end){
    let middle = Math.floor((left+right)/2);
      
    if(nums[middle]===target){
      return middle;
    }
    else if(nums[middle]>target){
      end = middle-1;
    }
    else if(nums[middle]<target){
      start = middle+1;
    };
  };
  return(start);
};

searchInsert([1,3],4) //3

/*
var searchInsert = function(nums, target) {

  function divideAndConquerSearch(array, numToFind){
    let mid = Math.floor(array.length / 2);
    if(numToFind == array[mid]){
      return nums.indexOf(target)
    }
    else if(numToFind>array[mid]&& array.length > 1){
      return divideAndConquerSearch(array.slice(mid, array.length),numToFind)
    }
    else if(numToFind<array[mid]&& array.length > 1){
      return divideAndConquerSearch(array.slice(0, mid),numToFind)
    }
    else if(numToFind>array[mid]&& array.length == 1){
      return nums.indexOf(array[mid])+1
    }
    else if(numToFind<array[mid]&& array.length == 1){
      if(nums.indexOf(array[mid])==0){
        return 0
      }
      return nums.indexOf(array[mid])-1
    }
  }
  return divideAndConquerSearch(nums,target)
  
}; */


/* Old brute force solution

  if(nums.indexOf(target)!=-1){
        return nums.indexOf(target)
    }
    if(nums[nums.length-1]<target){
        return nums.length
    }
    if(nums[0]>target){
        return 0
    }
    for (index in nums){
        if(nums[index]>target){
            return index
        }
    } */