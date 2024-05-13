var searchMatrix = function(matrix, target) {
    matrix = matrix.flat()
    if (matrix.indexOf(target)!=-1){
        return true
    }
    else{
        return false
    }
};
searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]],3)