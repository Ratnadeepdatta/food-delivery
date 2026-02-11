
// const header= document.getElementById("header");
// window.addEventListener('scroll', () => {
//     if(window.scrollY > 100){
//         header.classList.add('scrolled');
//     }
//     else{
//         header.classList.remove('scrolled');
//     }
// });

function initHeaderScroll() {
  const header = document.querySelector(".header");

  if (!header) return;

  window.addEventListener("scroll", function () {
    if (window.scrollY > 20) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });
}
    initHeaderScroll();



// mobile menu
const menuToggle = document.getElementById("menu-toggle");
const nav = document.getElementById("nav");

menuToggle.addEventListener('click', () =>{
    menuToggle.classList.toggle('active');
    nav.classList.toggle('open');
});