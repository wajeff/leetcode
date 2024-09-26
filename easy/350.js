var intersect = function(nums1, nums2) {
  let result = []
  for (num of nums1){
    if(nums2.includes(num)){
      nums2.splice(nums2.indexOf(num),1)

      result.push(num)
    }
  }
  return(result)
}
intersect([1,2], [2,1])

/* function compareTwoArrayLengths(array1, array2, shorterOrLonger){
    if(shorterOrLonger === 'shorter'){
      if(array1.length<array2.length){
        return(array1)
      }
      return(array2)
    }
    else if(shorterOrLonger === 'longer'){
      if(array1.length>array2.length){
        return(array1)
      }
      return(array2)
    }
  }   

  const shorterArray = compareTwoArrayLengths(nums1, nums2, 'shorter')
  const longerArray = compareTwoArrayLengths(nums1, nums2, 'longer')

  let occurencesOfNumLonger = new Map ()

  for (num of longerArray){
    if(!occurencesOfNumLonger.get(num)){
      occurencesOfNumLonger.set(num,1)
    }
    else{
      occurencesOfNumLonger.set(num,occurencesOfNumLonger.get(num)+1)
    }
  }
  
  let occurencesOfNumShorter = new Map ()

  for (num of shorterArray){
    if(!occurencesOfNumShorter.get(num)){
      occurencesOfNumShorter.set(num,1)
    }
    else{
      occurencesOfNumShorter.set(num,occurencesOfNumShorter.get(num)+1)
    }
  }

  console.log(occurencesOfNumLonger)
  console.log(occurencesOfNumShorter)
  let totalOccurences = new Map ()
  let result = []
  for ([key, val] of occurencesOfNumShorter){
    if(occurencesOfNumLonger.get(key)){
      totalOccurences.set(num,Math.min(occurencesOfNumLonger.get(key),val))
    }
  }
  console.log(totalOccurences)
  for([key, val] of totalOccurences){
    for (let i = 0 ; i < val ; i++){
      result.push(key)
    }
  }
  console.log(result)
  return(result)

}; */