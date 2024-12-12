// rotate array by one left
const arr = [1,2,3,4,5];
console.log(rotateLeft(arr));

function rotateLeft(arr){
    if(arr.length === 0) return arr;
    const firtElement = arr.shift();  //removes from start
    arr.push(firtElement);            // adds at last
    return arr;
}