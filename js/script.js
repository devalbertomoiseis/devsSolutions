const btnMobile = document.getElementById("btn-mobile");

function toggleMenu(event) {
  if (event.type == "touchstart") event.preventDefault();
  const nav = document.getElementById("nav");
  nav.classList.toggle("active");
}

btnMobile.addEventListener("click", toggleMenu);
btnMobile.addEventListener("touchstart", toggleMenu);

const questionBox = document.getElementsByClassName("question__box");

for (let i = 0; i < questionBox.length; i++) {
  questionBox[i].addEventListener("click", function () {
    this.classList.toggle("active");
  });
}
