let number1, number2, number3;
document.getElementById("roll-button").onclick = function(){
  number1 = Math.round(Math.random() * 5 + 1);
  document.getElementById("number1").textContent = number1;
  number2 = Math.round(Math.random() * 5 + 1);
  document.getElementById("number2").textContent = number2;
  number3 = Math.round(Math.random() * 5 + 1);
  document.getElementById("number3").textContent = number3;
}