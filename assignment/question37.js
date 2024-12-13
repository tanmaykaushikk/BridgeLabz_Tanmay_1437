const str = "hello";
const ascii = stringToascii(str);
console.log(ascii);

function stringToascii(str){
    return str.split('').map(char => char.charCodeAt(0));
}