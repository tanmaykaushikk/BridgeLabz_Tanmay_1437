function Person(name) {
  this.name = name;
}

Person.prototype.greet = function () {
  console.log(`hello my name is ${this.name}`);
};

const person1 = new Person("Alice");
const person2 = new Person("Bob");

person1.greet(); // Output: hello my name is Alice
person2.greet(); // Output: hello my name is Bob

//By using the prototype, you ensure that all instances of Person share 
// the same greet function, optimizing memory usage.
