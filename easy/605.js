var canPlaceFlowers = function(flowerbed, n) {
  let pointer = 0
  let flowerCount = 0
  if(flowerbed.length==1&&flowerbed[0]===0){
    flowerCount++
    
    return(flowerCount>=n)
  }
  while(pointer < flowerbed.length){

    if(flowerbed[pointer]==0){
      if(pointer==0&&flowerbed[pointer+1]==0){
        flowerbed.splice(pointer,1,1)
        flowerCount++

      }
      else if(flowerbed[pointer-1]==0&&flowerbed[pointer+1]==0){
        flowerCount++
        flowerbed.splice(pointer,1,1)
        
      }
      else if(pointer==flowerbed.length-2&&flowerbed[pointer+1]==0){
        flowerbed.splice(pointer,1,1)
        flowerCount++
      }
    }
    pointer++
  }
  console.log(flowerCount)
  return(flowerCount>=n)
};
canPlaceFlowers([1,0,0,0,0],1)

/* Failed algo
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
  return false*/