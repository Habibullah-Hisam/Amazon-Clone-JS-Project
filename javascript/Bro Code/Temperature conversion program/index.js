const toF = document.getElementById("cTof");
const toC = document.getElementById("fToc");
const temp = document.getElementById("myInput");
let result = document.getElementById("result");
let t;
function convert(){
  t = Number(temp.value);
  
  if(toF.checked){
    t = (t*9/5) + 32;
    result.textContent = t.toFixed(2) + '°F';
  }
  else if(toC.checked){
    t = 5/9 * (t - 32);
    result.textContent = t.toFixed(2) + '°C';
  }
  else{
    result.textContent = `You must select a unit`
  }
}