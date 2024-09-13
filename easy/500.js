var findWords = function(words) {
  const topRow = new RegExp (/^[qwertyuiop]$/gi)
  const middleRow = new RegExp (/^[asdfghjkl]+$/gi)
  const bottomRow = new RegExp (/^[zxcvbnm]+$/gi)

  let result = []
  for (word of words){

    if(word.search(topRow)!==-1||word.search(middleRow)!==-1 || word.search(bottomRow)!==-1 ){
      result.push(word)
    }

  }
  return(result)
};
findWords(["asdfghjkla","qwertyuiopq","zxcvbnzzm","asdfghjkla","qwertyuiopq","zxcvbnzzm"])