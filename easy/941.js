var validMountainArray = function(arr) {
  let hill = 0
  for(let i = 0; i < arr.length ; i++){
    if(arr[i]>arr[i+1]){
      hill = i;
      break;
    }
    else if(arr[i]===arr[i+1]){
      return false
    };
  };
  if(hill===0||hill===arr.length-1){
    return false
  }
  for (let i = hill; i < arr.length-1; i++){
    if(!(arr[i]>arr[i+1])){
      return false
    }
  }
  return true
};
validMountainArray([0,3,2,1])