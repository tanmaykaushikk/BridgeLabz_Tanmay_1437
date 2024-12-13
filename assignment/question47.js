function deepCopyJaggedArray(jaggedArray) {
    let copy = [];

    function copyArray(arr) {
        for (let item of arr) {
            if (Array.isArray(item)) {
                copy.push(copyArray(item)); 
            } else {
                copy.push(item); 
            }
        }
        return copy;
    }

    return copyArray(jaggedArray);
}

const jaggedArray = [[1, 2], [3, [4, 5]], [6, 7, 8], [9]];
const copiedArray = deepCopyJaggedArray(jaggedArray);
console.log(copiedArray);
