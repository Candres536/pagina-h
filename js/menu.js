 // JavaScript para mostrar y ocultar el submenú
 const casaElement = document.getElementById("div1");
 const submenuElement = document.querySelector(".submenu");
 
 casaElement.addEventListener("click", function() {
     submenuElement.style.display = "flex";

 });
 
 document.addEventListener("click", function(event) {
     const targetElement = event.target;
     if (!targetElement.closest(".submenu") && !targetElement.closest(".casa")) {
         submenuElement.style.display = "none";
     }
 });