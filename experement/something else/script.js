let updateBtn = document.querySelector('.update-btn');
let saveBtn = document.querySelector('.save-btn');
let displayInputArea = document.querySelector('.display-the-input-area');
let quantity = 1;

updateBtn.addEventListener('click', () => {
  updateBtn.style = "opacity: 0; position: absolute; border: none; background: transparent; z-index: 0;";
  saveBtn.style = "opacity: 1; position: relative; border: none; background: transparent; z-index: 100;";
  displayInputArea.style.display = 'inline-block';
  displayInputArea.innerHTML = '<input type="number" class="input-btn">';
});

saveBtn.addEventListener('click', () => {
  updateBtn.style = "opacity: 1; position: relative; border: none; background: transparent; z-index: 100;";
  saveBtn.style = "opacity: 0; position: absolute; border: none; background: transparent; z-index: 0;";
  
  let quantityInput = document.querySelector('.input-btn');
  const quantityInputValue = Number(quantityInput.value);
  
  if (!quantityInputValue) {
    console.log(quantity);
  } else if (quantityInputValue <= 0) {
    console.log('Invalid value');
  } else {
    quantity += quantityInputValue;
    console.log(quantity);
  }
  
  displayInputArea.innerHTML = '';
});
