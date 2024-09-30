var distributeCandies = function(candyType) {
  let candySet = new Set(candyType)
  let candyLimit = candyType.length/2

  return Math.min(candyLimit,candySet.size)

};
distributeCandies([1,1,2,3])