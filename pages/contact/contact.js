// hero section

const contactHero = document.getElementById("contact-hero-section");

const contactSubTitle = document.createElement("h1");
contactSubTitle.textContent = "Get in Tuch";
contactSubTitle.classList.add("contact-subtitle-h1");

const contactTitle = document.createElement("h2");
contactTitle.textContent = "Contact Us";
contactTitle.classList.add("contact-maintitle");

contactHero.appendChild(contactSubTitle);
contactHero.appendChild(contactTitle);

// map-section

const mapSection = document.getElementById("map-section")