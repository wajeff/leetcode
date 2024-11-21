var numJewelsInStones = function(jewels, stones) {
  let jewelsHash = new Map();
  for(let jewel of jewels){
    if(jewelsHash.has(jewel)){
      jewelsHash.set(jewel, jewelsHash.get(jewel)+1);
    }
    else{
      jewelsHash.set(jewel,1);
    };
  };
  let count = 0
  for(let stone of stones){
    if(jewelsHash.has(stone)){
      count++
    };
  };
  return(count)
};
numJewelsInStones('aA','aAAbbbb')