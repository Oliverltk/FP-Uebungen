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
const i = document.getElementById("inner");
document.addEventListener("click", (e) => {
  var x = "";
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
});
