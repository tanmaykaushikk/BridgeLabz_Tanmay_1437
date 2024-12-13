const jaggedArray = [[1, 2], [3, [4, 5]], [6, 7, 8], [9]];
const totalSum = sum(jaggedArray);
console.log(totalSum);


function sum(jaggedArray){
    let sum = 0;
    function sumarray(arr){
        for(let i of arr){
            if(Array.isArray(i)){
                sumarray(i);
            }else{
                sum += i;
            }
        }
    }
    sumarray(jaggedArray);
    return sum;
}