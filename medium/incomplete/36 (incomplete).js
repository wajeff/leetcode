/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    let indexOfValues = []
    let columnValues = []
    let topRow = board[0]

    for(let i = 0; i <topRow.length ; i ++){
        
        for (let j = 0; j <topRow.length ;j++){
            if(topRow[i].includes(board[i][j])&&topRow[i]!='.'){
                return false
            }
        }  
        columnValues = []
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