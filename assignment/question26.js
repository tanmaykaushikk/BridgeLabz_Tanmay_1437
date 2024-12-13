const arr1 = [1,2,3,4];
const arr2 = [3,4,5,6];

console.log(helper(arr1,arr2));

function helper(arr1,arr2){
    const set = new Set(arr2);

    return arr1.filter((num => !set.has(num)));
}