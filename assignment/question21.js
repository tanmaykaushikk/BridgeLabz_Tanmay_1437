// rotate by one right
const arr = [1,2,3,4,5];
console.log(rotateRight(arr));

function rotateRight(arr){
    if(arr.length === 0) return arr;
    const lastElement = arr.pop();  //  removes from end
    arr.unshift(lastElement);            // adds at front
    return arr;
}