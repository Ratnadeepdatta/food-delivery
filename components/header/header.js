// =============== New Code ===========================

window.initHeader = function () {
  const header = document.getElementById("header");
  let ticking = false;

  if (header) {
    window.addEventListener("scroll", () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          header.classList.toggle("scrolled", window.scrollY > 40);
          ticking = false;
        });
        ticking = true;
      }
    }, { passive: true });
  }

  const menuToggle = document.getElementById("menu-toggle");
  const nav = document.getElementById("nav");

  if (menuToggle && nav) {
    menuToggle.addEventListener("click", () => {
      menuToggle.classList.toggle("active");
      nav.classList.toggle("open");
    });
  }
};





//================ OLD COde =============================  

// const header = document.getElementById("header");
// let ticking = false;

// window.addEventListener("scroll", () => {
//   if (!ticking) {
//     window.requestAnimationFrame(() => {
//       header.classList.toggle("scrolled", window.scrollY > 40);
//       ticking = false;
//     });
//     ticking = true;
//   }
// }, { passive: true });


// // mobile menu
// const menuToggle = document.getElementById("menu-toggle");
// const nav = document.getElementById("nav");

// if (menuToggle && nav) {
//   menuToggle.addEventListener("click", () => {
//     menuToggle.classList.toggle("active");
//     nav.classList.toggle("open");
//   });
// }


