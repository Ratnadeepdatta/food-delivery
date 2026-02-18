
const carousel = document.querySelector(".shop-carousel");
let sCards = document.querySelectorAll(".shop-card");

const shopVisibleCards = 4;
let shopCurrentIndex = 0;

// Clone first 4 cards 
for (let i = 0; i < shopVisibleCards; i++) {
    const sClone = sCards[i].cloneNode(true);
    carousel.appendChild(sClone);
}

// Re-Select cards After Cloing
// /autoplay
// sCards = document.querySelectorAll(".shop-card");

function update(withTransition = true){
    const  cardWidth = sCards[0].offsetWidth + 20;

    if(withTransition){
        carousel.style.transition = "transform 0.5s ease";
    }else{
        carousel.style.transition = "none";
    }
    carousel.style.transform = `translateX(-${shopCurrentIndex * cardWidth}px)`;
}

// button............................................
function goRight(){
    shopCurrentIndex++;
    update(true);
    if (shopCurrentIndex === sCards.length - shopVisibleCards) {
        setTimeout(() => {
            shopCurrentIndex = 0;
            update(false);
        }, 500);
    }
}

function goLeft() {
    if (shopCurrentIndex === 0) {
        shopCurrentIndex = sCards.length - shopVisibleCards;
        update(false);
    }

    setTimeout(() => {
        shopCurrentIndex--;
        update(true);
    }, 10);
}
// /autoplay

let sAutoPlay = setInterval(goRight, 3000);
const swrapper = document.querySelector(".shop-carousel-wrapper");
swrapper.addEventListener("mouseenter", () => clearInterval(sAutoPlay));

swrapper.addEventListener("mouseleave", () => {
    sAutoPlay = setInterval(goRight, 3000);
});


const ratingContainers = document.querySelectorAll(".star-rating");

ratingContainers.forEach(container => {

  const stars = container.querySelectorAll("i");

  stars.forEach(star => {

    star.addEventListener("click", () => {

      const value = star.getAttribute("data-value");

      stars.forEach(s => s.classList.remove("active"));

      for (let i = 0; i < value; i++) {
        stars[i].classList.add("active");
      }

      const foodId = container.getAttribute("data-food");

      localStorage.setItem(foodId, value);

    });

  });

});
