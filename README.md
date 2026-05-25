# 🌹 Naouma – Natural Beauty for Every Day

Naouma is a premium, modern e-commerce web application featuring a complete line of skincare and haircare products crafted from natural ingredients. The project is designed with visually stunning aesthetics, seamless client-side interactions, and a fully functional Node.js/Express backend that handles order processing and email notifications.

---

## 📁 Directory Structure

```text
Naouma/
├── assets/                  # Frontend Static Assets
│   ├── css/
│   │   ├── style.css        # Main page styles (gradients, petals, animations)
│   │   └── checkout.css     # Checkout page styles
│   ├── images/              # Product image assets
│   └── js/
│       ├── main.js          # Cart, product filtering, and main page interactions
│       └── checkout.js      # Form handler, API client, and order checkout logic
├── api/                   # Vercel Serverless Backend
│   └── index.js             # Node.js/Express app & email dispatch setup
├── package.json             # Project dependencies (Express, Nodemailer, CORS)
├── vercel.json              # Vercel deployment configuration
├── index.html               # Main landing page & catalog UI
├── checkout.html            # Shipping form & final checkout page
└── README.md                # Project documentation
```

---

## ✨ Features

### 🎨 1. Premium & Dynamic Frontend UI/UX
- **Elegant Aesthetic Design:** Implements a premium color palette featuring Deep Rose, Gold, Sage Green, and Soft Warm White. Custom fonts (*Playfair Display* and *Jost*) deliver a high-end luxury brand feel.
- **Animated Petals:** A dynamic, CSS-driven ambient particle effect simulates falling rose petals in the Hero section, creating an immersive, sensory-rich landing experience.
- **Fluid Micro-Animations:** Scroll-reveal animations (via `IntersectionObserver`), button hover expansions, interactive scaling filters, and sliding navigation drawers enhance responsiveness.
- **Fully Responsive Layout:** Fully adaptive design catering to mobiles, tablets, and desktops alike, featuring a toggleable hamburger menu for mobile devices.

### 🛍️ 2. Dynamic Product Catalog & Filtering
- **Interactive Categorization:** View all products or filter dynamically by **Skincare**, **Haircare**, or **Body Care** without reloading the page.
- **Rich Product Information:** Displays detailed descriptions, active ingredients list, size configurations (e.g. `125 ml`, `250 ml`), special promo badges (e.g. `Best Seller`, `Special Offer`, `0% Sulfates`), original vs. discounted prices, and instant buy features.

### 🛒 3. Interactive Shopping Cart System
- **Sliding Sidebar Drawer:** Seamlessly slides out from the right side of the screen upon clicking the cart button and features a dark backdrop overlay for enhanced visual focus.
- **State Management & Persistence:** Cart states are managed client-side and saved into local storage to persist user selections across browser refreshes.
- **Quantity & Control Systems:** Users can dynamically increment/decrement items or remove products directly from the cart drawer. Price sub-totals and items badges update in real-time.
- **Interactive Toasts:** Immediate visual feedback notifications appear whenever items are successfully added to the cart or newsletter subscriptions are processed.

### ⚡ 4. Rapid "Buy It Now" Checkout
- **Instant Checkout:** Skips the cart entirely. Clicking "Buy It Now" on any product dynamically aggregates a single-item transaction, redirects the customer directly to the checkout page, and triggers a fast-pass purchase.

### 📍 5. Egypt-Customized Checkout & Form Validation
- **Egyptian Governorates Coverage:** Includes a preconfigured dropdown list covering all 27 Egyptian Governorates (Cairo, Giza, Alexandria, Qalyubia, Dakahlia, Luxor, etc.).
- **Live Order Summaries:** Displays purchased items with line totals, a shipping charge calculator (currently configured with free shipping promotions), and final totals.
- **Interactive Feedback:** Validates form inputs, changes CTA buttons to a beautiful loading state spinner during submission, and shows a custom fullscreen Success overlay with a receipt summary when approved.

### 📧 6. Robust Serverless Backend (Vercel Ready)
- **Vercel Functions:** The backend is built as an Express app adapted perfectly for Vercel Serverless Functions (`/api/index.js`), eliminating the need for a persistent server.
- **API Routing:** Automated `vercel.json` routing ensures both frontend and backend function seamlessly on the same domain without CORS conflicts.
- **Nodemailer Automatic Emails:** Automatically triggers detailed transaction summaries to the vendor's mailbox (`ea137333@gmail.com`) upon checkout.
- **Beautiful HTML Invoices:** Converts checkout fields into a premium, styled HTML email with a structured receipt table, customer phone/email contact links, formatted Cairo-timezone timestamps, and a plain-text fallback format.

---

## 🚀 How to Run the Backend

To start the Naouma backend server and test checkout features locally, follow these steps:

### 📋 Prerequisites
Ensure you have **Node.js** (v14 or higher) installed on your system. You can check your version by running:
```bash
node -v
```

### 1️⃣ Step 1: Install Dependencies
Open your terminal in the root directory and install the required Node modules:
```bash
npm install
```

### 2️⃣ Step 2: Configure Environment Variables
The server uses **Gmail SMTP** to dispatch emails. For security reasons, you should **never** hardcode passwords in the code. Instead, generate a **Gmail App Password**:
1. Enable **2-Step Verification** on your Google Account.
2. Go to the [Google App Passwords settings page](https://myaccount.google.com/apppasswords).
3. Create a new App Password (e.g. Name it "Naouma Store").
4. Copy the generated 16-character password code (e.g., `abcd efgh ijkl mnop`).

Set the environment variable in your terminal before running the server:

**For Windows (CMD):**
```cmd
set GMAIL_APP_PASSWORD=abcd efgh ijkl mnop
```

**For Windows (PowerShell):**
```powershell
$env:GMAIL_APP_PASSWORD="abcd efgh ijkl mnop"
```

**For macOS/Linux (Bash/Zsh):**
```bash
export GMAIL_APP_PASSWORD="abcd efgh ijkl mnop"
```

*(Note: For Vercel deployment, you must add `GMAIL_APP_PASSWORD` in your Vercel Project Settings > Environment Variables).*

### 3️⃣ Step 3: Run the Server

You can run the server in two modes:

**Standard Production/Start Mode:**
```bash
npm start
```

**Development Mode (Identical running setup):**
```bash
npm run dev
```

Upon successful startup, your console will output:
```text
🌹 Naouma Order Server running at http://localhost:3000
📧 Orders will be sent to: ea137333@gmail.com
```

### 4️⃣ Step 4: Access and Test the Application
1. Open your browser and navigate to: **[http://localhost:3000](http://localhost:3000)**
2. Browse products, add them to the cart, or click **"Buy It Now"**.
3. Proceed to the Checkout page.
4. Fill out the shipping form (e.g., Select **Cairo** governorate, enter your phone, and address).
5. Click **"Pay Now"**.
6. The screen will display processing states, trigger a success prompt, and dispatch a beautiful invoice directly to the configured email!
