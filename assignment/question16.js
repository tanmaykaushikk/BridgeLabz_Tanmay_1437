
// create a function that will return a boolean specifying if a number is prime.
function isPrime(num){
    if(num<=1) return false;
    if(num === 2) return true;
    if(num % 2 == 0) return false;

    for(let i=3;i<=Math.sqrt(num);i+=2){
        if(num%i === 0) return false;
    }
    return true;
}
console.log(isPrime(5));
console.log(isPrime(2));
console.log(isPrime(15));
console.log(isPrime(23));