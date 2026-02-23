// pages/blog/blog.js

const blogdiv = document.getElementById("blog-commondiv");

const blogSubTitle = document.createElement("h1");
blogSubTitle.textContent = "Recent Post";
blogSubTitle.classList.add("blog-sub-title-h1")

const blogMainTitle = document.createElement("h2");
blogMainTitle.textContent = "Book of Recipes and Cooking Tips!"
blogMainTitle.classList.add("blog-main-title-h2")

blogdiv.appendChild(blogSubTitle);
blogdiv.appendChild(blogMainTitle);


const blogGrid = document.getElementById("blogGrid");

function loadBlogs() {

  let html = "";

  blogPosts.forEach(post => {

    html += `
    
    <div class="blog-card">
<a href="${post.link}" class="blog-card-link">
      <div class="blog-image">
        <img src="${post.image}" alt="${post.title}">
        <span class="category">${post.category}</span>
      </div>

      <div class="blog-content">

        <div class="blog-meta">
          <span>${post.date}</span>
          <span>By ${post.author}</span>
        </div>

        <h3>${post.title}</h3>

        <p>${post.description}</p>

        <a href="${post.link}" class="read-more">
        <span class="read-more">
        READ MORE → </span>
        </a>

      </div>

    </div>
    
    `;

  });

  blogGrid.innerHTML = html;

}

loadBlogs();