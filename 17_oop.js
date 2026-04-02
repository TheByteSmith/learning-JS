// Object literals: Simple key-value pairs where 'this' refers to the object itself.
let car = {
  make: "Toyota",
  model: "Camry",
  year: 2020,
  start: function () {
    return `${this.make} car got started in ${this.year}`;
  },
};
console.log(car.start()); // Toyota car got started in 2020

// Constructors: Functions used with 'new' to create multiple instances of a type.
function Person(name, age) {
  this.name = name;
  this.age = age;
}

let john = new Person("John Doe", 20);
console.log(john.name); // John Doe

function Animal(type) {
  this.type = type;
}

// Prototypes: Attaching methods here saves memory because all instances share one function.
Animal.prototype.speak = function () {
  return `${this.type} makes a sound`;
};

// Edge Case: Modifying global prototypes affects every array created in the script.
Array.prototype.hitesh = function () {
  return `Custom method ${this}`;
};

let myArray = [1, 2, 3];
console.log(myArray.hitesh()); // Custom method 1,2,3
let myNewArray = [1, 2, 3, 4, 5, 6];
console.log(myNewArray.hitesh()); // Custom method 1,2,3,4,5,6

// Classes: Syntactic sugar over prototypes that makes inheritance easier to read.
class Vehicle {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }

  start() {
    return `${this.model} is a car from ${this.make}`;
  }
}

// Inheritance: The 'extends' keyword links the Prototype chain from Car to Vehicle.
class Car extends Vehicle {
  drive() {
    return `${this.make} : This is an inheritance example`;
  }
}

let myCar = new Car("Toyota", "Corolla");
console.log(myCar.start()); // Corolla is a car from Toyota
console.log(myCar.drive()); // Toyota : This is an inheritance example

let vehOne = new Vehicle("Toyota", "Corolla");
console.log(vehOne.make); // Toyota

// Encapsulation: The # symbol makes a variable private; it cannot be accessed outside the class.
class BankAccount {
  #balance = 0;

  deposit(amount) {
    this.#balance += amount;
    return this.#balance;
  }

  getBalance() {
    return `$ ${this.#balance}`;
  }
}

let account = new BankAccount();
console.log(account.getBalance()); // $ 0

// Abstraction: User interacts with a simple button while complex logic is hidden inside.
class CoffeMachine {
  start() {
    return `Starting the machine...`;
  }
  brewCoffee() {
    return `Brewing coffee`;
  }

  pressStartButton() {
    let msgone = this.start();
    let msgTwo = this.brewCoffee();
    return `${msgone} + ${msgTwo}`;
  }
}

let myMachine = new CoffeMachine();
console.log(myMachine.pressStartButton()); // Starting the machine... + Brewing coffee

// Polymorphism: Child classes can redefine (override) parent methods to change behavior.
class Bird {
  fly() {
    return `Flying....`;
  }
}

class Penguin extends Bird {
  fly() {
    return `Penguins can't fly`;
  }
}

let bird = new Bird();
let penguin = new Penguin();
console.log(bird.fly()); // Flying....
console.log(penguin.fly()); // Penguins can't fly

// Static Methods: Methods called on the Class itself, not on an instance (new Calculator).
class Calculator {
  static add(a, b) {
    return a + b;
  }
}

// Edge Case: Calling a static method on an instance results in a TypeError.
let miniCalc = new Calculator();
// console.log(miniCalc.add(2, 3)); // Error: miniCalc.add is not a function
console.log(Calculator.add(2, 3)); // 5

// Getters/Setters: Intercept property access to add validation or security logic.
class Employee {
  #salary;
  constructor(name, salary) {
    if (salary < 0) {
      throw new Error("Salary cannot be in negative");
    }
    this.name = name;
    this.#salary = salary;
  }

  get salary() {
    return `You are not allowed to see salary`;
  }

  set salary(value) {
    if (value < 0) {
      console.error("Invalid Salary");
    } else {
      // Edge Case: Note that this._salary creates a NEW public property, not modifying #salary.
      this._salary = value;
    }
  }
}

let emp = new Employee("Alice", 50000);
console.log(emp.salary); // You are not allowed to see salary
emp.salary = 60000;
console.log(emp._salary); // 60000
