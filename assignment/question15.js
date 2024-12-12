// fibonacci using recursion
const n = 10;
console.log(fibonacci(n));

function fibonacci(n){
    if(n<=0){
        return 0;
    }
    else if(n === 1){
        return 1;
    }
    return fibonacci(n-1) + fibonacci(n-2);
}