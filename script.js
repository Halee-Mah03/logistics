const subscribeButton = document.getElementById("subscribeButton");
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

subscribeButton.addEventListener("click", () => {
  subscribeButton.innerText = "Subscribed";
  subscribeButton.disabled = true;
});
