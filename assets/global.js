window.addEventListener("load", () => {
    document.body.classList.add("page-loaded");
});


document.addEventListener("DOMContentLoaded", () => {

    const links = document.querySelectorAll("a[href]");

    links.forEach(link => {

        link.addEventListener("click", function (e) {

            const href = this.getAttribute("href");

            // skip empty/external/javascript links
            if (
                !href ||
                href.startsWith("#") ||
                href.startsWith("javascript") ||
                href.startsWith("mailto") ||
                href.startsWith("tel")
            ) {
                return;
            }

            e.preventDefault();

            // smooth exit
            document.body.classList.add("page-exit");

            setTimeout(() => {
                document.body.classList.remove("page-exit");
                window.location.href = href;
            }, 250);

        });

    });

});

