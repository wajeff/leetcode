var minimumOperations = function(nums) {
  let count = 0;
  for (let num of nums){
    if(!(num%3===0)){
      count++
    };
  };
  return(count);
};
minimumOperations([1,2,3,4])