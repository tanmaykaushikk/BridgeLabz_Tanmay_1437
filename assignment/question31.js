function countWords(text) {
    const words = text.trim().split(" ");
    return words.filter(word => word.length > 0).length;
  }
  console.log(countWords("This is an example text.")); 