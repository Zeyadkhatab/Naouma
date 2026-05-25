// ===== Checkout Page Logic =====

document.addEventListener('DOMContentLoaded', function() {
  var order = JSON.parse(localStorage.getItem('naouma_order') || '[]');

  if (order.length === 0) {
    showEmptyState();
    return;
  }

  renderOrderSummary(order);
  setupFormSubmission(order);
});

function showEmptyState() {
  var container = document.querySelector('.checkout-container');
  container.innerHTML =
    '<div class="checkout-empty">' +
      '<span class="empty-icon">🛍️</span>' +
      '<h2>Your order is empty</h2>' +
      '<p>Looks like you haven\'t selected any products yet. Head back to our collection and find something you love!</p>' +
      '<a href="index.html" class="success-btn">🌹 Browse Products</a>' +
    '</div>';
}

function renderOrderSummary(order) {
  var itemsContainer = document.getElementById('order-items');
  var totalPrice = 0;

  var html = '';
  for (var i = 0; i < order.length; i++) {
    var item = order[i];
    var lineTotal = item.price * item.qty;
    totalPrice += lineTotal;

    html += '<div class="order-item">';
    html += '<div class="order-item-img"><img src="' + item.img + '" alt="' + item.name + '"></div>';
    html += '<div class="order-item-info">';
    html += '<div class="order-item-name">' + item.name + '</div>';
    html += '<div class="order-item-qty">Qty: ' + item.qty + '</div>';
    html += '</div>';
    html += '<div class="order-item-price">' + lineTotal + ' EGP</div>';
    html += '</div>';
  }

  itemsContainer.innerHTML = html;
  document.getElementById('subtotal-price').textContent = totalPrice + ' EGP';
  document.getElementById('total-price').textContent = totalPrice + ' EGP';
}

function setupFormSubmission(order) {
  var form = document.getElementById('checkout-form');

  form.addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent default form submission

    var btn = document.getElementById('pay-btn');
    btn.classList.add('loading');
    btn.disabled = true;

    // Collect form data
    var name = document.getElementById('full-name').value.trim();
    var email = document.getElementById('email').value.trim();
    var phone = document.getElementById('phone').value.trim();
    var governorate = document.getElementById('governorate').value;
    var city = document.getElementById('city').value.trim();
    var address = document.getElementById('address').value.trim();

    // Calculate total
    var totalPrice = 0;
    var items = [];
    for (var i = 0; i < order.length; i++) {
      var lineTotal = order[i].price * order[i].qty;
      totalPrice += lineTotal;
      items.push({
        name: order[i].name,
        price: order[i].price,
        qty: order[i].qty
      });
    }

    // Build request payload
    var payload = {
      name: name,
      email: email,
      phone: phone,
      governorate: governorate,
      city: city,
      address: address,
      items: items,
      total: totalPrice
    };

    // Send to our Node.js backend
    fetch('/api/order', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    })
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      if (data.success) {
        // Clear the cart
        localStorage.removeItem('naouma_order');
        localStorage.removeItem('naouma_cart');

        // Show success overlay
        document.getElementById('success-overlay').classList.add('show');
      } else {
        throw new Error(data.message || 'Something went wrong');
      }
    })
    .catch(function(error) {
      console.error('Order error:', error);
      alert('⚠️ Failed to place order: ' + error.message + '\nPlease try again.');
    })
    .finally(function() {
      btn.classList.remove('loading');
      btn.disabled = false;
    });
  });
}
