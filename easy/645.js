var findErrorNums = function(nums) {
  let res = []
  let numsMap = new Map();
  for (element of nums){
    if(!numsMap.has(element)){
      numsMap.set(element, 1);
    }
    else{
      res.push(element);
      // console.log(element)
      
    };
  };
  for(let i = 1; i < nums.length; i++){
    if(!numsMap.has(i)){
      res.push(i);
    };
  };
  return res;
};
findErrorNums([3,2,3,4,6,5]

)