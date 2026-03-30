// quiz 1
function makeTea(typeOfTea) {
  return `Making ${typeOfTea}`
}
let teaOrder = makeTea("green tea")
// console.log(teaOrder);


// quiz 2
function orderTea (teaType){
  function confirmOrder (teaType){
    return `Order confirmed for ${teaType}`
  }
  return confirmOrder(teaType);
}
// console.log(orderTea("green tea"))


// quiz 3
const calculateTotal = (price, quantity) => price * quantity
// console.log(calculateTotal(10, 20))


// quiz 4
function processTeaOrder(teaFunction) {
  return teaFunction("earl grey")
}
// console.log(processTeaOrder(makeTea))


// quiz 5
function createTeaMaker (){
  return function(teaType){
    return `Making ${teaType}`
  }
}
let teaMaker = createTeaMaker()
// console.log(teaMaker("green tea"))