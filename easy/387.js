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
  
  for (let [key, value] of firstUniqCharMap) {
    if(value===1){
      return s.indexOf(key)
    }
  }

  return -1

};
firstUniqChar("aabb")