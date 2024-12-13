const result = printPrimeDistance(100);

function printPrimes(n){
    let primes = [];
    let num = 2;

    while(primes.length<n){
        if(isPrime(num)){
            primes.push(num);
        }
        num++;
    }
    return primes;
}

function isPrime(num){
    if(num<=1) return false;
    for(let i = 2;i<=Math.sqrt(num);i++){
        if(num %i === 0){
            return false;
        }
        return true;
    }
}

function printPrimeDistance(n){
    const primes = printPrimes(n);
    const distance = [];
    for(let i=1;i<primes.length;i++){
        distance.push(primes[i] - primes[i-1]);
    }

    console.log(distance);
}

