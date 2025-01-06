function rotateMatrix(matrix) {
    const n = matrix.length;

    // transpose
    for (let i = 0; i < n; i++) {
      for (let j = i + 1; j < n; j++) {
        [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
      }
    }

    // reverse
    for (let i = 0; i < n; i++) {
      matrix[i].reverse();
    }
  }
  
  const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
  
  rotateMatrix(matrix);
  
  // Output the rotated matrix
  console.log(matrix);
  