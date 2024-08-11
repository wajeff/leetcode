var merge = function(nums1, m, nums2, n) {
  let first = m - 1;
  let second = n - 1;
  let i = m + n - 1;

  while (second >= 0){
    let firstValue = nums1[first];
    let secondValue = nums2[second];

    if (firstValue>secondValue){
      nums1[i]=firstValue;
      i--;
      first--;
    }
    else{
      nums1[i]=secondValue;
      i--;
      second--;
    }
  }
  return(nums1)

};
merge([1,0],1,[2],1)

/*Alternative solution


var merge = function(nums1, m, nums2, n) {
  nums1.length=m
  nums2.length=n
  array=nums1.concat(nums2)
  
  array = array.sort((a,b)=>a-b)
  for (let i = 0 ; i < array.length ; i++){
    nums1[i]=array[i]
  }
  return(array)
};
*/