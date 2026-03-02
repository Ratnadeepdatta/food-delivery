const contactPage = document.getElementById("contactPage");


// MAIN CONTAINER
const container = document.createElement("div");
container.className = "contact-container";


// ==========================
// SECTION 1 → GOOGLE MAP
// ==========================

const mapSection = document.createElement("div");
mapSection.className = "map-section";

const iframe = document.createElement("iframe");

iframe.src =
  "https://www.google.com/maps?q=Karnataka,India&output=embed";

iframe.loading = "lazy";

mapSection.appendChild(iframe);



// ==========================
// SECTION 2 → CONTACT SECTION
// ==========================

const contactSection = document.createElement("div");
contactSection.className = "contact-section";


// LEFT → IMAGE
const leftDiv = document.createElement("div");
leftDiv.className = "contact-left";

const img = document.createElement("img");
img.src = "/assets/images/contact-image.webp"; // change your image path

leftDiv.appendChild(img);


// RIGHT → FORM
const rightDiv = document.createElement("div");
rightDiv.className = "contact-right";

const title = document.createElement("h2");
title.textContent = "Contact Us";

const phone = document.createElement("p");
phone.textContent = "Mobile: 1234567890";

const email = document.createElement("p");
email.textContent = "Email: ratnadeepkut@gmail.com";


// FORM
const form = document.createElement("form");


// NAME INPUT
const nameInput = document.createElement("input");
nameInput.type = "text";
nameInput.placeholder = "Your Name";


// EMAIL INPUT
const emailInput = document.createElement("input");
emailInput.type = "email";
emailInput.placeholder = "Your Email";


// MESSAGE INPUT
const messageInput = document.createElement("textarea");
messageInput.placeholder = "Your Message";


// BUTTON
const btn = document.createElement("button");
btn.textContent = "Send Message";


// APPEND FORM ELEMENTS
form.appendChild(nameInput);
form.appendChild(emailInput);
form.appendChild(messageInput);
form.appendChild(btn);


// APPEND RIGHT DIV ELEMENTS
rightDiv.appendChild(title);
rightDiv.appendChild(phone);
rightDiv.appendChild(email);
rightDiv.appendChild(form);


// APPEND CONTACT SECTION
contactSection.appendChild(leftDiv);
contactSection.appendChild(rightDiv);


// APPEND ALL TO MAIN CONTAINER
container.appendChild(mapSection);
container.appendChild(contactSection);


// ADD TO PAGE
contactPage.appendChild(container);