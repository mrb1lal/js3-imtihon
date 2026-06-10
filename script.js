const products = [
    {
        id: 1,
        title: "One Life Graphic T-Shirt",
        price: 260,
        oldPrice: 300,
        discount: 40,
        rating: 4.5,
        image: "./img/Frame 33.png"
    },
    {
        id: 2,
        title: "Polo with Contrast Trims",
        price: 212,
        oldPrice: 242,
        discount: 12,
        rating: 4.0,
        image: "./img/Frame 33.png"
    },
    {
        id: 3,
        title: "Gradient Graphic T-Shirt",
        price: 145,
        oldPrice: 0,
        discount: 0,
        rating: 3.5,
        image: "./img/Frame 33.png"
    },
    {
        id: 4,
        title: "Black Striped T-Shirt",
        price: 120,
        oldPrice: 150,
        discount: 20,
        rating: 5.0,
        image: "./img/Frame 33.png"
    }
];

const topSelling = [
    {
        id: 5,
        title: "Polo with Tipping Details",
        price: 180,
        oldPrice: 0,
        discount: 0,
        rating: 4.5,
        image: "./img/Frame 33.png"
    },
    {
        id: 6,
        title: "Classic Denim Jacket",
        price: 270,
        oldPrice: 300,
        discount: 10,
        rating: 4.7,
        image: "./img/Frame 33.png"
    }
];

const allProducts = [...products, ...topSelling];
let cartItems = [];
let likedItems = [];

const cartSidebar = document.getElementById("savat-yon-oyna");
const likeSidebar = document.getElementById("yurak-yon-oyna");
const cartCount = document.getElementById("cart-count");
const likeCount = document.getElementById("like-count");

function renderProductGrid(items, containerId) {
    const container = document.getElementById(containerId);
    container.innerHTML = "";

    items.forEach(item => {
        const discountHtml = item.discount > 0
            ? `<span class="eski-narx">$${item.oldPrice}</span> <span class="skidka-foizi">-${item.discount}%</span>`
            : "";

        container.innerHTML += `
            <div class="bitta-tovar-qutisi">
                <img src="${item.image}" alt="${item.title}">
                <div class="tovar-nomi">${item.title}</div>
                <div>⭐⭐⭐⭐⭐ ${item.rating}/5</div>
                <div class="narxlar-joyi">
                    <span>$${item.price}</span>
                    ${discountHtml}
                </div>
                <div style="display:flex; gap:10px; flex-wrap: wrap; margin: 0 18px;">
                    <button class="savatga-urish-btn" onclick="addToCart(${item.id})">Savatga</button>
                    <button class="like-bosish-btn" onclick="addToLikes(${item.id})">❤ Like</button>
                </div>
            </div>
        `;
    });
}

function updateBadges() {
    cartCount.textContent = cartItems.length;
    likeCount.textContent = likedItems.length;
}

function addToCart(id) {
    const product = allProducts.find(item => item.id === id);
    if (!product) return;

    cartItems.push(product);
    renderCart();
    updateBadges();
    cartSidebar.classList.add("yon-oyna-ochiq");
    likeSidebar.classList.remove("yon-oyna-ochiq");
}

function addToLikes(id) {
    const product = allProducts.find(item => item.id === id);
    if (!product) return;

    if (!likedItems.some(item => item.id === id)) {
        likedItems.push(product);
        renderLikes();
        updateBadges();
        likeSidebar.classList.add("yon-oyna-ochiq");
        cartSidebar.classList.remove("yon-oyna-ochiq");
    }
}

function renderCart() {
    const list = document.getElementById("savat-ichidagi-narsalar");
    list.innerHTML = "";

    if (cartItems.length === 0) {
        list.innerHTML = `<p style="color:#555;">Savat bo'sh</p>`;
        updateBadges();
        return;
    }

    cartItems.forEach((product, index) => {
        list.innerHTML += `
            <div class="yon-oyna-item">
                <p>${product.title}</p>
                <div>
                    <b>$${product.price}</b>
                    <button onclick="removeFromCart(${index})">Ochirish</button>
                </div>
            </div>
        `;
    });

    updateBadges();
}

function renderLikes() {
    const list = document.getElementById("yurak-ichidagi-narsalar");
    list.innerHTML = "";

    if (likedItems.length === 0) {
        list.innerHTML = `<p style="color:#555;">Hali hech nima yoqtirilmagan</p>`;
        updateBadges();
        return;
    }

    likedItems.forEach((product, index) => {
        list.innerHTML += `
            <div class="yon-oyna-item">
                <p>${product.title}</p>
                <div>
                    <b>$${product.price}</b>
                    <button onclick="removeFromLikes(${index})">Ochirish</button>
                </div>
            </div>
        `;
    });

    updateBadges();
}

function removeFromCart(index) {
    cartItems.splice(index, 1);
    renderCart();
}

function removeFromLikes(index) {
    likedItems.splice(index, 1);
    renderLikes();
}

function toggleCartSidebar() {
    cartSidebar.classList.toggle("yon-oyna-ochiq");
    likeSidebar.classList.remove("yon-oyna-ochiq");
}

function toggleLikeSidebar() {
    likeSidebar.classList.toggle("yon-oyna-ochiq");
    cartSidebar.classList.remove("yon-oyna-ochiq");
}

function closeCartSidebar() {
    cartSidebar.classList.remove("yon-oyna-ochiq");
}

function closeLikeSidebar() {
    likeSidebar.classList.remove("yon-oyna-ochiq");
}

function init() {
    renderProductGrid(products, "tovarlar-korobkasi");
    renderProductGrid(topSelling, "top-sotilganlar-korobkasi");
    renderCart();
    renderLikes();
    updateBadges();
}

document.getElementById("savatni-ochish-tugmasi").addEventListener("click", toggleCartSidebar);
document.getElementById("yurakni-ochish-tugmasi").addEventListener("click", toggleLikeSidebar);
document.getElementById("savat-yopish").addEventListener("click", closeCartSidebar);
document.getElementById("yurak-yopish").addEventListener("click", closeLikeSidebar);

init();
