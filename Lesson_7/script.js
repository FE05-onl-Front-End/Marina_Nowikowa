function getNewArray() {
  let numbers = [];
  while (numbers.length < 100) {
    const random = Math.floor(Math.random() * 100) + 1;
    let numberAdd = () => {
      if (numbers.includes(random) === false) {
        numbers.push(random);
      }
    };
    numberAdd();
  }
  console.log(numbers);
}

let arr = getNewArray();
console.log(arr());
