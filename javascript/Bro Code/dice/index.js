function rollDice(){
  const numOfDice = document.getElementById("myInput").value;
  const diceResult = document.getElementById("textResult");
  const diceImages = document.getElementById("imgResult");
  const values = [];
  const images = [];

  for(let i = 0; i < numOfDice; i++){
    const value = Math.round(Math.random()*5+1);
    values.push(value);
    images.push(`<img src="${value}.png">`)
  };
    diceResult.textContent = `Result : ${values.join(", ")}`;
    diceImages.innerHTML = images.join(" ");
};