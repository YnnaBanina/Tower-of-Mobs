console.log(`attached`);

function allowDrop(event) {
  event.preventDefault();
}
function drag(event) {
  event.dataTransfer.setData("text", event.target.id);
}
function drop(event) {
  event.preventDefault();
  let data = event.dataTransfer.getData("text");
  event.target.appendChild(document.getElementById(data));
}
let test = document.querySelector("#testTower");
let imgs = document.querySelectorAll("img");
for (let i = 0; i < imgs.length; i++) {
  // console.log(`${imgs[i].src}`);
  let winningT = document.querySelector("testTower");
  if (winningT.includes("IMG")) {
    console.log(`worked`);
  }
}
