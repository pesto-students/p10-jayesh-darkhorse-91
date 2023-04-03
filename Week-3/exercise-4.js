
function createStack() { 
    const items = [];
        function inpush(item) { 
            items.push(item); 
        }; 
        function inpop() { 
            return items.pop();
        } 
    return {
        inpush,inpop
    }; 
} 
const stack = createStack(); 
stack.inpush(10); 
stack.inpush(5); 
stack.inpop(); // => 5 stack.items;// => [10]
console.log(stack.items) // => undefined
