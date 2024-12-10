// mini and max 

// const arr = [5,1,2,4,8,9];
// arr.sort();
// console.log(`minimum : ${arr[0]}`);
// console.log(`maximum : ${arr[arr.length-1]}`);



// array reverse
// const reverse = arr.reverse();
// console.log(reverse);




// sort 
// console.log(arr.sort());




// cyclic rotation of an array by one
// let arr = [1,2,3,4,5];
// console.log(`Initial array : `,arr);
// console.log(`Moving last at first:`, movingLastAtFirst([...arr]));


// console.log(`Moving First at Last` , movingFirstAtLast([...arr]));

// function movingLastAtFirst(arr){
//     const lastELement = arr.pop();    // pops out the last element
//     arr.unshift(lastELement);         // places elements in front
//     return arr;
// }

// function movingFirstAtLast(arr){
//     const firstElement = arr.shift();   //pops out first element
//     arr.push(firstElement);             // adding at last
//     return arr;
// }




// seperate neg and pos

// const arr = [ -1,-2,-3,-4,1,2,3,4];
// const pos = [];
// const neg = [];

// for(let i=0;i<arr.length-1;i++){
//     if(arr[i] >= 0){
//         pos.push(arr[i]);
//     }
// }

// for(let i=0;i<arr.length-1;i++){
//     if(arr[i]<0){
//         neg.push(arr[i]);
//     }
// }

// console.log(pos);
// console.log(neg);





// sum of all elements of an array

// const arr = [5,1,2,4,8,3];
// const ans = arr.sort();
// console.log(ans);
// let sum = 0;

// // console.log(`minimum element ${ans[0]}`);
// // console.log(`maximum element ${ans[ans.length-1]}`);

// for(let i=0;i<arr.length;i++){
//     sum +=arr[i];
// }
// console.log(sum);





// reverse a string

// function reverse(str){
//     let ans = "";
//     for(let i=str.length -1 ;i>=0;i--){
//         ans += str[i];
//     }
//     return ans;
// }

// console.log(reverse("tanmay"));





// remove duplicate

// const arr = [1,2,3,4,4,5,6,7,7,7,8,9,10,10,11];

// arr.sort();
// let ans = [];
// for(let i=0;i<arr.length;i++){
//     if(arr[i] === arr[i+1]){
//         ans.push(arr[i]);
//     }
// }

// console.log(ans);



// merge 2 arrays 

// const arr1 = [1,2,3,4,5];
// const arr2 = [5,6,7,8,9];

// console.log(arr1.concat(arr2));



// second largest element

// const arr = [5,2,1,8,4,9];
// arr.sort();
// console.log(`second largest element : ${arr[arr.length-2]}`);




// average of an array

// const arr = [1,2,3,4,5,6];
// let result;

// let sum = 0;
// for(let i=0;i<arr.length;i++){
//     sum += arr[i];
// }

// result = sum/arr.length;
// console.log(result);










