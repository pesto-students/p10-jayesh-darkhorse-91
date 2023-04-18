const fib = (n) => ({
    [Symbol.iterator]: () => {
        let i = 0;
        let oldVal = 0, newVal = 0;
        return {
            next: () => {
                if (i++ <= n) {
                    [oldVal, newVal] = [newVal, (oldVal+newVal) || 1];
                    return {value:oldVal, done: false}
                }
                else {
                    return {done: true}
                }
            }
        }
    }
});



console.log([   ...fib(6)  ])

for (let num of fib(6)) {
    console.log(num);
}