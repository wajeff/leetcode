/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
  
  numsRegex = new RegExp (/^[0-9]*$/)
  
  for(array of board){
    tempArray=[...array].filter((element)=>element!='.') //filter out empty
    arrayWithoutDotsLength = tempArray.length
    set = new Set(tempArray)
    if(set.size!=arrayWithoutDotsLength){
      return false
    }
  }
  flatBoard = [...board].flat()

  for(index in flatBoard){
    incrementIndex = Number(index)
    while(incrementIndex<flatBoard.length){
      incrementIndex+=9
      if(flatBoard[index]==flatBoard[incrementIndex]&&flatBoard[index]!='.'){
        return false
      }
    }
  }
  let res = [];
  for (let i = 0; i < 9; i += 3) {
    for (let j = 0; j < 9; j += 3) {
      let curr = [];
      for (let k = 0; k < 3; k++) {
        for (let l = 0; l < 3; l++) {
          curr.push(board[i + k][j + l]);
      }
    }
    res.push(curr);
  }
  for(array of res){
    array=array.filter((element)=>element!='.')
    let set = new Set(array)
    if(set.size!=array.length){
      return false
    }
  }

}
  return true
};

isValidSudoku(
[["5","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]])
// isValidSudoku(
//   [["8","3",".",".","7",".",".",".","."]
//   ,["6",".",".","1","9","5",".",".","."]
//   ,[".","9","8",".",".",".",".","6","."]
//   ,["8",".",".",".","6",".",".",".","3"]
//   ,["4",".",".","8",".","3",".",".","1"]
//   ,["7",".",".",".","2",".",".",".","6"]
//   ,[".","6",".",".",".",".","2","8","."]
//   ,[".",".",".","4","1","9",".",".","5"]
//   ,[".",".",".",".","8",".",".","7","9"]])
// isValidSudoku(
//   [[".",".",".",".","5",".",".","1","."]
//   ,[".","4",".","3",".",".",".",".","."]
//   ,[".",".",".",".",".","3",".",".","1"]
//   ,["8",".",".",".",".",".",".","2","."]
//   ,[".",".","2",".","7",".",".",".","."]
//   ,[".","1","5",".",".",".",".",".","."]
//   ,[".",".",".",".",".","2",".",".","."]
//   ,[".","2",".","9",".",".",".",".","."]
//   ,[".",".","4",".",".",".",".",".","."]])