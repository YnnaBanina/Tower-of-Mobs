// OPENING INSTRUCTIONS
const openInfo = document.querySelector("#open");
const modal = document.querySelector("#modal");
const closeInfo = document.querySelector("#close");

const open = () => {
  modal.style.display = "block";
};
openInfo.addEventListener("click", open);
const close = () => {
  modal.style.display = "none";
};
closeInfo.addEventListener("click", close);

// --------hovers over to allow the drop.
function allowDrop(event) {
  event.preventDefault();
}

//------ number to compare from the drag event (global)
let holding = [];
let holding2 = [];
function drag(event) {
  event.dataTransfer.setData("text", event.target.id);
  // --------TURNS THE IMG CLASSNAMES INTO NUMBERS
  let currentImg = event.target.className;
  let parseCurrentImg = parseInt(currentImg);
  console.log(`number being held`);
  console.log(parseCurrentImg);
  holding.push(parseCurrentImg);
  console.log(`array of the holding element. showing the number being held`);
  console.log(holding);
}

function drop(event) {
  event.preventDefault();
  let ulChild = event.target.children;
  console.log(`logging the ul and what it contains`);
  console.log(ulChild);

  for (let i = 0; i < ulChild.length; i++) {
    let childClassNum = parseInt(ulChild[i].className);
    console.log(`logging the top child inside of the ul`);
    console.log(childClassNum);
    console.log(`logging holding2 before new disk if placed`);
    console.log(holding2);
    holding2.pop();
    holding2.push(childClassNum);
    console.log(`update of holding2 after placing a new disk`);
    console.log(holding2);
  }
  // -------------------create array for each tower
  if (holding < holding2 || holding2.length == 0) {
    dropExtended(event);
  }
  holding.shift();
  holding2.shift();
}
//--------------- second part of the drop function
function dropExtended(event) {
  // ---------allowing the drop of to happen
  let data = event.dataTransfer.getData("text");
  event.target.appendChild(document.getElementById(data));
  let winningTower = document.querySelector(".container3");
  let winningTowerChildren = winningTower.children;
  if (winningTowerChildren.length === 6) {
    let winnerPopup = document.querySelector(".winStatement");
    winnerPopup.style.opacity = 1;
    setTimeout(function () {
      winnerPopup.style.opacity = 0;
      self.location = "index.html";
    }, 5000);
  }
}

// ---------------OPENING THE RESET MENU
const openReset = document.querySelector("#openReset");
const resetOpened = document.querySelector("#resetOpened");
const nevermind = document.querySelector("#nevermind");
const restart = document.querySelector("#continue");

const openR = () => {
  resetOpened.style.display = "block";
};
openReset.addEventListener("click", openR);

const closeR = () => {
  resetOpened.style.display = "none";
};
nevermind.addEventListener("click", closeR);

restart.addEventListener("click", yes);

function yes() {
  if (confirm(`Really? You want to start over??`)) {
    openDied();
    // self.location = "index.html";
  } else {
    closeR();
  }
}
function openDied() {
  let deathMessage = window.open(
    "https://static.wikia.nocookie.net/minecraft/images/e/e3/Screenshot_20200715-153114_Minecraft.jpg/revision/latest?cb=20200715124734"
  );
  setTimeout(function () {
    deathMessage.close();
    self.location = "index.html";
  }, 2000);
}
