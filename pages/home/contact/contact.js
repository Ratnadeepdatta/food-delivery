const contactSection = document.getElementById("contact-section");

// container
const container = document.createElement("div");
container.className = "contact-container";

// title
const title = document.createElement("div");
title.className = "contact-title";
title.textContent = "Contact Us";

// contact info
const info = document.createElement("div");
info.className = "contact-info";
info.innerHTML = `
  <div>📞 <a href="tel:8974247067">8974247067</a></div>
  <div>✉️ <a href="mailto:ratnadeepkut@gmail.com">ratnadeepkut@gmail.com</a></div>
`;

// form
const form = document.createElement("form");
form.className = "contact-form";

// input name
const nameInput = document.createElement("input");
nameInput.type = "text";
nameInput.placeholder = "Your Name";
nameInput.required = true;

// input email
const emailInput = document.createElement("input");
emailInput.type = "email";
emailInput.placeholder = "Your Email";
emailInput.required = true;

// message
const messageInput = document.createElement("textarea");
messageInput.placeholder = "Your Message";
messageInput.required = true;

// button
const button = document.createElement("button");
button.type = "submit";
button.textContent = "Send Message";

// submit event
form.addEventListener("submit", function(e) {
  e.preventDefault();

  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const message = messageInput.value.trim();

  if (!name || !email || !message) {
    alert("Please fill all fields");
    return;
  }

  alert(`Thank you ${name}! Message sent successfully.`);

  form.reset();
});

// append elements
form.append(nameInput, emailInput, messageInput, button);
container.append(title, info, form);
contactSection.append(container);