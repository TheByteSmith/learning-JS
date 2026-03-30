let username = {
  isLoggedIn: true,
  firstname: "John",
};

username.lastname = "Doe";

console.log(username);
console.log(typeof username);

// using dot to access
console.log(username.firstname);

// using bracket to access (useful when we have to deal with spaces)
console.log(username[lastname]);

let today = new Date();
// console.log(today.getDate())

// Array
let heroes = ["A", "B", "C", true, 123];
let anotherUser = ["John", "Doe", true];
console.log(anotherUser[0]);
