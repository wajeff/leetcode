var validMountainArray = function(arr) {
  let left = 0;
  let right = 0;
  for(let i = 0; i < arr.length ; i++){
    if(arr[i]>arr[i+1]){
      left = i;
      right = i;
      break;
    }
    else if(arr[i]===arr[i+1]){
      return false
    };
  };
  if(left===0 || left ===arr.length-1){
    return false
  };
  
  while(left>0||right<arr.length){
    if(!(arr[left]>arr[left-1])&&arr[left-1]){
      return false
    };
    if(!(arr[right]>arr[right+1])&&arr[right+1]){
      return false
    };
    left--
    right++
  };
  return true;
  
};
validMountainArray([1,7,9,5,4,1,2])