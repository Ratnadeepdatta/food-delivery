

const reviews = JSON.parse(localStorage.getItem("reviews")) || [

  {
    name: "Sneha",
    rating: 5,
    text: "Amazing food and fast delivery. Loved it!",
    image: "https://i.pravatar.cc/100?img=1"
  },

  {
    name: "Raj",
    rating: 4,
    text: "Very good service and tasty food.",
    image: "https://i.pravatar.cc/100?img=2"
  }

];

function loadReviews() {

  const container = document.getElementById("reviewContainer");

  container.innerHTML = "";

  reviews.slice(0, 6).forEach(review => {

    container.innerHTML += `

<div class="review-card">

<img src="${review.image}">

<h4>${review.name}</h4>

<div>
${generateStars(review.rating)}
</div>

<p>
${review.text.substring(0, 300)}
</p>

</div>

`;

  });

}

loadReviews();

// star generator code

function generateStars(rating) {

  let stars = "";

  for (let i = 1; i <= 5; i++) {

    if (i <= rating) {

      stars += `<i class="fa-solid fa-star star active"></i>`;

    } else {

      stars += `<i class="fa-solid fa-star star normal"></i>`;

    }

  }

  return stars;

}

// function generateStars(rating) {

//   let stars = "";

//   for (let i = 0; i < rating; i++) {

//     stars += `<i class="fa-solid fa-star"></i>`;

//   }

//   return stars;

// }

// popup function 

function openReviewPopup() {

  document.getElementById("reviewPopup").style.display = "flex";

}

function closeReviewPopup() {

  document.getElementById("reviewPopup").style.display = "none";

}

// close when clicking outside popup
const reviewPopup = document.getElementById("reviewPopup");

reviewPopup.addEventListener("click", function (event) {

  if (event.target === reviewPopup) {

    closeReviewPopup();

  }

});

// reating inport

let selectedRating = 0;

document
  .querySelectorAll("#ratingInput i")
  .forEach(star => {

    star.onclick = () => {

      selectedRating = star.dataset.value;

      document
        .querySelectorAll("#ratingInput i")
        .forEach(s => s.classList.remove("active"));

      for (let i = 0; i < selectedRating; i++) {

        document
          .querySelectorAll("#ratingInput i")[i]
          .classList.add("active");

      }

    };

  });


// post review

function postReview() {

  const text =
    document.getElementById("reviewText").value;

  const newReview = {

    name: "Customer",

    rating: selectedRating,

    text: text,

    image: "https://i.pravatar.cc/100"

  };

  reviews.unshift(newReview);

  localStorage.setItem(
    "reviews",
    JSON.stringify(reviews)
  );

  loadReviews();

  closeReviewPopup();

}



