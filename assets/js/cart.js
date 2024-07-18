document.addEventListener('DOMContentLoaded', function () {
    const totalElement = document.querySelector('.total h3');
    const emptyCartElement = document.querySelector('.empty-cart');
    const cartItemsElement = document.querySelector('.cart-items');

    function updateCart() {
        const cartItems = document.querySelectorAll('.cart-item');
        updateTotal(cartItems);
        checkEmptyCart(cartItems);
    }

    function updateTotal(cartItems) {
        let total = 0;
        cartItems.forEach(item => {
            const price = parseInt(item.querySelector('.item-details p:nth-child(3)').textContent.replace('Price: ', '').replace('đ', '').replace(/\./g, ''));
            const quantity = parseInt(item.querySelector('input[type="number"]').value);
            total += price * quantity;
        });
        totalElement.textContent = `Total: ${total.toLocaleString()}đ`;
    }

    function checkEmptyCart(cartItems) {
        if (cartItems.length === 0) {
            cartItemsElement.style.display = 'none';
            emptyCartElement.style.display = 'block';
        } else {
            cartItemsElement.style.display = 'block';
            emptyCartElement.style.display = 'none';
        }
    }

    document.querySelectorAll('.cart-item').forEach(item => {
        const decreaseButton = item.querySelector('.decrease');
        const increaseButton = item.querySelector('.increase');
        const quantityInput = item.querySelector('input[type="number"]');
        const removeButton = item.querySelector('.remove');

        decreaseButton.addEventListener('click', () => {
            if (quantityInput.value > 1) {
                quantityInput.value--;
                updateCart();
            }
        });

        increaseButton.addEventListener('click', () => {
            quantityInput.value++;
            updateCart();
        });

        removeButton.addEventListener('click', () => {
            item.remove();
            updateCart();
        });
    });

    updateCart();
});
