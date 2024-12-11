// ARRAY TRAVERSAL QUESTIONS


// to print all the elements in an array
// const arr = [ 1,2,3,4,5,6,7];
// for(num in arr){
//     console.log(arr[num]);
// }



// sum of all elements in an array
// const arr = [1,2,3,4,5,6,7,8,9];
// let sum = 0;
// for(let i=0;i<arr.length;i++){
//     sum += arr[i];
//     console.log(`Sum after ${i}th itreation is ${sum}`);
// }
// console.log(`Total Sum : ${sum}`);



// Count all the number of odd and even if an array.
// const arr = [1,2,3,4,5,6,7,8,9];
// let oddCount = 0;
// let evenCount = 0;
// for(let i=0;i<arr.length;i++){
//     if(arr[i] == 1){
//         oddCount++;
//         console.log(`odd added ${arr[i]}`);
//     }
//     else if(arr[i]%2 == 0){
//         oddCount++;
//         console.log(`odd added ${arr[i]}`);
//     }else{
//         evenCount++;
//         console.log(`even added ${arr[i]}`);
//     }
// }
// console.log(`Total number of odd count : ${oddCount}`);
// console.log(`Total number of even count : ${evenCount}`);




//Reverse an array using a loop.
// const arr = [1,2,3,4,5,6,7,8];
// let start = 0;
// let end = arr.length-1;
// while(start<=end){
//     let temp = arr[start];
//     arr[start] = arr[end];
//     arr[end] = temp; 
//     start++;
//     end--;
// }
// console.log(arr);



//search of a specific element in an array.
// const arr = [1,2,3,4,5,6,7,8];
// let k = 4;
// for(let i=0;i<arr.length-1;i++){
//     if(arr[i] === k){
//         console.log(`element founded at index ${i}`);
//         break;
//     }else{
//         console.log(`element is not present at ${i}`);
//     }
// }    



// create a function that receives an array of numbers as an argument and returns an array containing only positive numbers
// const arr = [];
// for(let i=0;i<5;i++){
//     let number = process.argv[2];
//     if(number>0){
//         arr.push(number);
//     }
// }
// console.log(arr);


// create a function that will return a boolean specifying if a number is prime.
// function isPrime(num){
//     if(num<=1) return false;
//     if(num === 2) return true;
//     if(num % 2 == 0) return false;

//     for(let i=3;i<=Math.sqrt(num);i+=2){
//         if(num%i === 0) return false;
//     }
//     return true;
// }
// console.log(isPrime(5));
// console.log(isPrime(2));
// console.log(isPrime(15));
// console.log(isPrime(23));










