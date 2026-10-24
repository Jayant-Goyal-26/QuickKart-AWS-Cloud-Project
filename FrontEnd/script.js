const products = [
    { id: 1, name: "Amul Milk", qty: "1 Litre", price: 62, original: 75, category: "dairy", image: "https://i.pinimg.com/736x/7f/7b/dd/7f7bdd703beb19c8bb3e3bbb6b1b20ba.jpg", badge: "best", discount: 17, theme: "movie" },
    { id: 2, name: "Eggs", qty: "6 pcs", price: 54, original: 60, category: "dairy", image: "https://i.pinimg.com/736x/dd/a8/ae/dda8ae9929513cfa08c5189e939f72a8.jpg", badge: "sale", discount: 10, theme: "late-night" },
    { id: 3, name: "Amul Butter", qty: "500g", price: 249, original: 290, category: "dairy", image: "https://i.pinimg.com/736x/35/09/1b/35091bc8fd12ece427ea6adbf8978173.jpg", badge: "", discount: 14, theme: "comfort" },
    { id: 4, name: "Aloo Bhujia", qty: "400g", price: 85, original: 99, category: "snacks", image: "https://i.pinimg.com/736x/57/1a/2b/571a2be253e5c9ea58134fe355f10de4.jpg", badge: "new", discount: 14, theme: "" },
    { id: 5, name: "Amul Cheese", qty: "200g", price: 129, original: 150, category: "dairy", image: "https://i.pinimg.com/1200x/64/50/d0/6450d08184f6047f0a447880bcfc7871.jpg", badge: "", discount: 14, theme: "movie" },
    { id: 6, name: "Apples", qty: "6 pcs", price: 115, original: 140, category: "fruits", image: "https://i.pinimg.com/736x/4b/f0/21/4bf021c49d88b890ebc9343beed7ee3b.jpg", badge: "sale", discount: 18, theme: "" },
    { id: 7, name: "Fresh Bananas", qty: "6 pcs", price: 38, original: 45, category: "fruits", image: "https://i.pinimg.com/736x/7c/2d/23/7c2d23df7578a62e66faa52aaac5fc73.jpg", badge: "best", discount: 16, theme: "" },
    { id: 8, name: "Butter Popcorn", qty: "150g", price: 85, original: 110, category: "snacks", image: "https://i.pinimg.com/control1/1200x/35/49/b8/3549b8f8da1572abedd98c6f02c785d8.jpg", badge: "", discount: 23, theme: "movie" },
    { id: 9, name: "Nachos with Cheese", qty: "200g", price: 99, original: 129, category: "snacks", image: "https://i.pinimg.com/1200x/2b/7e/fc/2b7efc676340e0762dc38b6a795f66fe.jpg", badge: "", discount: 23, theme: "movie" },
    { id: 10, name: "Potato Chips", qty: "70g", price: 20, original: 25, category: "snacks", image: "https://i.pinimg.com/1200x/0f/e3/0b/0fe30b0653279ee46f66eec9ec9dd059.jpg", badge: "", discount: 12, theme: "late-night" },
    { id: 11, name: "Oreo Biscuits", qty: "300g", price: 55, original: 70, category: "snacks", image: "https://i.pinimg.com/736x/7f/00/3c/7f003c7074313bd0d98105c3c698297c.jpg", badge: "sale", discount: 21, theme: "movie" },
    { id: 12, name: "Spicy Masala Fries", qty: "100g", price: 35, original: 45, category: "snacks", image: "https://images.pexels.com/photos/1893556/pexels-photo-1893556.jpeg?w=200&h=200&fit=crop", badge: "", discount: 22, theme: "late-night" },
    { id: 13, name: "Cola Cold Drink", qty: "750ml", price: 48, original: 55, category: "beverages", image: "https://i.pinimg.com/736x/b6/bb/10/b6bb10a890052a215ff1c83cdc8ae860.jpg", badge: "", discount: 13, theme: "movie" },
    { id: 14, name: "Orange Juice", qty: "1L", price: 105, original: 130, category: "beverages", image: "https://i.pinimg.com/736x/b9/ba/ab/b9baab88d89a25740b6874413a4d3818.jpg", badge: "", discount: 19, theme: "comfort" },
    { id: 15, name: "Energy Drink", qty: "250ml", price: 118, original: 135, category: "beverages", image: "https://i.pinimg.com/1200x/f0/0c/da/f00cda564ffc981835798b45d21bd119.jpg", badge: "new", discount: 13, theme: "late-night" },
    { id: 16, name: "Dark Chocolate Bar", qty: "100g", price: 65, original: 80, category: "snacks", image: "https://i.pinimg.com/1200x/93/a8/64/93a864df6dd119e12bc99c07635c99ad.jpg", badge: "best", discount: 19, theme: "movie" },
    { id: 17, name: "Vanilla Ice Cream", qty: "500ml", price: 149, original: 180, category: "snacks", image: "https://i.pinimg.com/1200x/e1/60/4f/e1604fefcae1a04721f7c78a9821dc0c.jpg", badge: "sale", discount: 17, theme: "late-night" },
    { id: 18, name: "Paneer", qty: "90g", price: 65, original: 85, category: "Dairy", image: "https://i.pinimg.com/1200x/82/7e/aa/827eaae626f62101d03fdf58982f3f30.jpg", badge: "new", discount: 24, theme: "" },
    { id: 19, name: "Potatoes", qty: "1kg", price: 45, original: 60, category: "veggies", image: "https://i.pinimg.com/1200x/67/aa/e7/67aae7d12b6af6394c7eff82dd4471ad.jpg", badge: "", discount: 25, theme: "movie" },
    { id: 20, name: "Instant Noodles", qty: "2 pack", price: 70, original: 90, category: "snacks", image: "https://i.pinimg.com/736x/10/d7/7c/10d77cce546927b76f0f9b73f1b0c34a.jpg", badge: "", discount: 22, theme: "late-night" },
    { id: 21, name: "Whole Wheat Bread", qty: "400g", price: 42, original: 50, category: "bakery", image: "https://i.pinimg.com/736x/ec/bb/c1/ecbbc1e83eca80425fc7be88b0faea21.jpg", badge: "best", discount: 16, theme: "comfort" },
    { id: 22, name: "Butter cookies", qty: "4 pcs", price: 75, original: 90, category: "bakery", image: "https://i.pinimg.com/control1/1200x/a2/54/ab/a254ab3176f62d952a39db1c7a2a6a2b.jpg", badge: "new", discount: 17, theme: "comfort" },
    { id: 23, name: "Fresh Broccoli", qty: "1 head", price: 55, original: 65, category: "veggies", image: "https://images.unsplash.com/photo-1584270354949-c26b0d5b4a0c?w=200&h=200&fit=crop", badge: "", discount: 15, theme: "" },
    { id: 24, name: "Organic Spinach", qty: "200g", price: 35, original: 45, category: "veggies", image: "https://i.pinimg.com/736x/e6/9f/ab/e69fab7147775c44bf6a2aa5f691e4c9.jpg", badge: "", discount: 22, theme: "" }
];
const themes = [
    {id: "movie", name: "Movie Night", icon: "🍿", description: "Perfect snacks for your movie marathon", color: "movie",
        products: [8, 9, 11, 13, 16, 18, 19]},
    {id: "late-night", name: "Late Night Cravings", icon: "🌙", description: "When hunger strikes at midnight", color: "late-night",
        products: [2, 10, 12, 15, 17, 20]},
    {id: "comfort", name: "Comfort Food", icon: "🍜", description: "Warm & cozy favorites", color: "comfort",
        products: [22, 5, 14, 21, 22]},
    {id: "party", name: "Party Ready", icon: "🎉", description: "Snacks for gatherings & celebrations", color: "party",
        products: [17, 4, 15, 9, 13, 16]}
];

let cart = {};
let currentCategory = "all";
let searchQuery = "";

const categories = [
    { id: "all", name: "All", emoji: "🏪" },
    { id: "dairy", name: "Dairy & Eggs", emoji: "🥛" },
    { id: "fruits", name: "Fruits", emoji: "🍎" },
    { id: "veggies", name: "Vegetables", emoji: "🥦" },
    { id: "snacks", name: "Snacks", emoji: "🍟" },
    { id: "beverages", name: "Beverages", emoji: "🧃" },
    { id: "bakery", name: "Bakery", emoji: "🍞" }
];

function renderCategories() {
    const nav = document.getElementById("categoryNav");
    nav.innerHTML = categories.map(cat => `
    <div class="category-pill ${currentCategory === cat.id ? 'active' : ''}" onclick="setCategory('${cat.id}')">
      <span class="category-emoji">${cat.emoji}</span>
      <span>${cat.name}</span>
    </div>
  `).join("");
}

function renderThemeCards() {
    const grid = document.getElementById("themeGrid");
    grid.innerHTML = themes.map(theme => {
        const themeProducts = theme.products.map(pid => products.find(p => p.id === pid)).filter(p => p);
        const topProducts = themeProducts.slice(0, 3);
        return `
      <div class="theme-card ${theme.color}" onclick="setCategoryByTheme('${theme.id}')">
        <div class="theme-card-header">
          <div class="theme-icon">${theme.icon}</div>
          <h3>${theme.name}</h3>
          <p>${theme.description}</p>
        </div>
        <div class="theme-products">
          ${topProducts.map(p => `
            <div class="theme-product-item">
              <div class="theme-product-info">
                <img class="theme-product-img" src="${p.image}" alt="${p.name}" loading="lazy">
                <div>
                  <div class="theme-product-name">${p.name}</div>
                  <div class="theme-product-price">₹${p.price}</div>
                </div>
              </div>
              <div class="theme-add-btn" onclick="event.stopPropagation(); addToCart(${p.id})">+</div>
            </div>
          `).join('')}
        </div>
        <div class="theme-view-all" onclick="event.stopPropagation(); setCategoryByTheme('${theme.id}')">
          View all ${theme.name.split(' ')[0]} snacks →
        </div>
      </div>
    `;
    }).join("");
}
function setCategoryByTheme(themeId) {
    const themeProducts = themes.find(t => t.id === themeId)?.products || [];
    const productCategories = [...new Set(themeProducts.map(pid => products.find(p => p.id === pid)?.category).filter(c => c))];
    currentCategory = productCategories.includes("snacks") ? "snacks" : productCategories[0] || "all";
    renderCategories();
    renderProducts();
    document.getElementById("sectionTitle").textContent = currentCategory === "all" ? "All Products" : categories.find(c => c.id === currentCategory)?.name || "Products";
    const hero = document.getElementById("heroGrid");
    const themeSection = document.getElementById("themeSection");
    const offersSection = document.querySelector(".offers-section");
    if (currentCategory !== "all") {
        hero.style.display = "none";
        themeSection.style.display = "none";
        if (offersSection) offersSection.style.display = "none";
    } else {
        hero.style.display = "grid";
        themeSection.style.display = "block";
        if (offersSection) offersSection.style.display = "block";
    }
    showToast(`Showing ${currentCategory === "snacks" ? "Snacks" : "products"}`, "🍿");
}
function getFilteredProducts() {
    return products.filter(p => {
        const matchCategory = currentCategory === "all" || p.category === currentCategory;
        const matchSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase());
        return matchCategory && matchSearch;
    });
}

function renderProducts() {
    const filtered = getFilteredProducts();
    const grid = document.getElementById("productsGrid");
    const subtitle = document.getElementById("productSubtitle");
    subtitle.textContent = `${filtered.length} item${filtered.length !== 1 ? 's' : ''} available`;

    if (filtered.length === 0) {
        grid.innerHTML = `<div style="grid-column:1/-1; text-align:center; padding:60px; color:#a1a1aa;">✨ No items found<br><span style="font-size:0.8rem;">Try a different search</span></div>`;
        return;
    }

    grid.innerHTML = filtered.map(p => {
        const qty = cart[p.id] || 0;
        const discountPercent = Math.round((p.original - p.price) / p.original * 100);
        return `
      <div class="product-card">
        <div class="product-image">
          ${p.badge ? `<span class="product-badge ${p.badge}">${p.badge === 'best' ? '⭐ Best' : p.badge === 'new' ? 'New' : 'Sale'}</span>` : ''}
          ${discountPercent > 0 ? `<span class="product-discount">-${discountPercent}%</span>` : ''}
          <img class="product-img" src="${p.image}" alt="${p.name}" loading="lazy" onerror="this.src='https://placehold.co/200x200/e2e8f0/475569?text=${p.name.charAt(0)}'">
        </div>
        <div class="product-info">
          <div class="product-name">${p.name}</div>
          <div class="product-quantity">${p.qty}</div>
          <div class="product-price-row">
            <div>
              <span class="price-current">₹${p.price}</span>
              <span class="price-old">₹${p.original}</span>
            </div>
            <div id="ctrl-${p.id}">
              ${renderQuantityControl(p.id, qty)}
            </div>
          </div>
        </div>
      </div>
    `;
    }).join("");
}

function renderQuantityControl(id, qty) {
    if (qty === 0) {
        return `<div class="add-button" onclick="addToCart(${id})">+</div>`;
    }
    return `
    <div class="quantity-controls">
      <div class="qty-btn" onclick="updateQuantity(${id}, -1)">−</div>
      <div class="qty-number">${qty}</div>
      <div class="qty-btn" onclick="updateQuantity(${id}, 1)">+</div>
    </div>
  `;
}

function updateProductControl(id) {
    const qty = cart[id] || 0;
    const ctrlDiv = document.getElementById(`ctrl-${id}`);
    if (ctrlDiv) ctrlDiv.innerHTML = renderQuantityControl(id, qty);
}

function addToCart(id) {
    cart[id] = (cart[id] || 0) + 1;
    updateProductControl(id);
    updateCartUI();
    showToast("Added to cart", "✓");
}

function updateQuantity(id, delta) {
    const newQty = (cart[id] || 0) + delta;
    if (newQty <= 0) {
        delete cart[id];
    } else {
        cart[id] = newQty;
    }
    updateProductControl(id);
    updateCartUI();
    if (document.getElementById("cartDrawer").classList.contains("open")) {
        renderCartDrawer();
    }
}

function updateCartUI() {
    const totalItems = Object.values(cart).reduce((a, b) => a + b, 0);
    const subtotal = Object.entries(cart).reduce((sum, [id, qty]) => {
        const p = products.find(x => x.id == id);
        return sum + (p.price * qty);
    }, 0);
    document.getElementById("cartCount").textContent = totalItems;
    document.getElementById("cartAmount").textContent = totalItems ? `₹${subtotal}` : "₹0";
}

function renderCartDrawer() {
    const drawerItems = document.getElementById("drawerItems");
    const drawerFooter = document.getElementById("drawerFooter");
    const cartIds = Object.keys(cart);

    if (cartIds.length === 0) {
        drawerItems.innerHTML = `
      <div class="empty-cart">
        <div class="empty-cart-icon">🛒</div>
        <h4>Your cart is empty</h4>
        <div>Add some delicious items!</div>
      </div>
    `;
        drawerFooter.style.display = "none";
        return;
    }

    drawerItems.innerHTML = cartIds.map(id => {
        const p = products.find(x => x.id == id);
        const qty = cart[id];
        return `
      <div class="cart-item">
        <img class="cart-item-img" src="${p.image}" alt="${p.name}" onerror="this.src='https://placehold.co/56x56/e2e8f0/475569?text=${p.name.charAt(0)}'">
        <div class="cart-item-info">
          <div class="cart-item-name">${p.name}</div>
          <div class="cart-item-price">${p.qty} · ₹${p.price} × ${qty} = ₹${p.price * qty}</div>
        </div>
        <div>${renderQuantityControl(p.id, qty)}</div>
      </div>
    `;
    }).join("");

    const subtotal = cartIds.reduce((sum, id) => {
        const p = products.find(x => x.id == id);
        return sum + (p.price * cart[id]);
    }, 0);
    const savings = cartIds.reduce((sum, id) => {
        const p = products.find(x => x.id == id);
        return sum + ((p.original - p.price) * cart[id]);
    }, 0);

    document.getElementById("subtotal").textContent = `₹${subtotal}`;
    document.getElementById("savingsAmount").textContent = `-₹${savings}`;
    document.getElementById("totalAmount").textContent = `₹${subtotal + 5}`;
    drawerFooter.style.display = "block";
}

function openCartDrawer() {
    renderCartDrawer();
    document.getElementById("drawerOverlay").classList.add("open");
    document.getElementById("cartDrawer").classList.add("open");
}

function closeCartDrawer() {
    document.getElementById("drawerOverlay").classList.remove("open");
    document.getElementById("cartDrawer").classList.remove("open");
}

function setCategory(cat) {
    currentCategory = cat;
    renderCategories();
    renderProducts();
    const titles = { all: "All Products", dairy: "Dairy & Eggs", fruits: "Fresh Fruits", veggies: "Fresh Vegetables", snacks: "Snacks & Munchies", beverages: "Beverages", bakery: "Fresh Bakery" };
    document.getElementById("sectionTitle").textContent = titles[cat] || "Products";
    const hero = document.getElementById("heroGrid");
    const themeSection = document.getElementById("themeSection");
    const offersSection = document.querySelector(".offers-section");
    if (cat === "all") {
        hero.style.display = "grid";
        themeSection.style.display = "block";
        if (offersSection) offersSection.style.display = "block";
    } else {
        hero.style.display = "none";
        themeSection.style.display = "none";
        if (offersSection) offersSection.style.display = "none";
    }
}

function filterProducts() {
    searchQuery = document.getElementById("searchInput").value;
    renderProducts();
}

function checkout() {
    if (Object.keys(cart).length === 0) {
        showToast("Cart is empty", "⚠️");
        return;
    }
    showToast("Order placed! Delivering in 10 mins", "🎉");
    cart = {};
    updateCartUI();
    renderProducts();
    closeCartDrawer();
}

function showToast(msg, icon = "✓") {
    const toast = document.getElementById("toastMsg");
    document.getElementById("toastText").textContent = msg;
    toast.classList.add("show");
    setTimeout(() => toast.classList.remove("show"), 2000);
}

renderCategories();
renderThemeCards();
renderProducts();
updateCartUI();