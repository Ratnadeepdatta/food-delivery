console.log("about.js working ✅");

document.addEventListener("DOMContentLoaded", () => {

  const root = document.getElementById("about-container");

  if (!root) {
    console.error("about-container not found ");
    return;
  }

  // SECTION
  const section = document.createElement("section");
  section.className = "section-about";

  // MAIN CONTAINER
  const container = document.createElement("div");
  container.className = "container about";

  // ================= LEFT SIDE (IMAGE) =================
  const aboutImage = document.createElement("div");
  aboutImage.className = "about-image";

  const img = document.createElement("img");
  img.src = "assets/images/about01.webp";
  img.alt = "About Image";

  // OFFER BOX
  const offers = document.createElement("div");
  offers.className = "offers";

  const offerTexts = document.createElement("div");
  offerTexts.className = "offer-texts";

  const h3 = document.createElement("h3");
  h3.textContent = "Get Up To";

  const h4 = document.createElement("h4");
  h4.innerHTML = `<span>50%</span><br> Off Now`;

  offerTexts.appendChild(h3);
  offerTexts.appendChild(h4);
  offers.appendChild(offerTexts);

  aboutImage.appendChild(img);
  aboutImage.appendChild(offers);

  // ================= RIGHT SIDE (TEXT) =================
  const aboutText = document.createElement("div");
  aboutText.className = "about-alltext";

  const heading = document.createElement("h2");
  heading.innerHTML = `
    Caferio, Burgers, and <br>
    Best Pizzas <span>in Town!</span>
  `;

  const para = document.createElement("p");
  para.textContent = `The restaurants in Hangzhou also catered to many northern Chinese who had fled south from Kaifeng during
  the Jurchen invasion of the 1120s, while it is also known that many restaurants were run by families.`;

  // FEATURE LIST
  const ul = document.createElement("ul");
  ul.className = "feature-list";

  const features = [
    "Delicious & Healthy Foods",
    "Spacific Family And Kids Zone",
    "Music & Other Facilities",
    "Fastest Food Home Delivery"
  ];

  features.forEach(text => {
    const li = document.createElement("li");

    const icon = document.createElement("i");
    icon.className = "fa-solid fa-check";

    li.appendChild(icon);
    li.append(" " + text);

    ul.appendChild(li);
  });

  // BUTTON
  const button = document.createElement("button");
  button.className = "hero-btn";
  button.textContent = "Order Now";

  // APPEND RIGHT SIDE
  aboutText.appendChild(heading);
  aboutText.appendChild(para);
  aboutText.appendChild(ul);
  aboutText.appendChild(button);

  // ================= FINAL STRUCTURE =================
  container.appendChild(aboutImage);
  container.appendChild(aboutText);
  section.appendChild(container);
  root.appendChild(section);

});