

// const track = document.querySelector(".carousel-track");
// const cards = document.querySelectorAll(".food-card");

// const visibleCards = 4;
// let currentIndex = 0;

// // New Infinity loop code

// for (let i =0; i <visibleCards; i++){
//     const clone = cards[i].cloneNode(true);
//     track.appendChild(clone)
// }

// const totalCards = cards.length;

// function updateCarousel() {
//     const cardWidth = cards[0].offsetWidth + 20; // include gap
//     track.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
// }

// function goNext() {
//     currentIndex++;
//     updateCarousel();
//     if(currentIndex === cards.length - visibleCards){
//         settimeout(() => {
//             track.style.transition = "none";
//             currentIndex = 0;
//             updateCarousel()
//         }, 500);
//     }
// }

// function goPrev() {
//    if(currentIndex===0){
//     track.style.transition = "none";
//     currentIndex = cards.length - visibleCards;
//     updateCarousel();
//    }
   
//    setTimeout(() =>{
//     currentIndex--;
//     track.style.transition = "transfrom 0.5s ease";
//     updateCarousel()
//    }, 10)
   
// }
// // autoplay....................................

// let autoPlay = setInterval(goNext, 3000);

// document.querySelector(".carousel-wrapper")
//     .addEventListener("mouseenter", () => clearInterval(autoPlay));

// document.querySelector(".carousel-wrapper")
//     .addEventListener("mouseleave", () => {
//         autoPlay = setInterval(goNext, 3000);
//     });



const track = document.querySelector(".carousel-track");
let cards = document.querySelectorAll(".food-card");

const visibleCards = 4;
let currentIndex = 0;

// Clone first 4 cards
for (let i = 0; i < visibleCards; i++) {
    const clone = cards[i].cloneNode(true);
    track.appendChild(clone);
}

// 🔥 Re-select cards AFTER cloning
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
