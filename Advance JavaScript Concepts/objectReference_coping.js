// obj1 = {name:"john",age:25};
// obj2 = obj1;

// obj2.name = "batman"
// console.log(obj1);
// yes the name will change because it is referring to the same memory


// SHALLOW COPY
let obj = {name:"john" , age: 25 ,address:{city:"paris"}};
let obj1 = Object.assign({},obj);

obj1.name = "batman";
obj1.address.city = "gotham";

console.log(obj.name);
console.log(obj1.name);

console.log(obj.address.city);



