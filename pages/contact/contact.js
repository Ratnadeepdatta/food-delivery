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

// 2nd section 

const cntSection = document.getElementById("cnt-2nd-section");

const imgDiv = document.createElement(div)
imgDiv.classList.add("cnt-img-div")

const img = document.createElement("img")
img.src = "assets/images/contact-img01.webp"

imgDiv.appendChild(img);


const contentDiv = document.createElement("cnt-2nd-section");
contentDiv.classList.add("ctn-content");

const title = document.createElement("h1");
title.innerHTML = `
A Moments Of Delivered <br>
On <span>Right Time</span> & Place
`;

const desc = document.createElement("p");
desc.textContent =
"Experience reliable and timely food delivery with quality service, ensuring every order reaches you fresh, delicious, and right on schedule.";

const btnWrapper = document.createElement("div");
btnWrapper.classList.add("ctn-btn");

const orderBtn = document.createElement("a");
orderBtn.classList.add("order-btn");
orderBtn.href="#";
orderBtn.textContent="Order Now";

const phone = document.createElement("div");
phone.classList.add("phone");
phone.textContent="📞 0123456789";

btnWrapper.appendChild(orderBtn);
btnWrapper.appendChild(phone);

contentDiv.appendChild(title);
contentDiv.appendChild(desc);
contentDiv.appendChild(btnWrapper);

container.appendChild(imageDiv);
container.appendChild(contentDiv);

heroSection.appendChild(container);







