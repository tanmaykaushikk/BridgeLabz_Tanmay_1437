const num = 12345;
console.log(sumOfDigits(num));

function sumOfDigits(num){
    let sum = 0;
    while(num>0){
        sum += num%10;
        num = Math.floor(num/10);
    }
    return sum;
}