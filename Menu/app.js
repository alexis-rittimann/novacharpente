
const burger = document.querySelector(".burger");
const menu = document.querySelector(".nav-bar");
const svg = document.querySelector(".svg-menu");
burger.addEventListener("click", navToggle);
function navToggle(e){
    if (!e.target.classList.contains("active")) {
    e.target.classList.add('active');
    gsap.to('.line1', 0.5, {rotate: "45", y: 5, background:"black"});
    gsap.to('.line2', 0.5, {rotate: "-45", y: -5, background:"black"});
    gsap.to('.nav-bar', 2.5, {clipPath: "circle(2000px at 100% 60%)" });
    menu.style.visibility = "visible";
    menu.style.height = "100%";
    menu.style.width = "100%";
 
    }else{
    e.target.classList.remove('active');
    gsap.to('.line1', 0.5, {rotate: "0", y: 0, background:"white"});
    gsap.to('.line2',0.5, {rotate: "0", y: 0, background:"white"});
    svg.classList.add("close-menu");
    gsap.to('.svg-menu', 2, {onComplete:menuFin });
    menu.style.visibility = "hidden";
    menu.style.height = "0%";
    menu.style.width = "0%";
    gsap.to('.nav-bar', 0.5, {clipPath: "circle(0px at 100% 60%)"});
    }
  }
  
function menuFin() {
  svg.classList.remove("close-menu");
  svg.classList.visibility = "hidden";
}