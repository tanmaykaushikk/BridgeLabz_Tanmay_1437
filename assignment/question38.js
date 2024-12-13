function asciiArrayToString(asciiArray) {
    return asciiArray.map(code => String.fromCharCode(code)).join('');
  }
  
  const asciiArray = [104, 101, 108, 108, 111];
  const resultString = asciiArrayToString(asciiArray);
  console.log(resultString);
  