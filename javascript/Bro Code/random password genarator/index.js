// numbers
// uppercase
// lowercase
// symbols
const lowercaseChars = ["abcdefghijklmnopqrstuvwxyz"];
const uppercaseChars = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
const numberChars = ["0123456789"];
const symbolChars = ["!@#$%^&*()_+=-~/|?;[{]}°¨©§’"];
let allowedChars,password,r,result;

function gpassword(){

  const includeLowercase = document.getElementById("includeLowercase");
  const includeUppercase = document.getElementById("includeUppercase");
  const includeNumbers = document.getElementById("includeNumbers");
  const includeSymbols = document.getElementById("includeSymbols");
  const lenght = Number(document.getElementById("typeLenght").value);

  allowedChars = "";
  password = "";

  allowedChars += includeLowercase.checked ? lowercaseChars : "";
  allowedChars += includeUppercase.checked ? uppercaseChars : "";
  allowedChars += includeNumbers.checked ? numberChars : "";
  allowedChars += includeSymbols.checked ? symbolChars : "";

  let cond = includeLowercase.checked || includeNumbers.checked || includeSymbols.checked || includeUppercase.checked;
  if(cond){
    
    for(let i = 0;i <= lenght; i++){
      r = Math.round(Math.random()*allowedChars.length -1);
      if(r <= 0){
        r += 1;
      }
      password += allowedChars[r];
    }
  
    document.getElementById("outPut").textContent = `Generated password : ${password}`;
    
  }
  else{
    document.getElementById("outPut").textContent = `You have to chose atlist 1 set of characters`;
  }
}