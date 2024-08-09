var mySqrt = function(x) {
  let left = 0;
  let right = x;

  while ((left <= right)){
    let mid = (left + right)/2
    mid = Math.floor(mid)
    
    if(mid * mid < x){
      left = mid+1
    }
    else if(mid*mid > x){
      right = mid -1
    }
    else{
      return mid
    }
  }
  return right
};
mySqrt(8)


