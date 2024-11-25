var matrixReshape = function(mat, r, c) {
  let matFlat = [...mat].flat();
  let result = [];
  if(r * c == matFlat.length){
    while (matFlat.length){
      result.push(matFlat.splice(0,c))
    };
    return (result)
  };
  
  return mat;
};
matrixReshape([[1,2],[3,4]],1,4)