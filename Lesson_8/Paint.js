let selectForm = document.getElementById("select");
let optlist = document.querySelectorAll(".svg-img");
let svgImages = document.querySelectorAll(".svg");
let colors = document.getElementById("colors");

function resetColor() {
  svgImages.forEach(({ style }) => {
    style.fill = "#fff";
  });
}

function getForm() {
  optlist.forEach(({ id }, index) => {
    resetColor();
    optlist[index].style.display = "none";
    id == selectForm.value ? (optlist[index].style.display = "block") : false;
  });
}

selectForm.addEventListener("click", getForm);

function selectColor(el) {
  svgImages.forEach(({ style }) => {
    style.fill = `${window.getComputedStyle(el.target).backgroundColor}`;
  });
}

colors.addEventListener("click", selectColor);
