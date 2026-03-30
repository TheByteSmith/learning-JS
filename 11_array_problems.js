let teaFlavors = ["green tea", "black tea", "oolong tea"];
let firstTea = teaFlavors[0];

let city = ["London", "Tokyo", "Paris", "New York"];
favoriteCity = city[2];

let teaTypes = ["herbal tea", "white tea", "masala chai"];
teaTypes[1] = "jasmine tea";

let citiesVisited = ["Mumbai", "Sydney"];
citiesVisited.push("Berlin");

let teaOrders = ["chai", "iced tea", "match", "earl grey"]
let lastOrder = teaOrders[teaOrders.length - 1]
console.log(lastOrder)
teaOrders.pop()

let popularTeas = ["green tea", "oolong tea", "chai"]
let softCopyTeas = popularTeas
console.log(popularTeas)
console.log(softCopyTeas)

let cities = ["Berlin", "Singapore", "New York"]
let hardCopyCities = [...cities]
cities.pop()
console.log(cities);
console.log(hardCopyCities)

let europeanCities = ["Paris", "Rome"]
let asianCities = ["Tokyo", "Bangkok"]
let worldCities = europeanCities.concat(asianCities)
console.log(worldCities)

let teaMenu = ["masala chai", "oolong tea", "green tea", "earl grey"]
let menuLength = teaMenu.length

let cityBucketList = ["Kyoto", "London", "Cape Town", "Vancouver"]
let isLondonInList = cityBucketList.includes("London") 
