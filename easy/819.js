var mostCommonWord = function(paragraph, banned) {
  paragraph=paragraph.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()?]/g," ")
  paragraph=paragraph.toLowerCase().split(' ')
  console.log(paragraph)
  let paragraphSet = new Map()
  let maxOccurences = 0
  let word = ""
  for(word of paragraph){
    if(!paragraphSet.has(word) && word){
      paragraphSet.set(word,1)
    }
    else{
      paragraphSet.set(word, paragraphSet.get(word)+1)
    }
  }
  for([key,value] of paragraphSet){
    if([value]>=maxOccurences && !banned.includes(key)){
      word = key
      maxOccurences = value
    }
  }
  return word

};
mostCommonWord("a, a, a, a, b,b,b,c, c",["a"])