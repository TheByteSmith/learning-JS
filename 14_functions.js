// quiz 1 : Function Basics
function makeTea(typeOfTea) {
  return `Making ${typeOfTea}`
}
let teaOrder = makeTea("green tea")
// console.log(teaOrder);


// quiz 2 : Nested Functions
function orderTea (teaType){
  function confirmOrder (teaType){
    return `Order confirmed for ${teaType}`
  }
  return confirmOrder(teaType);
}
// console.log(orderTea("green tea"))


// quiz 3 : Arrow Functions
const calculateTotal = (price, quantity) => price * quantity
// console.log(calculateTotal(10, 20))


// quiz 4 : Higher Order Function
/* 
Function that either Takes one or more functions as arguments (often called callbacks). OR Returns a function as its result. 
 */
function processTeaOrder(teaFunction) {
  return teaFunction("earl grey")
}
// console.log(processTeaOrder(makeTea))


// quiz 5 : Higher Order Function & Closure
function createTeaMaker (){
  return function(teaType){
    return `Making ${teaType}`
  }
}
let teaMaker = createTeaMaker()
// console.log(teaMaker("green tea"))