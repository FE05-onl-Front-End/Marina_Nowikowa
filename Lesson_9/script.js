// const visitors = [
//   { name: "gregory", surname: "vlasov", isWelcome: true },
//   { name: "gregory", surname: "vlasov", isWelcome: false },
//   { name: "gregory", surname: "vlasov", isWelcome: false },
//   { name: "gregory", surname: "vlasov", isWelcome: false },
//   { name: "gregory", surname: "vlasov", isWelcome: true },
// ];

// let list = document.getElementById("visitor");

// visitors.forEach((item) => {
//   let newAdd = document.createElement("li");

//   if (item.isWelcome === true) {
//     newAdd.innerHTML = item.name;
//     newAdd.style.color = "green";
//     newAdd.style.fontSize = "25px";
//     newAdd.style.textTransform = "uppercase";
//   } else {
//     newAdd.innerHTML = item.name;
//     newAdd.style.color = "red";
//     newAdd.style.fontSize = "25px";
//     newAdd.style.textTransform = "lowercase";
//   }

//   list.appendChild(newAdd);
// });

// Задание из презентации 9.1

let data = [
  {
    firstName: "Ashton",
    lastName: "Kutcher",
    age: 40,
  },
  {
    firstName: "Bradley",
    lastName: "Pitt",
    age: 54,
  },
  {
    firstName: "Hannah",
    lastName: "Dakota",
    age: 24,
  },
];

data.forEach((item) => {
  let tr = document.createElement("tr");
  document.getElementById("list").append(tr);

  let tdFirstName = document.createElement("td");
  tdFirstName.innerText = item.firstName;
  tdFirstName.style.fontSize = "30px";

  let tdLastName = document.createElement("td");
  tdLastName.innerText = item.lastName;
  tdLastName.style.fontSize = "30px";

  let tdAge = document.createElement("td");
  tdAge.innerText = item.age;
  tdAge.style.fontSize = "30px";

  tr.append(tdFirstName);
  tr.append(tdLastName);
  tr.append(tdAge);
});

let clickAddUser = document.querySelector(".add-user");
let getWindow = document.querySelector(".modal");

let userform = document.querySelector(".popap-form");
let firstNameInput = document.getElementById("first-name").value;
let lastNameInput = document.getElementById("last-name").value;
let ageInput = document.getElementById("age").value;
let text = document.querySelector(".empty");

clickAddUser.addEventListener("click", () => {
  getWindow.style.display = "block";
});

function closeModalWindow() {
  getWindow.style.display = "none";
}

userform.onsubmit = function (e) {
  if (firstNameInput === "" || lastNameInput === "" || ageInput === "") {
    e.preventDefault();
    text.textContent = "Все поля должны быть заполнены!";
  }
};

userform.addEventListener("submit", () => {
  alert(`
    First Name: ${firstNameInput}
    Last Name: ${lastNameInput}
    Age: ${ageInput}`);
});

// Задание заполнения таблицы данными из модального окна

let submitBtn = document.querySelector(".ok");

const newUserObject = (firstName, lastName, age) => {
  firstName = firstNameInput;
  lastName = lastNameInput;
  age = ageInput;

  return console.log(age);
};

const addUser = () => {
  data.push(newUserObject);
};

submitBtn.addEventListener("click", addUser);

// Задание из урока mouseenter/mouseover

// const mouseTarget = document.getElementsByTagName("td");

// for (let e of mouseTarget) {
//   mouseTarget.addEventListener("mouseenter", (e) => {});
// }

// ДЗ с табами

const tabsBtn = document.querySelectorAll(".tabs__container-btn");
const tabsItems = document.querySelectorAll(".tabs__item");

tabsBtn.forEach((item) => {
  item.addEventListener("click", () => {
    // Переключение самих табов
    let currentBtn = item;

    tabsBtn.forEach((item) => {
      item.classList.remove("active");
    });
    currentBtn.classList.add("active");

    // Переключение содержимого
    let tabId = currentBtn.getAttribute("data-tab");
    let currentTab = document.querySelector(tabId);

    tabsItems.forEach((item) => {
      item.classList.remove("actives");
    });
    currentTab.classList.add("actives");
  });
});

// Удаление таба и содержимого
const closeBtn = document.querySelectorAll(".closeBtn");

closeBtn.forEach((elem) => {
  elem.addEventListener("click", () => {
    let active = document.querySelector(".active");

    tabsBtn.forEach((tabClose) => {
      if (tabClose.contains(active)) {
        tabClose.style.display = "none";
      }
    });

    let actives = document.querySelector(".actives");

    tabsItems.forEach((itemClose) => {
      if (itemClose.contains(actives)) {
        itemClose.style.display = "none";
      }
    });
  });
});
