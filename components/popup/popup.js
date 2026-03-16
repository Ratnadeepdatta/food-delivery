
document.addEventListener("click", function(e){

const cartBtn = e.target.closest("#cart-icon");
const closeBtn = e.target.closest("#close-cart");

if(cartBtn){
e.preventDefault();
document.getElementById("cart-popup").classList.add("open");
}

if(closeBtn){
document.getElementById("cart-popup").classList.remove("open");
}

});

// document.addEventListener("click", function (e) {

//     const cartBtn = e.target.closest("#cart-icon");
//     const closeBtn = e.target.closest("#close-cart");

//     if (cartBtn) {
//         e.preventDefault(); // stops page jump
//         document.getElementById("cart-popup").classList.add("open");
//     }

//     if (closeBtn) {
//         document.getElementById("cart-popup").classList.remove("open");
//     }

// });

// document.addEventListener("click", function(e){

// if(e.target.closest("#cart-icon")){
// document.getElementById("cart-popup").classList.add("open");
// }

// if(e.target.closest("#close-cart")){
// document.getElementById("cart-popup").classList.remove("open");
// }

// });

