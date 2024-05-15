let button = document.querySelector(".button");
let clockContainer = document.querySelector(".clockContainer");
button.addEventListener("click", () => {
  document.body.classList.toggle("lightMode");
  if (button.innerHTML === "Light") {
    button.innerHTML = "Dark";
    clockContainer.style.borderColor = "black";
    button.style.backgroundColor = "#181818";
    button.style.color = "#fff";
  } else {
    button.innerHTML = "Light";
    clockContainer.style.borderColor = "rgb(255, 196, 0";
    button.style.backgroundColor = "#fff";
    button.style.color = "#000";
  }
});
let secondCounter = document.querySelector(".secondCounter");
let minuteCounter = document.querySelector(".minuteCounter");
let hourCounter = document.querySelector(".hourCounter");
setInterval(clockHander, 1000);
function clockHander() {
  let currentDate = new Date();
  secondCounter.style.transform = `rotateZ(${currentDate.getSeconds() * 6}deg)`;
  minuteCounter.style.transform = `rotateZ(${currentDate.getMinutes() * 6}deg)`;
  if (currentDate.getHours < 12) {
    hourCounter.style.transform = `rotateZ(${currentDate.getHours() * 30}deg)`;
  } else {
    hourCounter.style.transform = `rotateZ(${
      (currentDate.getHours() - 12) * 30
    }deg)`;
  }
}
