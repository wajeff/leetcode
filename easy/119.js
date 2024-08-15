var getRow = function(rowIndex) {
  let triangle = [[1],[1,1]]
  if(rowIndex==0){
    return triangle[0]
  }
  if(rowIndex===1){
    return [1,1]
  }

  for (let i = 2; i < rowIndex+1 ; i++){
    previousRow = triangle[i-1];
    console.log(previousRow)
    const currentRow = []
    currentRow.push(1)

    for (let j = 1; j <previousRow.length; j++){
      console.log('hi')
      currentRow[j] = previousRow[j]+previousRow[j-1];
      console.log(currentRow[j])
    }
    currentRow.push(1)
    triangle.push(currentRow)
  }
  return(triangle[triangle.length-1])
};
getRow(3)