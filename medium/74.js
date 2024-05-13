var searchMatrix = function(matrix, target) {
    for(row in matrix){
        if (matrix[row].indexOf(target)!=-1){
            return true
        }
    }
    return false
};