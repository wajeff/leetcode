var canConstruct = function(ransomNote, magazine) {
  let ransomNoteMap = new Map()
  let magazineMap = new Map()

  for (letter of ransomNote){
    if(!ransomNoteMap.has(letter)){
      ransomNoteMap.set(letter, 1)
    }
    else{
      ransomNoteMap.set(letter, ransomNoteMap.get(letter) + 1)
    }
  }
  for (letter of magazine){
    if(!magazineMap.has(letter)){
      magazineMap.set(letter, 1)
    }
    else{
      magazineMap.set(letter, magazineMap.get(letter) + 1)
    }
  }
  let result = true
  ransomNoteMap.forEach(function(val, key){

    if(!magazineMap.get(key)||magazineMap.get(key)<ransomNoteMap.get(key)){

      result = false
    }
  })
  return result
};
canConstruct("aa","ab")