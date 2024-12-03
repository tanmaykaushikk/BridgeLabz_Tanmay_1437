// Destructuring in js is a powerful syntax for extracting values from arrays or properties from objects into distinct variables.

//Array destructuring
// const [a,b,c] = [1,2,3];
// console.log(a);
// console.log(b);
// console.log(c);

// const [first, ,third] = [10,20,30];
// console.log(first);
// console.log(third);

const [x=1 , y=2] = [10];
// console.log(x);
// console.log(y);

const [head, ...tail] = [1,2,3,4];
// console.log(head);
// console.log(tail);

/**************************************/


//Object destructuring
const person = {name:'hulk',age:50};
// const {name,age} = person;
// console.log(name);
// console.log(age);

const {name: username , age:userAge} = person
// console.log(username);
// console.log(userAge);

const student  = {
    name: 'john',
    grades: {maths:100,science:100},
};
const {grades : {maths,science}} = student;
// console.log(maths);
// console.log(science);

const {name, ...rest} = student;
// console.log(rest);

/***************************************************/

// mixed destructuring
const data = {id:1,details:[10,20]};
const {id,details:[first,second]} = data;
// console.log(id);
// console.log(first);
// console.log(second);

/****************************************************/
//function parameters destructuring
function sum([a,b]){
    return a+b;
}
// console.log(sum([1,2]));

function greet({name,age}){
//     console.log(`hello,${name}.You are ${age} years old`);
}
greet({name:'alice',age:25});

/*****************************************************/


// destructuring with defaults
function display({name = "guest" , age= 18} = {}){
    // console.log(name,age);
}
display();
display({name:'rahul'});
/******************************************************/

// destructuring for swapping variables

let a=1,b=2;
[a,b] =[b,a];
// console.log(a,b);

/************************************************** */

//destructuring in loops
const arr = [[1,2],[3,4]];
for(const [a,b] of arr){
    // console.log(a,b);
}


const people = [
    {name:'alice',age:30},
    {name:'eisha',age:25},
];
for(const {name,age} of people){
    // console.log(`name is${name} and age is${age}`);
}