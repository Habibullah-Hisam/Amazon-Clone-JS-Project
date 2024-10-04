let guess, guesstextContent, cPrediction,cPredictiontextContent, j,result,result1,guessAnumber, i;

result1 = document.getElementById("tooBigOrTooSmoll");
result = document.getElementById("result");
cPredictiontextContent = document.getElementById("computersPrediction");
guesstextContent = document.getElementById("yourPrediction");
guessAnumber = document.getElementById("guessAnumber");

j = -1;
let min = 1;
let max = 100;
cPrediction = Number(Math.round(((Math.random())*(max - min))+min));
guessAnumber.textContent = `Guess a number between ${min} - ${max}`;




function guessFunction(){

  console.log(cPrediction);
  
  
  
  for(i = 0; i == (cPrediction === guess); i++){
    
    guess = Number(document.getElementById("guessTheNumber").value);

    
    j += 1;


    if(guess <= min - 1 || guess >= max + 1 || isNaN(guess)){
      guesstextContent.textContent = `You have to predict a number between ${min} - ${max}`;
    }
    else{
      guesstextContent.textContent = `Your predicted number is ${guess}`;
    };
    if(cPrediction === guess){
      
      cPredictiontextContent.textContent = `Your prediction is currect`;
      result.textContent = `${j} etemps`;
    }
    else if(guess >= cPrediction){
      
      cPredictiontextContent.textContent = `Your prediction is too Big`;
    }
    else if(guess <= cPrediction){
      
      cPredictiontextContent.textContent = `Your prediction is too Small`;
    };
    
    console.log(j);

  };
  
  
  
}