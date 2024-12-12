// reverse a string

const str = "hello";
console.log(reverse(str));

function reverse(str){
    return str.split("").reverse().join("");
}
