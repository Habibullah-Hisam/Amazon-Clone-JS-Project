const PI = 3.14159;
let c;
let r ;
document.getElementById("submit").onclick = function(){
  r = document.getElementById("input").value;
  r = Number(r); 
  c = 2* PI *r;
  alert(`The circumference of the circle is ${c}`);
};