// Sort array of 0's,1's and 2's

// My Approach

const zerOneTwo = (arr) => {
    let zero = 0;
    let one = 0;
    let two = 0;

    for(let i=0; i<arr.length; i++) {
        if (arr[i] === 0){
            zero++
        }
        else if (arr[i] === 1){
            one++;
        }
        else{
            two++;
        }
    }

    // console.log(`1-- ${one}, 2-- ${two}, 0-- ${zero}`);

    for (let i=0; i<arr.length; i++){
        if (i < zero){
            arr[i] = 0;
        }
        else if(i < one+zero){
            arr[i] = 1;
        }
        else if(i < one+two+zero){
            arr[i] = 2;
        }
    }

}


//Dutch National Flag Algorithm

const zerOneTwoAlgo = (arr) => {
    let low = 0;
    let mid = 0;
    let high = arr.length-1;

    while (mid <= high) {
        if(arr[mid] === 0){
            [arr[mid], arr[low]] = [arr[low], arr[mid]];
            mid++;
            low++;
        }
        else if(arr[mid] === 1) {
            mid++;
        }
        else {
            [arr[mid], arr[high]] = [arr[high], arr[mid]];
            mid++;
            high--;
        }
    }
}


// Driver Code
console.log('My Approach ')
arr1 = [0, 2, 1, 2, 0]
console.log('Unsorted --',arr1)
zerOneTwo(arr1)
console.log('Sorted --',arr1)
console.log()
console.log()
console.log('Dutch National Flag Algorithm')
arr2 = [0, 2, 1, 2, 0]
console.log('Unsorted --',arr2)
zerOneTwoAlgo(arr2)
console.log('Sorted --',arr2)