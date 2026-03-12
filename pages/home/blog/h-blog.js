


const homeBlogSection = document.getElementById("home-blog-section");
const container = document.getElementById("homeBlogContainer");

// 1️ Create Title
const homeBlogTitle = document.createElement("h2");
homeBlogTitle.textContent = "Discover New Recipes & Cooking Secrets";
homeBlogTitle.classList.add("title-home-bsection");

// place title before grid
homeBlogSection.insertBefore(homeBlogTitle, container);


if (container && typeof blogPosts !== "undefined") {

  const latestPosts = blogPosts
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 4);

  let html = "";

  latestPosts.forEach(post => {

    html += `
      <div class="blog-card">

        <div class="blog-image">
          <img src="${post.image}" alt="${post.title}">
        </div>

        <div class="blog-content">
          <h3>${post.title}</h3>
          <p>${post.description}</p>

          <a href="${post.link}" class="read-more">
            Read More →
          </a>

        </div>

      </div>
    `;

  });

  // 2️ Insert Blog Cards
  container.innerHTML = html;

  // 3️ Create Read More Button
  const moreBtn = document.createElement("a");
  moreBtn.textContent = "Read More";
  moreBtn.href = "/pages/blog/blog.html";
  moreBtn.classList.add("blog-more-btn");

  // place button AFTER grid
  homeBlogSection.appendChild(moreBtn);
}