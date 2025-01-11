import { formatCurrency } from "../scripts/utils/money.js";

console.log("test suite: formateCurrency ");

console.log("formate currency");

if(formatCurrency(2005) == "20.05"){
  console.log("pass");
}else{
  console.log("failed");
}

console.log("the code round up to the closest currency");

if(formatCurrency(2000.5) == "20.01"){
  console.log("pass");
}else{
  console.log("failed");
}

console.log("the code works with 0")
if(formatCurrency(0) == "0.00"){
  console.log("pass");
}else{
  console.log("failed");
}