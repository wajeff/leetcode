var findMaxAverage = function(nums, k) {
  let startPointer = 0
  let endPointer = k-1
  let maximumAverage = 0
  if(nums.length==k){
    console.log(nums.reduce((a,b)=>a+b,0)/k)
    return nums.reduce((a,b)=>a+b,0)/k
  }
  let currentAverage = 0
  while(endPointer<nums.length){
    for(let i = startPointer; i<=endPointer ;i ++){
      currentAverage+=parseInt(nums[i])
    }
    startPointer++
    endPointer++
    maximumAverage=Math.max(maximumAverage,currentAverage)
    currentAverage=0
  }
  console.log(maximumAverage/k)
  return(maximumAverage/k)
};
findMaxAverage([6367,7359,6636,-7632,-1837,8671,-120,5528,-6733,9942,-1645,6728,-8842,-3094,-4176,-1847,-7154,6727,8100,3499,-1405,9549,2182,-6982,-5991,8426,2386,1766,4634,-3853,4256,4317,3218,7265,-718,-4970,-7607,-681,-9271,3802,-4154,9127,-4683,-9447,8960,-92,-5367,5523,3959,-9499,-3988,3885,-4833,1937,3642,-1247,8612,-7064,-7463,-160,5813,3945,8240,-7738,9004,8126,5122,-3742,-4623,8624,254,5379,-6462,-2755,2072,8906,-474,4945,659,-2501,7944,-569,8630,2351,7266,7688,-1847,6691,-912,6486,7679,-9886,5018,3109,3047,-2827,-8058,4829,-181,3910,5892,2650,-5304,6275,2366,-9294,-3150,-4963,-5204,9810,8976,-9576,-6255,3840,-7034,-7209,-7626,4386,4260,-1590,3296,-7576,761,-2779,-464,7013,-5937,-9744,9626,4455,3806,-9253,6002,5544,9320,8123,5798,6177,-2259,6133,4423,-4002,7308,4975,-9908,-7345,4317,6300,2827,-5471,-5018,-5081,-8863,-5704,9931,5518,-5326,-8039,6144,-1255,876,-8377,595,9482,4650,9795,-807,8198,-3745,5686,-641,4151,-4824],173)
/*let startPointer = 0
  let endPointer = k-1
  let maximumAverage = 0
  if(nums.length=1&&k==1){
    return nums[0]
  }
  while(endPointer<k.length){
    maximumAverage = Math.max(maximumAverage,)
  }*/