class Person{
    constructor (name,age){
        this.name = name;  //property
        this.age = age;   //property
    }

    greet(){  // method
        return `Hi I'm ${this.name} and my age is ${this.age} years onload.`
    }
}



// creating an object

const person1 = new Person('virat',25);
console.log(person1.greet());