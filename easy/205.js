var isIsomorphic = function(s, t) {
  
  function count(string){
    const count = {}
    for(let i = 0;i< string.length;i++){ 
      let ch = string.charAt(i) 
      if(!count[ch]){ 
        count[ch] =1; 
      } 
      else{ 
        count[ch]+=1 
      } 
    }
    return count
  }
  
  const sCount=count(s)
  const tCount=count(t)


  let sArray=[]
  let tArray=[]
  for (index in sCount){
    sArray.push(sCount[index])
  }
  for (index in tCount){
    tArray.push(tCount[index])
  }
  console.log(sArray)
  console.log(tArray)
  for (let i = 0; i < sArray.length; i++) {
    if (sArray[i] !== tArray[i]) return false;
  }
  console.log(true)
  return true
  
};
isIsomorphic("bbbaaaba","aaabbbba")