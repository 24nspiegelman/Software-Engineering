let button = document.querySelector("#button1");
button.style.backgroundColor = "white";

let count = document.querySelector("#count");

let reset = document.querySelector("#reset");

let counter = 0;

let game = document.querySelector("#game");

function onResetClick() {
  counter = 0;
  game.classList.remove("background");
  document.getElementById("count").textContent = window.localStorage.getItem(
    "fish"
  );
}

function onFishClick() {
  counter += 1;
  document.getElementById("count").textContent = counter;
  if (counter == 100) {
    at100();
  } else if (counter < 100) {
    game.classList.remove("background");
    button.classList.remove("hundred");
  }
}

reset.addEventListener("click", onResetClick);
button.addEventListener("click", onFishClick);

function at100() {
  alert("You now have a hundred fish");
  game.classList.add("background");
  button.src =
    "https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/1990777/fish-clipart-xl.png";
}

window.localStorage.setItem("fish", counter);

console.log(window.localStorage.getItem("fish"));
