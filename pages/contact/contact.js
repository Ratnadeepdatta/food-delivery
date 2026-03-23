(function () {
    emailjs.init("UPW7Zf5j4uyzbq7mk");
})();


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

const style = document.createElement("style");

style.textContent = `

.contact-div{
  padding: 100px 20px 20px ;
  background-image: url("../../../assets/images/hero-bg02.webp");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  height: 45vh;
  display: flex;
  align-items: center;
  text-align: center;
}

.contact-subtitle-h1{
  font-size: 18px;
  color: var(--btn-bg);
  margin-bottom: 10px;
}

.contact-maintitle{
  font-size: 41px;
  color: var(--hero-title);
}
/* 2nd section */
.contact2nddiv{

    background:var(--white);
}
.cnt-2nd-section{
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 50px;
    max-width: 1200px;
}

.cnt-img-div{
    flex: 1;
}

.cnt-img-div img{
    width: 100%;
    height: auto;
    display: block;
    margin-top: -50px;
}

.cnt-2nd-content{
    flex: 1;
}

.cnt-2nd-content h2{
    font-size: 36px;
    font-weight: 700;
    margin-bottom: 20px;
    line-height: 1.3;
}

.cnt-2nd-content span{
    color: var(--btn-bg);
}

.cnt-2nd-content p{
    font-size: 16px;
    color: var(--description);
    margin-bottom: 30px;
    line-height: 1.6;
}

.cnt-section-btn{
    display: flex;
    align-items: center;
    gap: 20px;
}

.order-btn{
    display: inline-block;
    padding: 12px 30px;
    background: var(--btn-bg);
    color: var(--white);
    text-decoration: none;
    font-weight: 600;
    border-radius: 18px;
    transition: 0.3s;
}

.order-btn:hover{
    transform: translateY(-4px);
    box-shadow: 0 10px 25px rgba(255, 204, 0, 0.4);
}

.phone-div{
    display: flex;
    align-items: center;
    gap: 10px;
}

.phone-cont{
    font-size: 30px;
    font-weight: 600;
    color: var(--btn-bg);
}

.ctn-phone-icon{
    width: 30px;
    height: 30px;
}

 #third-section{
        background:#f6f6f6;
        }

        #third-main-div{
        padding:60px 30px;
        display:flex;
        gap:40px;
        }

        .contact-form{
        width:30%
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 20px;
        box-shadow: 0px 0px 5px rgba(0,0,0,0.2);
        padding: 30px;
        border-radius:8px;
        }

        .contact-form h2{
        padding-left:4px;
        margin-bottom: 10px;

        }

        form{
        width:70;
        align-self:center;

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
        background:var(--btn-bg);
        color:white;
        padding:12px 30px;
        border:none;
        border-radius:18px;
        cursor:pointer;
        font-size:16px;
        display:block;
        margin-left:0;
        transition: 0.3s;
        }
         
        .submit-btn:hover{
         transform: translateY(-4px);
         box-shadow: 0 10px 25px rgba(255, 204, 0, 0.4);
        }
        .map-area{
        width: 100%;
        }

        .map-area iframe{
        width:100%;
        height:450px;
        border:0;
        border-radius:8px;

        }


@media (max-width: 768px){

    .cnt-2nd-section{
        flex-direction: column;
        text-align: center;
    }
.cnt-2nd-content h2{
    font-size: 30px;
}

    .cnt-section-btn{
        justify-content: center;
        flex-wrap: wrap;
    }
         #third-main-div{
        flex-direction: column;
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
formTitle.textContent = "Get in Touch";

const form = document.createElement("form");

const nameInput = document.createElement("input");
nameInput.type = "text";
nameInput.placeholder = "Your Name";


const phoneInput = document.createElement("input");
phoneInput.type = "tel";
phoneInput.placeholder = "Phone";

const emailInput = document.createElement("input");
emailInput.type = "email";
emailInput.placeholder = "Email";

const message = document.createElement("textarea");
message.placeholder = "Your Message";

const submitBtn = document.createElement("button")
submitBtn.textContent = "Submit";
submitBtn.classList.add("submit-btn")


form.appendChild(nameInput);
form.appendChild(phoneInput);
form.appendChild(emailInput);
form.appendChild(message);
form.appendChild(submitBtn);

formDiv.appendChild(formTitle);
formDiv.appendChild(form);

//  right map div

const mapDiv = document.createElement("div");
mapDiv.classList.add("map-area");

const map = document.createElement("iframe");
map.src = "https://www.google.com/maps?q=bangalore&output=embed";
map.loading = "lazy";

mapDiv.appendChild(map);


thirdSection.appendChild(formDiv);
thirdSection.appendChild(mapDiv);

//  for form email code..............
form.addEventListener("submit", function (e) {

    e.preventDefault();

    /* mandatory fields */

    if (nameInput.value === "" ||
        phoneInput.value === "" ||
        emailInput.value === "" ||
        message.value === "") {
        alert("Please fill out the required fields.");
        return;
    }

    /* collect form data */

    const params = {
        name: nameInput.value,
        phone: phoneInput.value,
        email: emailInput.value,
        message: message.value
    };

    /* send email */

    emailjs.send("service_dvr13am", "template_gz83jp2", params)

        .then(function () {

            alert("Message sent successfully!");

            form.reset();

        }, function (error) {

            alert("Failed to send message");

        });

});