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

    //  -------runs as null
    // console.log(`logging the last child test`);
    // console.log(lastChild);

    //---------------comparing the holding array and the children to allow the drop to work
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
    window.alert(`you win!!!`);
  }
}

let reset = document.querySelector("#resetGame");
reset.addEventListener("click", function () {
  self.location = "index.html";
});
