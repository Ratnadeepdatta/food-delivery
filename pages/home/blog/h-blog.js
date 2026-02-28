document.addEventListener("DOMContentLoaded", () => {

  const container = document.getElementById("homeBlogContainer");

  if (!container) return;

  const latestPosts = blogPosts
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 3);

  latestPosts.forEach(post => {

    const card = `
      <div class="blog-card">

        <div class="blog-image">
          <img src="${post.image}" alt="${post.title}">
        </div>

        <div class="blog-content">

          <h3>${post.title}</h3>

          <p>${post.description}</p>

          <a href="/pages/blog/blog.html" class="read-more">
            Read More →
          </a>

        </div>

      </div>
    `;

    container.innerHTML += card;

  });

});