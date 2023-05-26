// Spiral Order Matrix

const printSpiral = (matrix) => {

    if(matrix.length === 0) {
        return [];
    }

    if(matrix.length === 1) {
        return matrix[0];
    }
    if(matrix[0].length === 1) {
      let spiralCol = [];
      for(let i=0; i<matrix.length; i++){
        spiralCol.push(matrix[i][0]);
      }
      return spiralCol;
    }

    
    let topRow = 0;
    let bottomRow = matrix.length-1;
    let leftCol = 0;
    let rightCol = matrix[0].length-1;
    let spiralMat = []
    while(topRow <= bottomRow && leftCol <= rightCol) {

        // traverse left to right
        for(let i=leftCol; i<=rightCol; i++){
            console.log(matrix[topRow][i]);
            spiralMat.push(matrix[topRow][i]);
        }
        topRow++;

        // traverse top to bottom
        for(let i=topRow; i<=bottomRow; i++){
            console.log(matrix[i][rightCol]);
            spiralMat.push(matrix[i][rightCol]);
        }
        rightCol--;
      
        // if (matrix.length !== matrix[0].length) {
        //     if(leftCol >= rightCol && topRow >= bottomRow) {
        //     break;
        //   }
        // }
        

        // traaverse right to left
        if(topRow <= bottomRow){
            for(let i=rightCol; i>=leftCol; i--){
                console.log(matrix[bottomRow][i]);
                spiralMat.push(matrix[bottomRow][i]);
            }
            bottomRow--;
        }
        

        // if (matrix.length !== matrix[0].length) {
        //     if(leftCol >= rightCol && topRow >= bottomRow) {
        //     break;
        //   }
        // }

        // traverse bottom to top (skip if last col)
        if(leftCol <= rightCol){
            for(let i=bottomRow; i>=topRow; i--){
                console.log(matrix[i][leftCol]);
                spiralMat.push(matrix[i][leftCol]);
            }
            leftCol++;
        }
        
    }
    return spiralMat;
};




// Driver Code

// arr = [
//     [1,2,3,4],
//     [5,6,7,8],
//     [9,10,11,12],
//     [13,14,15,16]
// ]

// arr = [
//         [1,2,3,4],
//         [5,6,7,8],
//         [9,10,11,12]
//     ]

// arr = [[9],[8],[7]]

// arr = [[2,3,4],
//         [5,6,7],
//         [8,9,10],
//         [11,12,13],
//         [14,15,16]]

// arr = [[1,2], [3,4], [5,6]]

let spiralOrder = printSpiral(arr);
console.log(spiralOrder);

