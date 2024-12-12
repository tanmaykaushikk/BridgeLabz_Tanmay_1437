//Create a function that will return in an array the first “p” prime numbers greater than “n”
function getPrimes(n,p){
    const isPrime = (num) => {
        if(num<=1)return false;
        for(let i=2;i<=Math.sqrt(num);i++){
            if(num%i == 0) return false;
        }
        return true;
    }

    const primes = [];
    let current = n+1;

    while(primes.length<p){
        if(isPrime(current)){
            primes.push(current);
        }
        current++;
    }
    return primes;
}
const n = 100;
const p = 5;
console.log(getPrimes(n,p));


