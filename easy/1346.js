var checkIfExist = function(arr) {
  let arrMap = new Map();
  for (const num of arr){
    if(arrMap.has(num)){
      arrMap.set(num, arrMap.get(num)+1);
    }
    else{
      arrMap.set(num,1);
    };
  };
  for ([key,value] of arrMap){
    if(arrMap.has(key*2)){
      if(key===0&&!(value>1)){
        continue;
      }
      return true;
    }
  };
  return false;
};