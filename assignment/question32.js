function helper(text) {
    return text.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  }
  
  const inputText = "hello my name is john";
  const capitalizedText = helper(inputText);
  console.log(capitalizedText); 
  