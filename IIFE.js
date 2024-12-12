//IIFE (Immediately Invoked Function Arguments)

// syntax 
// (function(){
// })();


//Basic IIFE:
// (function (){
//     console.log("this is an iffe");
// })();



// IIFE with parameters
// (function (name){
//     console.log(name);
// })("jack");



// Arrow function with IIFE
// (()=>{
//     console.log("Arrow function iffe");
// })();


// WHY USE IFFE?

// avoid polluting the global scope
// (function (){
//     var localVariable = "I am local";
// })();
// console.log(localVariable);  // local variable is not defined


// encapsulation
// let counter = (function (){
//     let count = 0;
//     return function(){
//         count++;
//         return count;
//     };
// })();
// console.log(counter());   op:1
// console.log(counter());   op:2
// console.log(counter());   op:3



// initialization code
// (function (){
//     console.log("initializing");
// })();



// USE CASE
//1 modular programming
// const appModule = (function (){
//     let privateVar = "private";

//     function privateFunction(){
//         console.log(privateVar);
//     }

//     return{
//         publcMethod: function(){
//             privateFunction();
//         },
//     };
// })();

// appModule.publcMethod();



//2 avoid multi conflicts scripts
// (function (){
//     let framework = "react";
//     console.log(framework);
// })();

// (function (){
//     let framework = "vue";
//     console.log(framework);
// })();


// 3 event listeners
// document.addEventListener("DOMContentLoaded",(function(){
//     console.log("dom fully loaded and parsed");
// })());