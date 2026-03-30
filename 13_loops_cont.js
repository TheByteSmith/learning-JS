// quiz 1
let teas = ["green tea", "black tea", "chai", "oolong tea"];
let selectedTeas = [];
for (let i = 0; i < teas.length; i++) {
  if (teas[i] === "chai") {
    break;
  }
  selectedTeas.push(teas[i]);
}
// console.log(selectedTeas)

// quiz 2
let cities = ["London", "New York", "Paris", "Berlin"];
let visitedCities = [];
for (let i = 0; i < cities.length; i++) {
  if (cities[i] === "Paris") {
    continue;
  }
  visitedCities.push(cities[i]);
}
// console.log(visitedCities)

// quiz 3
let numbers = [1, 2, 3, 4, 5];
let smallNumbers = [];
for (const num of numbers) {
  if (num === 4) {
    break;
  }
  smallNumbers.push(num);
}
// console.log(smallNumbers)

// quiz 4
let teaTypes = ["chai", "green tea", "herbal tea", "black tea"];
let prefferedTeas = [];
for (const tea of teaTypes) {
  if (tea === "herbal tea") {
    continue;
  }
  prefferedTeas.push(tea);
}
// console.log(prefferedTeas);

// quiz 5
let citiesPopulation = {
  London: 8900000,
  "New York": 8400000,
  Paris: 2200000,
  Berlin: 3500000,
};
let newCitiesPopulation = {};

for (const city in citiesPopulation) {
  if (city === "Berlin") {
    break;
  }
  newCitiesPopulation[city] = citiesPopulation[city];
}
// console.log(newCitiesPopulation);

// quiz 6
let allCities = {
  Sydney: 5000000,
  Tokyo: 9000000,
  Berlin: 350000,
  Paris: 2200000,
};
let largeCities = {};
for (const city in allCities) {
  if (allCities[city] < 3000000) {
    continue;
  }
  largeCities[city] = allCities[city];
}
// console.log(largeCities)

// quiz 7
let allTeas = ["earl grey", "green tea", "chai", "oolong tea"];
let availableTeas = [];
allTeas.forEach((tea) => {
  if (tea === "chai") {
    return;
  }
  availableTeas.push(tea);
});
// console.log(availableTeas)

// quiz 8
let worldCities = ["Berlin", "Tokyo", "Sydney", "Paris"];
let travelledCities = [];

worldCities.forEach((city) => {
  if (city === "Sydney") {
    return;
  }
  travelledCities.push(city);
});
// console.log(travelledCities)

// quiz 9
let newNumber = [2, 5, 7, 9];
let doubledNumbers = [];
for (let i = 0; i < newNumber.length; i++) {
  if (newNumber[i] === 7) {
    continue
  }
  doubledNumbers.push(newNumber[i] * 2)
}
// console.log(doubledNumbers)

// quiz 10
let moreTeas = ["chai", "green tea", "black tea", "jasmine tea", "herbal tea"]
let shortTeas = []
for(const tea of moreTeas){
  if(tea.length > 10){
    break
  }
  shortTeas.push(tea)
}
console.log(shortTeas)