const cartIcon = document.getElementById("cart-icon");
const cartPopup = document.getElementById("cart-popup");
const closeCart = document.getElementById("close-cart");

cartIcon.addEventListener("click", ()=>{

cartPopup.classList.add("open");

});

closeCart.addEventListener("click", ()=>{

cartPopup.classList.remove("open");

});