// const weakmap = new WeakMap();

// let obj = {name : "john"};  // object as a key
// weakmap.set(obj , "developer");

// //accessing the value
// console.log(weakmap.get(obj));
// //checking the value
// console.log(weakmap.has(obj));
// // weakmap.delete(obj);
// // console.log(weakmap.has(obj));
// obj = null;                          // Removes the reference to the object   Now the key-value pair in weakMap is also removed
// console.log(weakmap.has(obj));




// // weakset

// const weakset = new WeakSet();

// let obj = {id:1};
// weakset.add(obj);
// console.log(weakset.has(obj));      // Removes the reference to the object   Now the key-value pair in weakMap is also removed
// obj = null;
// console.log(weakset.has(obj));
// // weakset.delete(obj);
// // console.log(weakset.has(obj));