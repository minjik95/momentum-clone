const greetingsForm = document.querySelector(".js-greetingsForm"),
  input = greetingsForm.querySelector("input"),
  greetings = document.querySelector(".greetings");

const greetingsDate = new Date();
const greetingsHours = greetingsDate.getHours();

function saveName(text) {
  localStorage.setItem("currentUser", text);
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = input.value;
  saveName(currentValue);
  paintGreeting(currentValue);
}

function askName() {
  greetingsForm.classList.add("showing");
  greetingsForm.addEventListener("submit", handleSubmit);
}

function paintGreeting(text) {
  greetingsForm.classList.remove("showing");
  greetings.classList.add("showing");

  if(greetingsHours >= 6 && greetingsHours < 11) //6, 7, 8, 9, 10
    greetings.innerText = `Good morning, ${text}.`;
  else if(greetingsHours >= 11 && greetingsHours < 18) //11, 12, 13, 14, 15, 16, 17
    greetings.innerText = `Good afternoon, ${text}.`;
  else
    greetings.innerText = `Good evening, ${text}.`;
    
  input.type = "hidden";
}

function loadName() {
  const currentUser = localStorage.getItem("currentUser");

  if(currentUser == null) {
    askName();
  } else {
    paintGreeting(currentUser);
  }
}

function init() {
  loadName();
}

init();
