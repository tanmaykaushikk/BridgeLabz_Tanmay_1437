function getWordsArray(text) {
    const words = text.split(" ");

    const filteredWords = words.filter(word => word.length > 0);
  
    return filteredWords;
  }
  
  const inputText = "This is an example text with several words.";
  const wordsArray = getWordsArray(inputText);
  console.log(wordsArray); 