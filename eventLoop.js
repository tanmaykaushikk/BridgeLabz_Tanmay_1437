console.log("start");

setTimeout(() => {
    console.log("Timeout");
},1000);

Promise.resolve().then(() =>{
    console.log("promise");
});

console.log("end");