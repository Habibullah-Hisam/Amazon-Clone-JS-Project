import { cart, removeFromCart, updateProductQuantity } from "../data/cart.js";
import { products } from "../data/products.js";
import { formatCurrency } from "./utils/money.js";

let cartSummaryHTML = '';

cart.forEach((cartItem) => {
  const productId = cartItem.productId;

  let matchimgProduct;

  products.forEach((product) => {
    if(product.id === productId){
      matchimgProduct = product;
    }
  });


  cartSummaryHTML += `
  <div class="cart-item-container js-cart-item-container-${matchimgProduct.id}">
    <div class="delivery-date">
      Delivery date: Tuesday, June 21
    </div>

    <div class="cart-item-details-grid">
      <img class="product-image"
        src="${matchimgProduct.image}">

      <div class="cart-item-details">
        <div class="product-name">
          ${matchimgProduct.name}
        </div>
        <div class="product-price">
          $${formatCurrency(matchimgProduct.priceCents)}
        </div>
        <div class="product-quantity">
          <span>
            Quantity: <span class="quantity-label">${cartItem.quantity}</span>
          </span>

          <span class="update-quantity-link-js-2-${matchimgProduct.id}" data-product-id="${matchimgProduct.id}">
          
          </span>
          <span class="update-quantity-link link-primary update-quantity-link-js-${matchimgProduct.id} update-quantity-link-js" data-product-id="${matchimgProduct.id}">
            Update
          </span>

          <span class="delete-quantity-link link-primary js-delete-link" data-product-id="${matchimgProduct.id}">
            Delete
          </span>
        </div>
      </div>

      <div class="delivery-options">
        <div class="delivery-options-title">
          Choose a delivery option:
        </div>
        <div class="delivery-option">
          <input type="radio" checked
            class="delivery-option-input"
            name="delivery-option-${matchimgProduct.id}">
          <div>
            <div class="delivery-option-date">
              Tuesday, June 21
            </div>
            <div class="delivery-option-price">
              FREE Shipping
            </div>
          </div>
        </div>
        <div class="delivery-option">
          <input type="radio"
            class="delivery-option-input"
            name="delivery-option-${matchimgProduct.id}">
          <div>
            <div class="delivery-option-date">
              Wednesday, June 15
            </div>
            <div class="delivery-option-price">
              $4.99 - Shipping
            </div>
          </div>
        </div>
        <div class="delivery-option">
          <input type="radio"
            class="delivery-option-input"
            name="delivery-option-${matchimgProduct.id}">
          <div>
            <div class="delivery-option-date">
              Monday, June 13
            </div>
            <div class="delivery-option-price">
              $9.99 - Shipping
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  `;
});

document.querySelector('.js-order-summary').innerHTML = cartSummaryHTML;

document.querySelectorAll('.js-delete-link').forEach((link) => {
  link.addEventListener('click', () => {
    const productId = link.dataset.productId;
    removeFromCart(productId);

    const container = document.querySelector(`.js-cart-item-container-${productId}`);

    container.remove();
  });
});


document.querySelectorAll('.update-quantity-link-js').forEach((link) => {
  link.addEventListener('click', () => {
    const productId = link.dataset.productId;

    let updateQuantitySpanClass = document.querySelector(`.update-quantity-link-js`)
    if(updateQuantitySpanClass.textContent = 'Update'){
  
      console.log(updateQuantitySpanClass.textContent);
  
      document.querySelector(`.update-quantity-link-js-${productId}`).innerHTML = 'Save';
      
      let updateQuantityLinkhtml = `<input type="number" class="update-quantity-link-js-input"></input>
      `;
      document.querySelector(`.update-quantity-link-js-2-${productId}`).innerHTML = updateQuantityLinkhtml;
    };
    if(updateQuantitySpanClass.textContent = 'Save'){
      let chakingQuantityInput = Number(document.querySelector('.update-quantity-link-js-input'));

      if(!chakingQuantityInput) {
        document.querySelector(`.update-quantity-link-js-${productId}`).innerHTML = 'Save';
      
      let updateQuantityLinkhtml = `<input type="number" class="update-quantity-link-js-input"></input>
      `;
      document.querySelector(`.update-quantity-link-js-2-${productId}`).innerHTML = updateQuantityLinkhtml;
      } else if(chakingQuantityInput){
        
        
        console.log(chakingQuantityInput);

        document.querySelector(`.update-quantity-link-js-${productId}`).innerHTML = 'Update';
      
      let updateQuantityLinkhtml = ``;
      document.querySelector(`.update-quantity-link-js-2-${productId}`).innerHTML = updateQuantityLinkhtml;
        // cart.quantity = changedQuantity;
        // saveToStorage();
      }
    };

    
  });
});
