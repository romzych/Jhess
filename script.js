const footerbutton = document.getElementById("footer");
const navballs = document.getElementById("navbarHeader");
const navcollapser = document.getElementById("navButton");
const rededith = document.getElementById("redEdit");
const rededdy = document.getElementById("redText");
const greenedith = document.getElementById("greenEdit");
const greeneddy = document.getElementById("greenToggle");
const head = document.getElementById("headId");
const rmbtstrp = document.getElementById("navrm");

let i = 0;

footerbutton.addEventListener("click", function() {
  console.log("clique numero " + i);
  i++;
});

navcollapser.addEventListener("click", function() {
  navballs.className === "bg-dark"
    ? (navballs.className = "collapse bg-dark")
    : (navballs.className = "bg-dark");
});

rededith.addEventListener("click", function() {
  rededdy.className = "card-text text-danger";
});

greenedith.addEventListener("click", function() {
  greeneddy.className === "card-text"
    ? (greeneddy.className = "card-text text-success")
    : (greeneddy.className = "card-text");
});

rmbtstrp.addEventListener("dblclick", function() {
  head.href ===
  "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
    ? (head.href = "tondaron")
    : window.location.reload();
});
