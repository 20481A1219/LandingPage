let toggleButton=document.getElementById("nav-toggle");
let navLinks=document.getElementById("nav-links");

toggleButton.addEventListener("click", () =>{
    navLinks.classList.toggle("active");
});
