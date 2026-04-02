let computer = { cpu: 12 };

// Here, 'lenovo' is linked to 'computer'.
// If we ask for lenovo.cpu, JS looks at lenovo first.
// It doesn't find it, so it follows the __proto__ link to 'computer'.
let lenovo = { series: "thinkbook", __proto__: computer };

let tomHardware = {};

// NOTE: Every object in JS eventually links back to the "Grandfather" Object.prototype.
// console.log(`computer`, computer.__proto__); // Output: [Object: null prototype] {}
// console.log(`lenovo`, lenovo.__proto__);   // Output: { cpu: 12 }

// Modern Prototype Linking (Object.setPrototypeOf)
let genericCar = {
  tyres: 4,
};

let tesla = {
  driver: "AI",
};

// tesla only knows about 'driver'
console.log(`generic car`, genericCar);

// MODERN WAY : we use setPrototypeOf to link tesla to genericCar.
Object.setPrototypeOf(tesla, genericCar);

// Even though 'tyres' isn't written inside the tesla object...
console.log(`tesla has tyres:`, tesla.tyres); // Output: 4 (Inherited!)

// To see the "Parent" of an object:
console.log(`tesla's parent:`, Object.getPrototypeOf(tesla)); // { tyres: 4 }
