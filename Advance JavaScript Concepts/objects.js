// CREATING A OBJECT BY OBJECT LITERALS
// let obj = {
//     name:"John",
//     age: 25,
// }
// console.log(obj);

// CREATING A OBJECT BY OBJECT CONSTRUCTOR

// let obj1 = new Object();
// obj1.name = "john",
// obj1.age = 25,
// console.log(obj1);


// ACCESSING VALUES
// console.log(obj1.name);

// MODIFYING VALUES
// obj.name = "ram"
// console.log(obj);

// ADDING VALUE
// obj.car = "supra"
// console.log(obj)

// REMOVING VALUES
// delete obj.car
// console.log(obj)

// CHECKING IF PROPERTY EXISTS
// console.log(obj.hasOwnProperty("name"))

//ITERATING ON OBJECTS

// let obj = {name:"batman",age:25}
// for(key in obj){
//     console.log(key + ":" + obj[key]);            
// }

// let obj1 = {name:"batman",age:25, key:true}
// for(key in obj1){
//     console.log(key + ":" + obj1.key);            // it will search for key property literally so it is giving undefined.
// }


// MERGING OBJECTS
// let obj1 = {name:"john"}
// let obj2 = {age:30}

// let merged = {...obj1 , ...obj2};
// let merged = Object.assign(obj1,obj2);
// console.log(merged);
