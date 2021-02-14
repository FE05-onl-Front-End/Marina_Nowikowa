// Домашнее задание 1

const data = [1, 2, 1, 2, 3];

const unique = (array) => {
  return array.filter((item, index) => {
    return array.indexOf(item) === index;
  });
};

console.log(unique(data));

// // Домашнее задание 2

const isEqual = (firstArray, secondArray) => {
  let result = true;

  if (firstArray.length == secondArray.length) {
    firstArray.forEach((element, index) => {
      element == secondArray[index] ? true : (result = false);
    });
  } else result = false;

  return result;
};

const arr1 = [1, 2, 3, 4];
const arr2 = [1, 2, 3, 4];
const arr3 = [1, 2, 3, 5];
const arr4 = [1, 2, 3, 4, 5];
console.log(isEqual(arr1, arr2)); // true
console.log(isEqual(arr1, arr3)); // false
console.log(isEqual(arr1, arr4)); // false

// Домашнее задание 3

const data = [1, 2, 3];

const reverse = (array) => {
  const reverseArr = [];

  while (array.length) {
    reverseArr.push(array.pop());
  }

  return reverseArr;
};

console.log(reverse(data)); // [3, 2, 1]

// Домашние задания из презентации

// task#1

const array = [43, 54, 12, "text", "TeXt", 54, "54", 0, "car", "CAR", 43];

let newArr = [];
let filtredArr = [];

const sort = (arr) => {
  filtredArr = arr.map((item) => {
    if (typeof item == "string") {
      return item.toLowerCase();
    } else return item;
  });

  return filtredArr.filter((elem, index) => {
    return arr.indexOf(elem) == index;
  });
};

console.log(sort(array));

const repeat = (count) => {
  newArr = count.map((item) => {
    if (typeof item == "string") {
      return item.toLowerCase();
    } else return item;
  });

  return newArr.reduce((accum, cur) => {
    accum[cur] = (accum[cur] || 0) + 1;
    return accum;
  }, {});
};

console.log(repeat(array));

// task#2

const data = [
  {
    price: 324,
    type: 2,
    area: 375,
    presence: true,
    name: "Aria",
    id: 41098,
  },
  {
    price: 660,
    type: 4,
    area: 451,
    presence: true,
    name: "Bayard",
    id: 48467,
  },
  {
    price: 337,
    type: 4,
    area: 525,
    presence: true,
    name: "Bellehurst",
    id: 49340,
  },
  {
    price: 343,
    type: 4,
    area: 538,
    presence: false,
    name: "Brookview",
    id: 52504,
  },
  {
    price: 423,
    type: 2,
    area: 506,
    presence: true,
    name: "Dumont Place",
    id: 41172,
  },
  {
    price: 257,
    type: 4,
    area: 379,
    presence: false,
    name: "Halstead",
    id: 49952,
  },
  {
    price: 230,
    type: 2,
    area: 468,
    presence: true,
    name: "Hillgrove",
    id: 41166,
  },
  {
    price: 183,
    type: 4,
    area: 451,
    presence: true,
    name: "Kempston Place",
    id: 48471,
  },
  {
    price: 674,
    type: 2,
    area: 522,
    presence: true,
    name: "Overlook at Queen Creek",
    id: 48470,
  },
  {
    price: 450,
    type: 2,
    area: 373,
    presence: true,
    name: "Reserve at Wildwood",
    id: 50316,
  },
  {
    price: 795,
    type: 1,
    area: 366,
    presence: true,
    name: "Reverie on Cumberland",
    id: 48465,
  },
  {
    price: 550,
    type: 4,
    area: 376,
    presence: true,
    name: "Riverside",
    id: 41080,
  },
  {
    price: 190,
    type: 1,
    area: 367,
    presence: true,
    name: "Serenade",
    id: 41168,
  },
  {
    price: 589,
    type: 4,
    area: 368,
    presence: false,
    name: "The Grove",
    id: 40912,
  },
  {
    price: 330,
    type: 2,
    area: 368,
    presence: true,
    name: "Woodwinds at New Providence",
    id: 41086,
  },
  {
    price: 299,
    type: 2,
    area: 455,
    presence: true,
    name: "Canopy at Hudson Bend",
    id: 51105,
  },
  {
    price: 263,
    type: 3,
    area: 481,
    presence: true,
    name: "Carmel",
    id: 41193,
  },
  {
    price: 169,
    type: 1,
    area: 454,
    presence: true,
    name: "Estates of Flintrock",
    id: 41060,
  },
  {
    price: 222,
    type: 1,
    area: 483,
    presence: true,
    name: "Fairview Heights",
    id: 41192,
  },
  {
    price: 385,
    type: 4,
    area: 448,
    presence: false,
    name: "Headwaters",
    id: 53168,
  },
  {
    price: 180,
    type: 2,
    area: 447,
    presence: true,
    name: "Highlands at Mayfield Ranch ",
    id: 50235,
  },
  {
    price: 570,
    type: 4,
    area: 448,
    presence: true,
    name: "Highpointe",
    id: 41154,
  },
  {
    price: 690,
    type: 3,
    area: 480,
    presence: true,
    name: "Lagos",
    id: 41198,
  },
  {
    price: 280,
    type: 3,
    area: 446,
    presence: false,
    name: "Mockingbird Park",
    id: 51381,
  },
  {
    price: 133,
    type: 1,
    area: 446,
    presence: false,
    name: "Mockingbird Park",
    id: 51381,
  },
  {
    price: 530,
    type: 1,
    area: 448,
    presence: true,
    name: "Saratoga Hills",
    id: 41019,
  },
  {
    price: 577,
    type: 4,
    area: 455,
    presence: true,
    name: "Summit at Lake Travis",
    id: 41061,
  },
  {
    price: 290,
    type: 4,
    area: 481,
    presence: false,
    name: "Vine Creek",
    id: 51382,
  },
  {
    price: 150,
    type: 1,
    area: 443,
    presence: true,
    name: "Vista Vera",
    id: 49408,
  },
  {
    price: 453,
    type: 3,
    area: 411,
    presence: true,
    name: "Lake Castleberry",
    id: 49596,
  },
];

// Функция, которая принимает массив
//  и выводит самый дорогой участок определенного
//  типа.

const searchType = (newArr, type) => {
  return newArr.filter((house) => {
    return house.type === type;
  });
};

const maxPrice = (newArr, type) => {
  const filtredArray = searchType(newArr, type);
  return filtredArray.reduce((prev, cur) => {
    if (prev.price > cur.price) {
      return prev;
    }
    return cur;
  });
};

console.log(maxPrice(data, 2));

// Функция, которая высчитывает самую дорогую
// по общей денежной стоимости землю
// (за константу мы уже будем полагать,
//   что есть только четыре type)
// В выводе мы получим общую сумму и type этой земли

const typeSum = (arr) => {
  let total = [];
  let result = 0;
  for (let type = 1; type <= 4; type++) {
    result = arr.reduce((sum, searchType) => {
      debugger;
      return sum + searchType.price;
    }, 0);

    total.push({ resultTotal: result, type: type });
  }
};

console.log(typeSum(data));
