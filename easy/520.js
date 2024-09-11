var detectCapitalUse = function(word) {
  const regex = /[A-Z]/g
  const wordWithoutFirstLetter = word.substring(1)

  if(word === word.toUpperCase()){
    console.log(true)
    return true
  }
  if(word === word.toLowerCase()){

    return true
  }


  if(regex.test(word.charAt(0))&&(wordWithoutFirstLetter.search(regex)==-1)){

    return true
  }
  return false

};
detectCapitalUse("Niy")