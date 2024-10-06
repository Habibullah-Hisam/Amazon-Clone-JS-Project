export const cart = [];

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
};