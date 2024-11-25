var islandPerimeter = function(grid) {
  // const gridFlat = [...grid].flat();
  const gridLength = grid[0].length;
  let result = 0;

  for(let i = 0; i < grid.length ; i++){
    for (let j = 0; j < grid[i].length; j++){
      let value=4;
      if(grid[i][j]){
        if(grid[i][j-1]){
          value-=1;
        };
        if(grid[i][j+1]){
          value-=1;
        };
        if(i!=0&&grid[i-1][j]){
          value-=1;
        };
        if(i!=grid.length-1&&grid[i+1][j]){
          value-=1;
        };
        result+=value;
      }
    };
  };
  return(result);
  
};
islandPerimeter([[0,1,0,0],[1,1,1,0],[0,1,0,0],[1,1,0,0]])