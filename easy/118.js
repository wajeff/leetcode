var generate = function(numRows) {

  if(numRows < 1) return [];
  if (numRows ===1) return [[1]];

  const triangle = [[1]];

  for (let i = 1 ; i <numRows ; i++){
    let previousRow = triangle [i - 1];
    const currentRow = [];

    currentRow.push(1);

    for (let j = 1; j <previousRow.length; j++){
      currentRow[j]=previousRow[j]+previousRow[j-1];
    }
    currentRow.push(1)
    triangle.push(currentRow)
  }
  return(triangle) 
  
};
generate(5)