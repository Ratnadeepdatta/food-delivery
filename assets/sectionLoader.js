

window.loadSection = function (containerId, htmlPath, cssPath, jsPath) {
  const container = document.getElementById(containerId);

  if (!container) {
    console.warn(`Container not found: ${containerId}`);
    return;
  }

  fetch(htmlPath)
    .then(res => {
      if (!res.ok) throw new Error(`Failed to load ${htmlPath}`);
      return res.text();
    })
    .then(html => {
      container.innerHTML = html;

      // ---------- CSS ----------
      if (cssPath && !document.querySelector(`link[href="${cssPath}"]`)) {
        const link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = cssPath;
        document.head.appendChild(link);
      }

      // ---------- JS ----------
      if (jsPath && !document.querySelector(`script[src="${jsPath}"]`)) {
        const script = document.createElement("script");
        script.src = jsPath;
        script.defer = true;
        document.body.appendChild(script);
      }
    })
    .catch(err => console.error(err));
};

document.addEventListener("DOMContentLoaded", () =>{

    loadSection("header-container",
    "components/header/header.html",
    "components/header/header.css",
    "components/header/header.js",
    ) 
    loadSection("footer",
    "components/footer/footer.html",
    "components/footer/footer.css",
    "components/footer/footer.js",
    )

     loadSection("hero",
    "pages/home/hero/hero.html",
    "pages/home/hero/hero.css",
    "pages/home/hero/hero.js",
    )

     loadSection("menu-container",
    "pages/home/menu/menu.html",
    "pages/home/menu/menu.css",
    "pages/home/menu/menu.js",
    )
    
    loadSection("services-container",
      "pages/home/services/services.html",
      "pages/home/services/services.css",
      "pages/home/services/services.js",
    )
}) 
