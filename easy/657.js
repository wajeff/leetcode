var judgeCircle = function(moves) {
  let movesMap = {}
  for (const move of moves){
    if(!movesMap[move]){
    movesMap[move]=1
    }
    else{
    movesMap[move]++
    }
    }
    
  if(movesMap['D']==movesMap['U'] && movesMap['L']==movesMap['R']){
    return true
  }
  return false
};
judgeCircle('UD')
//If number of U and D is the same - return true
//If number of L and R is the same - return true
//Else return false