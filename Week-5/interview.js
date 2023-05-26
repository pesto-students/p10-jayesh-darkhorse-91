// 1. Recursion
// 2. for loop
// 3. generators
// 4. while 
// 5. iterators
// 6. map reduce
// 7. do while
// 8. filter
// 9. array.fill



function printTenRec(n,i) {
    if (i > n){
        return
    }
    console.log(i);
    printTenRec(n, i+1);
}
// printTenRec(10,1);

function* printTenGen(n){

    let i = 1;
    while (i<=n){
        yield i;
        i++;
    }
}

// genVar = printTenGen(10);
// console.log(genVar);
// for( let i of genVar){
//     console.log(i);
// }


const printInterval = (limit, timeGap) => {
    function print(k){
        console.log(k)
    }
    for(var i=0; i<limit;i++) {
        function prettyPrint(i) {setTimeout(function() {
            console.log(i)},timeGap*i);}
        prettyPrint(i);
    }
}


printInterval(10, 2000);