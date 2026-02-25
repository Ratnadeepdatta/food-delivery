

const blogdiv = document.getElementById("blog-commondiv");

const blogSubTitle = document.createElement("h1");
blogSubTitle.textContent = "Recent Post";
blogSubTitle.classList.add("blog-sub-title-h1")

const blogMainTitle = document.createElement("h2");
blogMainTitle.textContent = "Book of Recipes and Cooking Tips!"
blogMainTitle.classList.add("blog-main-title-h2")

blogdiv.appendChild(blogSubTitle);
blogdiv.appendChild(blogMainTitle);