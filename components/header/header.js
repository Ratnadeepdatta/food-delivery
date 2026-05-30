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

// =============  search code   ==================

searchInput.addEventListener("keydown", (e) => {

    if (e.key === "Enter") {

        const value =
            searchInput.value.toLowerCase();

        const foods = [
            "burger",
            "pizza",
            "pasta",
            "biryani"
        ];

        if (foods.includes(value)) {

            alert(`${value} found`);

        } else {

            alert("Food not found");

        }

    }

});

// const searchInput =
//     document.getElementById("search-input");


// searchInput.addEventListener("keypress", (e) => {

//     if (e.key === "Enter") {

//         const value =
//             searchInput.value.toLowerCase().trim();

        
//         // search conditions

//         if (value === "burger") {

//             window.location.href =
//                 "/pages/menu/menu.html";

//         }

//         else if (value === "pizza") {

//             window.location.href =
//                 "/pages/menu/menu.html";

//         }

//         else if (value === "contact") {

//             window.location.href =
//                 "/pages/contact/contact.html";

//         }

//         else {

//             alert("Item not found");

//         }

//     }

// });