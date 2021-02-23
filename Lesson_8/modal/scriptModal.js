let clickAddUser = document.querySelector(".add-user");
let getWindow = document.querySelector(".modal");
let closeWindow = document.querySelector(".modal");

let userform = document.querySelector(".popap-form");
let firstName = document.querySelector("input[name=first-name]");
let lastName = document.querySelector("input[name=last-name]");
let age = document.querySelector("input[name=age]");
let text = document.querySelector(".empty");

clickAddUser.addEventListener("click", () => {
  getWindow.style.display = "block";
});

function close() {
  closeWindow.style.display = "none";
}

userform.onsubmit = function (e) {
  if (firstName.value === "" || lastName.value === "" || age.value === "") {
    e.preventDefault();
    text.textContent = "Все поля должны быть заполнены!";
  }
};

userform.addEventListener("submit", () => {
  alert(`
    First Name: ${firstName.value}
    Last Name: ${lastName.value}
    Age: ${age.value}`);
});
