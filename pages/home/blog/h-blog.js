


// Function to show only 10 words

function getShortText(text, wordLimit = 10) {

  if (!text) return "";

  const words = text.split(" ");

  if (words.length > wordLimit) {
    return words.slice(0, wordLimit).join(" ") + "...";
  }

  return text;

}

// Get containers

const homeBlogSection = document.getElementById("home-blog-section");
const container = document.getElementById("homeBlogContainer");


// Create section title

const homeBlogTitle = document.createElement("h2");
homeBlogTitle.innerHTML = 'Discover <span class="highlight-text">New Recipes </span>';
homeBlogTitle.classList.add("title-home-bsection");

homeBlogSection.insertBefore(homeBlogTitle, container);


// Make sure blogPosts exists

if (container && typeof blogPosts !== "undefined") {

  const latestPosts = [...blogPosts]
    .sort((a, b) => b.id - a.id)
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

          <p class="blog-desc">
            <span class="short-text">${getShortText(post.description, 10)}</span>
            <span class="full-text">${post.description}</span>
          </p>

          <button class="read-more-btn">
            Read More →
          </button>

        </div>

      </div>
    `;

  });

  // Insert cards
  container.innerHTML = html;


// Create View More button
const viewMoreBtn = document.createElement("a");

viewMoreBtn.textContent = "View More Articles";
viewMoreBtn.href = "/pages/blog/blog.html";
viewMoreBtn.classList.add("view-more-btn");

homeBlogSection.appendChild(viewMoreBtn);


  // Accordion toggle

  const readBtns = document.querySelectorAll(".read-more-btn");

  readBtns.forEach(btn => {

    btn.addEventListener("click", function(){

      const desc = this.previousElementSibling;

      desc.classList.toggle("active");

      if(desc.classList.contains("active")){
        this.textContent = "Read Less ↑";
      }else{
        this.textContent = "Read More →";
      }

    });

  });

}

