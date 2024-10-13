import { cart, removeFromCart, calculateCartQuantity, saveToStorage } from "../data/cart.js";
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
            Quantity: <span class="quantity-label quantity-label-js-${matchimgProduct.id}" data-product-id="${matchimgProduct.id}">${cartItem.quantity}</span>
          </span>

          <span class="save-quantity-link link-primary save-quantity-link-js-${matchimgProduct.id} save-quantity-link-js" data-product-id="${matchimgProduct.id}">
          
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


document.querySelector('.checkout-middle-header-js').innerHTML =
`Checkout (<a class="return-to-home-link" href="amazon.html">${calculateCartQuantity()} items</a>)`;

 

document.querySelectorAll('.update-quantity-link-js').forEach((link) => {
   link.addEventListener('click', () => {
     const productId = link.dataset.productId;
     let saveBtn = document.querySelector(`.save-quantity-link-js-${productId}`);
     let updaBtn = document.querySelector(`.update-quantity-link-js-${productId}`);
     let displayArea = document.querySelector(`.quantity-label-js-${productId}`);
     saveBtn.textContent = 'Save';
     displayArea.innerHTML = '<input type="number" class="update-quantity-link-js-input">';
     saveBtn.style = 'position: relative; z-index: 100;';
     updaBtn.style = 'opacity: 0;position: absolute;z-index: 0;';
    });
});

document.querySelectorAll('.save-quantity-link-js').forEach((link) => {
  link.addEventListener('click', () => {
    const productId = link.dataset.productId;
    let saveBtn = document.querySelector(`.save-quantity-link-js-${productId}`);
    let updaBtn = document.querySelector(`.update-quantity-link-js-${productId}`);
    let displayArea = document.querySelector(`.quantity-label-js-${productId}`);
    let inputAreaValue = Number(document.querySelector(`.update-quantity-link-js-input`).value);
    let inputArea = document.querySelector(`.update-quantity-link-js-input`);
    saveBtn.textContent = '';
    saveBtn.style = 'opacity: 0;position: absolute;z-index: 0;';
    updaBtn.style = 'position: relative; z-index: 100;';
    
    let matchingItem;
    let matchingItemquantity;
    
    cart.forEach((cartItem) => {
      if(productId === cartItem.productId) {
        matchingItem = cartItem;
        matchingItemquantity = cartItem.quantity;
      }
    });
    if (matchingItem) {
      if(inputAreaValue == false) {
        matchingItem.quantity = matchingItemquantity;
        displayArea.innerHTML = matchingItemquantity;
        document.querySelector('.checkout-middle-header-js').innerHTML =
        `Checkout (<a class="return-to-home-link" href="amazon.html">${calculateCartQuantity()} items</a>)`;
        saveToStorage();
      } else {
        matchingItem.quantity = inputAreaValue;
        displayArea.innerHTML = inputAreaValue;
        saveToStorage();
        
        document.querySelector('.checkout-middle-header-js').innerHTML =
        `Checkout (<a class="return-to-home-link" href="amazon.html">${calculateCartQuantity()} items</a>)`;
      };
    };
  });
});



document.querySelectorAll('.js-delete-link').forEach((link) => {
  link.addEventListener('click', () => {
    const productId = link.dataset.productId;
    removeFromCart(productId);

    const container = document.querySelector(`.js-cart-item-container-${productId}`);

    container.remove();
    document.querySelector('.checkout-middle-header-js').innerHTML =
    `Checkout (<a class="return-to-home-link" href="amazon.html">${calculateCartQuantity()} items</a>)`;
  });
});