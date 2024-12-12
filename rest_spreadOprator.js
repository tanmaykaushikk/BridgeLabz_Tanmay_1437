// // Rest Operator
// // 1. function parameters
// function sum(...numbers){
//     return numbers.reduce((total,num) => total+num,0);
// }
// console.log(sum(1,2,3,4,5));

// //2. Array destructuring 
// const [first , second , ...rest] = [1,2,3,4,5];
// console.log(first);
// console.log(second);
// console.log(rest);

// //3. Object destructuring

// const person = {name:"John", age:25,city:"chandigarh"};
// const {name, ...deatils} = person;
// console.log(name);
// console.log(deatils);



//--------------------------------------------------------

// Spread Operator

//1. Array Expansion
// const arr = [1,2,3,4,5];
// console.log(...arr);


//2. Array Concatenation

// const arr1 = [1,2,3,4,5];
// const arr2 = [6,7,8,9,10];

// const combine = [...arr1,...arr2];
// console.log(combine);

//3. Object Merging
// const obj1 = {a:1,b:2,c:3};
// const obj2 = {d:4,e:5,f:6};
// const merge = {...obj1 , ...obj2}
// console.log(merge);

//4.Function Arguments
// function multiply(x,y,z){
//     return x*y*z;
// }
// const num = [1,2,3];
// console.log(multiply(...num));


