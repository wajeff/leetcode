var findRelativeRanks = function(score) {
  sortedScore = [...score].sort((a,b)=>b-a)
  
  for(let index = 0 ; index < sortedScore.length ; index++){

    if(index == 0){
      score.splice(score.indexOf(sortedScore[index]),1,'Gold Medal')
    }
    else if(index == 1){
      score.splice(score.indexOf(sortedScore[index]),1,'Silver Medal')
    }
    else if(index == 2){
      score.splice(score.indexOf(sortedScore[index]),1,'Bronze Medal')
    }
    else{
      score.splice(score.indexOf(sortedScore[index]),1,(Number(index)+1).toString())
    }
  }
  return(score)
};
findRelativeRanks([10,3,8,9,4])