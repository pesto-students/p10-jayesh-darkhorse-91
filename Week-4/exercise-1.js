/*  What is a Promise ?
    A Promise object represents the eventual completion or failure of an 
    asynchronous operation and its resulting value.

    States of a Promise -
    1. Pending
    2. Fulfilled
    3. Rejected
    
    A promise is SETTLED in case it's either fulfilled or rejected.
*/

// Skeleton of actual promise --
/*
const promise = new Promise((resolve, reject) => {
    
    //  Your code logic goes here and you call resolve(value)
    //  or reject(value) to resolve or reject the promise
    
})

promise.then((value) => {
    //  logic on success of an operation
}).catch(error => {
    //  logic on failure of an operation
}).finally(() => {
    // logic to be executed irrespective of failure/success
});
*/

const STATE = {
    PENDING: 'PENDING',
    FULFILLED: 'FULFILLED',
    REJECTED: 'REJECTED',
}

class customPromise {
    constructor(callback) {
        this.state = STATE.PENDING;
        this.value = undefined;
        
    }
}

