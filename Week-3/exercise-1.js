//Memoization method:
function memoize(reducerFunction) {
    const cache = new Map();
    return function (...args) {
        // console.log(args);
        const key = args.toString();
        // console.log(key);
        if (cache.has(key)) {
            return cache.get(key);
        }
        cache.set(key, reducerFunction(...args));
        return cache.get(key);
    };

} 

//Given reducer method:
function add(a,b){
    return a+b
}

//Create a method called memoize such that:
const memoizeAdd = memoize(add);
//then calling...
// console.time()
memoizeAdd(100,100); //returns 200
memoizeAdd(100); //returns 100
memoizeAdd(100,200) //returns 300
memoizeAdd(100,100) //returns 200 without computing
// console.timeEnd()