export let cart = JSON.parse(localStorage.getItem('cart'));

if(!cart) {
  cart = [];
};


function saveToStorage() {
  localStorage.setItem('cart', JSON.stringify(cart));
}

export function addToCart(productId) {

  let productQuantity = Number(document.querySelector(`.select-on-productId-${productId}`).value);

  let matchingItem;
  
  cart.forEach((cartItem) => {
    if(productId === cartItem.productId) {
      matchingItem = cartItem;
    }
  });
  if (matchingItem) {
    matchingItem.quantity += productQuantity;
  } else {
    
    cart.push({
      productId: productId,
      quantity: productQuantity
    });
  };

  saveToStorage();
};

export function removeFromCart(productId) {
  const newCart = [];

  cart.forEach((cartItem) => {
    if (cartItem.productId !== productId) {
      newCart.push(cartItem);
    }
  });

  cart = newCart;

  saveToStorage();
};