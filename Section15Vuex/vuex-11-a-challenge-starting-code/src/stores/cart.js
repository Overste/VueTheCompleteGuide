import { defineStore } from 'pinia';
// import { productsStore } from './products';

export const cartStore = defineStore({
    id: 'cart',
    state: () => ({
        items: [],
        total: 0,
        qty: 0,
    }),
    getters: {
        cartItems() {
            return this.items;
        },
        cartTotal() {
            return this.total;
        },
        cartQty() {
            return this.qty;
        }
        // cartQty: (state) => {
        //     return state.qty;
        // },
        
    },
    actions: {
        addProductToCart(productData) {
            console.log("productData", productData);
            

            const productInCartIndex = this.items.findIndex(
                (ci) => ci.productId === productData.id
            );

            console.log("productInCartIndex", productInCartIndex);
            

            if (productInCartIndex >= 0) {
                this.items[productInCartIndex].qty++;
            } else {
                const newItem = {
                    productId: productData.id,
                    title: productData.title,
                    image: productData.image,
                    price: productData.price,
                    qty: 1,
                };

                this.items.push(newItem);
            }
            this.qty++;
            this.total += productData.price;
        },
        removeProductFromCart(prodId) {
            console.log("prodId", prodId);
            
            const productInCartIndex = this.items.findIndex(
                (cartItem) => cartItem.productId === prodId
            );
            const prodData = this.items[productInCartIndex];
            this.items.splice(productInCartIndex, 1);
            this.qty -= prodData.qty;
            this.total -= prodData.price * prodData.qty;
        },
    }
});
