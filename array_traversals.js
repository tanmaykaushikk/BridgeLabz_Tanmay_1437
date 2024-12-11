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




// calculate 10!
// function fact(num){
//     let ans = 1;
//     for(let i=1;i<=num;i++){
//         ans *= i;
//     }
//     return ans;
// }
// console.log(fact(10));



//sum of even numbers greater than 10 and less than 30
// let sum = 0;
// for(let i=11;i<30;i++){
//     if(i%2 == 0){
//         sum += i;
//     }
// }
// console.log(sum);



// Create a function to convert a CSV text to a “bi-dimensional” array
// const csvText = `Tanmay , Ashish, MAdhav, vishu, aman`;
// function result(csvText){   
//     const rows = csvText.trim().split('\n');
//     const ans = rows.map(rows => rows.split(','));
//     return ans;
// }
// const array2D = console.log(result(csvText)); 



// Implement the Caesar cypher

// const plainText = "Hello World";
// const shift = 3;

// const encrypted = caesarcypher(plainText,shift);
// console.log(`encrypted text : ${encrypted}`);

// function caesarcypher(text,shift,encrypt = true){
//     if(!encrypt) shift = -shift;
//     return text.split('').map(char => {
//         if(char.match([/[a-z]/i])){

//         }
//     })
// }


// bubble sort
// const arr = [5,99,21,54,1,34];
// for(let i=0;i<arr.length-1;i++){
//     for(let j=0;j<arr.length-i-1;j++){
//         if(arr[j]>arr[j+1]){
//             let temp = arr[j];
//             arr[j] = arr[j+1];
//             arr[j+1] = temp;
//         }
//     }
// }
// console.log(arr);


//  Create a function that will capitalize the first letter of each word in a text
// function firstWordToUpperCase(text){
//     return text.split(' ').map(word =>{
//         return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
//     }).join(' ');
// }

// const inputText = "hello my name is tanmay kaushik";
// const ans = firstWordToUpperCase(inputText);
// console.log(ans);


//Create a function that will return in an array the first “p” prime numbers greater than “n”
// function getPrimes(n,p){
//     const isPrime = (num) => {
//         if(num<=1)return false;
//         for(let i=2;i<=Math.sqrt(num);i++){
//             if(num%i == 0) return false;
//         }
//         return true;
//     }

//     const primes = [];
//     let current = n+1;

//     while(primes.length<p){
//         if(isPrime(current)){
//             primes.push(current);
//         }
//         current++;
//     }
//     return primes;
// }
// const n = 100;
// const p = 5;
// console.log(getPrimes(n,p));




