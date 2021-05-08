console.log(`attached`);
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
// --------ALLOWS THE DRAG AND DROP OPTION
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

// --------TURNS ALL OF THE IMG CLASSNAMES INTO NUMBERS
function parseImg() {
  let imgs = document.querySelectorAll("img");
  for (let i = 0; i < imgs.length; i++) {
    let imgNum = imgs[i].className;
    let imgParse = parseInt(imgNum);
    console.log(imgParse);
  }
}
// parseImg() WORKED

// ---------GRABBING THE UL TO CHECK IF THERE IS AN IMG TAG AND THEN CHECK THE CLASSNAME FOR THE NUMBER
function checkUL() {
  let uL = document.querySelectorAll("ul");
  for (let i = 0; i < uL.length; i++) {
    console.log(uL[i]);
  }
}
// checkUL(); WORKED

// ----------CHECKING IF UL HAS IMAGES
let test = document.querySelectorAll("ul");
for (let i = 0; i < test.length; i++) {
  let pic = document.querySelectorAll("img");
  for (let j = 0; j < pic.length; j++) {
    if (test[i].contains(pic[i])) {
      console.log(`yes`);
    }
  }
}
