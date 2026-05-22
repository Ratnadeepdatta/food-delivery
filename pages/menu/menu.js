// =========== This is for Hero section============

const menudiv = document.getElementById("menu-commondiv");

const menuSubTitle = document.createElement("h1");
menuSubTitle.textContent = "Hello Menuzy";
menuSubTitle.classList.add ("menu-sub-title-h1");

menudiv.appendChild(menuSubTitle);

const menuMainTitle = document.createElement("h2");
menuMainTitle.innerHTML = "Welcome To Our Mega Menu";
menuMainTitle.classList.add("menu-main-title-h2");
menudiv.appendChild(menuMainTitle);


  // ================= MENU INIT =================
  function initMenu() {

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
    

    const grid = document.createElement("div");
    grid.className = "menu-grid";

 
    // ================= DATA =================
    const foods = [
      { name: "Cheese Burger", price: 299, img: "../../assets/images/promo01.webp" },
      { name: "Pizza Slice", price: 299, img: "../../assets/images/promo02.webp" },
      { name: "Grilled Chicken", price: 299, img: "../../assets/images/promo03.webp" },
      { name: "French Fries", price: 299, img: "../../assets/images/promo04.webp" },
      { name: "Srench Fries", price: 299, img: "../../assets/images/promo02.webp" },
      { name: "Srench Fries", price: 299, img: "../../assets/images/promo02.webp" },
      { name: "Srench Fries", price: 299, img: "../../assets/images/promo02.webp" },
      { name: "Srench Fries", price: 299, img: "../../assets/images/promo02.webp" },
      { name: "Srench Fries", price: 299, img: "../../assets/images/promo02.webp" },
      { name: "Srench Fries", price: 299, img: "../../assets/images/promo02.webp" },
      { name: "Srench Fries", price: 299, img: "../../assets/images/promo02.webp" },
      { name: "Srench Fries", price: 299, img: "../../assets/images/promo02.webp" },
      { name: "Srench Fries", price: 299, img: "../../assets/images/promo02.webp" },
      { name: "Srench Fries", price: 299, img: "../../assets/images/promo02.webp" }
    ];

    // ================= CREATE CARDS =================
    foods.forEach(food => {
      const card = document.createElement("div");
      card.className = "food-card slide";

      //  IMPORTANT (used in cart logic)
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

      grid.appendChild(card);
    });

    container.appendChild(titleDiv);
    container.appendChild(grid);
    section.appendChild(container);
    menuSection.appendChild(section);
  }


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

document.addEventListener("DOMContentLoaded", () => {
  initMenu();
});

