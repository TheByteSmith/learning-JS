// Constructor functions act as blueprints for creating multiple objects with the same structure.
function Person(name, age) {
  this.name = name;
  this.age = age;
}

// The 'this' keyword inside a constructor points to the new object being created.
function Car(make, model) {
  this.make = make;
  this.model = model;
}

// The 'new' keyword creates a fresh object instance and links it to the constructor.
let myCar = new Car("Toyota", "Camry");
let myNewCar = new Car("Tata", "Safari");
console.log(myCar);
console.log(myNewCar);

// Adding methods inside a constructor creates a new copy of that function for every instance.
function Tea(type) {
  this.type = type;
  this.desccribe = function () {
    return `this is a cup of a ${this.type}`;
  };
}

let lemonTea = new Tea("Lemon Tea");
console.log(lemonTea);
console.log(lemonTea.desccribe());

// Properties intended for all instances should be stored in the constructor.
function Animal(species) {
  this.species = species;
}

// Attaching methods to the prototype ensures all instances share a single memory reference.

Animal.prototype.sound = function () {
  return `${this.species} makes a sound`;
};

let dog = new Animal("Dog");
console.log(dog.sound());

// The 'new.target' property detects if a function was called with the 'new' operator.
function Drink(name) {
  if (!new.target) {
    throw new Error("Faaaah, Drink must be called with the new keyword");
  }
  this.name = name;
}

let tea = new Drink("Tea");
// This line will throw the error because 'new' is missing.
let coffee = Drink("Coffee");
