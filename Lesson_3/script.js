// полуель нормальная

let number = 8;
let str = " ";

for (let i = 0; i < number; i++) {
  str = str + "*";
  console.log(str);
}

// полуель обратная

for (var x = "********"; x.length > 1; ) {
  console.log((x = x.slice(0, -1)));
}

// задание с числами

let n = 0;

n = +prompt("Введите число", "");

for (var i = 0; n > 50; n = n / 2, i++) {}

alert(`Число делений ${i} ; Конечное частное ${n}`);
