const array3 = [1, 2, 2, 3, 4, 4, 5];
console.log(distinctElements(array3));


function distinctElements(array) {
    return Array.from(new Set(array));
}


