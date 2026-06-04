// =================  This is hero section  ===================

const aboutMain = document.getElementById("about-maindiv");

const aboutSubTitle = document.createElement("h1");
aboutSubTitle.textContent = "Abuout Us";
aboutSubTitle.classList.add("about-subtitle-h1");

aboutMain.appendChild(aboutSubTitle);

const aboutMainTitle = document.createElement("h2");
aboutMainTitle.innerHTML = "Experience The Taste <br> of Italian Food";
aboutMainTitle.classList.add("about-main-title-h2");

aboutMain.appendChild(aboutMainTitle);

// ==============  This is 1st section  ====================

const aboutLeft = document.getElementById("about-left-img");

const aboutLeftImg = document.createElement("img")
aboutLeftImg.src = "../../assets/images/about03.png";
aboutLeftImg.alt = "About Food Image";
aboutLeftImg.classList.add("about-left-image");

aboutLeft.appendChild(aboutLeftImg);

// ============== text div  ====================

const aboutRight = document.getElementById("about-right-text-div");

const aboutRightText = document.createElement("h2");
aboutRightText.innerHTML = "Caferio, Burgers, And <br> Best Pizzas <span> in Town </span>";
aboutRightText.classList.add("about-right-text-h2");

aboutRight.appendChild(aboutRightText);

const aboutP1 = document.createElement("p");
aboutP1.innerHTML = "The restaurants in Hangzhou also catered to many northern Chinese who had fled south from Kaifeng during the Jurchen invasion of the 1120s, while it is also known that many restaurants were run by families.";
aboutP1.classList.add("about-description-p");

aboutRight.appendChild(aboutP1);

const aboutP2 = document.createElement("p");
aboutP2.innerHTML = "The restaurants in Hangzhou also catered to many northern Chinese who had fled south from Kaifeng during the Jurchen invasion of the 1120s, while it is also known that many restaurants were run by families.";
aboutP2.classList.add("about-description-p");

aboutRight.appendChild(aboutP2);

const aboutBtn = document.createElement("button");
aboutBtn.innerHTML = "Order Now";
aboutBtn.classList.add("about-btn1");

aboutBtn.addEventListener("click", ()=>{
  window.location.href = "../../pages/menu/menu.html";
})

aboutRight.appendChild(aboutBtn);

// ====================  This is 2nd section  ===================

const secendTextDiv = document.getElementById("secend-textdiv");

const secenddivText = document.createElement("h2");
secenddivText.innerHTML = "They Will <span> Cook </span> For You";
secenddivText.classList.add("secend-section-title-h2");

secendTextDiv.appendChild(secenddivText);

const secendSectionTextP = document.createElement("p");
secendSectionTextP.innerHTML = "Food is any substance consumed to provide nutritional support for an organism.";
secendSectionTextP.classList.add("secend-section-text-p");

secendTextDiv.appendChild(secendSectionTextP)


// ===========  This are for grid  =========================

const aboutSecendGridDiv = document.getElementById("about-secend-griddiv");

const chefData = [
  {
    image: "../../../assets/images/team-01.webp",
    name: "Charles Richard",
    role: "Executive Chef"
  },

  {
    image: "../../../assets/images/team-02.webp",
    name: "Robert William",
    role: "Head Chef"
  },

  {
    image: "../../../assets/images/team-03.webp",
    name: "Thomas Josef",
    role: "Junior Chef"
  },

  {
    image: "../../../assets/images/team-04.webp",
    name: "Mike Albatson",
    role: "Kitchen Porter"
  }
];

chefData.forEach((item) => {

  // Main Card
  const chefCard = document.createElement("div");
  chefCard.classList.add("chef-card");

  // Image
  const chefImage = document.createElement("img");
  chefImage.src = item.image;
  chefImage.alt = item.name;
  chefImage.classList.add("chef-image");

  // Bottom Content Div
  const chefContent = document.createElement("div");
  chefContent.classList.add("chef-content");

  // Chef Name
  const chefName = document.createElement("h3");
  chefName.innerHTML = item.name;
  chefName.classList.add("chef-name");

  // Chef Role
  const chefRole = document.createElement("p");
  chefRole.innerHTML = item.role;
  chefRole.classList.add("chef-role");

  // Append Text
  chefContent.appendChild(chefName);
  chefContent.appendChild(chefRole);

  // Append Image + Content
  chefCard.appendChild(chefImage);
  chefCard.appendChild(chefContent);

  // Append Card into Grid
  aboutSecendGridDiv.appendChild(chefCard);

});

// =================  3rd section for testimonial  ======================

fetch("../home/testimonial/testimonial.html")
  .then(response => response.text())
  .then(data => {

    document.getElementById("testimonial-section").innerHTML = data;

    const script = document.createElement("script");

    script.src = "../home/testimonial/testimonial.js";

    script.onload = () => {
      loadReviews();
    };

    document.body.appendChild(script);

  });

// ================  4th section for order number  ======================
const orderNumber = document.getElementById("order-number-left")

const orderHeading = document.createElement("h2");
orderHeading.innerHTML = "A Moments Of Delivered <br> On <span>Right Time </span> & Place";
orderHeading.classList.add("order-heading-h2");
orderNumber.appendChild(orderHeading);

const orderpara = document.createElement("p");
orderpara.textContent = "The restaurants in Hangzhou also catered to many northern Chinese who had fled south from Kaifeng during the Jurchen invasion of the 1120s, while it is also known that many restaurants were run by families";
orderpara.classList.add("order-para-p");
orderNumber.appendChild(orderpara);
// ==========  order Button div  =============
const orderDiv = document.createElement("div");
orderDiv.classList.add("order-content-div");

const orderBtn = document.createElement("button");
orderBtn.textContent = "Order Now";
orderBtn.classList.add("hero-btn");
orderBtn.addEventListener("click",()=>{
  window.location.href ="../../pages/menu/menu.html"
})

orderDiv.appendChild(orderBtn);
// orderNumber.appendChild(orderDiv)

const ordNumber = document.createElement("h4");
ordNumber.classList.add("ord-number-text");

const phoneIcon = document.createElement("i");
phoneIcon.classList.add("fa-solid", "fa-phone");

ordNumber.textContent = "8974287067";

orderDiv.appendChild(ordNumber);
orderNumber.appendChild(orderDiv)


// =============    scrolling  ==========================

const orderImageRight = document.getElementById("order-image-right");

const orderImage = document.createElement("img");

orderImage.src = "../../../assets/images/delivery-boy.svg";
orderImage.alt = "Menuzy food delivery rider";

orderImage.classList.add("order-right-image");

orderImageRight.appendChild(orderImage);


// smooth scroll animation
window.addEventListener("scroll", () => {

    // section position
    const sectionTop = orderImageRight.offsetTop;

    // current scroll
    const scrollPosition = window.scrollY;

    // movement speed
    let moveValue = (scrollPosition - sectionTop) * 0.15;

    // limit movement
    if (moveValue < -30) moveValue = -30;
    if (moveValue > 50) moveValue = 50;

    // move image
    orderImage.style.transform = `translateX(${moveValue}px)`;

});