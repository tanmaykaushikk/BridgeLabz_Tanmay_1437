const sentence = "Hello friends , my name is jack sparrow";     // as friends and sparow are of same length but friends is coming first so it is returning friends.
const longestWord = findLongestWord(sentence);
console.log(longestWord);


function findLongestWord(str){
    const words = str.split(' ');
    let longestWord = [];
    let maxLength = 0;

    for(let word of words){
        if(word.length > maxLength){
            maxLength = word.length;
            longestWord = [word];
        }else if(words.length === maxLength){
            longestWord.push(word);
        }
    }

    return longestWord;
}