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

//   const menuToggle = document.getElementById("menu-toggle");
//   const nav = document.getElementById("nav");

//   if (menuToggle && nav) {
//     menuToggle.addEventListener("click", () => {
//       menuToggle.classList.toggle("active");
//       nav.classList.toggle("open");
//     });
//   }
};

// ===============  new code  =============

const menuToggle = document.getElementById("menu-toggle");
const nav = document.getElementById("nav");


// open close menu
menuToggle.addEventListener("click", () => {

    menuToggle.classList.toggle("active");
    nav.classList.toggle("open");

});


// close menu after clicking menu item
const navLinks = nav.querySelectorAll("a");

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        menuToggle.classList.remove("active");
        nav.classList.remove("open");

    });

});

// ================  for sign up from  ====================

const signinBtns = document.querySelectorAll(".signin-btn");

const authPopup = document.getElementById("auth-popup");

const closePopup = document.getElementById("close-popup");

const signinForm =
    document.querySelector(".signin-form");

const signupForm =
    document.querySelector(".signup-form");

const showSignup =
    document.getElementById("show-signup");

const showSignin =
    document.getElementById("show-signin");


// OPEN POPUP

signinBtns.forEach(btn => {

    btn.addEventListener("click", (e) => {

        e.preventDefault();

        authPopup.classList.add("active");

    });

});


// CLOSE POPUP

closePopup.addEventListener("click", () => {

    authPopup.classList.remove("active");

});


// OUTSIDE CLICK CLOSE

authPopup.addEventListener("click", (e) => {

    if (e.target === authPopup) {

        authPopup.classList.remove("active");

    }

});


// SHOW SIGNUP FORM

showSignup.addEventListener("click", () => {

    signinForm.classList.remove("active-form");

    signupForm.classList.add("active-form");

});


// SHOW SIGNIN FORM

showSignin.addEventListener("click", () => {

    signupForm.classList.remove("active-form");

    signinForm.classList.add("active-form");

});