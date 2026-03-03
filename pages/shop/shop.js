const shopPage = document.getElementById("shopPage");

// Main container
const container = document.createElement("div");
container.className = "shop-container";


// ============================
// SECTION 1
// ============================

const section1 = document.createElement("div");
section1.className = "shop-section section-one";

// Left image
const leftImgDiv = document.createElement("div");
leftImgDiv.className = "shop-left";

const img = document.createElement("img");
img.src = "/assets/images/shop-image.webp"; // change image path
img.alt = "Menuzy Shop";

leftImgDiv.appendChild(img);

// Right content
const rightContent = document.createElement("div");
rightContent.className = "shop-right";

const heading = document.createElement("h2");
heading.textContent = "Welcome to Menuzy Shop";

const description = document.createElement("p");
description.textContent =
  "At Menuzy, we bring you the freshest ingredients and delicious flavors straight from our kitchen to your table. Explore our exclusive collection of meals crafted with passion and quality.";

// Append right content
rightContent.appendChild(heading);
rightContent.appendChild(description);

// Append section 1
section1.appendChild(leftImgDiv);
section1.appendChild(rightContent);



// ============================
// SECTION 2
// ============================

const section2 = document.createElement("div");
section2.className = "shop-section section-two";

const leftContent2 = document.createElement("div");
leftContent2.className = "shop-left-content";

const title2 = document.createElement("h2");
title2.textContent = "Why Choose Menuzy?";

const desc2 = document.createElement("p");
desc2.textContent =
  "We focus on delivering high-quality food with exceptional taste and service. Here’s what makes us special:";

const ul = document.createElement("ul");

const points = [
  "Fresh & Premium Ingredients",
  "Fast and Reliable Delivery",
  "Affordable Prices",
  "Hygienic Food Preparation",
  "Customer Satisfaction Guaranteed"
];

points.forEach(point => {
  const li = document.createElement("li");
  li.textContent = point;
  ul.appendChild(li);
});

leftContent2.appendChild(title2);
leftContent2.appendChild(desc2);
leftContent2.appendChild(ul);

section2.appendChild(leftContent2);


// ============================
// APPEND ALL
// ============================

container.appendChild(section1);
container.appendChild(section2);
shopPage.appendChild(container);