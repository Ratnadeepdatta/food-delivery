
// pages/blog/blog.js

const blogGrid = document.getElementById("blogGrid");

function loadBlogs() {

  let html = "";

  blogPosts.forEach(post => {

    html += `
    
    <div class="blog-card">

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
          READ MORE →
        </a>

      </div>

    </div>
    
    `;

  });

  blogGrid.innerHTML = html;

}

loadBlogs();