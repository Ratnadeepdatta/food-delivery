
  // ================= MENU INIT =================
  function initMenu() {
    // console.log("menu.js working");

    const menuSection = document.getElementById("menu-container");
    if (!menuSection) return;

    menuSection.innerHTML = ""; // prevent duplicate

    // MAIN SECTION
    const section = document.createElement("section");
    section.className = "food-carousel";

    const container = document.createElement("div");
    container.className = "container home-menu-container";

    const titleDiv = document.createElement("div");
    titleDiv.className = "section-title";
    titleDiv.innerHTML = `<h2>Popular Dishes</h2>`;

    const wrapper = document.createElement("div");
    wrapper.className = "carousel-wrapper";

    const track = document.createElement("div");
    track.className = "carousel-track";

    // ================= BUTTONS =================
  const prevBtn = document.createElement("button");
  prevBtn.className = "carousel-btn prev";
  prevBtn.innerHTML = "&#10094;";

  const nextBtn = document.createElement("button");
  nextBtn.className = "carousel-btn next";
  nextBtn.innerHTML = "&#10095;";

    // ================= STAR RATING FIX =================
  document.addEventListener("click", function (e) {

    if (e.target.matches(".star-rating i")) {

      const clickedStar = e.target;
      const value = clickedStar.getAttribute("data-value");

      const parent = clickedStar.parentElement;
      const allStars = parent.querySelectorAll("i");

      allStars.forEach(star => {
        if (star.getAttribute("data-value") <= value) {
          star.classList.remove("fa-regular");
          star.classList.add("fa-solid");
        } else {
          star.classList.remove("fa-solid");
          star.classList.add("fa-regular");
        }
      });

    }

  });

    // ================= DATA =================
    const foods = [
      { name: "Cheese Burger", price: 299, img: "assets/images/promo01.webp" },
      { name: "Pizza Slice", price: 299, img: "assets/images/promo02.webp" },
      { name: "Grilled Chicken", price: 299, img: "assets/images/promo03.webp" },
      { name: "French Fries", price: 299, img: "assets/images/promo04.webp" },
      { name: "Srench Fries", price: 299, img: "assets/images/promo02.webp" }
    ];

    // ================= CREATE CARDS =================
    foods.forEach(food => {
      const card = document.createElement("div");
      card.className = "food-card slide";

      // ✅ IMPORTANT (used in cart logic)
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

    // ================= SLIDER LOGIC =================
    
  const carousel = track;
  let cards = carousel.querySelectorAll(".food-card");

  const visibleCards = 4;
  let currentIndex = 0;

  // Clone cards (for infinite)
  cards.forEach(card => {
  const clone = card.cloneNode(true);
  carousel.appendChild(clone);
});
 

  // Update function
  function updateCarousel(withTransition = true) {
    const cardWidth = cards[0].offsetWidth + 20;

    carousel.style.transition = withTransition ? "transform 0.5s ease" : "none";
    carousel.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
  }

  // Next
  function goNext() {
    currentIndex++;
    updateCarousel(true);

    if (currentIndex === cards.length) {
      setTimeout(() => {
        currentIndex = 0;
        updateCarousel(false);
      }, 500);
    }
  }
 
  // Prev
  function goPrev() {
    if (currentIndex === 0) {
      currentIndex = cards.length;
      updateCarousel(false);
    }

    setTimeout(() => {
      currentIndex--;
      updateCarousel(true);
    }, 10);
  }

  // Button click
  nextBtn.onclick = goNext;
  prevBtn.onclick = goPrev;

  // Autoplay
  let autoPlay = setInterval(goNext, 3000);

  // Pause on hover
  wrapper.addEventListener("mouseenter", () => clearInterval(autoPlay));
  wrapper.addEventListener("mouseleave", () => {
    autoPlay = setInterval(goNext, 3000);
  });



    wrapper.appendChild(track);
    container.appendChild(titleDiv);
    wrapper.appendChild(prevBtn);
    wrapper.appendChild(nextBtn);
    container.appendChild(wrapper);
    section.appendChild(container);
    menuSection.appendChild(section);
  }


  // ================= GLOBAL CART =================
  let cart = [];

  // ================= ADD TO CART =================
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

    console.log("Cart:", cart);

    const cartCount = document.getElementById("cart-count");
    const cartItems = document.getElementById("cart-items");
    const cartTotal = document.getElementById("cart-total");

    if (cartCount && cartItems && cartTotal) {
      updateCart(cartCount, cartItems, cartTotal);
    }
  });


  // ================= UPDATE CART =================
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

          <div class="popup-pric">
            <p>${item.name}</p>
            <p class="popup-items-price">
              <i class="fa-solid fa-indian-rupee-sign"></i> ${item.price}
            </p>
          </div>

          <div class="popup-btn">
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


  // ================= CHANGE QTY =================
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

  

  //   // =============================  Old Code  ======================================

  //   // function initMenu() {
  //   //   const menuSection = document.getElementById("menu-container-inner");
  //   // if (!menuSection) return;
  //   //  menuSection.innerHTML = "";
  //   //   // Create main section
  //   //   const section = document.createElement("section");
  //   //   section.className = "food-carousel";

  //   //   const container = document.createElement("div");
  //   //   container.className = "container home-menu-container";

  //   //   // Title
  //   //   const titleDiv = document.createElement("div");
  //   //   titleDiv.className = "section-title";
  //   //   titleDiv.innerHTML = `<h2>Popular Dishes</h2>`;

  //   //   // Wrapper
  //   //   const wrapper = document.createElement("div");
  //   //   wrapper.className = "carousel-wrapper";

  //   //   // Prev Button
  //   //   const prevBtn = document.createElement("button");
  //   //   prevBtn.className = "carousel-btn prev";
  //   //   prevBtn.innerHTML = "&#10094;";
  //   //   prevBtn.onclick = () => goPrev();

  //   //   // Track
  //   //   const track = document.createElement("div");
  //   //   track.className = "carousel-track";

  //   //   // Food Data (IMPORTANT )
  //   //   const foods = [
  //   //     { name: "Cheese Burger", price: 299, img: "assets/images/promo01.webp" },
  //   //     { name: "Pizza Slice", price: 299, img: "assets/images/promo02.webp" },
  //   //     { name: "Grilled Chicken", price: 299, img: "assets/images/promo03.webp" },
  //   //     { name: "French Fries", price: 299, img: "assets/images/promo04.webp" },
  //   //     { name: "North Indian Dish", price: 299, img: "assets/images/promo04.webp" },
  //   //     { name: "French Fries", price: 299, img: "assets/images/promo04.webp" },
  //   //     { name: "French Fries", price: 299, img: "assets/images/promo04.webp" }
  //   //   ];

  //   //   // Create Cards
  //   //   foods.forEach(food => {

  //   //     const card = document.createElement("div");
  //   //     card.className = "food-card slide";
  //   //     card.dataset.name = food.name;
  //   //     card.dataset.price = food.price;
  //   //     card.dataset.img = food.img;

  //   //     card.innerHTML = `
  //   //       <img src="${food.img}" alt="${food.name}">
  //   //       <div class="food-card-text-content">
  //   //         <h3>${food.name}</h3>

  //   //         <div class="star-rating">
  //   //           <i class="fa-regular fa-star" data-value="1"></i>
  //   //           <i class="fa-regular fa-star" data-value="2"></i>
  //   //           <i class="fa-regular fa-star" data-value="3"></i>
  //   //           <i class="fa-regular fa-star" data-value="4"></i>
  //   //           <i class="fa-regular fa-star" data-value="5"></i>
  //   //         </div>

  //   //         <span class="price">
  //   //           <i class="fa-solid fa-indian-rupee-sign"></i> ${food.price}
  //   //         </span>

  //   //         <button class="add-cart">Add to cart</button>
  //   //       </div>
  //   //     `;

  //   //     track.appendChild(card);
  //   //   });

  //   //   // Next Button
  //   //   const nextBtn = document.createElement("button");
  //   //   nextBtn.className = "carousel-btn next";
  //   //   nextBtn.innerHTML = "&#10095;";
  //   //   nextBtn.onclick = () => goNext();

  //   //   // Visit Button
  //   //   const visitBtn = document.createElement("button");
  //   //   visitBtn.className = "hero-btn";
  //   //   visitBtn.innerText = "Visit Menu";

  //   //   // Append structure
  //   //   wrapper.appendChild(prevBtn);
  //   //   wrapper.appendChild(track);
  //   //   wrapper.appendChild(nextBtn);

  //   //   container.appendChild(titleDiv);
  //   //   container.appendChild(wrapper);
  //   //   container.appendChild(visitBtn);

  //   //   section.appendChild(container);
  //   //   menuSection.appendChild(section);

  //   //   const trackEl = section.querySelector(".carousel-track");
  //   // let cards = section.querySelectorAll(".food-card");

  //   // const visibleCards = 4;
  //   // let currentIndex = 0;

  //   // // Clone
  //   // for (let i = 0; i < visibleCards; i++) {
  //   //     const clone = cards[i].cloneNode(true);
  //   //     track.appendChild(clone);
  //   // }

  //   // cards = section.querySelectorAll(".food-card");

  //   // function updateCarousel(withTransition = true) {
  //   //     const cardWidth = cards[0].offsetWidth + 20;

  //   //     track.style.transition = withTransition ? "transform 0.5s ease" : "none";
  //   //     track.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
  //   // }

  //   // window.goNext = function () {
  //   //     currentIndex++;
  //   //     updateCarousel(true);

  //   //     if (currentIndex === cards.length - visibleCards) {
  //   //         setTimeout(() => {
  //   //             currentIndex = 0;
  //   //             updateCarousel(false);
  //   //         }, 500);
  //   //     }
  //   // };

  //   // window.goPrev = function () {
  //   //     if (currentIndex === 0) {
  //   //         currentIndex = cards.length - visibleCards;
  //   //         updateCarousel(false);
  //   //     }

  //   //     setTimeout(() => {
  //   //         currentIndex--;
  //   //         updateCarousel(true);
  //   //     }, 10);
  //   // };

  //   // // Autoplay
  //   // let autoPlay = setInterval(window.goNext, 3000);

  //   // const wrapperEl = section.querySelector(".carousel-wrapper");

  //   // wrapperEl.addEventListener("mouseenter", () => clearInterval(autoPlay));
  //   // wrapperEl.addEventListener("mouseleave", () => {
  //   //     autoPlay = setInterval(window.goNext, 3000);
  //   // });

  //   // //==========================  Reating logic code =============================

  //   // const stars = section.querySelectorAll(".star-rating i");

  //   // stars.forEach(star => {
  //   //   star.addEventListener("click", function () {

  //   //     const value = this.getAttribute("data-value");
  //   //     const parent = this.parentElement;
  //   //     const allStars = parent.querySelectorAll("i");

  //   //     allStars.forEach(s => {
  //   //       if (s.getAttribute("data-value") <= value) {
  //   //         s.classList.remove("fa-regular");
  //   //         s.classList.add("fa-solid");
  //   //       } else {
  //   //         s.classList.remove("fa-solid");
  //   //         s.classList.add("fa-regular");
  //   //       }
  //   //     });

  //   //   });
  //   // });
  //   // };

        
  //   // //  Below this code for menu busket and popup

  //   // let cart = [];

  //   // document.addEventListener("click", function(e) {

  //   //   const button = e.target.closest(".add-cart");

  //   //   if (!button) return;

  //   //   const card = button.closest(".food-card, .shop-card");

  //   //   const name = card.dataset.name;
  //   //   const price = parseFloat(card.dataset.price);
  //   //   const img = card.dataset.img;

  //   //   const existing = cart.find(item => item.name === name);

  //   //   if (existing) {
  //   //     existing.qty++;
  //   //   } else {
  //   //     cart.push({
  //   //       name,
  //   //       price,
  //   //       img,
  //   //       qty: 1
  //   //     });
  //   //   }

  //   //   const cartCount = document.getElementById("cart-count");
  //   //   const cartItems = document.getElementById("cart-items");
  //   //   const cartTotal = document.getElementById("cart-total");

  //   //   updateCart(cartCount, cartItems, cartTotal);
  //   // });


  //   // function updateCart(cartCount, cartItems, cartTotal) {

  //   //     cartItems.innerHTML = "";

  //   //     let total = 0;
  //   //     let count = 0;

  //   //     cart.forEach((item, index) => {

  //   //         total += item.price * item.qty;
  //   //         count += item.qty;

  //   //         cartItems.innerHTML += `
  //   // <div class="cart-item">

  //   // <img src="${item.img}" width="40">

  //   // <div class= "popup-pric">
  //   // <p>${item.name}</p>
  //   // <p class="popup-items-price"> <i class="fa-solid fa-indian-rupee-sign"></i> ${item.price}</p>
  //   // </div>

  //   // <div class= "popup-btn">
  //   // <button onclick="changeQty(${index},-1)">-</button>
  //   // ${item.qty}
  //   // <button onclick="changeQty(${index},1)">+</button>
  //   // </div>

  //   // </div>
  //   // `;

  //   //     });

  //   //     cartCount.innerText = count;
  //   //     cartTotal.innerText = total.toFixed(2);

  //   // }


  //   // function changeQty(index, change) {

  //   //     cart[index].qty += change;

  //   //     if (cart[index].qty <= 0) {
  //   //         cart.splice(index, 1);
  //   //     }

  //   //     const cartCount = document.getElementById("cart-count");
  //   //     const cartItems = document.getElementById("cart-items");
  //   //     const cartTotal = document.getElementById("cart-total");

  //   //     updateCart(cartCount, cartItems, cartTotal);

  //   // }
