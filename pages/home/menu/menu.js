

function initMenu() {
  const menuSection = document.getElementById("menu-container-inner");
if (!menuSection) return;
 menuSection.innerHTML = "";
  // Create main section
  const section = document.createElement("section");
  section.className = "food-carousel";

  const container = document.createElement("div");
  container.className = "container home-menu-container";

  // Title
  const titleDiv = document.createElement("div");
  titleDiv.className = "section-title";
  titleDiv.innerHTML = `<h2>Popular Dishes</h2>`;

  // Wrapper
  const wrapper = document.createElement("div");
  wrapper.className = "carousel-wrapper";

  // Prev Button
  const prevBtn = document.createElement("button");
  prevBtn.className = "carousel-btn prev";
  prevBtn.innerHTML = "&#10094;";
  prevBtn.onclick = () => goPrev();

  // Track
  const track = document.createElement("div");
  track.className = "carousel-track";

  // Food Data (IMPORTANT )
  const foods = [
    { name: "Cheese Burger", price: 299, img: "assets/images/promo01.webp" },
    { name: "Pizza Slice", price: 299, img: "assets/images/promo02.webp" },
    { name: "Grilled Chicken", price: 299, img: "assets/images/promo03.webp" },
    { name: "French Fries", price: 299, img: "assets/images/promo04.webp" },
    { name: "North Indian Dish", price: 299, img: "assets/images/promo04.webp" },
    { name: "French Fries", price: 299, img: "assets/images/promo04.webp" },
    { name: "French Fries", price: 299, img: "assets/images/promo04.webp" }
  ];

  // Create Cards
  foods.forEach(food => {

    const card = document.createElement("div");
    card.className = "food-card slide";
    card.dataset.name = food.name;
    card.dataset.price = food.price;
    card.dataset.img = food.img;

    card.innerHTML = `
      <img src="${food.img}" alt="${food.name}">
      <div class="food-card-text-content">
        <h3>${food.name}</h3>

        <div class="star-rating">
          <i class="fa-regular fa-star" data-value="1"></i>
          <i class="fa-regular fa-star" data-value="2"></i>
          <i class="fa-regular fa-star" data-value="3"></i>
          <i class="fa-regular fa-star" data-value="4"></i>
          <i class="fa-regular fa-star" data-value="5"></i>
        </div>

        <span class="price">
          <i class="fa-solid fa-indian-rupee-sign"></i> ${food.price}
        </span>

        <button class="add-cart">Add to cart</button>
      </div>
    `;

    track.appendChild(card);
  });

  // Next Button
  const nextBtn = document.createElement("button");
  nextBtn.className = "carousel-btn next";
  nextBtn.innerHTML = "&#10095;";
  nextBtn.onclick = () => goNext();

  // Visit Button
  const visitBtn = document.createElement("button");
  visitBtn.className = "hero-btn";
  visitBtn.innerText = "Visit Menu";

  // Append structure
  wrapper.appendChild(prevBtn);
  wrapper.appendChild(track);
  wrapper.appendChild(nextBtn);

  container.appendChild(titleDiv);
  container.appendChild(wrapper);
  container.appendChild(visitBtn);

  section.appendChild(container);
  menuSection.appendChild(section);

  const trackEl = section.querySelector(".carousel-track");
let cards = section.querySelectorAll(".food-card");

const visibleCards = 4;
let currentIndex = 0;

// Clone
for (let i = 0; i < visibleCards; i++) {
    const clone = cards[i].cloneNode(true);
    track.appendChild(clone);
}

cards = section.querySelectorAll(".food-card");

function updateCarousel(withTransition = true) {
    const cardWidth = cards[0].offsetWidth + 20;

    track.style.transition = withTransition ? "transform 0.5s ease" : "none";
    track.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
}

window.goNext = function () {
    currentIndex++;
    updateCarousel(true);

    if (currentIndex === cards.length - visibleCards) {
        setTimeout(() => {
            currentIndex = 0;
            updateCarousel(false);
        }, 500);
    }
};

window.goPrev = function () {
    if (currentIndex === 0) {
        currentIndex = cards.length - visibleCards;
        updateCarousel(false);
    }

    setTimeout(() => {
        currentIndex--;
        updateCarousel(true);
    }, 10);
};

// Autoplay
let autoPlay = setInterval(window.goNext, 3000);

const wrapperEl = section.querySelector(".carousel-wrapper");

wrapperEl.addEventListener("mouseenter", () => clearInterval(autoPlay));
wrapperEl.addEventListener("mouseleave", () => {
    autoPlay = setInterval(window.goNext, 3000);
});

//==========================  Reating logic code =============================

const stars = section.querySelectorAll(".star-rating i");

stars.forEach(star => {
  star.addEventListener("click", function () {

    const value = this.getAttribute("data-value");
    const parent = this.parentElement;
    const allStars = parent.querySelectorAll("i");

    allStars.forEach(s => {
      if (s.getAttribute("data-value") <= value) {
        s.classList.remove("fa-regular");
        s.classList.add("fa-solid");
      } else {
        s.classList.remove("fa-solid");
        s.classList.add("fa-regular");
      }
    });

  });
});
};

//  ==========================   Old working code  ==============================

// const trackEl = section.querySelector(".carousel-track");
// let cards = section.querySelectorAll(".food-card");

// const visibleCards = 4;
// let currentIndex = 0;

// // Clone first 4 cards  
// for (let i = 0; i < visibleCards; i++) {
//     const clone = cards[i].cloneNode(true);
//     track.appendChild(clone);
// }

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
// };
//  ==========================   Old working code  ==============================

// const track = document.querySelector(".carousel-track");
// let cards = document.querySelectorAll(".food-card");

// const visibleCards = 4;
// let currentIndex = 0;

// // Clone first 4 cards  
// for (let i = 0; i < visibleCards; i++) {
//     const clone = cards[i].cloneNode(true);
//     track.appendChild(clone);
// }

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

// document.addEventListener("click", function(e) {

//   const button = e.target.closest(".add-cart");

//   if (!button) return;

//   const card = button.closest(".food-card, .shop-card");

//   const name = card.dataset.name;
//   const price = parseFloat(card.dataset.price);
//   const img = card.dataset.img;

//   const existing = cart.find(item => item.name === name);

//   if (existing) {
//     existing.qty++;
//   } else {
//     cart.push({
//       name,
//       price,
//       img,
//       qty: 1
//     });
//   }

//   const cartCount = document.getElementById("cart-count");
//   const cartItems = document.getElementById("cart-items");
//   const cartTotal = document.getElementById("cart-total");

//   updateCart(cartCount, cartItems, cartTotal);
// });


// function updateCart(cartCount, cartItems, cartTotal) {

//     cartItems.innerHTML = "";

//     let total = 0;
//     let count = 0;

//     cart.forEach((item, index) => {

//         total += item.price * item.qty;
//         count += item.qty;

//         cartItems.innerHTML += `
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

//     });

//     cartCount.innerText = count;
//     cartTotal.innerText = total.toFixed(2);

// }


// function changeQty(index, change) {

//     cart[index].qty += change;

//     if (cart[index].qty <= 0) {
//         cart.splice(index, 1);
//     }

//     const cartCount = document.getElementById("cart-count");
//     const cartItems = document.getElementById("cart-items");
//     const cartTotal = document.getElementById("cart-total");

//     updateCart(cartCount, cartItems, cartTotal);

// }


