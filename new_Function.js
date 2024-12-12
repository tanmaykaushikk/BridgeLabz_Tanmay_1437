// The new Function 
// basic usage
// const add = new Function("a","b","return a+b");
// console.log(add(2,3));


// const greet = new Function("return 'Hello world!'");
// console.log(greet());



// advantages

// const x = 10;
// const func = new Function("return x");    // no closure over parent
// console.log(func());                        // x is not defined unless x is global.


// limitations 

// let a = 10;
// const dynamicFunc = new Function("return a");
// console.log(dynamicFunc());        // a is not defined as no closure.

// use case
// dynamic code generator
// const multiplier = function(factor) {
//     return new Function("x",`return x *${factor}`);
// };
// const triple = multiplier(3);
// console.log(triple(10));

//Evaluating Expressions:
// const expression = "a + b * c";
// const compute = new Function("a", "b", "c", `return ${expression};`);

// console.log(compute(2, 3, 4)); // Output: 14
