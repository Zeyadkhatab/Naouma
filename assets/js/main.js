// ===== Cart State =====
let cart = [];

function toggleCart() {
  document.getElementById('cart-overlay').classList.toggle('open');
  document.getElementById('cart-sidebar').classList.toggle('open');
}

function toggleMobileMenu() {
  const links = document.getElementById('nav-links');
  links.style.display = links.style.display === 'flex' ? 'none' : 'flex';
}

// Scroll nav shadow
window.addEventListener('scroll', () => {
  document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 30);
});

// Scroll reveal
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// Product filter
function filterProducts(cat, btn) {
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  document.querySelectorAll('.product-card').forEach(card => {
    const show = cat === 'all' || card.dataset.cat === cat;
    card.style.display = show ? '' : 'none';
  });
}

// Add to cart
function addToCart(name, price, img) {
  const existing = cart.find(item => item.name === name);
  if (existing) {
    existing.qty++;
  } else {
    cart.push({ name: name, price: price, img: img, qty: 1 });
  }
  renderCart();
  // Toast
  const toast = document.getElementById('toast');
  toast.textContent = '🛒 ' + name + ' added to cart!';
  toast.classList.add('show');
  setTimeout(function() { toast.classList.remove('show'); }, 2500);
  // Badge bump
  const badge = document.getElementById('cart-count');
  badge.classList.remove('bump');
  void badge.offsetWidth;
  badge.classList.add('bump');
}

function removeFromCart(name) {
  cart = cart.filter(function(item) { return item.name !== name; });
  renderCart();
}

function changeQty(name, delta) {
  for (var i = 0; i < cart.length; i++) {
    if (cart[i].name === name) {
      cart[i].qty += delta;
      if (cart[i].qty <= 0) {
        cart.splice(i, 1);
      }
      break;
    }
  }
  renderCart();
}

function renderCart() {
  // Update badge count
  var totalItems = 0;
  var totalPrice = 0;
  for (var i = 0; i < cart.length; i++) {
    totalItems += cart[i].qty;
    totalPrice += cart[i].price * cart[i].qty;
  }
  document.getElementById('cart-count').textContent = totalItems;

  var itemsEl = document.getElementById('cart-items');
  var footerEl = document.getElementById('cart-footer');

  if (cart.length === 0) {
    footerEl.style.display = 'none';
    itemsEl.innerHTML = '<div class="cart-empty"><span class="cart-empty-icon">🛍️</span>Your cart is empty.<br>Start adding your favorite Naouma products!</div>';
    return;
  }

  footerEl.style.display = '';
  document.getElementById('cart-total-price').textContent = totalPrice + ' EGP';

  var html = '';
  for (var i = 0; i < cart.length; i++) {
    var item = cart[i];
    var escapedName = item.name.replace(/'/g, "\\'");
    html += '<div class="cart-item">';
    html += '<div class="cart-item-img"><img src="' + item.img + '" alt="' + item.name + '"></div>';
    html += '<div class="cart-item-info">';
    html += '<div class="cart-item-name">' + item.name + '</div>';
    html += '<div class="cart-item-price">' + item.price + ' EGP</div>';
    html += '<div class="cart-item-controls">';
    html += '<button class="qty-btn" onclick="changeQty(\'' + escapedName + '\', -1)">&minus;</button>';
    html += '<span class="cart-item-qty">' + item.qty + '</span>';
    html += '<button class="qty-btn" onclick="changeQty(\'' + escapedName + '\', 1)">+</button>';
    html += '<button class="cart-item-remove" onclick="removeFromCart(\'' + escapedName + '\')">Remove</button>';
    html += '</div></div></div>';
  }
  itemsEl.innerHTML = html;
}

function checkout() {
  if (cart.length === 0) return;
  // Save cart items to localStorage for the checkout page
  localStorage.setItem('naouma_order', JSON.stringify(cart));
  window.location.href = 'checkout.html';
}

// Buy It Now — instant single-product checkout
function buyNow(name, price, img) {
  var order = [{ name: name, price: price, img: img, qty: 1 }];
  localStorage.setItem('naouma_order', JSON.stringify(order));
  window.location.href = 'checkout.html';
}

// Newsletter subscribe
function subscribe() {
  var email = document.getElementById('email-input').value;
  if (!email || email.indexOf('@') === -1) {
    alert('Please enter a valid email address.');
    return;
  }
  var toast = document.getElementById('toast');
  toast.textContent = '🌹 You\'re subscribed! Welcome to Naouma.';
  toast.classList.add('show');
  document.getElementById('email-input').value = '';
  setTimeout(function() { toast.classList.remove('show'); }, 3500);
}
