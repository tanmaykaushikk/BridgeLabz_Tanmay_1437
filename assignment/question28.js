const result = sumOfprimes(100);

function sumOfprimes(n){
    let primes = [];
    let num = 2;

    while(primes.length<n){
        if(isPrime(num)){
            primes.push(num);
        }
        num++;
    }

    const sum = primes.reduce((acc,curr) => acc+curr,0);
    return{primes,sum};
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


console.log(result.primes);
console.log(result.sum);
