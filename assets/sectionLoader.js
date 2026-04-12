
  //========================== New update Code ====================================


window.loadSection = function (containerId, htmlPath, cssPath, jsPath) {
  const container = document.getElementById(containerId);

  if (!container) {
    console.warn(`Container not found: ${containerId}`);
    return;
  }

  // ✅ Load HTML (optional)
  if (htmlPath) {
    container.innerHTML = "Loading...";

    fetch(htmlPath)
      .then(res => {
        if (!res.ok) throw new Error(`Failed to load ${htmlPath}`);
        return res.text();
      })
      .then(html => {
        container.innerHTML = html;
      })
      .catch(err => console.error(err));
  }

  // ✅ Load CSS
  if (cssPath && !document.querySelector(`link[href="${cssPath}"]`)) {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = cssPath;
    document.head.appendChild(link);
  }

  // ✅ Load JS
  if (jsPath && !document.querySelector(`script[src="${jsPath}"]`)) {
    const script = document.createElement("script");
    script.src = jsPath;
    script.defer = true;

    script.onload = () => {
      // Call section init if exists
      if (typeof window.initMenu === "function") {
        window.initMenu();
      }
      if (typeof window.initAbout === "function") {
        window.initAbout();
      }
    };

    document.body.appendChild(script);
  }
};



  document.addEventListener("DOMContentLoaded", () =>{


      loadSection("footer",
      "components/footer/footer.html",
      "components/footer/footer.css",
      "components/footer/footer.js",
      )
      loadSection("menu-container",
         null,
      "pages/home/menu/hmenu.css",
      "pages/home/menu/hmenu.js",
      )
      
      loadSection("about-container",
        null,
          // "pages/home/about/habout.html",
        "pages/home/about/habout.css",
        "pages/home/about/habout.js",
      ) 
      loadSection("shop-container",
        "pages/home/shop/shop.html",
        "pages/home/shop/shop.css",
        "pages/home/shop/shop.js",
      )
      loadSection("right-container",
        "pages/home/right/right.html",
        "pages/home/right/right.css",
        "pages/home/right/right.js",
      )

      loadSection("testimonial-container",
        "pages/home/testimonial/testimonial.html",
        "pages/home/testimonial/testimonial.css",
        "pages/home/testimonial/testimonial.js",
      )

  loadSection(
    "homeBlogSection",
    "/pages/home/blog/h-blog.html",
    "/pages/home/blog/h-blog.css",
    "/pages/home/blog/h-blog.js"
  );

  loadSection(
    "h-contact",
    "/pages/home/contact/contact.html",
    "/pages/home/contact/contact.css",
    "/pages/home/contact/contact.js"
  );

  }); 

  //========================== Old Code ====================================

  // window.loadSection = function (containerId, htmlPath, cssPath, jsPath) {
  //   const container = document.getElementById(containerId);

  //   if (!container) {
  //     console.warn(`Container not found: ${containerId}`);
  //     return;
  //   }

  //   container.innerHTML = "Loading...";

  //   fetch(htmlPath)
  //     .then(res => {
  //       if (!res.ok) throw new Error(`Failed to load ${htmlPath}`);
  //       return res.text();
  //     })
  //     .then(html => {
  //       container.innerHTML = html;

  //       // CSS
  //       if (cssPath && !document.querySelector(`link[href="${cssPath}"]`)) {
  //         const link = document.createElement("link");
  //         link.rel = "stylesheet";
  //         link.href = cssPath;
  //         document.head.appendChild(link);
  //       }

  //       // JS
  //       if (jsPath && !document.querySelector(`script[src="${jsPath}"]`)) {
  //         const script = document.createElement("script");
  //         script.src = jsPath;


  //         document.body.appendChild(script);
  //               script.onload = () => {
  //   if (typeof initMenu === "function") {
  //     initMenu();
  //   }
  // };
  //       }
  //     })
  //     .catch(err => console.error(err));
  // };

  // document.addEventListener("DOMContentLoaded", () =>{


  //     loadSection("footer",
  //     "components/footer/footer.html",
  //     "components/footer/footer.css",
  //     "components/footer/footer.js",
  //     )
  //     loadSection("menu-container",
  //     "pages/home/menu/menu.html",
  //     "pages/home/menu/menu.css",
  //     "pages/home/menu/menu.js",
  //     )
      
  //     loadSection("about-container",
  //         "pages/home/about/about.html",
  //       "pages/home/about/about.css",
  //       "pages/home/about/about.js",
  //     ) 
  //     loadSection("shop-container",
  //       "pages/home/shop/shop.html",
  //       "pages/home/shop/shop.css",
  //       "pages/home/shop/shop.js",
  //     )
  //     loadSection("right-container",
  //       "pages/home/right/right.html",
  //       "pages/home/right/right.css",
  //       "pages/home/right/right.js",
  //     )

  //     loadSection("testimonial-container",
  //       "pages/home/testimonial/testimonial.html",
  //       "pages/home/testimonial/testimonial.css",
  //       "pages/home/testimonial/testimonial.js",
  //     )

  // loadSection(
  //   "homeBlogSection",
  //   "/pages/home/blog/h-blog.html",
  //   "/pages/home/blog/h-blog.css",
  //   "/pages/home/blog/h-blog.js"
  // );

  // loadSection(
  //   "h-contact",
  //   "/pages/home/contact/contact.html",
  //   "/pages/home/contact/contact.css",
  //   "/pages/home/contact/contact.js"
  // );

  // }); 
