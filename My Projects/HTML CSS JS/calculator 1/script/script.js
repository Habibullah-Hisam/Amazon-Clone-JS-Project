let display = document.getElementById("num-screen");


function zero(){
  display.textContent = display.textContent + "0";
  
  if(display.textContent == 0){
    display.textContent = "0";
  }
}

function one(){
  if(display.textContent == 0){
    display.textContent = "1";
  }
  else{
    display.textContent = display.textContent + "1";
  }
}

function two(){
  if(display.textContent == 0){
    display.textContent = "2";
  }
  else{
    display.textContent = display.textContent + "2";
  }
}

function three(){
  if(display.textContent == 0){
    display.textContent = "3";
  }
  else{
    display.textContent = display.textContent + "3";
  }
}

function four(){
  if(display.textContent == 0){
    display.textContent = "4";
  }
  else{
    display.textContent = display.textContent + "4";
  }
}

function five(){
  if(display.textContent == 0){
    display.textContent = "5";
  }
  else{
    display.textContent = display.textContent + "5";
  }
}

function six(){
  if(display.textContent == 0){
    display.textContent = "6";
  }
  else{
    display.textContent = display.textContent + "6";
  }
}

function seven(){
  if(display.textContent == 0){
    display.textContent = "7";
  }
  else{
    display.textContent = display.textContent + "7";
  }
}

function eight(){
  if(display.textContent == 0){
    display.textContent = "8";
  }
  else{
    display.textContent = display.textContent + "8";
  }
}

function nine(){
  if(display.textContent == 0){
    display.textContent = "9";
  }
  else{
    display.textContent = display.textContent + "9";
  }
}

function devition(){
  if(display.textContent == 0){
    display.textContent = "0";
  }
  else{
    display.textContent = display.textContent + "/";
  }
}

function into(){
  if(display.textContent == 0){
    display.textContent = "0";
  }
  else{
    display.textContent = display.textContent + "*";
  }
}

function plus(){
  if(display.textContent == 0){
    display.textContent = "0 +";
  }
  else{
    display.textContent = display.textContent + " + ";
  }
}

function minus(){
  if(display.textContent == 0){
    display.textContent = "0 -";
  }
  else{
    display.textContent = display.textContent + " - ";
  }
}

function point(){
  if(display.textContent == 0){
    display.textContent = "0.";
  }
  else{
    display.textContent = display.textContent + ".";
  }
}

function del(){
  if(display.textContent == 0){
    display.textContent = "0";
  }
  else{
    temp.unpush();
  }
}

function reset(){
  display.textContent = "0"
}

let temp;

function temps(){
  if(display.textContent.includes("+")){
    temp = [display.textContent.split(" + ")];
    if(temp.includes("-")){
      temp = [temp.split(" - ")]
    }
  }
  else if(display.textContent.includes("-")){
    temp = [display.textContent.split(" - ")];
    if(temp[1].includes("+")){
      temp = [temp[1].split(" + ")];
    }
  }
  // let temp = Number(display.textContent);
  console.log(temp[0]);
}

let a = ["56","65",'95',89,89];
console.log(a[0]);