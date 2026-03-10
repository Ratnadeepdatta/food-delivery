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

    cntSection.appendChild(imgDiv);


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
    orderBtn.href = "#";
    orderBtn.textContent = "Order Now"

    btnWrapper.appendChild(orderBtn)
    contentDiv.appendChild(btnWrapper)

    const phoneDiv = document.createElement("div");
    phoneDiv.classList.add("phone-div");

    const phoneIcon = document.createElement("img");
    phoneIcon.src = "../../../assets/icons/m-phone.svg";
    phoneIcon.classList.add("ctn-phone-icon");

    phoneDiv.appendChild(phoneIcon);

    const phone = document.createElement("h3")
    phone.classList.add("phone-cont");
    phone.textContent = "8974287067"

    phoneDiv.appendChild(phone);
    btnWrapper.appendChild(phoneDiv)

    //  3rd section ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    const thirdSection = document.getElementById("third-main-div");

    /* CREATE STYLE (CSS inside JS) */

    const style = document.createElement("style");

    style.textContent = `
    // #third-main-div{
    // max-width:1200px;
    // margin:auto;
    // padding:60px 20px;
    // display:flex;
    // gap:40px;
    // font-family:Arial, sans-serif;
    // }

    .contact-form{
    flex:1;
    }

    .contact-form h2{
    margin-bottom:20px;
    }

    .contact-form input,
    .contact-form textarea{
    width:100%;
    padding:12px;
    margin-bottom:15px;
    border:1px solid #ccc;
    border-radius:5px;
    font-size:14px;
    }

    .contact-form textarea{
    height:120px;
    resize:none;
    }

    .submit-btn{
    background:#ff6a00;
    color:white;
    padding:12px 25px;
    border:none;
    border-radius:5px;
    cursor:pointer;
    font-size:16px;
    }

    .map-area{
    flex:1;
    }

    .map-area iframe{
    width:100%;
    height:350px;
    border:0;
    }

    /* RESPONSIVE */

    @media(max-width:768px){

    #contact-section{
    flex-direction:column;
    }

    .map-area iframe{
    height:300px;
    }

    }
    `;

    document.head.appendChild(style);

    /* LEFT SIDE FORM */

    const formDiv = document.createElement("div");
    formDiv.classList.add("contact-form");

    const formTitle = document.createElement("h2");
    formTitle.textContent = "Get in Touch" ;

    const mainForm = document.createElement("form");

    const nameInput = document.createElement("input");
    nameInput.type = "text";
    nameInput.placeholder = "Your Name";

    const mobileInput = document.createElement("input");
    mobileInput.type = "tel";
    mobileInput.placeholder = "Phone";

    const emailInput = document.createElement("input");
    emailInput.type = "email";
    emailInput.placeholder = "Email";

    const message = document.createElement("textarea");
    message.placeholder = "Your Message";

    const submitBtn = document.createElement("button")
    submitBtn.textContent = "Submit";
    submitBtn.classList.add("submit-btn")

