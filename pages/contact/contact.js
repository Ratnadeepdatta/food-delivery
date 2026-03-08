        // hero section

        const contactHero = document.getElementById("contact-hero-section");

        const contactSubTitle = document.createElement("h1");
        contactSubTitle.textContent = "Get in Tuch";
        contactSubTitle.classList.add("contact-subtitle-h1");

        const contactTitle = document.createElement("h2");
        contactTitle.textContent = "Contact Us";
        contactTitle.classList.add("contact-maintitle");

        contactHero.appendChild(contactSubTitle);
        contactHero.appendChild(contactTitle);

        // 2nd section 

        const cntSection = document.getElementById("cnt-2nd-section");

        const imgDiv = document.createElement("div")
        imgDiv.classList.add("cnt-img-div")

        const img = document.createElement("img")
        img.src = "../../../assets/images/contact-img01.webp"

        imgDiv.appendChild(img);

        cntSection.appendChild(imgDiv)


        const contentDiv = document.createElement("div");
        contentDiv.classList.add("cnt-2nd-content");

        const title = document.createElement("h2");
        title.innerHTML = `A Moments Of Delivered <br>
        On <span>Right Time</span> & Place`;

        contentDiv.appendChild(title);
        cntSection.appendChild(contentDiv);

        const desc = document.createElement("p");
        desc.textContent = "Experience reliable and timely food delivery with quality service, ensuring every order reaches you fresh, delicious, and right on schedule.";

    contentDiv.appendChild(desc);
    cntSection.appendChild(contentDiv);

    const btnWrapper = document.createElement("div");
    btnWrapper.classList.add("cnt-section-btn");

    const orderBtn = document.createElement("a");
    orderBtn.classList.add("order-btn");
    orderBtn.href= "#";
    orderBtn.textContent = "Order Now"

    btnWrapper.appendChild(orderBtn)
    contentDiv.appendChild(btnWrapper)

    const phoneDiv = document.createElement("div");
    phoneDiv.classList.add("phone-div");

    const phone = document.createElement("h3")
    phone.classList.add("phone-cont");
    phone.textContent = "0123456789"

    phoneDiv.appendChild(phone);
    btnWrapper.appendChild(phoneDiv)

const phoneIcon = document.createElement("img");
phoneIcon.src = "../../../assets/icons/m-phone.svg";
phoneIcon.classList.add("ctn-phone-icon");

phoneDiv.appendChild(phoneIcon);




