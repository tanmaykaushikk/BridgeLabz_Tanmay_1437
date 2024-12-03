// CALLBACK FUNCTION 
// A function is passed as an argument to another function 

function processArray(arr,callback){
    for(let i=0;i<arr.length;i++){
        console.log(callback(arr[i]));
    }
}

processArray([1,2,3],function(number){
    return number*2;
});