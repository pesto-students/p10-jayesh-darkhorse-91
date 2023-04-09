function createIncrement() { 
    let count = 0; 
    function increment() { 
        count++; 
        } 

    let message = `Count is ${count}`; 

    function log() { 
        console.log(message); 
        }       
        return [increment, log]; 
    } 
    const [increment, log] = createIncrement(); 

increment(); 
increment(); 
increment(); 
log();// What is logged?

/* ----------------------------------------------------------------------------------------------------------------*/


/*
The console log will print

Count is 0

Because here we are invoking the outer function createIncrement first at the 
line no. 16 and storing the log and increment methods ion variables while this invoke 
call the value of count is 0 and the same is passed to the message variable,
Therefore we are getting output as 0 for count 
*/