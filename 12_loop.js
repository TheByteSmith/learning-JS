// quiz 1
let i = 0;
let sum = 0;
while (i <= 5) {
  sum += i;
  i++;
}
console.log(sum);

// quiz 2
let j = 5;
let countdown = [];
while (j != 0) {
  countdown.push(j);
  j--;
}
console.log(countdown);

// quiz 3
/* let teaCollection = []
let tea;
do {
  tea = prompt(`Enter your favorite tea (type "stop" to finish)`);
  if (tea !== "stop") {
    teaCollection.push(tea)
  }
} while (tea !== "stop"); */

// quiz 4
k = 1;
total = 0;
do {
  total += k;
  k++;
} while (k <= 3);
console.log(total);

// quiz 5
let numbers = [2, 4, 6];
let multipliedNumbers = [];
for (let l = 0; l < numbers.length; l++) {
  multipliedNumbers.push(numbers[l] * 2);
}
console.log(numbers)
console.log(multipliedNumbers)

// quiz 6
let cities = ["Paris", "New York", "Tokyo", "London"];
let cityList = []
for(let m = 0; m < cities.length; m++){
  cityList.push(cities[m])
}
console.log(cityList)