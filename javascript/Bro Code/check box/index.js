let subr = document.querySelector('.subscriberealBtn');
const sub = document.getElementById("subscribeBtn");
const visa = document.getElementById("visacard");
const master = document.getElementById("mastercard");
const paypal = document.getElementById("paypal");

document.getElementById("submit").onclick = function() {
  if (sub.checked || subr.innerText == 'Subscribed') {
    document.getElementById("p1").textContent = "You have subscribed"
  } 
  else {
    document.getElementById("p1").textContent = "You have to subscribe"
  };

  if(visa.checked){
    document.getElementById("p2").textContent = "You have chosed visa card";
  }
  else if(master.checked){
    document.getElementById("p2").textContent = "You have chosed master card";
  }
  else if(paypal.checked){
    document.getElementById("p2").textContent = "You have chosed paypal";
  }
  else{
    document.getElementById("p2").textContent = "You have to chose payment method";
  }
};

function subscibe(){
  if(subr.innerText == 'Subscribe'){
    subr.innerHTML = 'Subscribed';
    subr.classList.add('isSubrDone');
  }
  else{
    subr.classList.remove('isSubrDone');
    subr.innerHTML = 'Subscribe';
  };
}