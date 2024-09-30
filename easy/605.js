var canPlaceFlowers = function(flowerbed, n) {
  let flowerCount = 0
  if(flowerbed[0]===0&&flowerbed.length==1){
    flowerCount++
  }
  let left = 0
  let right = 1
  
  while(left < flowerbed.length){
    if(flowerbed[left]===0&&flowerbed[right]===0&&left==0){
      flowerCount++
    }
    else if(flowerbed[left]===0&&flowerbed[right]===0&&right==flowerbed.length-1){
      flowerCount++
    }
    if(flowerbed[left]===0){
      if(flowerbed[right]===0&&flowerbed[right+1]===0){
        flowerCount++
      }
      left = right+1
      right = left+1
    }
    else{
      left = right
      right++
    }
  }
  console.log(flowerCount)
  if(flowerCount>=n){
    return true
  }
  return false
};
canPlaceFlowers([1,0,0,0,1,0,0],2)