var fairCandySwap = function(aliceSizes, bobSizes) {
  const aliceSum = aliceSizes.reduce((a,b)=>a+b,0);
  const bobSum  = bobSizes.reduce((a,b)=>a+b,0);
  const aliceBobDifference = (aliceSum-bobSum)/2;
  let aliceSet = new Set(aliceSizes);
  
  for (let size of bobSizes) {
    if (aliceSet.has(aliceBobDifference + size)) {
      return [aliceBobDifference + size, size];
    };
  };

};
fairCandySwap([1,1],[2,2])
//==>[1,2]