const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');

const app = express();
const PORT = process.env.PORT || 3000;

// ── Middleware ──
app.use(cors());
app.use(express.json());

// ── Email transporter (Gmail) ──
// Using a Gmail App Password for authentication.
// You MUST generate an App Password from https://myaccount.google.com/apppasswords
// (requires 2-Step Verification to be enabled on the Gmail account).
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'ea137333@gmail.com',
    pass: process.env.GMAIL_APP_PASSWORD || 'YOUR_APP_PASSWORD_HERE'
  }
});

// ── Order endpoint ──
app.post('/api/order', async (req, res) => {
  try {
    const { name, email, phone, governorate, city, address, items, total } = req.body;

    // Validate required fields
    if (!name || !email || !phone || !governorate || !city || !address || !items || !total) {
      return res.status(400).json({ success: false, message: 'All fields are required.' });
    }

    // Build order items table
    let itemsHtml = '';
    let itemsText = '';
    for (const item of items) {
      const lineTotal = item.price * item.qty;
      itemsHtml += `
        <tr>
          <td style="padding:10px 15px; border-bottom:1px solid #f0e6e6;">${item.name}</td>
          <td style="padding:10px 15px; border-bottom:1px solid #f0e6e6; text-align:center;">${item.qty}</td>
          <td style="padding:10px 15px; border-bottom:1px solid #f0e6e6; text-align:right;">${lineTotal} EGP</td>
        </tr>`;
      itemsText += `• ${item.name} x${item.qty} — ${lineTotal} EGP\n`;
    }

    // ── Beautiful HTML email ──
    const htmlEmail = `
    <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width:600px; margin:0 auto; background:#fff;">
      
      <!-- Header -->
      <div style="background: linear-gradient(135deg, #8b5e5e, #c9a0a0); padding:30px; text-align:center; border-radius:12px 12px 0 0;">
        <h1 style="color:#fff; margin:0; font-size:28px;">🌹 New Naouma Order</h1>
        <p style="color:#f5e6e6; margin:8px 0 0; font-size:14px;">A customer just placed an order!</p>
      </div>
      
      <!-- Customer Info -->
      <div style="padding:25px 30px; background:#fdf8f8;">
        <h2 style="color:#8b5e5e; font-size:18px; margin:0 0 15px; border-bottom:2px solid #e8d5d5; padding-bottom:10px;">👤 Customer Information</h2>
        <table style="width:100%; font-size:14px; color:#555;">
          <tr><td style="padding:6px 0; font-weight:600; width:130px;">Name:</td><td>${name}</td></tr>
          <tr><td style="padding:6px 0; font-weight:600;">Email:</td><td><a href="mailto:${email}" style="color:#8b5e5e;">${email}</a></td></tr>
          <tr><td style="padding:6px 0; font-weight:600;">Phone:</td><td><a href="tel:${phone}" style="color:#8b5e5e;">${phone}</a></td></tr>
        </table>
      </div>
      
      <!-- Shipping Address -->
      <div style="padding:20px 30px; background:#fff;">
        <h2 style="color:#8b5e5e; font-size:18px; margin:0 0 15px; border-bottom:2px solid #e8d5d5; padding-bottom:10px;">📍 Shipping Address</h2>
        <table style="width:100%; font-size:14px; color:#555;">
          <tr><td style="padding:6px 0; font-weight:600; width:130px;">Governorate:</td><td>${governorate}</td></tr>
          <tr><td style="padding:6px 0; font-weight:600;">City:</td><td>${city}</td></tr>
          <tr><td style="padding:6px 0; font-weight:600;">Address:</td><td>${address}</td></tr>
        </table>
      </div>
      
      <!-- Order Items -->
      <div style="padding:20px 30px; background:#fdf8f8;">
        <h2 style="color:#8b5e5e; font-size:18px; margin:0 0 15px; border-bottom:2px solid #e8d5d5; padding-bottom:10px;">📦 Order Items</h2>
        <table style="width:100%; border-collapse:collapse; font-size:14px; color:#555;">
          <thead>
            <tr style="background:#f5e6e6;">
              <th style="padding:10px 15px; text-align:left; color:#8b5e5e;">Product</th>
              <th style="padding:10px 15px; text-align:center; color:#8b5e5e;">Qty</th>
              <th style="padding:10px 15px; text-align:right; color:#8b5e5e;">Price</th>
            </tr>
          </thead>
          <tbody>
            ${itemsHtml}
          </tbody>
        </table>
      </div>
      
      <!-- Total -->
      <div style="padding:20px 30px; background: linear-gradient(135deg, #8b5e5e, #c9a0a0); border-radius:0 0 12px 12px; text-align:center;">
        <p style="color:#f5e6e6; margin:0; font-size:14px;">Total Amount</p>
        <p style="color:#fff; margin:5px 0 0; font-size:32px; font-weight:700;">${total} EGP</p>
        <p style="color:#f5e6e6; margin:8px 0 0; font-size:12px;">Order placed on ${new Date().toLocaleString('en-EG', { timeZone: 'Africa/Cairo' })}</p>
      </div>
      
    </div>`;

    // ── Plain text fallback ──
    const textEmail = `
🌹 NEW NAOUMA ORDER
═══════════════════════════════════

👤 CUSTOMER INFORMATION
Name: ${name}
Email: ${email}
Phone: ${phone}

📍 SHIPPING ADDRESS
Governorate: ${governorate}
City: ${city}
Address: ${address}

📦 ORDER ITEMS
─────────────────────────────────
${itemsText}
💰 TOTAL: ${total} EGP
═══════════════════════════════════
Order placed on ${new Date().toLocaleString('en-EG', { timeZone: 'Africa/Cairo' })}
`;

    // ── Send email ──
    const mailOptions = {
      from: `"Naouma Orders 🌹" <ea137333@gmail.com>`,
      to: 'ea137333@gmail.com',
      subject: `🌹 New Order from ${name} — ${total} EGP`,
      text: textEmail,
      html: htmlEmail,
      replyTo: email  // So you can reply directly to the customer
    };

    await transporter.sendMail(mailOptions);

    console.log(`✅ Order email sent for ${name} — ${total} EGP`);
    res.json({ success: true, message: 'Order placed successfully!' });

  } catch (error) {
    console.error('❌ Failed to send email:', error.message);
    res.status(500).json({ success: false, message: 'Failed to process order. Please try again.' });
  }
});

// ── Export or Start server ──
// If not running on Vercel, listen on the port for local development
if (!process.env.VERCEL) {
  // We need to serve static files locally for testing, 
  // since vercel.json rewrites handle it in production.
  const path = require('path');
  app.use(express.static(path.join(__dirname, '..')));
  
  app.listen(PORT, () => {
    console.log(`\n🌹 Naouma Order Server running at http://localhost:${PORT}`);
    console.log(`📧 Orders will be sent to: ea137333@gmail.com`);
    console.log(`\n⚠️  Make sure to set GMAIL_APP_PASSWORD environment variable!`);
    console.log(`   Run: set GMAIL_APP_PASSWORD=your_app_password_here\n`);
  });
}

// Export the app for Vercel
module.exports = app;
