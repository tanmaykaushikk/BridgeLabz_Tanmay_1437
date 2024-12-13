const matrix = [[1,2,3],[4,5,6],[7,8,9]];
const colIdx = 1;
const result = helper(matrix,colIdx);
console.log(result);

function helper(matrix,colIdx){
    if(!matrix.length || colIdx<0 || colIdx>=matrix[0].length){
        return [];
    }

    const column = matrix.map(row => row[colIdx]);
    return column;
}