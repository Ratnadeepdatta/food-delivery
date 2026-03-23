function loadHeroCSS (){
    if (document.getElementById("hero-style")) return;

    const style = document.createElement("style");
    style.id = "hero-style";

    style.innerHTML=`
    
.hero {
  min-height: 100vh;
  background-image: url("./assets/images/hero-bg.webp");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  justify-content: center;
}

.hero-container {
  padding: 120px 20px 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 40px;
}

.hero-text {
  flex: 1;
  display: flex;
  flex-direction:column;
  gap: 20px;
}

.hero-text h1 {
  font-size: 72px;
  color: var(--hero-title);
}

.hero-desc {
  font-size: 15px;
  color: var(--hero-p);
  line-height: 1.6;
  padding-right: 130px;
}

.hero-btn {
  padding: 12px 30px;
  background: var(--btn-bg);
  color: var(--white);
  border: none;
  border-radius: 18px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: 0.3s;
  align-self: self-start;
}

.hero-btn:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 25px rgba(255, 204, 0, 0.4);

}

.hero-image {
  flex: 1;
  text-align: right;
}

.hero-image img {
  max-width: 80%;
  height: auto;
  border-radius: 20px;
}

@media (max-width: 768px) {
  .hero-container {
    flex-direction: column;
    text-align: center;
    gap: 20px;
  }
.hero-text{
  order: 2;
  text-align: left;
}
  .hero-text h1 {
    font-size: 32px;
  }
.hero-desc {
  padding-right: 0;
}
  .hero-image {
    text-align: left;
    order: 1;
  }
}
     `;
     document.head.appendChild(style);
}





function loadHeroSection() {
  const container = document.getElementById("hero-container");

  if (!container) return;

  container.innerHTML = `
    <section class="hero">
      <div class="container hero-container">

        <div class="hero-text">
          <h1>Supper delicious <br> Burger in town!</h1>
          <p class="hero-desc">
            Enjoy our super delicious burger made with juicy grilled patty...
          </p>
          <button class="hero-btn">Explore Menu</button>
        </div>

        <div class="hero-image">
          <img src="./assets/images/hero-img.webp" alt="Hero Image">
        </div>

      </div>
    </section>
  `;
  
loadHeroCSS();
}

document.addEventListener("DOMContentLoaded", loadHeroSection);