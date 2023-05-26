// Max Contiguous Subarray Sum

arrA = [1, 2 , 3, 4, -10]
arrB = [-2, 1, -3, 4, -1, 2, 1, -5, 4]

// Brute Force Approach

const contSumBrute = (arr) => {
    globalSum = Number.NEGATIVE_INFINITY;
    arrLen = arr.length; 
    for(let i=0; i<arrLen; i++) {
        localSum = 0;
        for(let j=i; j<arrLen; j++) {
            localSum += arr[j]

            globalSum = Math.max(globalSum,localSum) 
        }
    }
    console.log(globalSum)
}



// Optimised Approach


const constSumOptim = (arr) => {
    globalSum = Number.NEGATIVE_INFINITY;
    arrLen = arr.length;
    localSum = 0;
    for(let i=0; i<arrLen; i++) {
        localSum += arr[i]

        globalSum = Math.max(globalSum, localSum);

        if (localSum < 0) {
            localSum = 0;
        }
    }
    console.log(globalSum)
}

// Driver Code

console.log('Output of Brute Force Approach --');
contSumBrute(arrA);
contSumBrute(arrB);
console.log('Time Complexity - O(n*n) & Space Complexity - O(1)');


console.log('Output of Optimised Approach --');
constSumOptim(arrA);
constSumOptim(arrB);
console.log('Time Complexity - O(n) & Space Complexity - O(1)');
