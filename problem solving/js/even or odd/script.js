function runThecode(){
  let input1 = document.getElementById("input");
  let output = document.getElementById("outPut");
  let input = input1.value;
  
  if(input % 2 == 0){
    output.textContent = "even";
  }
  else{
    output.textContent = "odd";
  }
  console.log(input);
}