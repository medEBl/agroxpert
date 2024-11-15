let cart = [];

function addToCart(id) {
    const productCard = document.querySelector(`.product-card[data-id='${id}']`);
    const name = productCard.getAttribute('data-name');
    const price = parseFloat(productCard.getAttribute('data-price'));
    
    const existingItem = cart.find(item => item.id === id);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ id, name, price, quantity: 1 });
    }

    updateCart();
}

function updateCart() {
    const cartItemsContainer = document.getElementById('cart-items');
    const totalPriceEl = document.getElementById('total-price');
    
    cartItemsContainer.innerHTML = '';
    let total = 0;

    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;

        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');
        cartItem.innerHTML = `
            <span>${item.name} x ${item.quantity}</span>
            <span>$${itemTotal.toFixed(2)}</span>
        `;
        cartItemsContainer.appendChild(cartItem);
    });

    totalPriceEl.textContent = total.toFixed(2);
}

function filterByCategory() {
    const selectedCategory = document.getElementById('category-filter').value;
    const productCards = document.querySelectorAll('.product-card');

    productCards.forEach(card => {
        const productCategory = card.getAttribute('data-category');

        if (selectedCategory === 'all' || productCategory === selectedCategory) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}
