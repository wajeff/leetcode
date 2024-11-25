var matrixReshape = function(mat, r, c) {
  let matFlat = [...mat].flat();
  let result = [];
  let currentArray = [];
  if(r * c == matFlat.length){
    for (values of matFlat){
      currentArray.push(values)
      if(currentArray.length===c){
        result.push(currentArray)
        currentArray=[]
      }l
    };
    return (result)
  };
  
  return mat;
};
matrixReshape([[1,2],[3,4]],2,2)