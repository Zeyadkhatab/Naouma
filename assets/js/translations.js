// ===== Naouma – English / Arabic Translation System =====

var TRANSLATIONS = {
  en: {
    // ── Nav ──
    nav_products: "Products",
    nav_ingredients: "Ingredients",
    nav_routine: "Routine",
    nav_story: "Our Story",
    nav_shop: "Shop Now",

    // ── Hero ──
    hero_tag: "🌿 Natural Beauty for Every Day",
    hero_title: 'Glow with <em>Confidence</em>,<br>Nourished by Nature',
    hero_sub: "Discover Naouma — a complete skincare and haircare collection crafted with powerful natural ingredients for radiant, balanced, healthy beauty.",
    hero_btn_explore: "Explore Collection",
    hero_btn_routine: "Build Your Routine",
    badge_derm: "Dermatologically Tested",
    badge_sulfate: "0% Sulfates",
    badge_natural: "Natural Ingredients",
    badge_cruelty: "Cruelty-Free",

    // ── Brand Strip ──
    strip_rose: "🌹 Rose Extract",
    strip_argan: "🌿 Argan Oil",
    strip_hyaluronic: "💧 Hyaluronic Acid",
    strip_tea: "🌱 Tea Tree Oil",
    strip_zinc: "✨ Zinc PCA",
    strip_niacinamide: "🛡️ Niacinamide",

    // ── Products Section ──
    products_label: "Our Collection",
    products_title: "Every Skin. Every Hair.<br>One Brand.",
    products_sub: "Explore our complete range of skincare and haircare products, each formulated to deliver real, visible results.",
    filter_all: "All Products",
    filter_skin: "Skincare",
    filter_hair: "Haircare",
    filter_body: "Body",

    // ── Product Cards ──
    cat_skincare: "Skincare",
    cat_haircare: "Haircare",
    cat_body: "Body Care",
    add_to_cart: "🛒 Add to Cart",
    buy_now: "⚡ Buy It Now",
    best_seller: "Best Seller",
    special_offer: "Special Offer",
    zero_sulfates: "0% Sulfates",

    prod_moisturizer_name: "Oil Control Moisturizer",
    prod_moisturizer_desc: "Zinc PCA + Hyaluronic Acid + Niacinamide. Hydrates deeply, balances oil, and gives you a healthy glow.",
    prod_cleanser_name: "Foaming Facial Cleanser",
    prod_cleanser_desc: "Tea Tree Oil + Salicylic Acid + Aloe Vera. Clears blackheads & excess oil with a gentle, non-drying formula.",
    prod_set2_name: "Oil Control Skincare Set (2 Items)",
    prod_set2_desc: "The perfect daily duo for balanced, clear & healthy skin. Includes the Foaming Facial Cleanser and Oil Control Moisturizer.",
    prod_set3_name: "Oil Control Skincare Set (3 Items)",
    prod_set3_desc: "The complete routine for clear, healthy & shine-free skin. Includes the Foaming Facial Cleanser, Oil Control Moisturizer, and Hair Serum.",
    prod_shampoo_name: "Soft Rose Shampoo",
    prod_shampoo_desc: "Rose extract nourishes and softens from the first wash. Sulfate-free formula gentle on your scalp.",
    prod_conditioner_name: "Silky Smooth Conditioner",
    prod_conditioner_desc: "Pairs perfectly with the Rose Shampoo. Silky, detangling, sulfate-free formula for lustrous hair.",
    prod_mask_name: "Hair Mask",
    prod_mask_desc: "An intensive treatment that deeply repairs and restores damaged hair, leaving it silky, shiny, and full of life.",
    prod_serum_name: "Hair Serum",
    prod_serum_desc: "Enriched with Argan Oil & Vitamin E. Deeply nourishes, reduces frizz, and provides a stunning, natural, long-lasting shine.",
    prod_collection_name: "Ultimate Hair Care Collection",
    prod_collection_desc: "Our complete premium haircare routine. Includes the Soft Rose Shampoo, Smooth Conditioner, and the nourishing Hair Serum.",
    prod_deodorant_name: "Deodorant Cream",
    prod_deodorant_desc: "A gentle, long-lasting deodorant cream infused with rose extract and niacinamide for confident, fresh skin.",
    prod_lipbalm_name: "Lip Balm",
    prod_lipbalm_desc: "Delicately scented rose lip balm that keeps your lips soft, hydrated, and beautifully nourished throughout the day.",

    // ── Ingredients ──
    ingr_label: "What's Inside",
    ingr_title: "Powered by Nature's Best",
    ingr_sub: "Every Naouma formula is built around active, natural ingredients chosen for real, visible results.",
    ingr_rose_name: "Rose Extract",
    ingr_rose_desc: "Rich in antioxidants and vitamins, it soothes skin, softens hair, and leaves a delicate, lasting fragrance.",
    ingr_hya_name: "Hyaluronic Acid",
    ingr_hya_desc: "Locks in moisture at a deep level and preserves your skin's natural radiance without clogging pores.",
    ingr_zinc_name: "Zinc PCA",
    ingr_zinc_desc: "Regulates sebum production, reduces shine, and minimizes the appearance of enlarged pores.",
    ingr_nia_name: "Niacinamide",
    ingr_nia_desc: "Calms inflammation, evens out skin tone, and visibly reduces pores and blemishes over time.",
    ingr_argan_name: "Argan Oil",
    ingr_argan_desc: "Deeply nourishes and strengthens hair from root to tip, adding incredible softness and mirror-like shine.",
    ingr_tea_name: "Tea Tree Oil",
    ingr_tea_desc: "Natural antibacterial and anti-inflammatory agent that fights acne and purifies skin without over-drying.",
    ingr_sal_name: "Salicylic Acid (BHA)",
    ingr_sal_desc: "Gently exfoliates inside pores to clear blackheads, control oil, and keep skin smooth and clear.",
    ingr_aloe_name: "Aloe Vera Extract",
    ingr_aloe_desc: "Instantly soothes, cools, and hydrates, making it perfect for sensitive and irritated skin types.",

    // ── Why Us ──
    why_label: "Why Naouma",
    why_title: "Beauty That Works.<br>Every Single Day.",
    why_sub: "We believe great skincare should be simple, honest, and effective — made with ingredients you can trust.",
    why_derm_title: "Dermatologically Tested",
    why_derm_desc: "Every product is tested by dermatologists and proven safe for sensitive, oily, and acne-prone skin types.",
    why_natural_title: "100% Natural Formulas",
    why_natural_desc: "We use only carefully selected natural and active ingredients. No hidden chemicals, no compromises.",
    why_free_title: "Free from Harsh Chemicals",
    why_free_desc: "Our haircare is 0% sulfates; our skincare avoids parabens and harmful additives — gentle power, always.",
    why_results_title: "Visible Results",
    why_results_desc: "Real before-and-after results — from clearer skin to smoother, shinier hair — that you can see and feel.",
    why_all_title: "For All Skin & Hair Types",
    why_all_desc: "Formulated to work across all skin tones and hair types, so every woman can find her perfect Naouma routine.",
    why_online_title: "Available Online",
    why_online_desc: "Order easily from anywhere. Fast delivery, premium packaging, and a brand experience you'll love from the first unbox.",

    // ── Routine ──
    routine_label: "Daily Routine",
    routine_title: "Your Perfect Routine,<br>Step by Step",
    routine_sub: "Follow this simple morning ritual for glowing skin and healthy, beautiful hair — every single day.",
    routine_cleanse_title: "Cleanse",
    routine_cleanse_desc: "Start with a foaming cleanse to remove excess oil, impurities, and blackheads without stripping your skin.",
    routine_cleanse_product: "Foaming Facial Cleanser",
    routine_moist_title: "Moisturize",
    routine_moist_desc: "Apply oil control moisturizer to hydrate, balance sebum, and protect your skin throughout the day.",
    routine_moist_product: "Oil Control Moisturizer",
    routine_wash_title: "Wash Hair",
    routine_wash_desc: "Use sulfate-free rose shampoo and conditioner for soft, shiny, deeply nourished hair from first use.",
    routine_wash_product: "Rose Shampoo + Conditioner",
    routine_style_title: "Style & Shine",
    routine_style_desc: "Finish with a few drops of Hair Serum on damp or dry hair for frizz-free, glossy locks all day.",
    routine_style_product: "Hair Serum",
    routine_lips_title: "Protect Lips",
    routine_lips_desc: "Swipe on Lip Balm throughout the day to keep your lips soft, hydrated, and beautifully fragrant.",
    routine_lips_product: "Rose Lip Balm",
    routine_mask_title: "Weekly Mask",
    routine_mask_desc: "Apply Hair Mask weekly for a deep repair treatment that brings life and softness back to any hair type.",
    routine_mask_product: "Hair Mask",

    // ── Testimonials ──
    reviews_label: "Real Reviews",
    reviews_title: "Our Customers Love<br>What They See",
    reviews_sub: "Thousands of women trust Naouma every day. Here's what they're saying.",
    review_1: "The Oil Control Moisturizer is a game-changer. My skin used to get shiny by midday — now it stays matte and fresh all day. I'm genuinely obsessed.",
    review_2: "The Rose Shampoo smells incredible and my hair has never felt softer. The sulfate-free formula is so gentle — no more dry scalp or breakage.",
    review_3: "After one month of using the Foaming Cleanser + Moisturizer routine my breakouts are almost completely gone. The before/after is real — it really works.",
    review_4: "The Hair Serum is pure magic. I have frizzy, thick hair and after just one use it was smooth, shiny, and smelled amazing. I'll never go without it.",
    review_5: "The Lip Balm is the most moisturizing one I've ever used. Light, not sticky, and the rose scent is so subtle and lovely. A permanent bag essential for me.",
    review_6: "Naouma is the only brand I trust for both my skin and my hair. The packaging is beautiful and the results speak for themselves. Highly recommend to everyone.",

    // ── Newsletter ──
    newsletter_title: "Join the Naouma Family 🌹",
    newsletter_sub: "Subscribe for exclusive offers, skincare tips, new product launches, and early access to seasonal collections.",
    newsletter_placeholder: "Your email address…",
    newsletter_btn: "Subscribe",

    // ── Footer ──
    footer_desc: "Natural beauty products crafted with care for every skin type and hair type. Hydrate. Balance. Glow. Nourish. Smooth. Shine.",
    footer_products: "Products",
    footer_info: "Information",
    footer_support: "Support",
    footer_about: "About Us",
    footer_ingredients: "Ingredients",
    footer_skin_guide: "Skin Routine Guide",
    footer_hair_guide: "Hair Routine Guide",
    footer_blog: "Blog",
    footer_faq: "FAQs",
    footer_contact: "Contact Us",
    footer_track: "Track Your Order",
    footer_returns: "Returns & Exchanges",
    footer_shipping: "Shipping Policy",
    footer_privacy_policy: "Privacy Policy",
    footer_terms_service: "Terms of Service",
    footer_copyright: "© 2026 Naouma. All rights reserved. Made with 🌹 for natural beauty.",
    footer_privacy: "Privacy",
    footer_terms: "Terms",
    footer_cookies: "Cookies",

    // ── Cart ──
    cart_title: "🛒 Your Cart",
    cart_empty: 'Your cart is empty.<br>Start adding your favorite Naouma products!',
    cart_subtotal: "Subtotal",
    cart_shipping_note: "🚚 Shipping calculated at checkout",
    cart_checkout: "🌹 Proceed to Checkout",
    cart_remove: "Remove",
    cart_added: "added to cart!",

    // ── Toast ──
    toast_subscribe: "🌹 You're subscribed! Welcome to Naouma.",

    // ── Language Toggle ──
    lang_label: "عربي",

    // ── Checkout page ──
    checkout_back: "← Back to Store",
    checkout_title: '🌹 Complete Your <em>Order</em>',
    checkout_your_info: "Your Information",
    checkout_full_name: "Full Name",
    checkout_full_name_placeholder: "e.g. Sara Ahmed",
    checkout_email: "Email Address",
    checkout_email_placeholder: "you@example.com",
    checkout_phone: "Phone Number",
    checkout_phone_placeholder: "e.g. 01012345678",
    checkout_shipping: "Shipping Address",
    checkout_governorate: "Governorate",
    checkout_gov_placeholder: "Select Governorate",
    checkout_city: "City",
    checkout_city_placeholder: "e.g. Nasr City",
    checkout_address: "Full Address",
    checkout_address_placeholder: "Street name, building number, floor, apartment...",
    checkout_pay: "🌹 Pay Now",
    checkout_processing: "Processing...",
    checkout_secure: "🔒 Your information is secure and will only be used to process your order.",
    checkout_order_summary: "Order Summary",
    checkout_subtotal: "Subtotal",
    checkout_shipping_label: "Shipping",
    checkout_shipping_select: "Select a governorate to see shipping",
    checkout_total: "Total",
    checkout_qty: "Qty",
    checkout_success_title: "Order Placed Successfully!",
    checkout_success_msg: "Thank you for choosing Naouma! 🌹<br>We've received your order and will contact you shortly to confirm delivery details.",
    checkout_continue: "🛍️ Continue Shopping",
    checkout_empty_title: "Your order is empty",
    checkout_empty_msg: "Looks like you haven't selected any products yet. Head back to our collection and find something you love!",
    checkout_empty_btn: "🌹 Browse Products",
    checkout_order_fail: "⚠️ Failed to place order: "
  },

  ar: {
    // ── Nav ──
    nav_products: "المنتجات",
    nav_ingredients: "المكونات",
    nav_routine: "الروتين",
    nav_story: "قصتنا",
    nav_shop: "تسوقي الآن",

    // ── Hero ──
    hero_tag: "🌿 جمال طبيعي لكل يوم",
    hero_title: 'تألّقي بـ<em>ثقة</em>،<br>بتغذية من الطبيعة',
    hero_sub: "اكتشفي ناعومة — مجموعة كاملة للعناية بالبشرة والشعر مصنوعة من مكونات طبيعية فعّالة لجمال مُشرق ومتوازن وصحي.",
    hero_btn_explore: "استكشفي المجموعة",
    hero_btn_routine: "ابني روتينك",
    badge_derm: "مختبر طبياً",
    badge_sulfate: "0% سلفات",
    badge_natural: "مكونات طبيعية",
    badge_cruelty: "لم يُختبر على الحيوانات",

    // ── Brand Strip ──
    strip_rose: "🌹 خلاصة الورد",
    strip_argan: "🌿 زيت الأرجان",
    strip_hyaluronic: "💧 حمض الهيالورونيك",
    strip_tea: "🌱 زيت شجرة الشاي",
    strip_zinc: "✨ زنك PCA",
    strip_niacinamide: "🛡️ نياسيناميد",

    // ── Products Section ──
    products_label: "مجموعتنا",
    products_title: "كل بشرة. كل شعر.<br>ماركة واحدة.",
    products_sub: "استكشفي مجموعتنا الكاملة من منتجات العناية بالبشرة والشعر، كل منتج مُصمم لتقديم نتائج حقيقية وملموسة.",
    filter_all: "كل المنتجات",
    filter_skin: "العناية بالبشرة",
    filter_hair: "العناية بالشعر",
    filter_body: "العناية بالجسم",

    // ── Product Cards ──
    cat_skincare: "العناية بالبشرة",
    cat_haircare: "العناية بالشعر",
    cat_body: "العناية بالجسم",
    add_to_cart: "🛒 أضيفي للسلة",
    buy_now: "⚡ اشتري الآن",
    best_seller: "الأكثر مبيعاً",
    special_offer: "عرض خاص",
    zero_sulfates: "0% سلفات",

    prod_moisturizer_name: "مرطب التحكم بالزيوت",
    prod_moisturizer_desc: "زنك PCA + حمض الهيالورونيك + نياسيناميد. يرطب بعمق، يوازن الزيوت، ويمنحك إشراقة صحية.",
    prod_cleanser_name: "غسول رغوي للوجه",
    prod_cleanser_desc: "زيت شجرة الشاي + حمض الساليسيليك + الصبار. ينظف الرؤوس السوداء والدهون الزائدة بتركيبة لطيفة.",
    prod_set2_name: "مجموعة العناية بالبشرة (قطعتين)",
    prod_set2_desc: "الثنائي المثالي للبشرة المتوازنة والنقية والصحية. تشمل غسول الوجه الرغوي ومرطب التحكم بالزيوت.",
    prod_set3_name: "مجموعة العناية بالبشرة (3 قطع)",
    prod_set3_desc: "الروتين الكامل لبشرة نقية وصحية وخالية من اللمعان. تشمل الغسول الرغوي والمرطب وسيروم الشعر.",
    prod_shampoo_name: "شامبو الورد الناعم",
    prod_shampoo_desc: "خلاصة الورد تغذي وتنعم الشعر من أول غسلة. تركيبة خالية من السلفات ولطيفة على فروة الرأس.",
    prod_conditioner_name: "بلسم ناعم كالحرير",
    prod_conditioner_desc: "يتناسب تماماً مع شامبو الورد. تركيبة ناعمة خالية من السلفات لشعر لامع ومفكك.",
    prod_mask_name: "ماسك الشعر",
    prod_mask_desc: "علاج مكثف يعمل على إصلاح واستعادة الشعر التالف بعمق، ويتركه حريرياً ولامعاً ومليئاً بالحياة.",
    prod_serum_name: "سيروم الشعر",
    prod_serum_desc: "غني بزيت الأرجان وفيتامين E. يغذي بعمق، يقلل التجعد، ويمنح لمعاناً طبيعياً مذهلاً يدوم طويلاً.",
    prod_collection_name: "مجموعة العناية الكاملة بالشعر",
    prod_collection_desc: "روتين العناية الفاخر الكامل بالشعر. تشمل شامبو الورد الناعم والبلسم وسيروم الشعر المغذي.",
    prod_deodorant_name: "كريم مزيل العرق",
    prod_deodorant_desc: "كريم مزيل عرق لطيف وطويل المفعول بخلاصة الورد والنياسيناميد لبشرة واثقة ومنتعشة.",
    prod_lipbalm_name: "مرطب الشفاه",
    prod_lipbalm_desc: "مرطب شفاه بعطر الورد الراقي يحافظ على شفتيك ناعمة ورطبة ومغذية طوال اليوم.",

    // ── Ingredients ──
    ingr_label: "ماذا بالداخل",
    ingr_title: "مدعومة بأفضل ما في الطبيعة",
    ingr_sub: "كل تركيبة من ناعومة مبنية على مكونات فعّالة وطبيعية مختارة لنتائج حقيقية وملموسة.",
    ingr_rose_name: "خلاصة الورد",
    ingr_rose_desc: "غنية بمضادات الأكسدة والفيتامينات، تهدئ البشرة وتنعم الشعر وتترك عطراً رقيقاً يدوم.",
    ingr_hya_name: "حمض الهيالورونيك",
    ingr_hya_desc: "يحبس الرطوبة في أعماق البشرة ويحافظ على إشراقتها الطبيعية دون سد المسام.",
    ingr_zinc_name: "زنك PCA",
    ingr_zinc_desc: "ينظم إفراز الدهون، يقلل اللمعان، ويقلل من مظهر المسام المتضخمة.",
    ingr_nia_name: "نياسيناميد",
    ingr_nia_desc: "يهدئ الالتهابات، يوحد لون البشرة، ويقلل من المسام والشوائب بشكل ملحوظ مع الوقت.",
    ingr_argan_name: "زيت الأرجان",
    ingr_argan_desc: "يغذي ويقوي الشعر من الجذور حتى الأطراف، ويضيف نعومة لا تصدق ولمعاناً كالمرآة.",
    ingr_tea_name: "زيت شجرة الشاي",
    ingr_tea_desc: "مضاد طبيعي للبكتيريا والالتهابات يحارب حب الشباب وينقي البشرة دون جفاف مفرط.",
    ingr_sal_name: "حمض الساليسيليك (BHA)",
    ingr_sal_desc: "يقشر بلطف داخل المسام لإزالة الرؤوس السوداء والتحكم بالدهون والحفاظ على بشرة ناعمة ونقية.",
    ingr_aloe_name: "خلاصة الصبار",
    ingr_aloe_desc: "يهدئ ويبرد ويرطب فوراً، مما يجعله مثالياً للبشرة الحساسة والمتهيجة.",

    // ── Why Us ──
    why_label: "لماذا ناعومة",
    why_title: "جمال يعمل فعلاً.<br>كل يوم.",
    why_sub: "نؤمن أن العناية الرائعة بالبشرة يجب أن تكون بسيطة وصادقة وفعّالة — مصنوعة من مكونات تثقين بها.",
    why_derm_title: "مختبر طبياً",
    why_derm_desc: "كل منتج مختبر من أطباء جلدية ومُثبت أنه آمن للبشرة الحساسة والدهنية والمعرضة لحب الشباب.",
    why_natural_title: "تركيبات طبيعية 100%",
    why_natural_desc: "نستخدم فقط مكونات طبيعية وفعّالة مختارة بعناية. بدون مواد كيميائية مخفية، بدون تنازلات.",
    why_free_title: "خالية من المواد القاسية",
    why_free_desc: "العناية بالشعر 0% سلفات؛ والعناية بالبشرة تتجنب البارابين والإضافات الضارة — قوة لطيفة، دائماً.",
    why_results_title: "نتائج مرئية",
    why_results_desc: "نتائج حقيقية قبل وبعد — من بشرة أنقى إلى شعر أنعم وألمع — يمكنك رؤيتها والشعور بها.",
    why_all_title: "لكل أنواع البشرة والشعر",
    why_all_desc: "مُصممة لتعمل مع جميع ألوان البشرة وأنواع الشعر، حتى تجد كل امرأة روتين ناعومة المثالي لها.",
    why_online_title: "متاحة أونلاين",
    why_online_desc: "اطلبي بسهولة من أي مكان. توصيل سريع، تغليف فاخر، وتجربة ماركة ستعجبك من أول فتح للعلبة.",

    // ── Routine ──
    routine_label: "الروتين اليومي",
    routine_title: "روتينك المثالي،<br>خطوة بخطوة",
    routine_sub: "اتبعي هذا الطقس الصباحي البسيط للحصول على بشرة مشرقة وشعر صحي وجميل — كل يوم.",
    routine_cleanse_title: "التنظيف",
    routine_cleanse_desc: "ابدئي بتنظيف رغوي لإزالة الدهون الزائدة والشوائب والرؤوس السوداء بدون تجريد بشرتك.",
    routine_cleanse_product: "غسول الوجه الرغوي",
    routine_moist_title: "الترطيب",
    routine_moist_desc: "ضعي مرطب التحكم بالزيوت لترطيب وتوازن الدهون وحماية بشرتك طوال اليوم.",
    routine_moist_product: "مرطب التحكم بالزيوت",
    routine_wash_title: "غسل الشعر",
    routine_wash_desc: "استخدمي شامبو الورد والبلسم الخالي من السلفات لشعر ناعم ولامع ومغذى بعمق من أول استخدام.",
    routine_wash_product: "شامبو الورد + البلسم",
    routine_style_title: "التصفيف واللمعان",
    routine_style_desc: "أنهي بقطرات من سيروم الشعر على شعر رطب أو جاف لشعر خالي من التجعد ولامع طوال اليوم.",
    routine_style_product: "سيروم الشعر",
    routine_lips_title: "حماية الشفاه",
    routine_lips_desc: "مرري مرطب الشفاه طوال اليوم للحفاظ على شفاهك ناعمة ورطبة وعطرة بشكل جميل.",
    routine_lips_product: "مرطب شفاه بالورد",
    routine_mask_title: "ماسك أسبوعي",
    routine_mask_desc: "ضعي ماسك الشعر أسبوعياً لعلاج إصلاح عميق يعيد الحياة والنعومة لأي نوع شعر.",
    routine_mask_product: "ماسك الشعر",

    // ── Testimonials ──
    reviews_label: "تقييمات حقيقية",
    reviews_title: "عملاؤنا يحبون<br>ما يرونه",
    reviews_sub: "آلاف النساء يثقن بناعومة كل يوم. إليك ما يقولنه.",
    review_1: "مرطب التحكم بالزيوت غيّر حياتي. بشرتي كانت تلمع قبل الظهر — الآن تبقى مات ومنتعشة طول اليوم. أنا مدمنة فعلاً.",
    review_2: "شامبو الورد ريحته مذهلة وشعري ما كان أنعم من كده أبداً. التركيبة الخالية من السلفات لطيفة جداً — مافي جفاف أو تكسر.",
    review_3: "بعد شهر من استخدام الغسول الرغوي + المرطب حبوبي اختفت تقريباً بالكامل. النتيجة قبل وبعد حقيقية — فعلاً يشتغل.",
    review_4: "سيروم الشعر سحر حقيقي. عندي شعر مجعد وسميك وبعد استخدام واحد صار ناعم ولامع وريحته رهيبة. مستحيل أستغني عنه.",
    review_5: "مرطب الشفاه أكثر واحد رطب استخدمته. خفيف، مش لزج، وريحة الورد رقيقة وجميلة. أساسي دائم في شنطتي.",
    review_6: "ناعومة هي الماركة الوحيدة اللي أثق فيها لبشرتي وشعري. التغليف جميل والنتائج تتكلم عن نفسها. أنصح الكل فيها.",

    // ── Newsletter ──
    newsletter_title: "انضمي لعائلة ناعومة 🌹",
    newsletter_sub: "اشتركي للحصول على عروض حصرية، نصائح للعناية بالبشرة، منتجات جديدة، ووصول مبكر للمجموعات الموسمية.",
    newsletter_placeholder: "بريدك الإلكتروني…",
    newsletter_btn: "اشتركي",

    // ── Footer ──
    footer_desc: "منتجات جمال طبيعية مصنوعة بعناية لكل أنواع البشرة والشعر. رطبي. وازني. تألقي. غذّي. نعّمي. ألمعي.",
    footer_products: "المنتجات",
    footer_info: "معلومات",
    footer_support: "الدعم",
    footer_about: "من نحن",
    footer_ingredients: "المكونات",
    footer_skin_guide: "دليل روتين البشرة",
    footer_hair_guide: "دليل روتين الشعر",
    footer_blog: "المدونة",
    footer_faq: "الأسئلة الشائعة",
    footer_contact: "اتصلي بنا",
    footer_track: "تتبعي طلبك",
    footer_returns: "الإرجاع والاستبدال",
    footer_shipping: "سياسة الشحن",
    footer_privacy_policy: "سياسة الخصوصية",
    footer_terms_service: "شروط الخدمة",
    footer_copyright: "© 2026 ناعومة. جميع الحقوق محفوظة. صُنع بـ 🌹 للجمال الطبيعي.",
    footer_privacy: "الخصوصية",
    footer_terms: "الشروط",
    footer_cookies: "ملفات تعريف الارتباط",

    // ── Cart ──
    cart_title: "🛒 سلتك",
    cart_empty: 'سلتك فارغة.<br>ابدئي بإضافة منتجات ناعومة المفضلة!',
    cart_subtotal: "المجموع الفرعي",
    cart_shipping_note: "🚚 الشحن يُحسب عند الدفع",
    cart_checkout: "🌹 متابعة الدفع",
    cart_remove: "إزالة",
    cart_added: "أُضيف للسلة!",

    // ── Toast ──
    toast_subscribe: "🌹 تم اشتراكك! مرحباً بك في ناعومة.",

    // ── Language Toggle ──
    lang_label: "English",

    // ── Checkout page ──
    checkout_back: "← العودة للمتجر",
    checkout_title: '🌹 أكملي <em>طلبك</em>',
    checkout_your_info: "معلوماتك",
    checkout_full_name: "الاسم الكامل",
    checkout_full_name_placeholder: "مثلاً: سارة أحمد",
    checkout_email: "البريد الإلكتروني",
    checkout_email_placeholder: "you@example.com",
    checkout_phone: "رقم الهاتف",
    checkout_phone_placeholder: "مثلاً: 01012345678",
    checkout_shipping: "عنوان الشحن",
    checkout_governorate: "المحافظة",
    checkout_gov_placeholder: "اختاري المحافظة",
    checkout_city: "المدينة",
    checkout_city_placeholder: "مثلاً: مدينة نصر",
    checkout_address: "العنوان الكامل",
    checkout_address_placeholder: "اسم الشارع، رقم المبنى، الطابق، الشقة...",
    checkout_pay: "🌹 ادفعي الآن",
    checkout_processing: "جاري المعالجة...",
    checkout_secure: "🔒 معلوماتك آمنة ولن تُستخدم إلا لمعالجة طلبك.",
    checkout_order_summary: "ملخص الطلب",
    checkout_subtotal: "المجموع الفرعي",
    checkout_shipping_label: "الشحن",
    checkout_shipping_select: "اختاري المحافظة لعرض تكلفة الشحن",
    checkout_total: "الإجمالي",
    checkout_qty: "الكمية",
    checkout_success_title: "تم تقديم الطلب بنجاح!",
    checkout_success_msg: "شكراً لاختيارك ناعومة! 🌹<br>استلمنا طلبك وسنتواصل معك قريباً لتأكيد تفاصيل التوصيل.",
    checkout_continue: "🛍️ تابعي التسوق",
    checkout_empty_title: "طلبك فارغ",
    checkout_empty_msg: "يبدو أنك لم تختاري أي منتجات بعد. عودي لمجموعتنا واعثري على ما تحبينه!",
    checkout_empty_btn: "🌹 تصفحي المنتجات",
    checkout_order_fail: "⚠️ فشل تقديم الطلب: "
  }
};

// ── Language Engine ──
function getCurrentLang() {
  return localStorage.getItem('naouma_lang') || 'en';
}

function setLang(lang) {
  localStorage.setItem('naouma_lang', lang);
  applyLang(lang);
}

function toggleLang() {
  var current = getCurrentLang();
  var next = current === 'en' ? 'ar' : 'en';
  setLang(next);
}

function t(key) {
  var lang = getCurrentLang();
  return TRANSLATIONS[lang][key] || TRANSLATIONS['en'][key] || key;
}

function applyLang(lang) {
  var html = document.documentElement;

  // Set direction and lang attribute
  if (lang === 'ar') {
    html.setAttribute('lang', 'ar');
    html.setAttribute('dir', 'rtl');
  } else {
    html.setAttribute('lang', 'en');
    html.setAttribute('dir', 'ltr');
  }

  // Update toggle button text
  var toggleBtn = document.getElementById('lang-toggle');
  if (toggleBtn) {
    toggleBtn.querySelector('.lang-toggle-text').textContent = TRANSLATIONS[lang].lang_label;
  }

  // Apply translations to all elements with data-i18n
  var els = document.querySelectorAll('[data-i18n]');
  for (var i = 0; i < els.length; i++) {
    var key = els[i].getAttribute('data-i18n');
    var val = TRANSLATIONS[lang][key];
    if (val !== undefined) {
      // Check if element is an input/textarea/select
      if (els[i].tagName === 'INPUT' || els[i].tagName === 'TEXTAREA') {
        // Don't overwrite value, just placeholder
      } else if (els[i].tagName === 'SELECT') {
        // Only translate the first option (placeholder)
      } else {
        els[i].innerHTML = val;
      }
    }
  }

  // Apply placeholder translations
  var pEls = document.querySelectorAll('[data-i18n-placeholder]');
  for (var i = 0; i < pEls.length; i++) {
    var key = pEls[i].getAttribute('data-i18n-placeholder');
    var val = TRANSLATIONS[lang][key];
    if (val !== undefined) {
      pEls[i].setAttribute('placeholder', val);
    }
  }

  // Re-render cart if on index page
  if (typeof renderCart === 'function') {
    renderCart();
  }
}

// Auto-apply on page load
document.addEventListener('DOMContentLoaded', function() {
  applyLang(getCurrentLang());
});
