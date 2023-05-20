/*function getmouseclick(event) {
  document.body.textContent =
    "clientX: " + event.clientX + "clientY: " + event.clientY;
}
document.addEventListener("click", movediv);

function movediv() {
  if(inner.body.action.onClicked) {

  }
}
*/
/*const i = document.getElementById("inner");
document.addEventListener("click", (e) => {
  i.style.transform = `translateY(${e.clientY - 25}px)`;
  i.style.transform += `translateX(${e.clientX - 25}px)`;
});
*/
//Mit Mausklick
/*
const i = document.getElementById("move");
document.addEventListener("click", (e) => {
  let x = "";
  if (e.clientX > 370) {
    x += `translateX(${370}px)`;
  } else {
    x += `translateX(${e.clientX - 25}px)`;
  }
  if (e.clientY > 570) {
    x += ` translateY(${570}px)`;
  } else {
    x += ` translateY(${e.clientY - 25}px)`;
  }
  i.style.transform = x;
});*/
//Ermittelt Position des Elements
function place(pos_x, pos_y) {
  console.log(pos_x + " " + pos_y);
  let element = document.getElementById("move");
  element.style.position = "absolute";
  if (pos_x > 370) {
    element.style.left = 370 + "px";
  } else {
    element.style.left = pos_x + "px";
  }
  if (pos_y > 570) {
    element.style.top = 570 + "px";
  } else {
    element.style.top = pos_y + "px";
  }
}
//Funktion, falls die Taste nicht mehr betätigt wird
function update() {
  document.addEventListener("keydown", keypress);
}
//Funktion,falls die Taste betätigt wird
function keypress(event) {
  let key = event.keyCode;

  let move = getComputedStyle(document.getElementById("move"));

  let left = parseInt(move.left, 10);
  let top = parseInt(move.top, 10);
  console.log("Left und top:" + left, top);
  switch (key) {
    //Pfeiltaste links
    case 37:
      place(left - 10, top);

      break;
    //Pfeiltaste oben
    case 38:
      place(left, top - 10);
      break;
    //Pfeiltaste rechts
    case 39:
      place(left + 10, top);
      break;
    //Pfeiltaste unten
    case 40:
      place(left, top + 10);
      break;
  }
}
update();
