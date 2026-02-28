document.addEventListener("DOMContentLoaded", () => {

  const base = "/";

  loadSection(
    "header-container",
    base + "components/header/header.html",
    base + "components/header/header.css",
    base + "components/header/header.js"
  );

  loadSection(
    "footer",
    base + "components/footer/footer.html",
    base + "components/footer/footer.css",
    base + "components/footer/footer.js"
  );

});


// document.addEventListener("DOMContentLoaded", () => {

//   const base = window.location.pathname.includes("/pages/") ? "../../" : "";

//   loadSection(
//     "header-container",
//     base + "components/header/header.html",
//     base + "components/header/header.css",
//     base + "components/header/header.js"
//   );

//   loadSection(
//     "footer",
//     base + "components/footer/footer.html",
//     base + "components/footer/footer.css",
//     base + "components/footer/footer.js"
//   );

// });