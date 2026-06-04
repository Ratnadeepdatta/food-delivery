
  // ================= MENU INIT =================
   function initMenu()  {
   
    const menuSection = document.getElementById("home-menu-container");
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

  document.addEventListener("DOMContentLoaded", () => {
  initMenu();
});

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