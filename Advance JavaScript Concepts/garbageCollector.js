// function createObject() {
//     let obj = { name: "Test" }; 
//     // Memory allocated for 'obj'
//     return obj;
//   }
  
//   let obj1 = createObject(); 
//   // 'obj1' references the returned object
  
//   obj1 = null; 
//   // No references to the object; eligible for garbage collection





  // reference-count garbage collector
  let obj1 = {name:"Object 1"}
  let obj2 = obj1; // reference count increases to 2

  obj1 = null;  // reference count decreases to 1.
  
  obj2 = null; // reference count decreases to 0. available for garbage collection



// obstruction : circular referencing
function Demo() {
  let one = {};
  let two = {};

  // one reference to two
  one.object = two;

  // two reference to one
  two.object = one;

  return 'circular';
}

Demo();
  