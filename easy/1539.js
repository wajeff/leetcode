var findKthPositive = function(arr, k) {
  let count = arr.length+k;
  let missingArr = [];
  for( let i = 1; i <= count; i++){
    if(!arr.includes(i)){
      missingArr.push(i);
    };
  };
  return(missingArr[k-1]);
};
findKthPositive([2,3,4,7,11],5);
findKthPositive([1,2,3,4],2);