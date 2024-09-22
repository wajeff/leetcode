var firstUniqChar = function(s) {
  
  let firstUniqCharMap = new Map()

  for (letter of s){
    if(!firstUniqCharMap.has(letter)){
      firstUniqCharMap.set(letter, 1)
    }
    else{
      firstUniqCharMap.set(letter, firstUniqCharMap.get(letter)+1)
    }
  }

  let uniqCharArray = []
  
  firstUniqCharMap.forEach(function(val,key){

    if(firstUniqCharMap.get(key)===1){
      uniqCharArray.push(s.indexOf(key))
    }
  })
  if(uniqCharArray.length === 0 ){
    return -1
  }
  return uniqCharArray[0]

};
firstUniqChar("aabb")