// ===== Checkout Page Logic =====

// ── Turbo Shipping Rates (from Alexandria & Qalyubia) ──
// Based on Turbo delivery pricing table — max 2kg per shipment
var SHIPPING_ZONES = {
  // القاهرة والجيزة — Cairo & Giza: 90 EGP
  'Cairo':       { fee: 90, zone: 'Cairo & Giza' },
  'Giza':        { fee: 90, zone: 'Cairo & Giza' },

  // أطراف القاهرة والجيزة — Cairo & Giza outskirts: 112 EGP
  // (6th of October, 1st/3rd/5th Settlement, Hawamdeya, Badrashein,
  //  Ayat, Saff, Kerdasa, Ossim, Abu Nomros, Manashi, Rehab, Shorouk,
  //  Madinaty, Obour, Sheikh Zayed, Madinat El Salam, Badr)
  // These are sub-areas, but governorate-level is Cairo/Giza already matched above.
  // We treat the whole governorate at the base rate; city-level distinction can be added later.

  // الإسكندرية والقليوبية — Alexandria & Qalyubia: 90 EGP
  'Alexandria':  { fee: 90, zone: 'Alexandria & Qalyubia' },
  'Qaliubiya':   { fee: 90, zone: 'Alexandria & Qalyubia' },

  // دلتا وبحري — Delta & Bahary: 112 EGP
  'Dakahlia':        { fee: 112, zone: 'Delta & Bahary' },
  'Beheira':         { fee: 112, zone: 'Delta & Bahary' },
  'Gharbia':         { fee: 112, zone: 'Delta & Bahary' },
  'Menofia':         { fee: 112, zone: 'Delta & Bahary' },
  'Sharkia':         { fee: 112, zone: 'Delta & Bahary' },
  'Kafr el-Sheikh':  { fee: 112, zone: 'Delta & Bahary' },
  'Damietta':        { fee: 112, zone: 'Delta & Bahary' },

  // مدن القناة — Canal Cities: 118 EGP
  'Suez':        { fee: 118, zone: 'Canal Cities' },
  'Ismailia':    { fee: 118, zone: 'Canal Cities' },
  'Port Said':   { fee: 118, zone: 'Canal Cities' },

  // شمال الصعيد — North Upper Egypt: 146 EGP
  'Fayoum':      { fee: 146, zone: 'North Upper Egypt' },
  'Beni Suef':   { fee: 146, zone: 'North Upper Egypt' },
  'Minya':       { fee: 146, zone: 'North Upper Egypt' },

  // جنوب الصعيد — South Upper Egypt: 157 EGP
  'Assiut':      { fee: 157, zone: 'South Upper Egypt' },
  'Sohag':       { fee: 157, zone: 'South Upper Egypt' },
  'Qena':        { fee: 157, zone: 'South Upper Egypt' },
  'Luxor':       { fee: 157, zone: 'South Upper Egypt' },
  'Aswan':       { fee: 157, zone: 'South Upper Egypt' },

  // محافظات حدودية — Border Governorates: 224 EGP
  'Red Sea':       { fee: 224, zone: 'Border Governorates' },
  'Matrouh':       { fee: 224, zone: 'Border Governorates' },
  'New Valley':    { fee: 224, zone: 'Border Governorates' },
  'North Sinai':   { fee: 224, zone: 'Border Governorates' },
  'South Sinai':   { fee: 224, zone: 'Border Governorates' }
};

function getShippingFee(governorate) {
  var info = SHIPPING_ZONES[governorate];
  return info ? info.fee : 0;
}

function getShippingZone(governorate) {
  var info = SHIPPING_ZONES[governorate];
  return info ? info.zone : '';
}

document.addEventListener('DOMContentLoaded', function() {
  var order = JSON.parse(localStorage.getItem('naouma_order') || '[]');

  if (order.length === 0) {
    showEmptyState();
    return;
  }

  renderOrderSummary(order);
  setupShippingListener(order);
  setupFormSubmission(order);
});

function showEmptyState() {
  var container = document.querySelector('.checkout-container');
  var tEmptyTitle = typeof t === "function" ? t("checkout_empty_title") : "Your order is empty";
  var tEmptyMsg = typeof t === "function" ? t("checkout_empty_msg") : "Looks like you haven't selected any products yet. Head back to our collection and find something you love!";
  var tEmptyBtn = typeof t === "function" ? t("checkout_empty_btn") : "🌹 Browse Products";
  container.innerHTML =
    '<div class="checkout-empty">' +
      '<span class="empty-icon">🛍️</span>' +
      '<h2>' + tEmptyTitle + '</h2>' +
      '<p>' + tEmptyMsg + '</p>' +
      '<a href="index.html" class="success-btn">' + tEmptyBtn + '</a>' +
    '</div>';
}

function renderOrderSummary(order) {
  var itemsContainer = document.getElementById('order-items');
  var subtotal = 0;

  var html = '';
  for (var i = 0; i < order.length; i++) {
    var item = order[i];
    var lineTotal = item.price * item.qty;
    subtotal += lineTotal;

    html += '<div class="order-item">';
    html += '<div class="order-item-img"><img src="' + item.img + '" alt="' + item.name + '"></div>';
    html += '<div class="order-item-info">';
    html += '<div class="order-item-name">' + item.name + '</div>';
    var tQty = typeof t === "function" ? t("checkout_qty") : "Qty";
    html += '<div class="order-item-qty">' + tQty + ': ' + item.qty + '</div>';
    html += '</div>';
    html += '<div class="order-item-price">' + lineTotal + ' EGP</div>';
    html += '</div>';
  }

  itemsContainer.innerHTML = html;
  document.getElementById('subtotal-price').textContent = subtotal + ' EGP';

  // Initially show shipping as "Select governorate"
  updateShippingDisplay(0, false);
}

function updateShippingDisplay(shippingFee, governorateSelected) {
  var shippingEl = document.getElementById('shipping-price');
  var shippingZoneEl = document.getElementById('shipping-zone-name');
  var subtotalText = document.getElementById('subtotal-price').textContent;
  var subtotal = parseInt(subtotalText);

  if (!governorateSelected) {
    shippingEl.textContent = '—';
    shippingEl.style.color = 'var(--mid)';
    shippingEl.style.fontWeight = '500';
    if (shippingZoneEl) shippingZoneEl.textContent = 'Select a governorate to see shipping';
    document.getElementById('total-price').textContent = subtotal + ' EGP';
  } else {
    shippingEl.textContent = shippingFee + ' EGP';
    shippingEl.style.color = 'var(--rose-dk)';
    shippingEl.style.fontWeight = '700';
    document.getElementById('total-price').textContent = (subtotal + shippingFee) + ' EGP';
  }
}

function setupShippingListener(order) {
  var govSelect = document.getElementById('governorate');

  govSelect.addEventListener('change', function() {
    var gov = govSelect.value;
    var fee = getShippingFee(gov);
    var zone = getShippingZone(gov);

    // Update zone display
    var shippingZoneEl = document.getElementById('shipping-zone-name');
    if (shippingZoneEl) {
      shippingZoneEl.textContent = zone ? '📍 ' + zone + ' zone' : '';
    }

    updateShippingDisplay(fee, true);
  });
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

    // Calculate subtotal
    var subtotal = 0;
    var items = [];
    for (var i = 0; i < order.length; i++) {
      var lineTotal = order[i].price * order[i].qty;
      subtotal += lineTotal;
      items.push({
        name: order[i].name,
        price: order[i].price,
        qty: order[i].qty
      });
    }

    // Get shipping fee
    var shippingFee = getShippingFee(governorate);
    var shippingZone = getShippingZone(governorate);
    var total = subtotal + shippingFee;

    // Build request payload
    var payload = {
      name: name,
      email: email,
      phone: phone,
      governorate: governorate,
      city: city,
      address: address,
      items: items,
      subtotal: subtotal,
      shipping: shippingFee,
      shippingZone: shippingZone,
      total: total
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
      var tFail = typeof t === "function" ? t("checkout_order_fail") : "⚠️ Failed to place order: ";
      alert(tFail + error.message + '\nPlease try again.');
    })
    .finally(function() {
      btn.classList.remove('loading');
      btn.disabled = false;
    });
  });
}
