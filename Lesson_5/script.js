// Домашнее задание №1
const number = 3;
const value = "a";

const fill = (number, value) => {
  return Array((Array.length = number)).fill(value);
};
console.log(fill(number, value));

// Домашнее задание №2

const data = [0, 1, false, 2, undefined, "", 3, null];

const compact = (array) => {
  return array.filter(Boolean);
};

console.log(compact(data));

// Домашнее задание №3

let usersAge = {
  ivanov: "19",
  petrov: "17",
  sidorov: "21",
};

let ageArr = Object.entries(usersAge);
let arrAdult = [];
let arrChild = [];

ageArr.forEach(([key, value]) => {
  let user = {
    name: key,
    age: value,
  };

  if (value >= 18) {
    arrAdult.push(user);
  }

  if (value < 18) {
    arrChild.push(user);
  }
});

console.log(arrAdult);
console.log(arrChild);
