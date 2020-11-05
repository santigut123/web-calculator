let termOne="";
let operator="";
let termTwo="";
let inter="";
let numOp=0;

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
  if(operator=="+")
  {
    return add(num1,num2);

  }
  else if(operator=="-")
  {
    return subtract(num1,num2);


  }
  else if(operator=="/")
  {
    return divide(num1,num2);


  }
  else 
  {
    return multiply(num1,num2);


  }
}
function checkTerm(onTermOne,)
{
  
  console.log(num);
}
function calculator()
{
  
}

let counter=0;
let numbers=document.querySelectorAll(".number-button");
let operators=document.querySelectorAll(".operator");
let display=document.querySelector(".display");
let displayStringOne="";
let displayStringTwo="";
let onTermOne=true;
let clear=document.getElementById("clear");
clear.addEventListener("click",()=>{
  termOne="";
  termTwo="";
  displayStringOne="";
  displayStringTwo="";
  onTermOne=true;
  console.log("test");
  display.textContent="";

});

for(let i=0;i<numbers.length;i++){
  console.log("test");
  let x=i;
  numbers[i].addEventListener("click",()=>{  
 
  if(onTermOne==true)
    {
      
      termOne+=""+x;
      displayStringOne+=x;
      display.textContent=displayStringOne;
      console.log("term one:"+termOne);
    }
  else{
    
      termTwo+=x;
      displayStringTwo+=x;
      display.textContent=displayStringTwo;
      console.log("term two:"+termTwo);

      }
      
      
    });
  }
    for(let i=0;i<operators.length;i++){
      let x=i;
      operators[i].addEventListener("click",()=>{
        
        numOp++;
        console.log(numOp);
        if(operators[i].id=="=")
        {
          console.log(operate(operator,termOne,termTwo));
          display.textContent=Math.round(operate(operator,termOne,termTwo),5);
          termOne=operate(operator,termOne,termTwo);
          termTwo="";
          onTermOne=true;
          displayStringOne=termOne;
          displayStringTwo=termTwo;
        }
        else if((numOp%2)==0|| numOp>2 &&onTermOne==false)
        {
          console.log(numOp+"one consol");
          
          termTwo=operate(operator,termOne,termTwo);
          operator=operators[i].id;
          display.textContent=termTwo;
          termOne="";
          console.log(termOne+" TERMONE");
          console.log(termTwo+" TERMTWO");
          onTermOne=true;
          displayStringOne=termOne;
        }
        else if((numOp%2)==1)
        {
          console.log(numOp+"on one");
          operator=operators[i].id;
       
          onTermOne=false;
          
          console.log(termOne+" TERMONE");
          console.log(termTwo+" TERMTWO");
          
          
          
          
        }
        
        
       
        
        
      });
    }
    
  
  



