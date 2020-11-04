function add(num1,num2){
  let one=Number(num1);
  let two=Number(num2);
  return one+two;

}
function subtract(num1,num2){
  let one=Number(num1);
  let two=Number(num2);
  return one-two;
  
}
function divide(num1,num2){
  let one=Number(num1);
  let two=Number(num2);
  return one/two;
  
}
function multiply(num1,num2){
  let one=Number(num1);
  let two=Number(num2);
  return one*two;
  
}
function operate(operator,num1,num2){
  let one=Number(num1);
  let two=Number(num2);
  console.log("test");
  if(operator=="ADD")
  {

  }
  else if(operator=="SUB")
  {

  }
  else if(operator=="DIVIDE")
  {

  }
  else if(operator=="MULTIPLY")
  {

  }
  else 
  {

  }
}
function calculator()
{
  let counter=0;
  let numbers=[];
  numbers[0]=document.getElementById("1");
  numbers[1]=document.getElementById("2");
  numbers[2]=document.getElementById("3");
  numbers[3]=document.getElementById("4");
  numbers[4]=document.getElementById("5");
  numbers[5]=document.getElementById("6");
  numbers[6]=document.getElementById("7");
  numbers[7]=document.getElementById("8");
  numbers[8]=document.getElementById("9");
  for(let i=0;i<9;i++)
  {
    
    numbers[i].addEventListener('click',operate("ADD",1,2));
  }

  
  
}
calculator();



