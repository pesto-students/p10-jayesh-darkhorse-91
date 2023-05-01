// Spiral Order Matrix

const printSpiral = (mat) => {

    let topRow = 0;
    let bottomRow = mat.length-1;
    let leftCol = 0;
    let rightCol = mat[0].length-1;

    while( topRow <= bottomRow && leftCol <= rightCol) {

        // traverse left to right
        for(let i=leftCol; i<=rightCol; i++){
            console.log(mat[topRow][i]);
        }
        topRow++;

        // traverse top to bottom
        for(let i=topRow; i<=bottomRow; i++){
            console.log(mat[i][rightCol]);
        }
        rightCol--;

        // traaverse right to left
        for(let i=rightCol; i>=leftCol; i--){
            console.log(mat[bottomRow][i]);
        }
        bottomRow--;

        // traverse bottom to top
        for(let i=bottomRow; i>=topRow; i--){
            console.log(mat[i][leftCol])
        }
        leftCol++;
    }
}



// Driver Code

arr = [
    [1,2,3,4],
    [5,6,7,8],
    [9,10,11,12],
    [13,14,15,16]
]

printSpiral(arr);