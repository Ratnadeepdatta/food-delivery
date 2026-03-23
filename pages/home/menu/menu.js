
const track = document.querySelector(".carousel-track");
let cards = document.querySelectorAll(".food-card");

const visibleCards = 4;
let currentIndex = 0;

// Clone first 4 cards  
for (let i = 0; i < visibleCards; i++) {
    const clone = cards[i].cloneNode(true);
    track.appendChild(clone);
}

//  Re-select cards AFTER cloning
cards = document.querySelectorAll(".food-card");

function updateCarousel(withTransition = true) {
    const cardWidth = cards[0].offsetWidth + 20;

    if (withTransition) {
        track.style.transition = "transform 0.5s ease";
    } else {
        track.style.transition = "none";
    }

    track.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
}

function goNext() {
    currentIndex++;
    updateCarousel(true);

    if (currentIndex === cards.length - visibleCards) {
        setTimeout(() => {
            currentIndex = 0;
            updateCarousel(false);
        }, 500);
    }
}

function goPrev() {
    if (currentIndex === 0) {
        currentIndex = cards.length - visibleCards;
        updateCarousel(false);
    }

    setTimeout(() => {
        currentIndex--;
        updateCarousel(true);
    }, 10);
}

// Autoplay
let autoPlay = setInterval(goNext, 3000);
const wrapper = document.querySelector(".carousel-wrapper");
wrapper.addEventListener("mouseenter", () => clearInterval(autoPlay));
wrapper.addEventListener("mouseleave", () => {
    autoPlay = setInterval(goNext, 3000);
});

//  Below this code for menu busket and popup

let cart = [];

document.addEventListener("click", function(e) {

  const button = e.target.closest(".add-cart");

  if (!button) return;

  const card = button.closest(".food-card, .shop-card");

  const name = card.dataset.name;
  const price = parseFloat(card.dataset.price);
  const img = card.dataset.img;

  const existing = cart.find(item => item.name === name);

  if (existing) {
    existing.qty++;
  } else {
    cart.push({
      name,
      price,
      img,
      qty: 1
    });
  }

  const cartCount = document.getElementById("cart-count");
  const cartItems = document.getElementById("cart-items");
  const cartTotal = document.getElementById("cart-total");

  updateCart(cartCount, cartItems, cartTotal);
});

// function initMenuCart() {

//     const addButtons = document.querySelectorAll(".add-cart");
//     const cartCount = document.getElementById("cart-count");
//     const cartItems = document.getElementById("cart-items");
//     const cartTotal = document.getElementById("cart-total");

//     addButtons.forEach(button => {

//         button.addEventListener("click", () => {

//             const card = button.closest(".food-card, .shop-card");

//             const name = card.dataset.name;
//             const price = parseFloat(card.dataset.price);
//             const img = card.dataset.img;

//             const existing = cart.find(item => item.name === name);

//             if (existing) {
//                 existing.qty++;
//             } else {

//                 cart.push({
//                     name,
//                     price,
//                     img,
//                     qty: 1
//                 });

//             }

//             updateCart(cartCount, cartItems, cartTotal);

//         });

//     });

// }


function updateCart(cartCount, cartItems, cartTotal) {

    cartItems.innerHTML = "";

    let total = 0;
    let count = 0;

    cart.forEach((item, index) => {

        total += item.price * item.qty;
        count += item.qty;

        cartItems.innerHTML += `
<div class="cart-item">

<img src="${item.img}" width="40">

<div class= "popup-pric">
<p>${item.name}</p>
<p class="popup-items-price"> <i class="fa-solid fa-indian-rupee-sign"></i> ${item.price}</p>
</div>

<div class= "popup-btn">
<button onclick="changeQty(${index},-1)">-</button>
${item.qty}
<button onclick="changeQty(${index},1)">+</button>
</div>

</div>
`;

    });

    cartCount.innerText = count;
    cartTotal.innerText = total.toFixed(2);

}


function changeQty(index, change) {

    cart[index].qty += change;

    if (cart[index].qty <= 0) {
        cart.splice(index, 1);
    }

    const cartCount = document.getElementById("cart-count");
    const cartItems = document.getElementById("cart-items");
    const cartTotal = document.getElementById("cart-total");

    updateCart(cartCount, cartItems, cartTotal);

}

// initMenuCart();

// // ============ old code =================

// const track = document.querySelector(".carousel-track");
// let cards = document.querySelectorAll(".food-card");

// const visibleCards = 4;
// let currentIndex = 0;

// // Clone first 4 cards
// for (let i = 0; i < visibleCards; i++) {
//     const clone = cards[i].cloneNode(true);
//     track.appendChild(clone);
//  }

// //  Re-select cards AFTER cloning
// cards = document.querySelectorAll(".food-card");

// function updateCarousel(withTransition = true) {
//     const cardWidth = cards[0].offsetWidth + 20;

//     if (withTransition) {
//         track.style.transition = "transform 0.5s ease";
//     } else {
//         track.style.transition = "none";
//     }

//     track.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
// }

// function goNext() {
//     currentIndex++;
//     updateCarousel(true);

//     if (currentIndex === cards.length - visibleCards) {
//         setTimeout(() => {
//             currentIndex = 0;
//             updateCarousel(false);
//         }, 500);
//     }
// }

// function goPrev() {
//     if (currentIndex === 0) {
//         currentIndex = cards.length - visibleCards;
//         updateCarousel(false);
//     }

//     setTimeout(() => {
//         currentIndex--;
//         updateCarousel(true);
//     }, 10);
// }

// // Autoplay
// let autoPlay = setInterval(goNext, 3000);
// const wrapper = document.querySelector(".carousel-wrapper");
// wrapper.addEventListener("mouseenter", () => clearInterval(autoPlay));
// wrapper.addEventListener("mouseleave", () => {
//     autoPlay = setInterval(goNext, 3000);
// });

// //  Below this code for menu busket and popup

// let cart = [];


// function initMenuCart(){

// const addButtons = document.querySelectorAll(".add-cart");
// const cartCount = document.getElementById("cart-count");
// const cartItems = document.getElementById("cart-items");
// const cartTotal = document.getElementById("cart-total");

// addButtons.forEach(button => {

// button.addEventListener("click", () => {

// const card = button.closest(".food-card, .shop-card");

// const name = card.dataset.name;
// const price = parseFloat(card.dataset.price);
// const img = card.dataset.img;

// const existing = cart.find(item => item.name === name);

// if(existing){
// existing.qty++;
// } else {

// cart.push({
// name,
// price,
// img,
// qty:1
// });

// }

// updateCart(cartCount, cartItems, cartTotal);

// });

// });

// }


// function updateCart(cartCount, cartItems, cartTotal){

// cartItems.innerHTML = "";

// let total = 0;
// let count = 0;

// cart.forEach((item,index)=>{

// total += item.price * item.qty;
// count += item.qty;

// cartItems.innerHTML += `
// <div class="cart-item">

// <img src="${item.img}" width="40">

// <div class= "popup-pric">
// <p>${item.name}</p>
// <p class="popup-items-price"> <i class="fa-solid fa-indian-rupee-sign"></i> ${item.price}</p>
// </div>

// <div class= "popup-btn">
// <button onclick="changeQty(${index},-1)">-</button>
// ${item.qty}
// <button onclick="changeQty(${index},1)">+</button>
// </div>

// </div>
// `;

// });

// cartCount.innerText = count;
// cartTotal.innerText = total.toFixed(2);

// }


// function changeQty(index,change){

// cart[index].qty += change;

// if(cart[index].qty <= 0){
// cart.splice(index,1);
// }

// const cartCount = document.getElementById("cart-count");
// const cartItems = document.getElementById("cart-items");
// const cartTotal = document.getElementById("cart-total");

// updateCart(cartCount, cartItems, cartTotal);

// }

// initMenuCart();