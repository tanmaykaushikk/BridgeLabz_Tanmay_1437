const jaggedArray = [[1, 2], [3, [4, 5]], [6, 7, 8], [9]];
const maxNumber = max(jaggedArray);
console.log(maxNumber);

function max(jaggedArray){
    let max = 0;

    function findMax(arr){
        for(let i of arr){
            if(Array.isArray(i)){
                max = Math.max(max,findMax(i));
            }else{
                max = Math.max(max,i);
            }
        }
    }
    findMax(jaggedArray);
    return max;
}


