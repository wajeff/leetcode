var validMountainArray = function(arr) {
  let hill = 0
  for(let i = 0; i < arr.length ; i++){
    if(arr[i]>arr[i+1]){
      hill = i
      break;
    }
    else if(arr[i]===arr[i+1]){
      return false
    }
  }
  if(hill==0 || hill ==arr.length-1){
    return false
  } 
  let left = hill
  let right = hill
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
  return true
  
};
validMountainArray([1,7,9,5,4,1,2])