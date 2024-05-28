/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function(operations) {
    let score = []
    let pointer = 0
    for (index in operations){
        if(operations[index]=='+'){
            score.push(score[pointer-1]+score[pointer-2])
            pointer++
        }
        else if(operations[index] == 'D'){
            score.push(Number(score[pointer-1]*2))
            pointer++
        }
        else if(operations[index] == 'C'){
            score.pop()
            pointer--
        }
        else{
            score.push(Number(operations[index]))
            pointer++
        }
    }
    return(score.reduce((a,b)=>a+b,0)) 
};
calPoints(["5","-2","4","C","D","9","+","+"])