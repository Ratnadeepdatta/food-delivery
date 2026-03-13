
// // This is for 1st section 

// const blogdiv = document.getElementById("blog-commondiv");

// const blogSubTitle = document.createElement("h1");
// blogSubTitle.textContent = "Recent Post";
// blogSubTitle.classList.add("blog-sub-title-h1")

// const blogMainTitle = document.createElement("h2");
// blogMainTitle.textContent = "Book of Recipes and Cooking Tips!"
// blogMainTitle.classList.add("blog-main-title-h2")

// blogdiv.appendChild(blogSubTitle);
// blogdiv.appendChild(blogMainTitle);

// // This is for 2nd Right section 

// const blogRight = document.getElementById("blogArticle");
// const blogArticleTitle = document.createElement("h2");
// blogArticleTitle.textContent = "Select a Blog to read";
// blogArticleTitle.classList.add("blog-article-h2");

// const blogRightP = document.createElement("p");
// blogRightP.textContent = "Click any blog card to see full article here.";
// blogRightP.classList.add("blog-right-p");


// blogRight.appendChild(blogArticleTitle);
// blogRight.appendChild(blogRightP);

// // This is for Grid card

// const blogGrid = document.getElementById("blogGrid");

// function loadBlogs() {

//     let html = "";

//     blogPosts.forEach(post => {

//         html += `

//     <div class="blog-card">
// <a href="${post.link}" class="blog-card-link">
//       <div class="blog-image">
//         <img src="${post.image}" alt="${post.title}">
//         <span class="category">${post.category}</span>
//       </div>

//       <div class="blog-content">

//         <div class="blog-meta">
//           <span>${post.date}</span>
//           <span>By ${post.author}</span>
//         </div>

//         <h3>${post.title}</h3>

//         <p>${post.description}</p>


//         <a href="${post.link}" class="read-more">
//         <span class="read-more">
//         READ MORE → </span>
//         </a>

//       </div>

//     </div>

//     `;

//     });

//     blogGrid.innerHTML = html;

// }

// function getShortText(text, wordLimit = 10) {
//   return text.split(" ").slice(0, wordLimit).join(" ") + "...";
// }

// loadBlogs();



// This is for 1st section 

const blogdiv = document.getElementById("blog-commondiv");

const blogSubTitle = document.createElement("h1");
blogSubTitle.textContent = "Recent Post";
blogSubTitle.classList.add("blog-sub-title-h1");

const blogMainTitle = document.createElement("h2");
blogMainTitle.textContent = "Book of Recipes and Cooking Tips!";
blogMainTitle.classList.add("blog-main-title-h2");

blogdiv.appendChild(blogSubTitle);
blogdiv.appendChild(blogMainTitle);


// This is for 2nd Right section 

// Right side default message

const blogRight = document.getElementById("blogArticle");

const blogArticleTitle = document.createElement("h2");
blogArticleTitle.textContent = "Select a Blog to read";
blogArticleTitle.classList.add("blog-article-h2");

const blogRightP = document.createElement("p");
blogRightP.textContent = "Click any blog card to see full article here.";
blogRightP.classList.add("blog-right-p");

blogRight.appendChild(blogArticleTitle);
blogRight.appendChild(blogRightP);


// Grid container

const blogGrid = document.getElementById("blogGrid");


// Function → show only 10 words

function getShortText(text, wordLimit = 10) {

  const words = text.trim().split(/\s+/);

  if (words.length > wordLimit) {
    return words.slice(0, wordLimit).join(" ") + "...";
  }

  return text;
}


// Load blog cards

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

        <p>${getShortText(post.description)}</p>

        <button class="read-more-btn" data-id="${post.id}">
        READ MORE →
        </button>

      </div>

    </div>

    `;

  });

  blogGrid.innerHTML = html;

  // Add click event after cards are created

  const readMoreBtns = document.querySelectorAll(".read-more-btn");

  readMoreBtns.forEach(btn => {

    btn.addEventListener("click", function () {

      const postId = this.getAttribute("data-id");

      const selectedPost = blogPosts.find(post => post.id == postId);

      blogRight.innerHTML = `
      
      <h2 class="blog-article-h2">${selectedPost.title}</h2>

      <img src="${selectedPost.image}" style="width:100%; margin:15px 0;">

      <div class="blog-meta">
        <span>${selectedPost.date}</span>
        <span>By ${selectedPost.author}</span>
      </div>

      <p>${selectedPost.description}</p>

      `;

    });

  });

}


// Run function

loadBlogs();

