/* Array Methods :- In JavaScript, arrays come with built-in methods that make it easier to manipulate and interact with the data.*/

//1) Adding / Removing Elements
// const arr = [1,2];
// push
// arr.push(3);
// console.log(arr);
// pop
// arr.pop();
// console.log(arr);
//unshift
// arr.unshift(0);
// console.log(arr);
// shift
// arr.shift();
// console.log(arr);

// const array = [1,2,3];
// array.splice(1,1,'a'); // (starting index , number of items to be replaced, from what)
// console.log(array);

// const merged = arr.concat(array); //merges 2 array
// console.log(merged);

// 2) Iteration and Searching
//forEach
// const arr = [1,2,3];
// arr.forEach(num=>console.log(num));
// //map
// const squared = arr.map(num => num**2);
// console.log(squared);
// //filter
// const filter = arr.filter(num=> num%2 === 0);
// console.log(filter);
// //find
// const array = [1,2,3,4,5];
// const found = array.find(num=>num>2);
// console.log(found);
// //findIndex
// const foundIndex = array.findIndex(num=>num>2);
// console.log(foundIndex);
// //some
// const some = [1,2,3,4,5];
// const someans = some.some(num=>num%2 ===0);
// console.log(someans);
// //every
// const everyans = some.every(num=>num%2 === 0);
// console.log(everyans);

// 3)Sorting and reversing
//sort
// const arr = [4, 2, 1, 5];

// arr1 = [4, 2, 1, 5];

// const sort = arr.sort();
// console.log(sort);
// //reverse
// const reverse = arr.reverse();
// console.log(reverse);
// console.log(arr);

// console.log("************************************");

// sort1 = arr1.sort();
// console.log(sort);
// //reverse
// reverse1 = arr1.reverse();
// console.log(reverse1);
// console.log(arr1);

// const arr = [4,2,1,5];      // use [...arr].sort()/reverse() for make changes in copy or to avoid in-place mutation
// const sort = [...arr].sort();
// console.log(sort);
// const reverse = [...arr].reverse();
// console.log(reverse);


// 4) Utility Methods
// includes
// const arr = [1,2,3];
// const ans = arr.includes(2);
// console.log(ans);
//indexOf
// const arr = [1,2,3];
// const ans = arr.indexOf(3);
// console.log(ans);
//last indexOf
// const arr = [1,2,3,4];
// const ans = arr.lastIndexOf(3);
// console.log(ans);
// const arr = [1,2,3,4];
// const ans = arr.join();
// console.log(ans);
//slice
// const arr = [1,2,3,4,5,6];
// const ans = arr.slice(2,5); // last index is excluded
// console.log(ans);
// flat
//  const arr = [1,2,[3,4,[1,3],5],]   // falttens only one level
// const ans = arr.flat(Infinity);
// console.log(ans);
// reduce
// const arr = [1,2,3,4,5];   
// const ans = arr.reduce((acc,num) => acc+num,0);
// console.log(ans);