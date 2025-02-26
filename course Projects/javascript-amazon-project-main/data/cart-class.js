class Cart {
  cartItems;
  #loclaStorageKey;

  constructor(loclaStorageKey) {
    this.#loclaStorageKey = loclaStorageKey;

    this.#loadFromStorage();
  }

  #loadFromStorage() {
    this.cartItems = JSON.parse(localStorage.getItem(this.#loclaStorageKey));

    if (!this.cartItems) {
      this.cartItems = [{
        productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
        quantity: 2,
        deliveryOptionId: '1'
      }, {
        productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
        quantity: 1,
        deliveryOptionId: '1'
      }];
    };
  }

  saveToStorage() {
    localStorage.setItem(this.#loclaStorageKey, JSON.stringify(this.cartItems));
  }

  addToCart(productId) {

    let productQuantity = document.querySelector(`.select-on-productId-${productId}`);
    productQuantity = Number(productQuantity);

    let matchingItem;

    this.cartItems.forEach((cartItem) => {
      if (productId === cartItem.productId) {
        matchingItem = cartItem;
      }
    });

    if (matchingItem) {
      matchingItem.quantity += productQuantity;
    } else {

      this.cartItems.push({
        productId: productId,
        quantity: productQuantity,
        deliveryOptionId: '1'
      });
    };

    this.saveToStorage();
  }

  removeFromCart(productId) {
    const newCart = [];

    this.cartItems.forEach((cartItem) => {
      if (cartItem.productId !== productId) {
        newCart.push(cartItem);
      }
    });

    this.cartItems = newCart;

    this.saveToStorage();
  }

  updateCartQuantity() {

    let cartQuantity = 0;
    this.cartItems.forEach((cartItem) => {
      cartQuantity += cartItem.quantity;
    });

    if (!cartQuantity) {
      document.querySelector('.js-cart-quantity').innerHTML = '';
    } else {

      document.querySelector('.js-cart-quantity').innerHTML = cartQuantity;
    };
  }

  calculateCartQuantity() {
    let cartQuantity = 0;

    this.cartItems.forEach((cartItem) => {
      cartQuantity += cartItem.quantity;
    });

    return cartQuantity;
  }

  updateDeliveryOption(productId, deliveryOptionId) {
    let matchingItem;

    this.cartItems.forEach((cartItem) => {
      if (productId === cartItem.productId) {
        matchingItem = cartItem;
      }
    });

    matchingItem.deliveryOptionId = deliveryOptionId;

    saveToStorage();
  }

};



const cart = new Cart('cart-oop');
const businessCart = new Cart('businessCart');




console.log(cart);
console.log(businessCart);
console.log(businessCart instanceof Cart);