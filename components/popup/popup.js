
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

