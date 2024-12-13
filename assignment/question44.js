const binary = "111";
const decimal = binarytoDecimal(binary);
console.log(decimal);

function binarytoDecimal(binary){
    const decimal = parseInt(binary,2);
    return decimal;
}