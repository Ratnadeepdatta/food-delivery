// =================  This is hero section  ===================

const aboutMain = document.getElementById("about-maindiv");

const aboutSubTitle = document.createElement("h1");
aboutSubTitle.textContent = "Abuout Us";
aboutSubTitle.classList.add ("about-subtitle-h1");

aboutMain.appendChild(aboutSubTitle);

const aboutMainTitle = document.createElement("h2");
aboutMainTitle.innerHTML = "Experience The Taste <br> of Italian Food";
aboutMainTitle.classList.add ("about-main-title-h2");

aboutMain.appendChild(aboutMainTitle);

// ==============  This is 1st section  ====================

const aboutLeft = document.getElementById("about-left-img");

const aboutLeftImg = document.createElement("img")
aboutLeftImg.src = "../../assets/images/about03.png";
aboutLeftImg.classList.add("about-left-image");

aboutLeft.appendChild(aboutLeftImg);

// ============== text div  ====================

const aboutRight = document.getElementById("about-right-text-div");

const aboutRightText = document.createElement("h2");
aboutRightText.innerHTML = "Caferio, Burgers, And <br>Best Pizzas <span> in Town </span>";
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

aboutRight.appendChild(aboutBtn);

// ====================  This is 2nd section  ===================

const secendTextDiv = document.getElementById("secend-textdiv");

const secenddivText = document.createElement("h2");
secenddivText.innerHTML = "They Will <span> Cook </span> For You";
secenddivText.classList.add("secend-section-title-h2");

secendTextDiv.appendChild(secenddivText);

const secendSectionTextP = document.createElement("p");
secendSectionTextP.innerHTML = "Food is any substance consumed to provide nutritional <br>support for an organism.";
secendSectionTextP.classList.add("secend-section-text-p");

secendTextDiv.appendChild(secendSectionTextP)


// ===========  This are for grid  =========================

const aboutSecendGridDiv = document.getElementById("about-secend-griddiv");

const chefData = [
  {
    image: "./images/chef-1.jpg",
    name: "Charles Richard",
    role: "Executive Chef"
  },

  {
    image: "./images/chef-2.jpg",
    name: "Robert William",
    role: "Head Chef"
  },

  {
    image: "./images/chef-3.jpg",
    name: "Thomas Josef",
    role: "Junior Chef"
  },

  {
    image: "./images/chef-4.jpg",
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
