var mostCommonWord = function(paragraph, banned) {
  paragraph=paragraph.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()?'"]/g," ")
  let paragraphSet = new Map()
  let maxOccurences = 0
  let result = ""
  for(word of paragraph.toLowerCase().split(' ')){
    if(!paragraphSet.has(word) && word){
      paragraphSet.set(word,1)
    }
    else{
      paragraphSet.set(word, paragraphSet.get(word)+1)
    }
    if(paragraphSet.get(word)>maxOccurences&& !banned.includes(word)){
      maxOccurences = paragraphSet.get(word)
      result = word
    }
  }
  return result

};
mostCommonWord("a.",[])