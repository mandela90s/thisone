// Products Data
const products = [
    {
        id: 1,
        name: "Packwoods Runtz Disposable",
        price: 59.99,
        image: "https://images.weedmaps.com/deliveries/000/077/894/avatar/original/1633621780-packwoods_x_runtz_blueberry_zkittlez.jpg",
        description: "Packwoods x Runtz collaboration brings you this premium disposable vape with 2g of live resin. Blueberry Zkittlez flavor profile with 85% THC.",
        brand: "Packwoods"
    },
    {
        id: 2,
        name: "Backpack Boys Gelato Cartridge",
        price: 49.99,
        image: "https://images.weedmaps.com/deliveries/000/077/894/avatar/original/1633621780-packwoods_x_runtz_blueberry_zkittlez.jpg",
        description: "Authentic Backpack Boys 1g cartridge with Gelato strain. Full ceramic hardware with 90% THC distillate and natural terpenes.",
        brand: "Backpack Boys"
    },
    {
        id: 3,
        name: "Jungle Boys Sunset Sherbert",
        price: 54.99,
        image: "https://images.weedmaps.com/deliveries/000/077/894/avatar/original/1633621780-packwoods_x_runtz_blueberry_zkittlez.jpg",
        description: "Jungle Boys premium live resin cartridge. Sunset Sherbert strain with 88% THC and full spectrum cannabinoids.",
        brand: "Jungle Boys"
    },
    {
        id: 4,
        name: "Cookies Gary Payton Disposable",
        price: 64.99,
        image: "https://images.weedmaps.com/deliveries/000/077/894/avatar/original/1633621780-packwoods_x_runtz_blueberry_zkittlez.jpg",
        description: "Cookies brand 2g disposable vape featuring the Gary Payton strain. 82% THC with ceramic coil for smooth hits.",
        brand: "Cookies"
    },
    {
        id: 5,
        name: "Packwoods x Runtz Tropical Z",
        price: 59.99,
        image: "https://images.weedmaps.com/deliveries/000/077/894/avatar/original/1633621780-packwoods_x_runtz_blueberry_zkittlez.jpg",
        description: "Tropical Z flavor from the Packwoods x Runtz collab. 2g disposable with 87% THC live resin.",
        brand: "Packwoods"
    },
    {
        id: 6,
        name: "Backpack Boys Zkittlez",
        price: 49.99,
        image: "https://images.weedmaps.com/deliveries/000/077/894/avatar/original/1633621780-packwoods_x_runtz_blueberry_zkittlez.jpg",
        description: "1g Zkittlez cartridge from Backpack Boys. 92% THC distillate with strain-specific terpenes.",
        brand: "Backpack Boys"
    },
    {
        id: 7,
        name: "Jungle Boys Wedding Cake",
        price: 54.99,
        image: "https://images.weedmaps.com/deliveries/000/077/894/avatar/original/1633621780-packwoods_x_runtz_blueberry_zkittlez.jpg",
        description: "Premium Wedding Cake live resin cartridge from Jungle Boys. 85% THC with full entourage effect.",
        brand: "Jungle Boys"
    },
    {
        id: 8,
        name: "Cookies Cereal Milk",
        price: 64.99,
        image: "https://images.weedmaps.com/deliveries/000/077/894/avatar/original/1633621780-packwoods_x_runtz_blueberry_zkittlez.jpg",
        description: "2g Cereal Milk disposable from Cookies. 80% THC with ceramic coil and premium distillate.",
        brand: "Cookies"
    },
    {
        id: 9,
        name: "Packwoods x Runtz Strawberry Cough",
        price: 59.99,
        image: "https://images.weedmaps.com/deliveries/000/077/894/avatar/original/1633621780-packwoods_x_runtz_blueberry_zkittlez.jpg",
        description: "Strawberry Cough edition of Packwoods x Runtz collab. 2g disposable with 84% THC live resin.",
        brand: "Packwoods"
    },
    {
        id: 10,
        name: "Backpack Boys OG Kush",
        price: 49.99,
        image: "https://images.weedmaps.com/deliveries/000/077/894/avatar/original/1633621780-packwoods_x_runtz_blueberry_zkittlez.jpg",
        description: "Classic OG Kush in 1g cartridge form from Backpack Boys. 90% THC with authentic Kush terpenes.",
        brand: "Backpack Boys"
    }
];

// Cart functionality
let cart = [];
let cartCount = 0;

// DOM Elements
const cartIcon = document.querySelector('.cart-icon');
const cartCountElement = document.querySelector('.cart-count');
const productsContainer = document.querySelector('#products .row');
const cartItemsContainer = document.getElementById('cartItemsContainer');
const cartTotalElement = document.getElementById('cartTotal');
const checkoutItemsContainer = document.getElementById('checkoutItemsContainer');
const checkoutSubtotalElement = document.getElementById('checkoutSubtotal');
const checkoutTotalElement = document.getElementById('checkoutTotal');
const confirmationItemsContainer = document.getElementById('confirmationItemsContainer');
const confirmationTotalElement = document.getElementById('confirmationTotal');

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    displayProducts();
    updateCartCount();
    
    // Event listeners
    cartIcon.addEventListener('click', openCartModal);
});

// Display products on the page
function displayProducts() {
    productsContainer.innerHTML = '';
    
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'col-md-6 col-lg-4 mb-4';
        productCard.innerHTML = `
            <div class="card h-100">
                <img src="${product.image}" class="card-img-top" alt="${product.name}">
                <div class="card-body d-flex flex-column">
                    <h5 class="card-title">${product.name}</h5>
                    <p class="card-text text-muted">${product.brand}</p>
                    <div class="mt-auto">
                        <div class="d-flex justify-content-between align-items-center mb-3">
                            <h5 class="product-price mb-0">£${product.price.toFixed(2)}</h5>
                            <div class="rating">
                                <i class="fas fa-star text-warning"></i>
                                <i class="fas fa-star text-warning"></i>
                                <i class="fas fa-star text-warning"></i>
                                <i class="fas fa-star text-warning"></i>
                                <i class="fas fa-star-half-alt text-warning"></i>
                            </div>
                        </div>
                        <button class="btn btn-green w-100 mb-2" onclick="addToCart(${product.id})">Add to Cart</button>
                        <button class="btn btn-outline-secondary w-100" onclick="viewProductDetails(${product.id})">View Details</button>
                    </div>
                </div>
            </div>
        `;
        productsContainer.appendChild(productCard);
    });
}

// View product details in modal
function viewProductDetails(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    document.getElementById('productModalTitle').textContent = product.name;
    document.getElementById('productModalName').textContent = product.name;
    document.getElementById('productModalImage').src = product.image;
    document.getElementById('productModalPrice').textContent = `£${product.price.toFixed(2)}`;
    document.getElementById('productModalDescription').textContent = product.description;
    document.getElementById('productQuantity').value = 1;
    
    const productModal = new bootstrap.Modal(document.getElementById('productModal'));
    productModal.show();
}

// Add to cart from product listing
function addToCart(productId, quantity = 1) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            quantity: quantity
        });
    }
    
    updateCartCount();
    showAddToCartAlert();
}

// Add to cart from product modal
function addToCartFromModal() {
    const productId = parseInt(document.getElementById('productModalTitle').getAttribute('data-product-id'));
    const quantity = parseInt(document.getElementById('productQuantity').value) || 1;
    
    addToCart(productId, quantity);
    
    const productModal = bootstrap.Modal.getInstance(document.getElementById('productModal'));
    productModal.hide();
}

// Show add to cart alert
function showAddToCartAlert() {
    const alertDiv = document.createElement('div');
    alertDiv.className = 'alert alert-success position-fixed top-0 end-0 m-3';
    alertDiv.style.zIndex = '1100';
    alertDiv.role = 'alert';
    alertDiv.textContent = '
