// const map = new Map();

// // adding values
// map.set('name','john');
// map.set('1','one');
// map.set(true,'boolean value');

// // accessing value

// console.log(map.get('name'));  //john
// console.log(map.get('1'));     //one

// // checking values
// console.log(map.has('name'));

// //iterating over a value

// for(const [key,value] of map){
//     console.log(`${key}:${value}`);
// }

// console.log(map.size);

//set
const set = new Set();

set.add(1);
set.add(2);
set.add(2); // duplicate won't ne allowed
set.add(4);
set.add(5);
set.add("hello");
set.add({ a: 1 });

// iterating over a set
for (const value of set) {
  console.log(value);
}

//checking a value
console.log(set.has("hello"));