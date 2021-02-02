const animals = [
  {
    name: "tiger",
    weight: 45,
    isHealthy: true,
    isAche: false,
    isFat: true,
    warden: {
      name: "Petr",
      age: 50,
    },
  },
  {
    name: "fox",
    weight: 45,
    color: "black",
    nickname: "lisa",
    isHealthy: true,
    isAche: false,
    isFat: false,
    isHungry: true,
    warden: {
      name: "Petr",
      age: 30,
    },
  },
  {
    name: "wolf",
    nickname: "peter",
    weight: 45,
    color: "grey",
    isHealthy: true,
    isAche: false,
    isFat: true,
    warden: {
      name: "Petr",
      age: 25,
    },
  },
  {
    name: "monkey",
    weight: 45,
    color: "brown",
    isHealthy: true,
    isAche: false,
    isFat: false,
    isHungry: true,
    warden: {
      name: 20,
    },
  },
];

function zoo() {
  return {
    addAnimal: (animals, newAnimalObj) => {
      animals.push(newAnimalObj);
      return animals;
    },
    // deleteAnimal: function(animals, name) { },
    // changeHelth: function(status, animals) {},
    // changeWarden: function() {},
  };
}

let zooManager = zoo();
zooManager.addAnimal(animals, { name: "ezhik" });

//   zooManager.deleteAnimal(animals, name);

alert(animals);
