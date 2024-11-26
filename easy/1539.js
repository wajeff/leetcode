var findKthPositive = function(arr, k) {
  let result = [];
  let number = 1;
  while(result.length<k){
    if(!arr.includes(number)){
      result.push(number)
    };
    number++;
  };
  return(result[k-1]);

};
findKthPositive([2,3,4,7,11],5);