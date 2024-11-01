var validMountainArray = function(arr) {
  let hill = 0
  for(let i = 0; i<arr.length; i++){
    if(arr[i]>arr[i+1]){
      hill = i
      break
    }
  }
  if(hill===0){
    return false
  }
  console.log(hill)
  let left = hill
  let right = hill
  while(left>0 && right<arr.length){
    console.log(arr[left-1]<arr[left])
    console.log(arr[right+1]<arr[right])
    if(!(arr[left-1]<arr[left])||!(arr[right+1]<arr[right])){
      console.log(false)
      return false
    }
    left--
    right++
  }
  console.log(true)
  return true
};
validMountainArray([1,7,9,5,4,1,2])