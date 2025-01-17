(function ($) {
    $.fn.shoppingCart = function (options) {
        const settings = $.extend({
            currency: '$',
            onItemAdded: function (item) {},
            onCartUpdated: function (cart) {},
        }, options);

        const cart = [];

        // Helper function to find item in cart
        const findItem = (id) => cart.find(item => item.id === id);

        // Method to add item to the cart
        const addItem = (id, name, price, quantity = 1) => {
            return new Promise((resolve, reject) => {
                if (!id || !name || price == null || quantity <= 0) {
                    reject('Invalid item details');
                    return;
                }

                const existingItem = findItem(id);
                if (existingItem) {
                    existingItem.quantity += quantity;
                } else {
                    cart.push({ id, name, price, quantity });
                }

                settings.onItemAdded({ id, name, price, quantity });
                settings.onCartUpdated(cart);
                resolve(cart);
            });
        };

        // Method to remove item from the cart
        const removeItem = (id) => {
            return new Promise((resolve, reject) => {
                const index = cart.findIndex(item => item.id === id);

                if (index === -1) {
                    reject('Item not found');
                    return;
                }

                cart.splice(index, 1);
                settings.onCartUpdated(cart);
                resolve(cart);
            });
        };

        // Method to update item quantity
        const updateItemQuantity = (id, quantity) => {
            return new Promise((resolve, reject) => {
                if (quantity <= 0) {
                    reject('Quantity must be greater than 0');
                    return;
                }

                const existingItem = findItem(id);

                if (!existingItem) {
                    reject('Item not found');
                    return;
                }

                existingItem.quantity = quantity;
                settings.onCartUpdated(cart);
                resolve(cart);
            });
        };

        // Method to clear the cart
        const clearCart = () => {
            return new Promise((resolve) => {
                cart.length = 0;
                settings.onCartUpdated(cart);
                resolve(cart);
            });
        };

        // Method to get cart items
        const getCart = () => {
            return new Promise((resolve) => {
                resolve(cart);
            });
        };

        // Attach methods to the selected element
        this.data('shoppingCart', {
            addItem,
            removeItem,
            updateItemQuantity,
            clearCart,
            getCart
        });

        return this;
    };
})(jQuery);

// Example Usage
$(document).ready(function () {
    const $cart = $('#cart').shoppingCart({
        currency: '$',
        onItemAdded: function (item) {
            console.log('Item added:', item);
        },
        onCartUpdated: function (cart) {
            console.log('Cart updated:', cart);
        }
    });

    const cartAPI = $cart.data('shoppingCart');

    // Add item example
    cartAPI.addItem(1, 'Product A', 10.99, 2).then(cart => console.log(cart));

    // Remove item example
    cartAPI.removeItem(1).catch(error => console.error(error));

    // Update item quantity example
    cartAPI.updateItemQuantity(1, 5).then(cart => console.log(cart));

    // Clear cart example
    cartAPI.clearCart().then(cart => console.log('Cart cleared', cart));

    // Get cart items
    cartAPI.getCart().then(cart => console.log('Current cart:', cart));
});
