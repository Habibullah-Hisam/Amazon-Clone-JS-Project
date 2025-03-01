import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
import { loadProducts, loadProductsFetch } from "../data/products.js";
// import '../data/cart-class.js';
// import '../data/backend-practice.js';


async function loadPage(){
  try {

    // throw 'error'; // also we can use reject to throw error for future
    // throw dosen't work in async function in that case we have to use reject

    await loadProductsFetch();

  } catch (error) {
    console.log('Unexpected error. Please try again later.');
    // console.error(error);
  }

  renderOrderSummary();
  renderPaymentSummary();

  return 'value2';
}
loadPage();


// Promise.all([
//   loadProductsFetch()
  
// ]).then(() => {
//     renderOrderSummary();
//     renderPaymentSummary();
// });


// loadProducts(() => {
//   renderOrderSummary();
//   renderPaymentSummary();
// });