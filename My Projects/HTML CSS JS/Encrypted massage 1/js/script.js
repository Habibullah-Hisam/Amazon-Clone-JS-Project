
let input = document.getElementById("dataInput");
let output = document.getElementById("dataOutput");
const lowerChars = "abcdefghijklmnopqrstuvwxyz";
const upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const symbols = "~!@#$%^&*"
const totalChars = upperChars + lowerChars + symbols;


let randomNum,r;

let totalCharsArry = totalChars.split("");
totalCharsArry = totalCharsArry.reverse();
console.log(totalCharsArry);



function startEncrypting() {
  // Get the value entered by the user
  const inputValue = input.value;

  // insert the value in new variable
  let inputValueArry = inputValue.split("");
  // inputValueArry = inputValueArry.reverse();
  let inputlength = inputValueArry.length;
  let charslenght = totalCharsArry.length;

  // if the lenght of input is grater than the inputValueArry
  if((inputlength - charslenght) > 0){
    totalCharsArry = totalCharsArry.reapeat(15);
  };
  
  // if(randomNum >= charslenght){
  //   totalCharsArry = totalCharsArry.reapeat(20);
  // };

  // the random number
  let result1 = [];
  let result2 = [];
  let result = [];
  let fresult = [];
  
  // the loop for doing the final work
  for(let i = 0; i <= (inputlength - 1); i++){
    
    randomNum = Math.round((Math.random() * 60));
    
    result1.push(totalCharsArry[randomNum]);
    result2.push(inputValueArry[i]);

    
    result = result1[i] + result2[i] + result1[i];
    
    fresult = result + fresult;
  }

  
  // Now display it
  output.textContent = `${fresult}`;
}
