var findRelativeRanks = function(score) {
  sortedScore = [...score].sort((a,b)=>b-a)

  for(index in sortedScore){

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
      score.splice(score.indexOf(sortedScore[index]),1,String(Number(index)+1))
    }
  }
  return(score)
};
findRelativeRanks([10,3,8,9,4])