
document.addEventListener("click", function(e){

  const cartBtn = e.target.closest("#cart-icon");
  const closeBtn = e.target.closest("#close-cart");

  const popup = document.getElementById("cart-popup");

  if(cartBtn){
    e.preventDefault();
    if(popup) popup.classList.add("open");
  }

  if(closeBtn){
    if(popup) popup.classList.remove("open");
  }

});

// document.addEventListener("click", function(e){

// const cartBtn = e.target.closest("#cart-icon");
// const closeBtn = e.target.closest("#close-cart");

// if(cartBtn){
// e.preventDefault();
// document.getElementById("cart-popup").classList.add("open");
// }

// if(closeBtn){
// document.getElementById("cart-popup").classList.remove("open");
// }

// });

