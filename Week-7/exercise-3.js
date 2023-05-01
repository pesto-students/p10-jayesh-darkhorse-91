// Sort array of 0's,1's and 2's


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




// Driver Code

arr = [0, 2, 1, 2, 0]
console.log('Unsorted --',arr)
zerOneTwo(arr)
console.log('Sorted --',arr)