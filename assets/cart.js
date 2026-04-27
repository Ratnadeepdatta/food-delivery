let cart = JSON.parse(localStorage.getItem("cart")) || [];

document.addEventListener("click", function(e) {

  const button = e.target.closest(".add-cart");
  if (!button) return;

  const card = button.closest(".food-card, .shop-card");

  const name = card.dataset.name;
  const price = parseFloat(card.dataset.price);
  const img = card.dataset.img;

  const existing = cart.find(item => item.name === name);

  if (existing) {
    existing.qty++;
  } else {
    cart.push({
      name,
      price,
      img,
      qty: 1
    });
  }

  localStorage.setItem("cart", JSON.stringify(cart));

  loadCartUI();
});

function loadCartUI() {
  const cartCount = document.getElementById("cart-count");
  const cartItems = document.getElementById("cart-items");
  const cartTotal = document.getElementById("cart-total");

  if (!cartItems) return;

  cartItems.innerHTML = "";

  let total = 0;
  let count = 0;

  cart.forEach((item, index) => {
    total += item.price * item.qty;
    count += item.qty;

    cartItems.innerHTML += `
      <div class="cart-item">
        <img src="${item.img}">
        <div>
          <p>${item.name}</p>
          <p>₹ ${item.price}</p>
        </div>
        <div class="popup-btn">
          <button onclick="changeQty(${index},-1)">-</button>
          ${item.qty}
          <button onclick="changeQty(${index},1)">+</button>
        </div>
      </div>
    `;
  });

  if (cartCount) cartCount.innerText = count;
  if (cartTotal) cartTotal.innerText = total;
}

function changeQty(index, change) {
  cart[index].qty += change;

  if (cart[index].qty <= 0) {
    cart.splice(index, 1);
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  loadCartUI();
}