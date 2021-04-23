
let terra = document.getElementById("planet-terra");
let tooltip = document.getElementById("tooltip-terra");

terra.addEventListener("mouseenter", function( event ) {
  console.log("aca")
  tooltip.classList.add(["tooltip-visible"]);
}, false);

terra.addEventListener("mouseleave", function( event ) {
  console.log("sali")
  tooltip.classList.remove(["tooltip-visible"]);
}, false);

let uno = document.getElementById("planet-1");
let tooltip1 = document.getElementById("tooltip-1");

uno.addEventListener("mouseenter", function( event ) {
  console.log("aca")
  tooltip1.classList.add(["tooltip-visible"]);
}, false);

uno.addEventListener("mouseleave", function( event ) {
  console.log("sali")
  tooltip1.classList.remove(["tooltip-visible"]);
}, false);

let dos = document.getElementById("planet-2");
let tooltip2 = document.getElementById("tooltip-2");

dos.addEventListener("mouseenter", function( event ) {
  console.log("aca")
  tooltip2.classList.add(["tooltip-visible"]);
}, false);

dos.addEventListener("mouseleave", function( event ) {
  console.log("sali")
  tooltip2.classList.remove(["tooltip-visible"]);
}, false);
